import {ChevronRight} from "lucide-react";
import {Link} from "react-router-dom";

const ServerMonitoring = () => {
  return (
    <>
      <Link to='performences' className="text-xl font-semibold text-gray-800 mb-4 flex items-center">
        <p>서버 성능 모니터링</p>
        <ChevronRight />
      </Link>
      
      <div className="space-y-6 mt-6">
        <div>
          <div className="flex justify-between items-center mb-2">
            <p className="text-sm font-medium text-gray-700">CPU 사용량</p>
            <span className="text-lg font-bold text-blue-600">65%</span>
          </div>
          <div className="w-full bg-gray-200 h-3 rounded-full overflow-hidden">
            <div className="bg-blue-500 h-full rounded-full" style={{ width: '65%' }}></div>
          </div>
        </div>
        
        <div>
          <div className="flex justify-between items-center mb-2">
            <p className="text-sm font-medium text-gray-700">메모리 사용량</p>
            <span className="text-lg font-bold text-blue-600">2.3GB / 4GB</span>
          </div>
          <div className="w-full bg-gray-200 h-3 rounded-full overflow-hidden">
            <div className="bg-green-500 h-full rounded-full" style={{ width: '57.5%' }}></div>
          </div>
        </div>
        
        <div>
          <div className="flex justify-between items-center mb-2">
            <p className="text-sm font-medium text-gray-700">디스크 사용량</p>
            <span className="text-lg font-bold text-blue-600">120GB / 500GB</span>
          </div>
          <div className="w-full bg-gray-200 h-3 rounded-full overflow-hidden">
            <div className="bg-purple-500 h-full rounded-full" style={{ width: '24%' }}></div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ServerMonitoring;