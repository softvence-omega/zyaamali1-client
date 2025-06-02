import AudienceTarget from "@/components/DashboardCampaignPreview/AudienceTarget";
import Budget from "@/components/DashboardCampaignPreview/Budget";
import CallToAction from "@/components/DashboardCampaignPreview/CallToAction";
import CopyLength from "@/components/DashboardCampaignPreview/CopyLength";
import Image from "@/components/DashboardCampaignPreview/Image";
import OptimizationCard from "@/components/DashboardCampaignPreview/OptimizationCard";
import gliph from '../../assets/GLYPH.png';
import Preview from "@/components/DashboardCampaignPreview/Preview";

const DashboardCampaignPreview = () => {
  return (
    <div className="p-4 sm:p-6 lg:p-10">
      {/* Heading */}
      <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold leading-tight">
        AI Powered <span className="text-[#8E6EFF]">Optimization</span><br className="hidden sm:block" />
        Suggestion
      </h1>

      <p className="text-sm sm:text-base mt-4 mb-6 text-[#6C7078] leading-relaxed">
        We’ve analysed your ad content and made some recommendations to help<br className="hidden sm:block" />
        boost its performance.
      </p>

      {/* Layout Container */}
      <div className="flex flex-col lg:flex-row gap-6">
        
        {/* Preview */}
        <div className="w-full lg:w-[360px] flex-shrink-0">
          <Preview />
        </div>

        {/* Right Panel */}
        <div className="flex-1">
          <div className="w-full rounded-xl font-sans bg-[#F3F4F6] p-4 sm:p-6 pb-8">
            <div className="flex items-center gap-3 mb-4">
              <img src={gliph} alt="GLYPH" className="h-7 w-7" />
              <h2 className="text-xl sm:text-2xl md:text-3xl font-semibold text-gray-800">
                Your AI Driven Suggestions
              </h2>
            </div>

            <hr className="text-gray-500 mb-4" />

            {/* Suggestion Components */}
            <CallToAction />
            <CopyLength />
            <Image />
            <AudienceTarget />
            <Budget />
          </div>

          {/* Optimization Card Below */}
          <OptimizationCard />
        </div>
      </div>
    </div>
  );
};

export default DashboardCampaignPreview;
