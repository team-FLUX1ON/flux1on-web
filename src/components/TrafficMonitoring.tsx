import {ChevronRight} from "lucide-react";
import {Link} from "react-router-dom";

const TrafficMonitoring = () => {
  return (
    <>
      <Link to='traffics' className="text-xl font-semibold text-gray-800 mb-4 flex items-center">
        <p>실시간 트래픽</p>
        <ChevronRight />
      </Link>
      
      <div className="bg-gray-50 rounded-lg p-4 mt-4">
        <div className="flex justify-between items-center mb-2">
          <p className="text-sm font-medium text-gray-700">현재 요청 수</p>
          <div className="flex items-center gap-2">
            <span className="text-lg font-bold text-blue-600">120</span>
            <span className="text-xs text-green-600 bg-green-100 px-2 py-1 rounded-full">+12%</span>
          </div>
        </div>
      </div>
      
      <div className="bg-gray-50 rounded-lg p-4 mt-4">
        <div className="flex justify-between items-center mb-2">
          <p className="text-sm font-medium text-gray-700">평균 응답 속도</p>
          <div className="flex items-center gap-2">
            <span className="text-lg font-bold text-blue-600">320ms</span>
            <span className="text-xs text-green-600 bg-green-100 px-2 py-1 rounded-full">-5%</span>
          </div>
        </div>
      </div>
      
      <div className="h-64 bg-gray-50 rounded-lg p-4 mt-4 flex items-center justify-center">
        <p className="text-gray-400 text-sm">트래픽 차트 영역</p>
      </div>
      
      <div className="flex justify-between mt-6">
        <div className="text-center">
          <p className="text-2xl font-bold text-blue-600">2.4k</p>
          <p className="text-xs text-gray-500">총 방문자</p>
        </div>
        <div className="text-center">
          <p className="text-2xl font-bold text-blue-600">1.2k</p>
          <p className="text-xs text-gray-500">고유 사용자</p>
        </div>
        <div className="text-center">
          <p className="text-2xl font-bold text-blue-600">65%</p>
          <p className="text-xs text-gray-500">이탈률</p>
        </div>
      </div>
    </>
  );
};

export default TrafficMonitoring;