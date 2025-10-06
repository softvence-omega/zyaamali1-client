/* eslint-disable @typescript-eslint/no-explicit-any */

import { RootState } from "@/store/store";
import axios from "axios";
import { IoMdSearch } from "react-icons/io";
import { useSelector } from "react-redux";
import { useQuery, useQueryClient } from "@tanstack/react-query";
import {  useState } from "react";
import GeminiIcon from "@/assets/CustomIcon/GeminiIcon";

const fetchHistory = async (token: string) => {
  const res = await axios.get(
    "https://zyaamali1-backend.onrender.com/api/v1/chatbot-history/get-all",
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

  // ✅ Fetch history with React Query
  const {
    data: chatbotHistory = [],
    isLoading
  } = useQuery({
    queryKey: ["chatbotHistory"],
    queryFn: () => fetchHistory(token as string),
    enabled: !!token, // only fetch if token exists
  });

  console.log(chatbotHistory)



  const filteredHistory = chatbotHistory.filter((item: any) =>
    item.title.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const handleSelect = (sessionId: string) => {
    setActiveSessionId(sessionId);
    setSessionIdForChat(sessionId);
  };

  return (
    <div className="lg:w-[360px] h-screen bg-Foundation-text-T-50 rounded-l-2xl flex flex-col dark:bg-[#1e2939] dark:text-gray-300">
      {/* Header */}
      <div className="flex items-center justify-center gap-5 my-5">
        <GeminiIcon />
        <h1 className="text-3xl font-[700] bg-gradient-to-t from-[#000000] dark:from-gray-300 to-[#8E6EFF] bg-clip-text text-transparent">
          Sterling
        </h1>
      </div>

      {/* Search */}
      <div className="relative mt-3 px-4">
        <input
          type="text"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          className="border-b-1 py-2 border-gray-400/60 w-full flex mx-auto mt-2 focus:outline-none focus:ring-0 focus:border-gray-400"
          placeholder="Search Conversation"
        />
        <div className="absolute bottom-2 right-6 text-2xl text-blue-500">
          <IoMdSearch />
        </div>
      </div>

      {/* New Chat */}
      <div className="mt-6 px-4">
        <button
          onClick={() => {
            setActiveSessionId(null);
            setSessionIdForChat(null);

            // ✅ Trigger refetch after adding new chat
            queryClient.invalidateQueries({ queryKey: ["chatbotHistory"] });
          }}
          className="btn bg-blue-900 text-white rounded-4xl font-bold cursor-pointer w-full"
        >
          New Chat +
        </button>
      </div>

      {/* Scrollable Search Results */}
      <div className="mt-4 px-4 flex-1 overflow-y-auto">
        <div className="flex flex-col gap-1">
          {isLoading ? (
            <p className="text-sm text-gray-400 italic">Loading...</p>
          ) : filteredHistory?.length > 0 ? (
            [...filteredHistory]
              .slice()
              .reverse()
              .map((item: any) => (
                <button
                  key={item._id}
                  className={`p-2 text-sm rounded-lg capitalize text-left transition ${
                    activeSessionId === item.sessionId
                      ? "bg-[#6C7078] text-white font-semibold cursor-pointer"
                      : "text-Foundation-gray-bg hover:bg-[#6C7078] cursor-pointer hover:text-white"
                  }`}
                  onClick={() => handleSelect(item.sessionId)}
                >
                  {item.title}
                </button>
              ))
          ) : (
            <p className="text-sm text-gray-400 italic">No results found</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default GenerateSidebar;
