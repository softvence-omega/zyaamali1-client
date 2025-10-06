/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/no-unused-vars */
import { RootState } from "@/store/store";
import axios from "axios";
import { useState, useEffect, useRef, KeyboardEvent } from "react";
import { useSelector } from "react-redux";
import { useQuery } from "@tanstack/react-query";

import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";

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
      className={`flex ${isAdmin ? "justify-end" : "justify-start"} mb-6 px-6`}
    >
      <div
        className={`max-w-xl md:max-w-2xl px-6 py-4 rounded-2xl shadow-lg text-sm leading-relaxed transition-all ${
          isAdmin
            ? "bg-blue-600 text-white rounded-br-none"
            : "bg-gray-200 text-gray-900 rounded-bl-none"
        }`}
      >
        {isAssistant && isSending ? (
          <div className="flex items-center gap-1.5">
            <span className="animate-bounce text-sm">●</span>
            <span className="animate-bounce delay-150 text-sm">●</span>
            <span className="animate-bounce delay-300 text-sm">●</span>
          </div>
        ) : (
          <ReactMarkdown
            remarkPlugins={[remarkGfm]}
            components={{
              // Better paragraph spacing
              p: ({ children }) => <p className="mb-3 last:mb-0">{children}</p>,

              // Better list styling - FIXED NUMBERED LISTS
              ul: ({ children }) => (
                <ul className="mb-3 space-y-2 list-disc list-inside last:mb-0">
                  {children}
                </ul>
              ),
              ol: ({ children }) => (
                <ol className="mb-3 space-y-2 list-decimal list-inside last:mb-0">
                  {children}
                </ol>
              ),
              li: ({ children }) => <li className="pl-1 my-1">{children}</li>,

              // Better code blocks
              code: ({ children, className }) => {
                const isInline = !className;
                if (isInline) {
                  return (
                    <code className="bg-gray-300 px-1.5 py-0.5 rounded text-sm font-mono">
                      {children}
                    </code>
                  );
                }
                return (
                  <code className="block bg-gray-300 text-gray-900 p-3 rounded-lg text-sm font-mono overflow-x-auto my-2">
                    {children}
                  </code>
                );
              },

              // Better blockquotes
              blockquote: ({ children }) => (
                <blockquote className="border-l-4 border-gray-400 pl-4 my-3 text-gray-700 italic">
                  {children}
                </blockquote>
              ),

              // Better headings
              h1: ({ children }) => (
                <h1 className="text-xl font-bold mb-3 mt-4 first:mt-0">
                  {children}
                </h1>
              ),
              h2: ({ children }) => (
                <h2 className="text-lg font-bold mb-2 mt-3 first:mt-0">
                  {children}
                </h2>
              ),
              h3: ({ children }) => (
                <h3 className="text-base font-bold mb-2 mt-3 first:mt-0">
                  {children}
                </h3>
              ),

              // Better table styling
              table: ({ children }) => (
                <div className="overflow-x-auto my-3">
                  <table className="min-w-full border-collapse border border-gray-400">
                    {children}
                  </table>
                </div>
              ),
              th: ({ children }) => (
                <th className="border border-gray-400 px-3 py-2 bg-gray-300 font-semibold">
                  {children}
                </th>
              ),
              td: ({ children }) => (
                <td className="border border-gray-400 px-3 py-2">{children}</td>
              ),

              // Better horizontal rule
              hr: () => <hr className="my-4 border-gray-400" />,

              // Better links
              a: ({ children, href }) => (
                <a
                  href={href}
                  className="text-blue-200 hover:text-blue-100 underline break-words"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {children}
                </a>
              ),

              // Better strong/bold
              strong: ({ children }) => (
                <strong className="font-semibold">{children}</strong>
              ),

              // Better emphasis/italic
              em: ({ children }) => <em className="italic">{children}</em>,
            }}
          >
            {message}
          </ReactMarkdown>
        )}
      </div>
    </div>
  );
};

const ChatUI = (sessionIdForChat: any) => {
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
        <h1 className="text-lg font-semibold tracking-wide">
          AI Marketing Assistant
        </h1>
      </div>

      {/* Chat messages */}
      <div className="flex-1 overflow-y-auto px-2 py-4">
        {isLoading ? (
          <div className="flex justify-center items-center h-20">
            <div className="flex items-center gap-2 text-gray-400">
              <div className="animate-spin rounded-full h-5 w-5 border-2 border-blue-500 border-t-transparent"></div>
              <span>Loading chat history...</span>
            </div>
          </div>
        ) : (
          <>
            {messages.length === 0 && !isLoading && (
              <div className="flex flex-col items-center justify-center h-full">
                <div className="text-center max-w-md">
                  <div className="text-4xl mb-4">🤖</div>
                  <h3 className="text-lg font-semibold mb-2 text-gray-100">
                    Ask Sterling: Your AI Marketing Assistant
                  </h3>
                  <p className="text-sm text-gray-400">
                    Ask me anything about marketing strategies, campaigns, or
                    analytics!
                  </p>
                </div>
              </div>
            )}

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

            {/* Invisible element for scroll reference */}
            <div ref={messagesEndRef} />
          </>
        )}
      </div>

      {/* Input box */}
      <div className="bg-white dark:bg-gray-600 rounded-2xl shadow-lg p-3 m-5">
        <div className="flex items-center gap-2">
          <input
            type="text"
            placeholder="Ask anything..."
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyDown={handleKeyPress}
            className="flex-1 rounded-full bg-gray-100 dark:bg-gray-600 px-4 py-3 text-sm placeholder-gray-500 text-gray-900 dark:text-gray-300 dark:placeholder:text-gray-400  focus:outline-none dark:border dark:border-gray-500 focus:ring-2 focus:ring-blue-500"
          />
          <button
            onClick={handleSend}
            disabled={!input.trim()}
            className="bg-blue-500 hover:bg-blue-600 disabled:bg-gray-400 disabled:cursor-not-allowed text-white rounded-full p-3 shadow-md transition"
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
        <p className="text-xs text-gray-500 dark:text-gray-400 text-center mt-2">
          Press Enter to send
        </p>
      </div>
    </div>
  );
};

export default ChatUI;
