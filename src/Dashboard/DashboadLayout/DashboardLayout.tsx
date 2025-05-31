import Sidebar from "@/components/Dashboard/Sidebar";
import { Outlet } from "react-router-dom";

const DashboardLayout = () => {
  return (
    <div className="flex px-4 py-8 gap-x-10 min-h-screen">
      <div className="hidden md:block h-fit">
        <Sidebar />
      </div>

      {/* Right Content Area */}
      <div className="flex-1">
        <Outlet />
      </div>
    </div>
  );
};

export default DashboardLayout;