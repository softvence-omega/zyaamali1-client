import Sidebar from "@/components/DashboardContent/Sidebar";
import ContentHeader from "@/components/DashboardContent/ContentHeader";
import TopBar from "@/utils/TopBar";

import { useState } from "react";

export default function DashboardContent() {
  const [templateType, setTemplateType] = useState("image");
  const [selectedPlatforms, setSelectedPlatforms] = useState<string[]>([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [startDate, setStartDate] = useState("");
  const [endDate, setEndDate] = useState("");

  const breadcrumbPaths = [
    { name: "Dashboard", link: "/dashboard" },
    { name: "Assets", link: "/dashboard/content" },
  ];

  // Reset filters function
  const resetFilters = () => {
    setTemplateType("image");
    setSelectedPlatforms([]);
    setSearchTerm("");
    setStartDate(''); // Reset start date
    setEndDate(""); // Reset end date
  };

  return (
    <div>
      <TopBar paths={breadcrumbPaths} />
      <div className="flex">
        <Sidebar
          templateType={templateType}
          setTemplateType={setTemplateType}
          selectedPlatforms={selectedPlatforms}
          setSelectedPlatforms={setSelectedPlatforms}
          searchTerm={searchTerm}
          setSearchTerm={setSearchTerm}
          setStartDate={setStartDate}
          setEndDate={setEndDate}
          resetFilters={resetFilters} // Pass reset function
        />
        <ContentHeader
          templateType={templateType}
          selectedPlatforms={selectedPlatforms}
          searchTerm={searchTerm}
          startDate={startDate}
          endDate={endDate}
        />
      </div>
    </div>
  );
}
