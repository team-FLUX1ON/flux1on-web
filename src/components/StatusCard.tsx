import { Server } from "lucide-react";

const StatusCard = () => {
  return (
    <div className="flex-1 h-full bg-white border border-gray-100 rounded-xl p-6 shadow-md hover:shadow-lg transition-shadow">
      <div className="flex items-center gap-2 mb-4">
        <Server className="text-blue-500" size={20} />
        <h2 className="text-xl font-semibold text-gray-800">배포 상태</h2>
      </div>
      
      <div className="flex items-center gap-2 mt-4 mb-2">
        <div className="w-3 h-3 rounded-full bg-green-500"></div>
        <p className="font-medium">마지막 배포: 성공</p>
      </div>
      
      <div className="bg-gray-50 rounded-lg p-4 mt-4">
        <div className="flex justify-between items-center mb-2">
          <p className="text-sm font-medium text-gray-700">실행 중인 컨테이너</p>
          <span className="text-lg font-bold text-blue-600">3</span>
        </div>
        <div className="w-full bg-gray-200 h-2 rounded-full overflow-hidden">
          <div className="bg-blue-500 h-full rounded-full" style={{ width: '100%' }}></div>
        </div>
      </div>
      
      <div className="bg-gray-50 rounded-lg p-4 mt-4">
        <div className="flex justify-between items-center mb-2">
          <p className="text-sm font-medium text-gray-700">시스템 상태</p>
          <span className="text-sm px-2 py-1 bg-green-100 text-green-800 rounded-full">안정적</span>
        </div>
      </div>
    </div>
  );
};

export default StatusCard;