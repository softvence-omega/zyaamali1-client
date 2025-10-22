/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/no-unused-vars */
import { useState, useEffect, KeyboardEvent } from "react";
import { FaComments, FaTimes } from "react-icons/fa";
import { IoIosSend } from "react-icons/io";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "@/store/store";

import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import { setSessionId } from "@/store/Features/SessionSlice/SessionSlice";
import GeminiIcon from "@/assets/CustomIcon/GeminiIcon";

// Message Bubble Component to display each chat message
const MessageBubble = ({
  role,
  message,
  isSending,
}: {
  role: string;
  message: string;
  isSending: boolean;
}) => {
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
              p: ({ children }) => <p className="mb-3 last:mb-0">{children}</p>,
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
              blockquote: ({ children }) => (
                <blockquote className="border-l-4 border-gray-400 pl-4 my-3 text-gray-700 italic">
                  {children}
                </blockquote>
              ),
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
              hr: () => <hr className="my-4 border-gray-400" />,
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
              strong: ({ children }) => (
                <strong className="font-semibold">{children}</strong>
              ),
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

// Floating Chat Button Component
const FloatingChatButton = () => {
  const dispatch = useDispatch();
  const [isChatOpen, setIsChatOpen] = useState(false);
  const [isHovered, setIsHovered] = useState(false);
  const [message, setMessage] = useState("");
  const [messages, setMessages] = useState<
    {
      id: number;
      role: "admin" | "creator" | "assistant";
      message: string;
      timestamp: Date;
    }[]
  >([]);
  const [isSending, setIsSending] = useState(false);
  const [loadingMessageId, setLoadingMessageId] = useState<number | null>(null);

  const accessToken = useSelector((state: RootState) => state.auth.token);
  const user = useSelector((state: RootState) => state.auth.user);
  const sessionIdForChat = useSelector(
    (state: RootState) => state.session?.sessionId
  );

  const toggleChat = () => {
    setIsChatOpen((prev) => !prev);
  };

  // Fetch chat history
  const fetchChatHistory = async () => {
    if (!sessionIdForChat) return;

    try {
      const res = await axios.get(
        `https://api.adelo.ai/api/v1/chatbot/get-single?sessionId=${sessionIdForChat}`,
        {
          headers: { Authorization: `Bearer ${accessToken}` },
        }
      );

      const formattedMessages =
        res?.data?.data?.flatMap((item: any) => {
          const messages: {
            id: number;
            role: "admin" | "creator" | "assistant";
            message: string;
            timestamp: Date;
          }[] = [];

          if (item.userQuestion) {
            messages.push({
              id: Date.now() + Math.random(), // Generate unique ID
              role: item.userId?.role || "admin",
              message: item.userQuestion,
              timestamp: new Date(item.createdAt || Date.now()),
            });
          }

          if (item.aiAnswer) {
            messages.push({
              id: Date.now() + Math.random(), // Generate unique ID
              role: "assistant",
              message: item.aiAnswer,
              timestamp: new Date(item.createdAt || Date.now()),
            });
          }

          return messages;
        }) || [];

      setMessages(formattedMessages);
    } catch (error) {
      console.error("Error fetching chat history:", error);
    }
  };

  useEffect(() => {
    fetchChatHistory();
  }, [sessionIdForChat]);

  const handleSendMessage = async () => {
    if (!message.trim()) return;

    const userRole: "admin" | "creator" =
      user?.role === "creator" ? "creator" : "admin";

    // Add user message immediately
    const newUserMessage = {
      id: Date.now(),
      role: userRole,
      message: message,
      timestamp: new Date(),
    };

    setMessages((prev) => [...prev, newUserMessage]);
    setMessage("");
    setIsSending(true);

    // Create a temporary loading message
    const loadingMessageId = Date.now() + 1;
    setLoadingMessageId(loadingMessageId);

    const loadingMessage = {
      id: loadingMessageId,
      role: "assistant" as const,
      message: "",
      timestamp: new Date(),
    };

    setMessages((prev) => [...prev, loadingMessage]);

    const payload = {
      prompt: message,
      token: accessToken,
      sessionId: sessionIdForChat,
    };

    try {
      const res = await axios.post(
        "https://ai.adelo.ai/chatting/chat",
        payload
      );

      // Remove loading message and add actual response
      setMessages((prev) => {
        const filtered = prev.filter((msg) => msg.id !== loadingMessageId);
        return [
          ...filtered,
          {
            id: Date.now() + 2,
            role: "assistant",
            message: res.data.answer || "No response from server.",
            timestamp: new Date(),
          },
        ];
      });

      dispatch(setSessionId(res.data.sessionId));
    } catch (error: any) {
      // Remove loading message and add error message
      setMessages((prev) => {
        const filtered = prev.filter((msg) => msg.id !== loadingMessageId);
        return [
          ...filtered,
          {
            id: Date.now() + 2,
            role: "assistant",
            message: "⚠️ Error connecting to server.",
            timestamp: new Date(),
          },
        ];
      });
    } finally {
      setIsSending(false);
      setLoadingMessageId(null);
    }
  };

  const handleKeyPress = (e: KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") handleSendMessage();
  };

  return (
    <>
      {/* Floating button */}
      <div
        onClick={toggleChat}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        className="fixed bottom-6 right-6 z-50 bg-gradient-to-br from-blue-600 to-blue-700 dark:from-blue-500 dark:to-blue-600 text-white p-5 rounded-2xl shadow-2xl cursor-pointer transition-all duration-300 hover:scale-110 hover:shadow-3xl group"
      >
        <div className="relative">
          <FaComments
            size={28}
            className="transition-transform duration-300 group-hover:scale-110"
          />
          <div className="absolute -top-1 -right-1 w-4 h-4 bg-green-400 rounded-full border-2 border-white animate-pulse"></div>
        </div>
        {isHovered && (
          <div className="absolute bottom-full right-0 mb-3 px-3 py-2 bg-gray-900 dark:bg-gray-700 text-white text-sm rounded-lg whitespace-nowrap shadow-md">
            Chat with Sterling AI
            <div className="absolute top-full right-4 -mt-1 border-4 border-transparent border-t-gray-900 dark:border-t-gray-700"></div>
          </div>
        )}
      </div>

      {/* Chat Window */}
      {isChatOpen && (
        <div className="fixed bottom-24 right-6 z-40 bg-white dark:bg-gray-900 shadow-2xl rounded-2xl w-96 max-w-4xl border border-gray-200 dark:border-gray-700 transition-colors duration-300">
          {/* Header */}
          <div className="flex items-center justify-between p-6 bg-gradient-to-r from-blue-600 to-blue-700 dark:from-blue-500 dark:to-blue-600 text-white rounded-t-2xl">
            <div className="flex items-center gap-3">
              {/* <FaRobot className="text-white" size={18} /> */}
              <GeminiIcon />
              {/* here i replease i  to image  */}
              <div>
                <h3 className="font-bold text-lg">Startlink AI </h3>
                <p className="text-blue-100 dark:text-blue-200 text-xs flex items-center gap-1">
                  <span className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></span>
                  Online • Ready to help
                </p>
              </div>
            </div>
            <button
              onClick={toggleChat}
              className="w-8 h-8 bg-white/20 hover:bg-white/30 rounded-full flex items-center justify-center transition"
            >
              <FaTimes size={14} />
            </button>
          </div>

          {/* Chat Messages */}
          <div className="h-96 overflow-y-auto bg-gray-50 dark:bg-gray-800 p-4 transition-colors duration-300">
            {messages.length === 0 ? (
              <div className="flex flex-col items-center justify-center h-full text-gray-500 dark:text-gray-400 text-center px-4">
                <div className="text-4xl mb-4">🤖</div>
                <h3 className="text-lg font-semibold mb-2">
                  Welcome to Sterling AI
                </h3>
                <p className="text-sm">
                  Ask me anything about marketing strategies, campaigns, or
                  analytics!
                </p>
              </div>
            ) : (
              <div className="space-y-4">
                {messages.map((msg) => (
                  <MessageBubble
                    key={msg.id}
                    role={msg.role}
                    message={msg.message}
                    isSending={msg.id === loadingMessageId && isSending}
                  />
                ))}
              </div>
            )}
          </div>

          {/* Input Box */}
          <div className="p-4 bg-white dark:bg-gray-900 border-t border-gray-200 dark:border-gray-700 rounded-b-2xl transition-colors duration-300">
            <div className="flex items-center gap-3">
              <input
                type="text"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                onKeyPress={handleKeyPress}
                placeholder="Type your message..."
                className="w-full px-4 py-3 bg-gray-100 dark:bg-gray-800 text-gray-800 dark:text-gray-100 border-0 rounded-2xl focus:outline-none focus:ring-2 focus:ring-blue-500 dark:focus:ring-blue-400 focus:bg-white dark:focus:bg-gray-800 transition-all duration-200 text-sm placeholder-gray-500 dark:placeholder-gray-400"
              />
              <button
                onClick={handleSendMessage}
                disabled={!message.trim() || isSending}
                className="bg-blue-500 hover:bg-blue-600 dark:bg-blue-600 dark:hover:bg-blue-500 disabled:bg-gray-400 disabled:cursor-not-allowed text-white p-3 rounded-2xl transition-all duration-200 transform hover:scale-105 disabled:hover:scale-100 shadow-md"
              >
                <IoIosSend size={18} />
              </button>
            </div>
            <p className="text-xs text-gray-500 dark:text-gray-400 text-center mt-3">
              Press Enter to send • Sterling AI Marketing Assistant
            </p>
          </div>
        </div>
      )}
    </>
  );
};

export default FloatingChatButton;
