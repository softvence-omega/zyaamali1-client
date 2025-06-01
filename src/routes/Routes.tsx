import { createBrowserRouter } from "react-router-dom";

import NotFound from "@/pages/NotFound";

import App from "@/App";
import Landing from "@/pages/Landing";
import About from "@/pages/About";
import Services from "@/pages/Services";
import ServicesLayout from "@/ServiceLayout/ServicesLayout";
import Services2 from "@/pages/Services2";
import Services3 from "@/pages/Services3";
import Services4 from "@/pages/Services4";
import Contact from "@/pages/Contact";
import AuthLayout from "@/Auth/Auth_Layout/AuthLayout";
import Login from "@/Auth/Auth_Components/Login";
import Signup from "@/Auth/Auth_Components/Signup";
import DashboardLayout from "@/Dashboard/DashboadLayout/DashboardLayout";
import DashboardHome from "@/Dashboard/DashboardPages/DashboardHome";
import DashboardChat from "@/Dashboard/DashboardPages/DashboardChat";
import DashboardCampaign from "@/Dashboard/DashboardPages/DashboardCampaign";
import DashboardCampaignCreate from "@/Dashboard/DashboardPages/DashboardCampaignCreate";
import DashboardCampaignPreview from "@/Dashboard/DashboardPages/DashboardCampaignPreview";
import DashboardCampaignPerformance from "@/Dashboard/DashboardPages/DashboardCampaignPerformance";
import DashboardContent from "@/Dashboard/DashboardPages/DashboardContent";
import DashboardContentPreview from "@/Dashboard/DashboardPages/DashboardContentPreview";
import DashboardAnalytics from "@/Dashboard/DashboardPages/DashboardAnalytics";
import DashboardSubscription from "@/Dashboard/DashboardPages/DashboardSubscription";
import DashboardProfile from "@/Dashboard/DashboardPages/DashboardProfile";

import DashboardHelp from "@/Dashboard/DashboardPages/DashboardHelp";
import Services5 from "@/pages/Services5";
import DashboardGenerateContent from "@/Dashboard/DashboardPages/DashboardGenerateContent";

const routes = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <Landing />,
      },
      {
        path: "/about",
        element: <About />,
      },
      {
        path: "/services",
        element: <ServicesLayout />,
        children: [
          {
            path: "/services/chat",
            element: <Services />,
          },
          {
            path: "/services/campaign",
            element: <Services2 />,
          },
          {
            path: "/services/copy",
            element: <Services3 />,
          },
          {
            path: "/services/feedback",
            element: <Services4 />,
          },
          {
            path: "/services/marketing",
            element: <Services5 />,
          },
        ],
      },
      {
        path: "/contact",
        element: <Contact />,
      },
    ],
  },
  {
    path: "/auth",
    element: <AuthLayout />,
    children: [
      {
        path: "/auth/login",
        element: <Login />,
      },
      {
        path: "/auth/signup",
        element: <Signup />,
      },
    ],
  },
  {
    path: "/dashboard",
    element: <DashboardLayout />,
    children: [
      {
        path: "/dashboard",
        element: <DashboardHome />,
      },
      {
        path: "/dashboard/chat",
        element: <DashboardChat />,
      },
      {
        path: "/dashboard/campaign",
        element: <DashboardCampaign />,
      },
      {
        path: "/dashboard/campaign/create",
        element: <DashboardCampaignCreate />,
      },
      {
        path: "/dashboard/campaign/preview",
        element: <DashboardCampaignPreview />,
      },
      {
        path: "/dashboard/campaign/performance/:id",
        element: <DashboardCampaignPerformance />,
      },
      {
        path: "/dashboard/content",
        element: <DashboardContent />,
      },

      {
        path: "/dashboard/analytics",
        element: <DashboardAnalytics />,
      },
      {
        path: "/dashboard/subscription",
        element: <DashboardSubscription />,
      },
      {
        path: "/dashboard/subscription",
        element: <DashboardSubscription />,
      },
      {
        path: "/dashboard/userprofile",
        element: <DashboardProfile />,
      },

      {
        path: "/dashboard/help",
        element: <DashboardHelp />,
      },
    ],
  },
  {
    path: "/dashboard/generate-content",
    element: <DashboardGenerateContent />,
  },
  {
    path: "/contentpreview",
    element: <DashboardContentPreview />,
  },
  {
    path: "*",
    element: <NotFound />,
  },
]);

export default routes;
