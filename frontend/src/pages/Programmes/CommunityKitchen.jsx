import React from 'react';
import { Link } from 'react-router-dom';
import { UtensilsCrossed, ArrowLeft, Truck, Heart, ShieldCheck } from 'lucide-react';
import CallToAction from '../../components/CTA/CallToAction';

const CommunityKitchen = () => {
  return (
    <div className="w-full bg-gray-50">
      <section className="bg-white border-b border-gray-100 py-6 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <Link to="/programmes" className="inline-flex items-center gap-1.5 text-xs font-bold text-callas-blue hover:text-callas-darkBlue transition-colors uppercase tracking-wider">
            <ArrowLeft size={14} /> Back to Programmes
          </Link>
        </div>
      </section>

      <section className="max-w-4xl mx-auto py-12 px-4 sm:px-6 lg:px-8 space-y-10">
        <div className="flex flex-col sm:flex-row sm:items-center gap-4 border-b border-gray-200 pb-6">
          <div className="bg-callas-lightBlue text-callas-blue p-4 rounded-2xl w-fit shrink-0">
            <UtensilsCrossed size={36} />
          </div>
          <div>
            <span className="text-xs font-bold text-callas-blue uppercase tracking-widest">Core Pillar 05</span>
            <h1 className="text-2xl sm:text-3xl font-black text-callas-darkBlue uppercase tracking-tight mt-1">
              Community Kitchen Operations
            </h1>
          </div>
        </div>

        <div className="text-sm text-gray-700 space-y-6 leading-relaxed text-justify">
          <p>
            Socio-economic vulnerability and extreme nutritional insecurity directly compound the internal risk profiles of families facing domestic conflict[cite: 1]. Our Community Kitchen infrastructure acts as a vital stabilization asset, preparing and serving clean, hot meals daily[cite: 1].
          </p>
          <p>
            By managing complex supply chains and bulk procurement networks, our kitchen operations team mitigates severe food poverty gaps across high-density blocks in the Cape Flats[cite: 1].
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 pt-4">
          <div className="bg-white border border-gray-100 p-6 rounded-xl shadow-sm space-y-3">
            <Truck className="text-callas-blue" size={24} />
            <h3 className="font-bold text-gray-950 text-base">Logistical Grid</h3>
            <p className="text-xs text-gray-600 leading-normal">Systematic distribution networks targeting remote under-resourced clearings and informal encampments daily[cite: 1].</p>
          </div>
          <div className="bg-white border border-gray-100 p-6 rounded-xl shadow-sm space-y-3">
            <ShieldCheck className="text-callas-blue" size={24} />
            <h3 className="font-bold text-gray-950 text-base">Resource Tracking</h3>
            <p className="text-xs text-gray-600 leading-normal">Strict volume metrics tracing supply paths from point of donor intake down to final localized meal outputs[cite: 1].</p>
          </div>
        </div>
      </section>

      <CallToAction />
    </div>
  );
};

export default CommunityKitchen;