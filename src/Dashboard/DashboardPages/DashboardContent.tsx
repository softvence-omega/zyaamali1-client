

import Sidebar from '@/components/DashboardContent/Sidebar'

import ContentHeader from '@/components/DashboardContent/ContentHeader'
const DashboardContent = () => {
  return (
    <div>
      <div className="flex flex-col md:flex-row gap-4 p-2 md:p-8">
        <Sidebar></Sidebar>
        <ContentHeader></ContentHeader>

      </div>

    </div>
  )
}

export default DashboardContent
