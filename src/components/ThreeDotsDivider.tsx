import React from "react";

interface ThreeDotsDividerProps {
  className?: string;
}

export const ThreeDotsDivider: React.FC<ThreeDotsDividerProps> = ({ className = "" }) => {
  return (
    <div className={`flex items-center justify-center gap-2 py-6 sm:py-7 ${className}`}>
      <span className="w-2.5 h-2.5 rounded-full dot-red transition-transform hover:scale-125" />
      <span className="w-2.5 h-2.5 rounded-full dot-yellow transition-transform hover:scale-125" />
      <span className="w-2.5 h-2.5 rounded-full dot-green transition-transform hover:scale-125" />
    </div>
  );
};

export default ThreeDotsDivider;
