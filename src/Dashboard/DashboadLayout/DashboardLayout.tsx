import Sidebar from "@/components/Dashboard/Sidebar";
import SidebarExpand from "@/components/Dashboard/SidebarExpand";
import { Outlet } from "react-router-dom";

const DashboardLayout = () => {
  return (
    <div className="flex px-4 py-8 gap-x-6 min-h-screen">
      <div className="block 2xl:hidden h-fit sticky top-8">
        <Sidebar />
      </div>
      <div className="hidden 2xl:block h-fit sticky top-8">
        <SidebarExpand />
      </div>
      <div className="flex-1">
        <Outlet />
      </div>
    </div>
  );
};

export default DashboardLayout;
