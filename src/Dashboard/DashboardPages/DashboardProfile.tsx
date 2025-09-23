import AccountActions from "@/components/DashboardProfile/AccountActions";
import BusinessManagement from "@/components/DashboardProfile/BusinessManagement";
import ChangePassword from "@/components/DashboardProfile/ChangePassword";

import ProfileSection from "@/components/DashboardProfile/ProfileSection";
import TeamMembers from "@/components/DashboardProfile/TeamMambers";
import SocialAccountsManager from "./SocialAccountsManager";

const DashboardProfile = () => {
  return (
    <div className="min-h-screen p-2 md:p-8">
      <div className=" md:p-6 md:space-y-8">
        <ProfileSection />
        <div className="bg-gray-100 rounded-3xl mt-4 py-6 px-6">
          <BusinessManagement />
         <SocialAccountsManager></SocialAccountsManager>
        </div>
        <TeamMembers></TeamMembers>
        <ChangePassword />
        <AccountActions />
      </div>
    </div>
  );
};

export default DashboardProfile;
