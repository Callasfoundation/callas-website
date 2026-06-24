import React from 'react';
import { Link } from 'react-router-dom';
import { GraduationCap, ArrowLeft, Users, ShieldAlert, BookOpen } from 'lucide-react';
import CallToAction from '../../components/CTA/CallToAction';

const GBVTraining = () => {
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
            <GraduationCap size={36} />
          </div>
          <div>
            <span className="text-xs font-bold text-callas-blue uppercase tracking-widest">Core Pillar 03</span>
            <h1 className="text-2xl sm:text-3xl font-black text-callas-darkBlue uppercase tracking-tight mt-1">
              GBV First Responders Training
            </h1>
          </div>
        </div>

        <div className="text-sm text-gray-700 space-y-6 leading-relaxed text-justify">
          <p>
            Early detection and safe mitigation remain the most effective methods to limit gender-based violence escalation within local neighborhood sectors. Our First Responders Training curriculum builds a specialized defense grid by equipping everyday residents with clinical intervention knowledge[cite: 1].
          </p>
          <p>
            Participants undergo immersive field modules detailing early trauma detection, localized safe shelter routing protocols, and compliance protection tracking standards to ensure immediate assistance pipelines[cite: 1].
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 pt-4">
          <div className="bg-white border border-gray-100 p-6 rounded-xl shadow-sm space-y-3">
            <Users className="text-callas-blue" size={24} />
            <h3 className="font-bold text-gray-950 text-base">Community Champions</h3>
            <p className="text-xs text-gray-600 leading-normal">Building localized community monitoring cells to provide immediate structural stabilization during domestic crises[cite: 1].</p>
          </div>
          <div className="bg-white border border-gray-100 p-6 rounded-xl shadow-sm space-y-3">
            <BookOpen className="text-callas-blue" size={24} />
            <h3 className="font-bold text-gray-950 text-base">Crisis Literacy</h3>
            <p className="text-xs text-gray-600 leading-normal">Extensive educational parameters driving awareness around constitutional safety boundaries and emergency protection layouts.</p>
          </div>
        </div>
      </section>

      <CallToAction />
    </div>
  );
};

export default GBVTraining;