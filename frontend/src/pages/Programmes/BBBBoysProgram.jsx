import React from 'react';
import { Link } from 'react-router-dom';
import { Smile, ArrowLeft, ShieldCheck, Heart, Sparkles } from 'lucide-react';
import CallToAction from '../../components/CTA/CallToAction';

const BBBBoys = () => {
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
            <Smile size={36} />
          </div>
          <div>
            <span className="text-xs font-bold text-callas-blue uppercase tracking-widest">Core Pillar 04</span>
            <h1 className="text-2xl sm:text-3xl font-black text-callas-darkBlue uppercase tracking-tight mt-1">
              BBB Boys Programme
            </h1>
          </div>
        </div>

        <div className="text-sm text-gray-700 space-y-6 leading-relaxed text-justify">
          <p>
            To effectively dismantle cycles of violence, proactive intervention frameworks must engage youth demographics before behavioral patterns crystalize[cite: 1]. The BBB Boys Programme deploys highly targeted mentorship workshops for young males across the Cape Flats[cite: 1].
          </p>
          <p>
            The curriculum actively prioritizes emotional literacy development, accountability modeling, and constructive conflict resolution alternatives to engineer protective mindsets within home environments[cite: 1].
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 pt-4">
          <div className="bg-white border border-gray-100 p-5 rounded-xl shadow-sm text-center space-y-2">
            <Sparkles className="text-callas-blue mx-auto" size={24} />
            <h3 className="font-bold text-gray-950 text-sm">Behavioral Pivots</h3>
            <p className="text-[11px] text-gray-600 leading-normal">Deconstructing structural expressions of toxic masculinity through cognitive modification labs[cite: 1].</p>
          </div>
          <div className="bg-white border border-gray-100 p-5 rounded-xl shadow-sm text-center space-y-2">
            <Heart className="text-callas-blue mx-auto" size={24} />
            <h3 className="font-bold text-gray-950 text-sm">Peer Mentorship</h3>
            <p className="text-[11px] text-gray-600 leading-normal">Pairing program participants with older, verified accountability champions within regional clusters.</p>
          </div>
          <div className="bg-white border border-gray-100 p-5 rounded-xl shadow-sm text-center space-y-2">
            <ShieldCheck className="text-callas-blue mx-auto" size={24} />
            <h3 className="font-bold text-gray-950 text-sm">Safety Alignment</h3>
            <p className="text-[11px] text-gray-600 leading-normal">Fostering systemic protective leadership patterns to safeguard familial and educational spaces.</p>
          </div>
        </div>
      </section>

      <CallToAction />
    </div>
  );
};

export default BBBBoys;