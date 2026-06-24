import React from 'react';
import ProgramCard from './ProgramCard';
import { programmesData } from '../../data/programmes';

const ProgramGrid = ({ limit }) => {
  // Allow optional capping of shown elements if rendered on homepage preview
  const displayedProgrammes = limit ? programmesData.slice(0, limit) : programmesData;

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
      {displayedProgrammes.map((program) => (
        <div key={program.id} className="animate-slide">
          <ProgramCard program={program} />
        </div>
      ))}
    </div>
  );
};

export default ProgramGrid;