import { useState } from "react";

type MessageBubbleProps = {
  role: string;
  message: string;
};

const MessageBubble = ({ role, message }: MessageBubbleProps) => {
  const isadmin = role === "admin";

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
  const [messages, setMessages] = useState<
    { role: "admin" | "assistant"; message: string }[]
  >([
    {
      role: "assistant",
      message: "Hi! How can I help you today?",
    },
    {
      role: "admin",
      message: "tell me about you?",
    },
  ]);
  const [input, setInput] = useState("");

  // Send message to backend
  const handleSend = async () => {
    if (!input.trim()) return;

    // Add admin message to chat
    const newadminMessage = { role: "admin" as const, message: input };
    setMessages((prev) => [...prev, newadminMessage]);

    try {
      // Call your backend API
      const response = await fetch("http://localhost:5000/chat", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ message: input }),
      });

      const data = await response.json();

      // Add assistant response
      const newAssistantMessage = {
        role: "assistant" as const,
        message: data.reply || "No response from server.",
      };
      setMessages((prev) => [...prev, newAssistantMessage]);
    } catch (error) {
      console.error("❌ Error:", error);
      setMessages((prev) => [
        ...prev,
        { role: "assistant", message: "⚠️ Error connecting to server." },
      ]);
    }

    setInput(""); // clear input
  };

  return (
    <div className="flex flex-col h-screen bg-gray-900 text-white">
      <div className="w-full h-[72px] bg-blue-900" />

      {/* Chat messages */}
      <div className="flex-1 overflow-y-auto space-y-2">
        {messages.map((msg, idx) => (
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
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
            </svg>
          </button>
        </div>
      </div>
    </div>
  );
};

export default ChatUI;
