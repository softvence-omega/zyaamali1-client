import ContentHeader from "@/components/DashboardContent/ContentHeader";
import Sidebar from "@/components/DashboardContent/Sidebar";

import { useState } from "react";

export default function DashboardContent() {
  const [templateType, setTemplateType] = useState("image");
  const [selectedPlatforms, setSelectedPlatforms] = useState<string[]>([]);
  const [searchTerm, setSearchTerm] = useState("");

  return (
    <div className="flex">
      <Sidebar
        templateType={templateType}
        setTemplateType={setTemplateType}
        selectedPlatforms={selectedPlatforms}
        setSelectedPlatforms={setSelectedPlatforms}
        searchTerm={searchTerm}
        setSearchTerm={setSearchTerm}
      />
      <ContentHeader
        templateType={templateType}
        selectedPlatforms={selectedPlatforms}
        searchTerm={searchTerm}
      />
    </div>
  );
}
