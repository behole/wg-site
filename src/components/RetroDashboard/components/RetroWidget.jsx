import React, { useState } from 'react';

export const RetroWidget = ({ title, children, icon: Icon }) => {
  const [isHovered, setIsHovered] = useState(false);
  
  return (
    <div 
      onMouseEnter={() => setIsHovered(true)} 
      onMouseLeave={() => setIsHovered(false)}
      className={`bg-amber-950/90 border-2 ${
        isHovered ? 'border-amber-500' : 'border-amber-600/50'
      } p-4 rounded-lg flex flex-col transition-all duration-300 ${
        isHovered ? 'shadow-lg shadow-amber-900/50' : ''
      }`}
    >
      <div className="flex items-center mb-4 text-amber-500">
        <Icon className="mr-2" size={20}/>
        <h3 className="font-mono text-lg">{title}</h3>
      </div>
      <div className="flex-1">
        {children}
      </div>
    </div>
  );
};
