/* eslint-disable @typescript-eslint/no-explicit-any */
import { RootState } from "@/store/store";
import axios from "axios";
import { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import { useQuery } from "@tanstack/react-query";

type MessageBubbleProps = {
  role: string;
  message: string;
};

const MessageBubble = ({ role, message }: MessageBubbleProps) => {
  const isadmin = role === "admin" || role === "creator";

  return (
    <div
      className={`flex ${
        isadmin ? "justify-end" : "justify-start"
      } mb-4 pt-5 m-4`}
    >
      <div
        className={`max-w-xs md:max-w-md rounded-lg px-4 py-3 text-sm shadow-md ${
          isadmin
            ? "bg-blue-500 text-white rounded-br-none"
            : "bg-gray-100 text-gray-900 rounded-bl-none"
        }`}
      >
        {message}
      </div>
    </div>
  );
};

const ChatUI = () => {
  const accessToken = useSelector((state: RootState) => state.auth.token);
  const user = useSelector((state: RootState) => state.auth.user);
  const [messages, setMessages] = useState<
    { role: "admin" | "creator" | "assistant"; message: string }[]
  >([]);
  const [input, setInput] = useState("");

  const fetchChatHistory = async (userId: string) => {
    const res = await axios.get(
      "http://localhost:5000/api/v1/chatbot-history/get-single-history",
      {
        params: { userId },
        headers: {
          Authorization: `${accessToken}`,
        },
      }
    );
 

    // ✅ Map each chat item into [userMessage, assistantMessage]
    const formattedMessages =
      res?.data?.data?.flatMap((item: any) => {
       
        const messages: {
          role: "admin" | "creator" | "assistant";
          message: string;
        }[] = [];

        // User message (question)
        if (item.userQuestion) {
          messages.push({
            role: item.userId?.role || "admin", // fallback to admin
            message: item.userQuestion,
          });
        }

        // Assistant message (answer)
        if (item.aiAnswer) {
          messages.push({
            role: "assistant",
            message: item.aiAnswer,
          });
        }

        return messages;
      }) || [];

    return formattedMessages;
  };

  const {
    data: chatHistory,
    isLoading,
    isError,
    refetch,
  } = useQuery({
    queryKey: ["chatHistory", user?.userId],
    queryFn: () => fetchChatHistory(user!.userId),
    enabled: !!user?.userId, // ⛔ stop until we have userId
  });

  useEffect(() => {
    if (chatHistory) {
   
      setMessages(chatHistory);
    }
  }, [chatHistory]);

  // Send message to backend
  const handleSend = async () => {
    if (!input.trim()) return;

    const userRole: "admin" | "creator" =
      user?.role === "creator" ? "creator" : "admin";

    const newUserMessage = { role: userRole, message: input };
    setMessages((prev) => [...prev, newUserMessage]);

    try {
      const res = await axios.post(
        "https://ads-ai-71ic.onrender.com/chatting/chat",
        null, // no body
        {
          params: {
            userId: user?.userId,
            prompt: input,
          },
        }
      );
      const newAssistantMessage: {
        role: "admin" | "creator" | "assistant";
        message: string;
      } = {
        role: "assistant",
        message: res.data.answer || "No response from server.",
      };
      setMessages((prev) => [...prev, newAssistantMessage]);
      refetch();
    } catch (error) {
      console.error("❌ Error:", error);
      setMessages((prev) => [
        ...prev,
        { role: "assistant", message: "⚠️ Error connecting to server." },
      ]);
    }

    setInput("");
  };

  return (
    <div className="flex flex-col h-screen bg-gray-900 text-white">
      <div className="w-full h-[72px] bg-blue-900" />

      {/* Chat messages */}
      <div className="flex-1 overflow-y-auto space-y-2">
        {/* {isLoading ? (
          <p className="text-center text-gray-400">Loading chat history...</p>
        ) : (
          messages.map((msg, idx) => (
            <MessageBubble key={idx} role={msg.role} message={msg.message} />
          ))
        )} */}

        {messages?.map((msg, idx) => (
          <MessageBubble key={idx} role={msg.role} message={msg.message} />
        ))}
      </div>

      {/* Input box */}
      <div className="relative mt-12 mb-8 bg-white rounded-xl p-4 m-5">
        <div className="flex items-center gap-2">
          <input
            type="text"
            placeholder="Ask anything..."
            value={input}
            onChange={(e) => setInput(e.target.value)}
            className="flex-1 rounded-full bg-gray-100 px-4 py-3 text-sm placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <button
            onClick={handleSend}
            className="bg-blue-500 hover:bg-blue-600 text-white rounded-full p-2"
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
