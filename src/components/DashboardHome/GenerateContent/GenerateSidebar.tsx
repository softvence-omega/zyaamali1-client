/* eslint-disable @typescript-eslint/no-explicit-any */
import GeminiIcon from "@/assets/CustomIcon/GeminiIcon";
import { RootState } from "@/store/store";
import axios from "axios";
import { useEffect, useState } from "react";
import { IoMdSearch } from "react-icons/io";
import { useSelector } from "react-redux";


const GenerateSidebar = ({ setSessionIdForChat }: {setSessionIdForChat : any}) => {

  const token = useSelector((state: RootState) => state.auth.token);

  const [chatbotHistory, setChatbotHistory] = useState<any[]>([]);
  const [searchTerm, setSearchTerm] = useState("");

  useEffect(() => {
    const fetchHistory = async () => {
      try {
        const res = await axios.get(
          "https://zyaamali1-backend.onrender.com/api/v1/chatbot-history/get-all",
          {
            headers: {
              Authorization: `Bearer ${token}`,
              "Content-Type": "application/json",
            },
          }
        );

        if (res.data.success) {
          setChatbotHistory(res.data.data);
        }
      } catch (err) {
        console.error("Error fetching history:", err);
      }
    };

    fetchHistory();
  }, [token]);

  // filter chats by search term
  const filteredChats = chatbotHistory.filter((item) =>
    item.title?.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="lg:w-[360px] h-screen bg-Foundation-text-T-50 rounded-l-2xl flex flex-col">
      {/* Header */}
      <div className="flex items-center justify-center gap-5 my-5">
        <GeminiIcon />
        <h1 className="text-3xl font-[700] bg-gradient-to-t from-[#000000] to-[#8E6EFF] bg-clip-text text-transparent">
          Sterling
        </h1>
      </div>

      {/* Search */}
      <div className="relative mt-3 px-4">
        <input
          type="text"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="border-b-1 py-2 border-gray-400/60 w-full focus:outline-none focus:ring-0 focus:border-gray-400"
          placeholder="Search Conversation"
        />
        <div className="absolute top-1/2 -translate-y-1/2 right-6 text-2xl text-blue-500">
          <IoMdSearch />
        </div>
      </div>

      {/* New chat button */}
      <div className="mt-6 px-4">
        <button className="btn btn-primary w-full rounded-3xl font-bold">
          New Chat +
        </button>
      </div>

      {/* Chat list with scrollbar */}
      <div className="flex-1 mt-4 px-4 overflow-y-auto">
        <div className="flex flex-col gap-1 pb-6">
          {filteredChats.length > 0 ? (
            filteredChats.map((item) => (
              <button
                key={item.sessionId}
                className="text-Foundation-gray-bg p-2 text-sm rounded-lg hover:bg-[#6C7078] hover:text-white capitalize text-left"
                onClick={() => setSessionIdForChat(item.sessionId)}
              >
                {item.title}
              </button>
            ))
          ) : (
            <p className="text-gray-400 text-sm italic">
              No conversations found
            </p>
          )}
        </div>
      </div>
    </div>
  );
};

export default GenerateSidebar;
