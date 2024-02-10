import ServerList from "@/components/server-list"
import DashboardStat from "@/components/dashboardStat"
const Dashboard = () => {
  return (
    <div className="flex flex-col items-center justify-center">
      <div className="flex mt-2 gap-2">
        <DashboardStat/>
        <DashboardStat/>
        <DashboardStat/>
        <DashboardStat/>
        <DashboardStat/>
      </div>

      <ServerList/>
      </div>

  )
}

export default Dashboard