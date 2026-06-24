import React from 'react';
import { Link } from 'react-router-dom';
import { Users, ArrowLeft, MessageSquare, HeartHandshake, ShieldAlert } from 'lucide-react';
import CallToAction from '../../components/CTA/CallToAction';

const MensEngagement = () => {
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
            <Users size={36} />
          </div>
          <div>
            <span className="text-xs font-bold text-callas-blue uppercase tracking-widest">Core Pillar 07</span>
            <h1 className="text-2xl sm:text-3xl font-black text-callas-darkBlue uppercase tracking-tight mt-1">
              Men's Engagement Forums
            </h1>
          </div>
        </div>

        <div className="text-sm text-gray-700 space-y-6 leading-relaxed text-justify">
          <p>
            Dismantling toxic cultural baselines demands clear, targeted coordination loops with men across all generations[cite: 1]. Our Men's Engagement initiatives run structured conversation groups focused on re-engineering home structures[cite: 1].
          </p>
          <p>
            These workshops address gender equality, challenge violence normalization, and build active accountability frameworks to transform men into proactive home protectors[cite: 1].
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 pt-4">
          <div className="bg-white border border-gray-100 p-6 rounded-xl shadow-sm space-y-3">
            <MessageSquare className="text-callas-blue" size={24} />
            <h3 className="font-bold text-gray-950 text-base">Dialogue Platforms</h3>
            <p className="text-xs text-gray-600 leading-normal">Guided group environments challenging behavioral scripts to establish violent behavior prevention[cite: 1].</p>
          </div>
          <div className="bg-white border border-gray-100 p-6 rounded-xl shadow-sm space-y-3">
            <HeartHandshake className="text-callas-blue" size={24} />
            <h3 className="font-bold text-gray-950 text-base">Partnership Pledges</h3>
            <p className="text-xs text-gray-600 leading-normal">Action covenants driving visible accountability, protection leadership, and shared family equity models[cite: 1].</p>
          </div>
        </div>
      </section>

      <CallToAction />
    </div>
  );
};

export default MensEngagement;