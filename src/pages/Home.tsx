import Shortcut from "../components/Shortcut.tsx";
import StatusCard from "../components/StatusCard.tsx";
import NotificationCard from "../components/NotificationCard.tsx";
import ContainerList from "../components/ContainerList.tsx";
import DeploymentHistory from "../components/DeploymentHistory.tsx";
import ServerMonitoring from "../components/ServerMonitoring.tsx";
import TrafficMonitoring from "../components/TrafficMonitoring.tsx";
import {RefreshCcw} from "lucide-react";

const Home = () => {
  return (
    <div className="w-full min-h-screen bg-gray-50 py-8 px-4 flex flex-col items-center justify-center">
      <div className="w-full max-w-[1440px] flex flex-col gap-8">
        <div className="flex items-center justify-between mb-2">
          <h1 className="text-3xl font-extrabold text-gray-800">대시보드</h1>
          <div className="text-sm font-medium text-blue-600 bg-blue-50 px-3 py-1 rounded-full hover:scale-105 transition-transform cursor-pointer flex gap-2 items-center">
            <p>최근 업데이트: 오늘 09:45</p>
            <RefreshCcw size={16} />
          </div>
        </div>
        
        <div className="flex h-80 gap-6 items-stretch">
          <div className="grid grid-cols-2 grid-rows-2 gap-4 w-full max-w-80 h-80">
            <Shortcut
              title="새 프로젝트"
              iconType="plus"
              bg="bg-gradient-to-r from-cyan-500 to-blue-500"
            />
            <Shortcut
              title="모니터링"
              iconType="activity"
              bg="bg-gradient-to-t from-sky-500 to-indigo-500"
            />
            <Shortcut
              title="설정"
              iconType="settings"
              bg="bg-gradient-to-bl from-violet-500 to-fuchsia-500"
            />
            <Shortcut
              title="로그"
              iconType="clock"
              bg="bg-gradient-to-br from-purple-500 to-pink-500"
            />
          </div>
          
          <StatusCard />
          
          <NotificationCard />
        </div>
        
        <div className="grid grid-cols-6 grid-rows-2 gap-6 w-full h-[640px]">
          <div className="col-[1/5] row-[1/2] bg-white border border-gray-100 rounded-xl p-6 shadow-md hover:shadow-lg transition-shadow">
            <ContainerList />
          </div>
          
          <div className="col-[1/3] row-[2/3] bg-white border border-gray-100 rounded-xl p-6 shadow-md hover:shadow-lg transition-shadow overflow-scroll">
            <DeploymentHistory />
          </div>
          
          <div className="col-[3/5] row-[2/3] bg-white border border-gray-100 rounded-xl p-6 shadow-md hover:shadow-lg transition-shadow">
            <ServerMonitoring />
          </div>
          
          <div className="col-[5/7] row-[1/3] bg-white border border-gray-100 rounded-xl p-6 shadow-md hover:shadow-lg transition-shadow">
            <TrafficMonitoring />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;