import Sidebar from "@/components/Dashboard/Sidebar";
import SidebarExpand from "@/components/Dashboard/SidebarExpand";
import FloatingChatButton from "@/components/FloatingChatButton/FloatingChatButton";
import { Outlet } from "react-router-dom";

const DashboardLayout = () => {
  return (
    <div className="grid grid-cols-12 px-4 py-8 min-h-screen bg-gray-50 dark:bg-gray-900 transition-colors duration-300">
      {/* Mobile Sidebar */}
      <div className="col-span-2 block 2xl:hidden h-fit sticky top-8">
        <Sidebar />
      </div>
      
      {/* Desktop Expanded Sidebar */}
      <div className="hidden col-span-2 2xl:block h-fit sticky top-8">
        <SidebarExpand />
      </div>

      {/* Floating Action Buttons */}
      <div className="fixed bottom-6 right-6 z-50 space-y-4 sm:space-y-6 lg:space-y-8">
        {/* Floating Chat Button */}
        <div>
          <FloatingChatButton />
        </div>

        {/* Theme Toggle Button - Uncomment if needed */}
        {/* <div className="fixed right-26 bottom-7">
          <ThemeToggleButton />
        </div> */}
      </div>

      {/* Main Content Area */}
      <div className="flex-1 col-span-10 2xl:col-span-10">
        <Outlet />
      </div>
    </div>
  );
};

export default DashboardLayout;