import AccountActions from "@/components/DashboardProfile/AccountActions";
import BusinessManagement from "@/components/DashboardProfile/BusinessManagement";
import ChangePassword from "@/components/DashboardProfile/ChangePassword";

import ProfileSection from "@/components/DashboardProfile/ProfileSection";
import TeamMembers from "@/components/DashboardProfile/TeamMambers";
import SocialAccountsManager from "./SocialAccountsManager";
import TopBar from "@/utils/TopBar";

const DashboardProfile = () => {
  const breadcrumbPaths = [
    { name: "Dashboard", link: "/dashboard" },
    { name: "Profile", link: "/dashboard/userprofile" },
  ];

  return (
    <div className="min-h-screen p-2 md:p-8">
      <TopBar paths={breadcrumbPaths} />
      <div className="md:p-6 md:space-y-8">
        <ProfileSection />
        <div className=" dark:bg-gray-900 rounded-3xl mt-4 ">
          <BusinessManagement />
          <SocialAccountsManager />
        </div>
        <TeamMembers />
        <ChangePassword />
        <AccountActions />
      </div>
    </div>
  );
};

export default DashboardProfile;
