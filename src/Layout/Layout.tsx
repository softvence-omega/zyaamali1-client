import Footer from "./Footer";
import { Outlet } from "react-router-dom";
import Navbar from "./Navbar";
import FloatingChatButton from "@/components/FloatingChatButton/FloatingChatButton";
import ThemeToggleButton from "@/context/ThemeToggleButton";

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
      <div className="fixed bottom-6 right-6 z-50 flex flex-col gap-4 items-center">
        <ThemeToggleButton />
        <FloatingChatButton />
      </div>

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default Layout;
