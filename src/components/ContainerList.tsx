import {ChevronRight} from "lucide-react";
import {Link} from "react-router-dom";

const ContainerList = () => {
  const containers = [
    { name: "frontend-container", status: "Running", health: 98 },
    { name: "backend-container", status: "Running", health: 95 },
    { name: "database-container", status: "Running", health: 92 }
  ];
  
  return (
    <>
      <Link to='/containers' className="text-xl font-semibold text-gray-800 mb-4 flex items-center">
        <p>실행 중인 컨테이너</p>
        <ChevronRight />
      </Link>
      
      <div className="space-y-4 mt-6">
        {containers.map((container, index) => (
          <div key={index} className="flex items-center justify-between p-4 rounded-lg bg-gray-50 hover:bg-gray-100 transition-colors">
            <div className="flex items-center gap-3">
              <div className="w-3 h-3 rounded-full bg-green-500"></div>
              <p className="font-medium text-gray-800">{container.name}</p>
            </div>
            <div className="flex items-center gap-4">
              <div className="text-sm px-2 py-1 bg-green-100 text-green-800 rounded-full">{container.status}</div>
              <div>
                <p className="text-xs text-gray-500">상태</p>
                <div className="w-24 bg-gray-200 h-2 rounded-full overflow-hidden">
                  <div
                    className={`h-full rounded-full ${
                      container.health > 95 ? 'bg-green-500' :
                        container.health > 90 ? 'bg-green-400' : 'bg-yellow-500'
                    }`}
                    style={{ width: `${container.health}%` }}
                  ></div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default ContainerList;