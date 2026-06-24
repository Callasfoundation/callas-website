import React from 'react';
import ProgramGrid from '../../components/Programmes/ProgramGrid';
import CallToAction from '../../components/CTA/CallToAction';

const Programmes = () => {
  return (
    <div className="w-full bg-gray-50">
      {/* Page Header banner block */}
      <section className="bg-callas-darkBlue text-white py-16 px-4 sm:px-6 lg:px-8 text-center">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-3xl sm:text-4xl font-black uppercase tracking-tight mb-4">
            Our Action Framework
          </h1>
          <p className="text-blue-100 text-base sm:text-lg max-w-2xl mx-auto leading-relaxed">
            Callas Foundation manages multi-layered community assets designed to stabilize crisis areas, supply baseline nutrition, and provide continuous support infrastructure[cite: 1].
          </p>
        </div>
      </section>

      {/* Grid Display block */}
      <section className="max-w-7xl mx-auto py-16 px-4 sm:px-6 lg:px-8">
        <div className="mb-10">
          <h2 className="text-xl font-bold text-callas-darkBlue uppercase tracking-wider mb-2">
            Active Community Deployments
          </h2>
          <p className="text-sm text-gray-600">
            Select a target field program below to view specific local operation contexts, localized tracking matrices, and coordination resources[cite: 1].
          </p>
        </div>
        
        {/* Render fully mapped cards displaying all 7 core pillars */}
        <ProgramGrid />
      </section>

      {/* Standard uniform page termination component */}
      <CallToAction />
    </div>
  );
};

export default Programmes;