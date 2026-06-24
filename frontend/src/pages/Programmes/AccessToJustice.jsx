import React from 'react';
import { Link } from 'react-router-dom';
import { Gavel, ArrowLeft, ShieldAlert, FileText, Scale } from 'lucide-react';
import CallToAction from '../../components/CTA/CallToAction';

const AccessToJustice = () => {
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
            <Gavel size={36} />
          </div>
          <div>
            <span className="text-xs font-bold text-callas-blue uppercase tracking-widest">Core Pillar 01</span>
            <h1 className="text-2xl sm:text-3xl font-black text-callas-darkBlue uppercase tracking-tight mt-1">
              Access to Justice Framework
            </h1>
          </div>
        </div>

        <div className="text-sm text-gray-700 space-y-6 leading-relaxed text-justify">
          <p>
            Navigating South African legal mechanisms during immediate crisis states presents significant cognitive barriers for victims of gender-based violence. Our specialized court accompaniment framework directly pairs survivors with veteran casework coordinators to mitigate processing exposure[cite: 1].
          </p>
          <p>
            We manage structural guidance through local family courts, standardizing data accuracy across complex application procedures to limit delays or administration friction[cite: 1].
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 pt-4">
          <div className="bg-white border border-gray-100 p-6 rounded-xl shadow-sm space-y-3">
            <FileText className="text-callas-blue" size={24} />
            <h3 className="font-bold text-gray-950 text-base">Protection Orders</h3>
            <p className="text-xs text-gray-600 leading-normal">Systematic logging support across local jurisdictions to establish structural physical boundaries against perpetrators[cite: 1].</p>
          </div>
          <div className="bg-white border border-gray-100 p-6 rounded-xl shadow-sm space-y-3">
            <Scale className="text-callas-blue" size={24} />
            <h3 className="font-bold text-gray-950 text-base">Court Accompaniment</h3>
            <p className="text-xs text-gray-600 leading-normal">Frontline placement alongside survivors during formal judicial proceedings to counter systematic institutional trauma patterns[cite: 1].</p>
          </div>
        </div>

        <div className="p-6 bg-red-50 border border-red-100 rounded-2xl flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
          <div className="space-y-1">
            <p className="font-bold text-gray-950 text-sm flex items-center gap-1.5">
              <ShieldAlert className="text-callas-red" size={16} /> Facing an active protection emergency?
            </p>
            <p className="text-xs text-gray-600">Access our secure system immediately to initiate a secure legal tracking log.</p>
          </div>
          <Link to="/get-help" className="bg-callas-red hover:bg-red-700 text-white font-bold text-xs px-4 py-2.5 rounded uppercase tracking-wide transition-colors shrink-0">
            Initiate Case File
          </Link>
        </div>
      </section>

      <CallToAction />
    </div>
  );
};

export default AccessToJustice;