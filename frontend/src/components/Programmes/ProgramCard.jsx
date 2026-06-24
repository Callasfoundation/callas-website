import React from 'react';
import { Link } from 'react-router-dom';
import * as Icons from 'lucide-react';

const ProgramCard = ({ program }) => {
  const IconComponent = Icons[program.iconName] || Icons.HelpCircle;

  return (
    <div className="bg-white border border-gray-100 rounded-2xl p-6 shadow-sm hover:shadow-md transition-all duration-300 flex flex-col group h-full">
      <div className="flex items-center gap-4 mb-4">
        <div className="bg-callas-lightBlue text-callas-blue p-3 rounded-xl transition-colors group-hover:bg-callas-blue group-hover:text-white">
          <IconComponent size={24} aria-hidden="true" />
        </div>
        <h3 className="text-xl font-bold text-callas-darkBlue tracking-tight">
          {program.title}
        </h3>
      </div>
      
      <p className="text-gray-600 text-sm leading-relaxed flex-grow mb-6">
        {program.summary}
      </p>
      
      <Link
        to={program.path}
        className="inline-flex items-center gap-1 text-sm font-bold text-callas-blue hover:text-callas-darkBlue transition-colors w-fit group/link"
      >
        Learn more 
        <Icons.ArrowRight size={16} className="transform transition-transform group-hover/link:translate-x-1" />
      </Link>
    </div>
  );
};

export default ProgramCard;