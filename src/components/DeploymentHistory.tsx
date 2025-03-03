import {ChevronRight} from "lucide-react";
import {Link} from "react-router-dom";

const DeploymentHistory = () => {
  // 최근 배포 이력
  const deployments = [
    { version: "v1.0.3", status: "성공", date: "2025년 3월 2일", time: "3시간 전" },
    { version: "v1.0.2", status: "성공", date: "2025년 3월 1일", time: "1일 전" },
    { version: "v1.0.1", status: "실패", date: "2025년 2월 28일", time: "3일 전" }
  ];
  
  return (
    <>
      <Link to='deploy-history' className="text-xl font-semibold text-gray-800 mb-4 flex items-center">
        <p>최근 배포 이력</p>
        <ChevronRight />
      </Link>
      
      <div className="space-y-4 mt-6">
        {deployments.map((deployment, index) => (
          <div key={index} className="p-4 rounded-lg bg-gray-50 hover:bg-gray-100 transition-colors">
            <div className="flex justify-between items-center mb-2">
              <div className="flex items-center gap-2">
                <span className={`text-xl ${
                  deployment.status === '성공' ? 'text-green-500' : 'text-red-500'
                }`}>
                  {deployment.status === '성공' ? '✅' : '❌'}
                </span>
                <p className="font-medium">{deployment.version}</p>
              </div>
              <span className="text-xs text-gray-500">{deployment.time}</span>
            </div>
            <p className="text-xs text-gray-500">{deployment.date}</p>
          </div>
        ))}
      </div>
    </>
  );
};

export default DeploymentHistory;