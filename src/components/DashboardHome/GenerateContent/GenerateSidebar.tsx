/* eslint-disable @typescript-eslint/no-explicit-any */
import { RootState } from "@/store/store";
import axios from "axios";
import { IoMdSearch } from "react-icons/io";
import { useSelector } from "react-redux";
import { useQuery, useQueryClient } from "@tanstack/react-query";
import { useState } from "react";
import GeminiIcon from "@/assets/CustomIcon/GeminiIcon";
import { ArrowLeft } from "lucide-react";
import { useNavigate } from "react-router-dom";

const fetchHistory = async (token: string) => {
  const res = await axios.get(
    "https://api.adelo.ai/api/v1/chatbot-history/get-all",
    {
      headers: {
        Authorization: `Bearer ${token}`,
        "Content-Type": "application/json",
      },
    }
  );
  if (!res.data.success) throw new Error("Failed to fetch history");
  return res.data.data;
};

const GenerateSidebar = ({
  setSessionIdForChat,
}: {
  setSessionIdForChat: any;
}) => {
  const token = useSelector((state: RootState) => state.auth.token);
  const [searchQuery, setSearchQuery] = useState("");
  const [activeSessionId, setActiveSessionId] = useState<string | null>(null);
  const queryClient = useQueryClient();
  const navigate = useNavigate();

  // ✅ Fetch history with React Query
  const { data: chatbotHistory = [], isLoading } = useQuery({
    queryKey: ["chatbotHistory"],
    queryFn: () => fetchHistory(token as string),
    enabled: !!token,
  });

  const filteredHistory = chatbotHistory.filter((item: any) =>
    item.title.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const handleSelect = (sessionId: string) => {
    setActiveSessionId(sessionId);
    setSessionIdForChat(sessionId);
  };

  const handleBack = () => {
    navigate("/dashboard");
  };

  return (
    <div className="lg:w-[360px] h-screen flex flex-col rounded-l-2xl transition-all duration-300 bg-gray-50 text-gray-900 dark:bg-[#111827] dark:text-gray-100">
      {/* Header */}

      <div className="mb-3 mt-4 mx-4">
        <button
          onClick={handleBack}
          className="cursor-pointer px-4 py-1 rounded-full font-semibold text-white bg-blue-700 hover:bg-blue-800 dark:bg-blue-600 dark:hover:bg-blue-500 transition"
        >
          <ArrowLeft />
        </button>
      </div>
      <div className="flex items-center justify-center gap-3 mb-6 mt-3">
        <GeminiIcon />
        <h1 className="text-3xl font-bold bg-gradient-to-t from-gray-900 to-[#8E6EFF] dark:from-gray-100 dark:to-[#8E6EFF] bg-clip-text text-transparent">
          Sterling
        </h1>
      </div>

      {/* Search */}
      <div className="relative mt-3 px-4">
        <input
          type="text"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          className="w-full border-b border-gray-400/50 dark:border-gray-600 bg-transparent py-2 text-sm focus:outline-none focus:border-blue-500 dark:focus:border-blue-400 placeholder-gray-500 dark:placeholder-gray-400"
          placeholder="Search Conversation"
        />
        <div className="absolute bottom-2 right-6 text-xl text-blue-600 dark:text-blue-400">
          <IoMdSearch />
        </div>
      </div>

      {/* New Chat */}
      <div className="mt-6 px-4">
        <button
          onClick={() => {
            setActiveSessionId(null);
            setSessionIdForChat(null);
            queryClient.invalidateQueries({ queryKey: ["chatbotHistory"] });
          }}
          className="w-full py-2 rounded-full font-semibold text-white bg-blue-700 hover:bg-blue-800 dark:bg-blue-600 dark:hover:bg-blue-500 transition"
        >
          + New Chat
        </button>
      </div>

      {/* History List */}
      <div className="mt-4 px-4 flex-1 overflow-y-auto scrollbar-thin scrollbar-thumb-gray-400/30 dark:scrollbar-thumb-gray-700 scrollbar-track-transparent">
        <div className="flex flex-col gap-1 pb-6">
          {isLoading ? (
            <p className="text-sm text-gray-500 italic dark:text-gray-400">
              Loading...
            </p>
          ) : filteredHistory?.length > 0 ? (
            [...filteredHistory]
              .slice()
              .reverse()
              .map((item: any) => (
                <button
                  key={item._id}
                  onClick={() => handleSelect(item.sessionId)}
                  className={`p-2 text-sm rounded-lg capitalize text-left transition-colors duration-200 ${
                    activeSessionId === item.sessionId
                      ? "bg-blue-700 text-white dark:bg-blue-500"
                      : "hover:bg-gray-200 dark:hover:bg-gray-700 text-gray-800 dark:text-gray-200"
                  }`}
                >
                  {item.title}
                </button>
              ))
          ) : (
            <p className="text-sm text-gray-500 italic dark:text-gray-400">
              No results found
            </p>
          )}
        </div>
      </div>
    </div>
  );
};

export default GenerateSidebar;
