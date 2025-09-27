/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/no-unused-vars */
import { RootState } from "@/store/store";
import axios from "axios";
import { useState, useEffect, useRef, KeyboardEvent } from "react";
import { useSelector } from "react-redux";
import { useQuery } from "@tanstack/react-query";

type MessageBubbleProps = {
  role: string;
  message: string;
  isSending: boolean;
};

const MessageBubble = ({ role, message, isSending }: MessageBubbleProps) => {
  const isAdmin = role === "admin" || role === "creator";
  const isAssistant = role === "assistant";

  return (
    <div
      className={`flex ${isAdmin ? "justify-end" : "justify-start"} mb-4 px-4`}
    >
      <div
        className={`max-w-xs md:max-w-md px-5 py-3 rounded-2xl shadow-lg text-sm leading-relaxed ${
          isAdmin
            ? "bg-blue-500 text-white rounded-br-none"
            : "bg-gray-100 text-gray-900 rounded-bl-none"
        }`}
      >
        {isAssistant && isSending ? (
          <span className="flex items-center gap-1 text-gray-500">
            <span className="animate-bounce">●</span>
            <span className="animate-bounce delay-150">●</span>
            <span className="animate-bounce delay-300">●</span>
          </span>
        ) : (
          message
        )}
      </div>
    </div>
  );
};

const ChatUI = (sessionIdForChat: any, ) => {
  const accessToken = useSelector((state: RootState) => state.auth.token);
  const user = useSelector((state: RootState) => state.auth.user);
  const [messages, setMessages] = useState<
    { role: "admin" | "creator" | "assistant"; message: string }[]
  >([]);
  const [isSending, setIsSending] = useState(false);
  const [input, setInput] = useState("");
  const token = useSelector((state: RootState) => state.auth.token);

  // ✅ Ref for auto-scroll
  const messagesEndRef = useRef<HTMLDivElement | null>(null);

  // ✅ Always scroll to bottom when messages change
  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  const fetchChatHistory = async () => {
    const res = await axios.get(
      `http://localhost:5000/api/v1/chatbot/get-single?sessionId=${sessionIdForChat.sessionIdForChat}`,
      {
        headers: { Authorization: `Bearer ${accessToken}` },
      }
    );

    const formattedMessages =
      res?.data?.data?.flatMap((item: any) => {
        const messages: {
          role: "admin" | "creator" | "assistant";
          message: string;
        }[] = [];

        if (item.userQuestion) {
          messages.push({
            role: item.userId?.role || "admin",
            message: item.userQuestion,
          });
        }

        if (item.aiAnswer) {
          messages.push({ role: "assistant", message: item.aiAnswer });
        }

        return messages;
      }) || [];

    return formattedMessages;
  };

  const {
    data: chatHistory,
    isLoading,
    refetch,
  } = useQuery({
    queryKey: ["chatHistory", sessionIdForChat.sessionIdForChat],
    queryFn: () => fetchChatHistory(),
    enabled: !!sessionIdForChat.sessionIdForChat,
  });

  useEffect(() => {
    if (chatHistory) setMessages(chatHistory);
  }, [chatHistory]);

  useEffect(() => {
    if (!sessionIdForChat.sessionIdForChat) {
      setMessages([]);
    }
  }, [sessionIdForChat.sessionIdForChat]);

  const handleSend = async () => {
    if (!input.trim()) return;

    const userRole: "admin" | "creator" =
      user?.role === "creator" ? "creator" : "admin";

    const newUserMessage = { role: userRole, message: input };
    setMessages((prev) => [...prev, newUserMessage]);

    const payload = {
      prompt: input,
      token: token,
      sessionId: sessionIdForChat.sessionIdForChat,
    };

    try {
      setIsSending(true);
      const res = await axios.post(
        "http://74.118.168.229:8000/chatting/chat",
        payload
      );

      const newAssistantMessage = {
        role: "assistant" as const,
        message: res.data.answer || "No response from server.",
      };

      setMessages((prev) => [...prev, newAssistantMessage]);
      setIsSending(false);
     
      refetch();
    } catch (error) {
      setMessages((prev) => [
        ...prev,
        { role: "assistant", message: "⚠️ Error connecting to server." },
      ]);
    }

    setInput("");
  };

  const handleKeyPress = (e: KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") handleSend();
  };

  return (
    <div className="flex flex-col h-screen bg-gray-900 text-white">
      {/* Header */}
      <div className="w-full h-[72px] bg-blue-900 flex items-center px-6 shadow-md">
        <h1 className="text-lg font-semibold tracking-wide">Chatbot</h1>
      </div>

      {/* Chat messages */}
      <div className="flex-1 overflow-y-auto px-2 py-4">
        {isLoading ? (
          <p className="text-center text-gray-400 mt-10">
            Loading chat history...
          </p>
        ) : (
          <>
            {messages.map((msg, idx) => (
              <MessageBubble
                key={idx}
                role={msg.role}
                message={msg.message}
                isSending={
                  msg.role === "assistant" &&
                  isSending &&
                  idx === messages.length - 1
                }
              />
            ))}

            {isSending &&
              !messages.some((m) => m.role === "assistant" && !m.message) && (
                <MessageBubble role="assistant" message="" isSending={true} />
              )}

            {/* ✅ Invisible element for scroll reference */}
            <div ref={messagesEndRef} />
          </>
        )}
      </div>

      {/* Input box */}
      <div className="bg-white rounded-2xl shadow-lg p-3 m-5">
        <div className="flex items-center gap-2">
          <input
            type="text"
            placeholder="Ask anything..."
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyDown={handleKeyPress}
            className="flex-1 rounded-full bg-gray-100 px-4 py-3 text-sm placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <button
            onClick={handleSend}
            className="bg-blue-500 hover:bg-blue-600 text-white rounded-full p-3 shadow-md transition"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M5 13l4 4L19 7"
              />
            </svg>
          </button>
        </div>
      </div>
    </div>
  );
};

export default ChatUI;
