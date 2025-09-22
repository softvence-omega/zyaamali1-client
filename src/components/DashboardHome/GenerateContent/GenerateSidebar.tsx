import GeminiIcon from "@/assets/CustomIcon/GeminiIcon";
import { IoMdSearch } from "react-icons/io";
import { NavLink } from "react-router-dom";

const GenerateSidebar = () => {
  return (
    <div className="lg:w-[360px] h-screen bg-Foundation-text-T-50 rounded-l-2xl">
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
        <span className="text-blue-500 text-sm">Today</span>
        <div className="mt-3 flex flex-col gap-1">
          <NavLink
            className="bg-[#6C7078] text-white p-2 text-sm rounded-lg"
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
      </div>
    </div>
  );
};

export default GenerateSidebar;
