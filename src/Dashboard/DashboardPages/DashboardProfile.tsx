import AccountActions from "@/components/DashboardProfile/AccountActions";
import AvailableIntegration from "@/components/DashboardProfile/AvailableIntegration";
import BusinessManagement from "@/components/DashboardProfile/BusinessManagement";
import ChangePassword from "@/components/DashboardProfile/ChangePassword";
import ConnectedAdAccounts from "@/components/DashboardProfile/ConnectedAdAccounts";
import ProfileSection from "@/components/DashboardProfile/ProfileSection";
import TeamMembers from "@/components/DashboardProfile/TeamMambers";

const DashboardProfile = () => {
  return (
    <div className="min-h-screen p-2 md:p-8">
      <div className=" md:p-6 md:space-y-8">
        <ProfileSection />
        <div className="bg-gray-100 rounded-3xl mt-4 py-6 px-6">
          <BusinessManagement />
          <ConnectedAdAccounts />
          <AvailableIntegration />
        </div>
        <TeamMembers></TeamMembers>
        <ChangePassword />
        <AccountActions />
      </div>
    </div>
  );
};

export default DashboardProfile;
