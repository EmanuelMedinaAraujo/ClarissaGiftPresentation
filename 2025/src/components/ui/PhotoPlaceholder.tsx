import React from 'react';
import { Camera } from 'lucide-react';
import clsx from 'clsx';

interface PhotoPlaceholderProps {
  label: string;
  height?: string;
  className?: string;
  imageSrc?: string;
}

export const PhotoPlaceholder: React.FC<PhotoPlaceholderProps> = ({ label, height = "h-48", className, imageSrc }) => {
  if (imageSrc) {
    return (
      <div 
        className={clsx(
          "w-full overflow-hidden rounded-xl shadow-sm",
          className
        )}
      >
        <img src={imageSrc} alt={label} className="w-full h-auto block" />
      </div>
    );
  }

  return (
    <div 
      className={clsx(
        "w-full bg-gray-100 border-2 border-dashed border-gray-300 rounded-xl flex flex-col items-center justify-center text-gray-400 p-4 transition-colors hover:border-gray-400 hover:bg-gray-50",
        height,
        className
      )}
    >
      <Camera size={32} className="mb-2 opacity-50" />
      <span className="text-sm font-medium text-center">{label}</span>
    </div>
  );
};
