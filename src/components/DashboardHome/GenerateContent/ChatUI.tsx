// Reusable MessageBubble component
type MessageBubbleProps = {
  role: string;
  message: string;
};

const MessageBubble = ({ role, message }: MessageBubbleProps) => {
  const isUser = role === "user";

  return (
    <div
      className={`flex ${isUser ? "justify-end" : "justify-start"} mb-4 pt-5`}
    >
      <div
        className={`max-w-xs md:max-w-md rounded-lg px-4 py-3 text-sm shadow-md ${
          isUser
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
  // Static dummy messages
  const messages = [
    {
      role: "user",
      message:
        "Hi Sterling, I want to create a new ad campaign for my online store. Can you help?",
    },
    {
      role: "assistant",
      message:
        "Absolutely! Let's get started. What's your main goal for this campaign? For example, brand awareness, driving sales, or website traffic?",
    },
  ];

  return (
    <div className="flex flex-col h-screen bg-gray-900 text-white p-4">
      {/* Chat messages container */}
      <div className="flex-1 overflow-y-auto space-y-2">
        {messages.map((msg, idx) => (
          <MessageBubble key={idx} role={msg.role} message={msg.message} />
        ))}
      </div>

      {/* Prompt input box */}
      <div className="mt-4 flex items-center gap-2 border-t border-gray-700 pt-4">
        <input
          type="text"
          placeholder="Ask anything..."
          className="flex-1 rounded-full bg-gray-800 px-4 py-2 text-sm placeholder-gray-400 text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
        <button className="bg-blue-500 hover:bg-purple-700 text-white rounded-full p-2">
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
  );
};

export default ChatUI;
