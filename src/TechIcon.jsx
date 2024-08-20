import React from 'react';

const TechIcon = ({ name, icon }) => {
  return (
    <div className="flex flex-col items-center m-2">
      <img src={icon} alt={name} className="w-12 h-12 mb-2" />
      <span className="text-xs text-center">{name}</span>
    </div>
  );
};

export default TechIcon;