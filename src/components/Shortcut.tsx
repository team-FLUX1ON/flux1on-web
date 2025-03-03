import { Box, ActivitySquare, Settings, Clock } from "lucide-react";

const Shortcut = ({ title, iconType, bg }: { title: string, iconType: string, bg: string }) => {
  const getIcon = () => {
    switch (iconType) {
      case "plus":
        return <Box size={24} />;
      case "activity":
        return <ActivitySquare size={24} />;
      case "settings":
        return <Settings size={24} />;
      case "clock":
        return <Clock size={24} />;
      default:
        return <Box size={24} />;
    }
  };
  
  return (
    <div
      className={`${bg} rounded-xl p-4 flex flex-col justify-between hover:scale-105 transition-transform cursor-pointer shadow-md`}
    >
      <div className="text-white opacity-90">{getIcon()}</div>
      <h3 className="text-white font-medium mt-2">{title}</h3>
    </div>
  );
};

export default Shortcut;