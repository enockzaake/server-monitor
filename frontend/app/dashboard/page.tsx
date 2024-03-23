import ServerList from "@/components/server-list";
import DashboardStat from "@/components/dashboardStat";
const Dashboard = () => {
  return (
    <div className="flex flex-col items-center justify-center bg-gray-900">
      <div className="flex mt-2 gap-11">
        <DashboardStat />
        <DashboardStat />
        <DashboardStat />
        <DashboardStat />
        <DashboardStat />
      </div>

      <ServerList />
    </div>
  );
};

export default Dashboard;
