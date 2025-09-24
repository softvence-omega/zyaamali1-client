import Sidebar from "@/components/Dashboard/Sidebar";
import GenerateContent from "@/components/DashboardHome/GenerateContent/GenerateContent";
import GenerateSidebar from "@/components/DashboardHome/GenerateContent/GenerateSidebar";
import { useState } from "react";

const DashboardGenerateContent = () => {
  const [sessionIdForChat, setSessionIdForChat] = useState("");
  console.log(sessionIdForChat)
  return (
    <div className="flex">
      {/* sidebar expand  */}
      <div className="hidden lg:block h-[200px] mt-8 mx-5">
        <Sidebar />
      </div>
      {/* sidebar  */}
      <GenerateSidebar setSessionIdForChat={setSessionIdForChat}/>
      <GenerateContent sessionIdForChat={sessionIdForChat}/>
    </div>
  );
};

export default DashboardGenerateContent;
