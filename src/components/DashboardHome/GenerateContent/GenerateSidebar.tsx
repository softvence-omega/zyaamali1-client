/* eslint-disable @typescript-eslint/no-explicit-any */
import GeminiIcon from "@/assets/CustomIcon/GeminiIcon";
import { RootState } from "@/store/store";
import axios from "axios";
import { useEffect, useState } from "react";
import { IoMdSearch } from "react-icons/io";
import { useSelector } from "react-redux";

const GenerateSidebar = ({setSessionIdForChat }: {setSessionIdForChat: any}) => {

  const token = useSelector((state: RootState) => state.auth.token);

  const [chatbotHistory, setChatbotHistory] = useState<any[]>([]);

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

  console.log('chatbot history ',chatbotHistory)

  // const res = axios.get(
  //   "https://zyaamali1-backend.onrender.com/api/v1/chatbot-history/get-all",
  //   {
  //     headers: {
  //       Authorization: `Bearer ${token}`, // replace accessToken with your variable
  //       "Content-Type": "application/json",
  //     },
  //   }
  // );
  // console.log(res.data)

  return (
    <div className="lg:w-[360px] h-screen bg-Foundation-text-T-50 rounded-l-2xl overflow-hidden">
      <div className="flex items-center justify-center gap-5 my-5">
        <div>
          <GeminiIcon />
        </div>
        <h1 className="text-3xl font-[700] bg-gradient-to-t from-[#000000] to-[#8E6EFF] bg-clip-text text-transparent">
          Sterling
        </h1>
      </div>
      <div className="relative mt-3">
        <input
          type="text"
          className="border-b-1 py-2 border-gray-400/60 w-[80%] flex mx-auto mt-5 focus:outline-none focus:ring-0 focus:border-gray-400"
          placeholder="Search Conversation"
        />
        <div className="absolute bottom-2 right-8 text-2xl text-blue-500">
          <IoMdSearch />
        </div>
      </div>
      <div className="mt-10 px-4">
        <button   className="btn bg-blue-900 text-white rounded-4xl font-bold cursor-pointer">New Chat +</button>
      </div>
      <div className="mt-3 px-4">
        <div className="mt-3 flex flex-col gap-1">

          {chatbotHistory?.map((item) => (
            <button
            key={item._id}
              className=" text-Foundation-gray-bg p-2 text-sm rounded-lg hover:bg-[#6C7078] hover:text-white capitalize text-left"
              onClick={() => setSessionIdForChat(item.sessionId)}
            >
              {item.title}
            </button>
          ))}
        </div>
      </div>
      {/* <div className="mt-5 px-4">
        <span className="text-blue-500 text-sm">Yesterday</span>
        <div className="mt-3 flex flex-col gap-1">
          <NavLink
            className="text-Foundation-gray-bg p-2 text-sm rounded-lg hover:bg-[#6C7078] hover:text-white"
            to="#"
          >
            New Ad Campaign For Online
          </NavLink>
          <NavLink
            className=" text-Foundation-gray-bg p-2 text-sm rounded-lg hover:bg-[#6C7078] hover:text-white"
            to="#"
          >
            New Social Media Strategy
          </NavLink>
          <NavLink
            className=" text-Foundation-gray-bg p-2 text-sm rounded-lg hover:bg-[#6C7078] hover:text-white"
            to="#"
          >
            New Ad Campaign For Online
          </NavLink>
          <NavLink
            className=" text-Foundation-gray-bg p-2 text-sm rounded-lg hover:bg-[#6C7078] hover:text-white"
            to="#"
          >
            Website Redesign Feedback
          </NavLink>
        </div>
      </div>
      <div className="mt-5 px-4">
        <span className="text-blue-500 text-sm">This Week</span>
        <div className="mt-3 flex flex-col gap-1">
          <NavLink
            className="text-Foundation-gray-bg p-2 text-sm rounded-lg hover:bg-[#6C7078] hover:text-white"
            to="#"
          >
            New Ad Campaign For Online
          </NavLink>
          <NavLink
            className=" text-Foundation-gray-bg p-2 text-sm rounded-lg hover:bg-[#6C7078] hover:text-white"
            to="#"
          >
            New Social Media Strategy
          </NavLink>
          <NavLink
            className=" text-Foundation-gray-bg p-2 text-sm rounded-lg hover:bg-[#6C7078] hover:text-white"
            to="#"
          >
            New Ad Campaign For Online
          </NavLink>
          <NavLink
            className=" text-Foundation-gray-bg p-2 text-sm rounded-lg hover:bg-[#6C7078] hover:text-white"
            to="#"
          >
            Website Redesign Feedback
          </NavLink>
        </div>
      </div> */}
    </div>
  );
};

export default GenerateSidebar;
