import Sidebar from "@/components/Dashboard/Sidebar"
import { Outlet } from "react-router-dom"

const DashboardLayout = () => {
  return (
    <div className="flex px-4 py-8 gap-x-10">
      <Sidebar/>
      <div>
      <Outlet/>
      </div>
    </div>
  )
}

export default DashboardLayout