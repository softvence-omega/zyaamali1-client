import Footer from "./Footer";
import { Outlet } from "react-router-dom";
import Navbar from "./Navbar";

const Layout: React.FC = () => {
  return (
    <div>

      <div className="w-full  top-0 z-50 bg-white"><Navbar /></div>


      <main >
        <Outlet />
      </main>
      <Footer />
    </div>
  );
};

export default Layout;
