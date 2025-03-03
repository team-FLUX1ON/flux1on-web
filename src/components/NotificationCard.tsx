import { Bell } from "lucide-react";

const NotificationCard = () => {
  // 알림 데이터
  const notifications = [
    { type: "update", message: "새로운 업데이트 감지됨", time: "5분 전" },
    { type: "success", message: "배포 성공", time: "2시간 전" },
    { type: "warning", message: "CPU 사용량 증가 (80%)", time: "30분 전" }
  ];
  
  return (
    <div className="flex-1 h-full bg-white border border-gray-100 rounded-xl p-6 shadow-md hover:shadow-lg transition-shadow">
      <div className="flex items-center gap-2 mb-4">
        <Bell className="text-blue-500" size={20} />
        <h2 className="text-xl font-semibold text-gray-800">실시간 알림</h2>
      </div>
      
      <div className="space-y-4 mt-4">
        {notifications.map((notification, index) => (
          <div key={index} className="flex items-start gap-3 p-3 rounded-lg bg-gray-50 hover:bg-gray-100 transition-colors">
            <div className={`p-2 rounded-full ${
              notification.type === 'update' ? 'bg-blue-100 text-blue-600' :
                notification.type === 'success' ? 'bg-green-100 text-green-600' :
                  'bg-yellow-100 text-yellow-600'
            }`}>
              {notification.type === 'update' ? '🔄' :
                notification.type === 'success' ? '✅' : '⚠️'}
            </div>
            <div className="flex-1">
              <p className="font-medium text-gray-800">{notification.message}</p>
              <p className="text-xs text-gray-500">{notification.time}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default NotificationCard;