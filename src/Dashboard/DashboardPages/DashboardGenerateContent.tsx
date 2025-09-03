import Sidebar from "@/components/Dashboard/Sidebar";
import SidebarExpand from "@/components/Dashboard/SidebarExpand";
import GenerateContent from "@/components/DashboardHome/GenerateContent/GenerateContent";
import GenerateSidebar from "@/components/DashboardHome/GenerateContent/GenerateSidebar";

const DashboardGenerateContent = () => {
  return (
    <div className="flex">
      {/* sidebar expand  */}
      <div className="hidden lg:block h-[200px] mt-8 mx-5">
        <Sidebar />
      </div>

        {/* <div className="col-span-2 block xl:hidden h-fit sticky top-8">
        <Sidebar />
      </div>
      <div className="hidden col-span-2 xl:block h-fit sticky top-8">
        <SidebarExpand />
      </div> */}

      {/* sidebar  */}
      <GenerateSidebar />
      <GenerateContent />
    </div>
  );
};

export default DashboardGenerateContent;
