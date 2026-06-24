import React from 'react';
import * as Icons from 'lucide-react';

const ImpactCounter = ({ number, label, iconName }) => {
  // Dynamically resolve the lucide icon component string from data map
  const IconComponent = Icons[iconName] || Icons.HelpCircle;

  return (
    <div className="bg-white border border-gray-100 rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow duration-200 flex flex-col items-center text-center">
      <div className="bg-callas-lightBlue text-callas-blue p-3.5 rounded-full mb-4">
        <IconComponent size={28} aria-hidden="true" />
      </div>
      <span className="text-3xl md:text-4xl font-extrabold text-callas-darkBlue tracking-tight mb-2">
        {number}
      </span>
      <p className="text-sm font-semibold text-gray-600 leading-snug">
        {label}
      </p>
    </div>
  );
};

export default ImpactCounter;