import Sidebar from "@/components/Dashboard/Sidebar";
import SidebarExpand from "@/components/Dashboard/SidebarExpand";
import { Outlet } from "react-router-dom";

const DashboardLayout = () => {
  return (
    <div className="grid grid-cols-12  px-4 py-8  min-h-screen">
      <div className="col-span-2 block 2xl:hidden h-fit sticky top-8">
        <Sidebar />
      </div>
      <div className="hidden col-span-2 2xl:block h-fit sticky top-8">
        <SidebarExpand />
      </div>
      <div className="flex-1 col-span-10 2xl:col-span-10">
        <Outlet />
      </div>
    </div>
  );
};

export default DashboardLayout;
