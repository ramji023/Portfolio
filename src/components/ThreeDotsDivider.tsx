import React from "react";

interface ThreeDotsDividerProps {
  className?: string;
}

export const ThreeDotsDivider: React.FC<ThreeDotsDividerProps> = ({ className = "" }) => {
  return (
    <div className={`flex items-center gap-1.5 py-8 ${className}`}>
      <span className="w-2.5 h-2.5 rounded-full dot-red transition-transform hover:scale-125" />
      <span className="w-2.5 h-2.5 rounded-full dot-yellow transition-transform hover:scale-125" />
      <span className="w-2.5 h-2.5 rounded-full dot-green transition-transform hover:scale-125" />
    </div>
  );
};

export default ThreeDotsDivider;
