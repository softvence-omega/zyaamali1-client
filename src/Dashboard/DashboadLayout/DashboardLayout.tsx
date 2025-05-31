import Sidebar from "@/components/Dashboard/Sidebar";
import SidebarExpand from "@/components/Dashboard/SidebarExpand";
import { Outlet } from "react-router-dom";

const DashboardLayout = () => {
  return (
    <div className="flex px-4 py-8 gap-x-10 min-h-screen">
      <div className="block lg:hidden h-fit">
        <Sidebar />
      </div>
      <div className="hidden lg:block h-fit">
        <SidebarExpand />
      </div>
      <div className="flex-1">
        <Outlet />
      </div>
    </div>
  );
};

export default DashboardLayout;