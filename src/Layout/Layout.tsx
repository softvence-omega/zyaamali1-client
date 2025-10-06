import Footer from "./Footer";
import { Outlet } from "react-router-dom";
import Navbar from "./Navbar";
import FloatingChatButton from "@/components/FloatingChatButton/FloatingChatButton";

const Layout: React.FC = () => {
  return (
    <div className="min-h-screen dark:bg-gray-900 dark:text-white">
      {/* Navbar */}
      <div className="w-full top-0 z-50 bg-white dark:bg-gray-800">
        <Navbar />
      </div>

      {/* Main Content */}
      <main>
        <Outlet />
      </main>

      {/* Floating Buttons - Positioned Side by Side */}
      <div className="fixed bottom-6 right-6  z-50 space-y-4 sm:space-y-6 lg:space-y-8">
        {/* Theme Toggle Button */}
        <div>
          <FloatingChatButton />
        </div>

        {/* Floating Chat Button */}
        {/* <div className="fixed  right-26 bottom-7 ">
          <ThemeToggleButton />
        </div> */}
      </div>

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default Layout;
