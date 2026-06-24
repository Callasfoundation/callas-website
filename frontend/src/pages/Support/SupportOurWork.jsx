import React from 'react';
import { Link } from 'react-router-dom';
import { Handshake, ShieldCheck, Heart, ArrowRight } from 'lucide-react';
import CallToAction from '../../components/CTA/CallToAction';

const SupportOurWork = () => {
  return (
    <div className="w-full bg-gray-50">
      {/* Banner Landing Header */}
      <section className="bg-callas-darkBlue text-white py-16 px-4 sm:px-6 lg:px-8 text-center">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-3xl sm:text-4xl font-black uppercase tracking-tight mb-4">
            Partner With Callas Foundation
          </h1>
          <p className="text-blue-100 text-base sm:text-lg max-w-2xl mx-auto leading-relaxed">
            Help us scale critical support models, fund frontline court protection pipelines, and run regional kitchen assets across the Cape Flats[cite: 1].
          </p>
        </div>
      </section>

      {/* Corporate CSI & Alignment Section Blocks */}
      <section className="max-w-7xl mx-auto py-16 px-4 sm:px-6 lg:px-8 space-y-16">
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <span className="text-xs font-bold text-callas-blue uppercase tracking-widest bg-blue-50 px-3 py-1 rounded-full border border-blue-100">
              Corporate Partnerships
            </span>
            <h2 className="text-2xl sm:text-3xl font-black text-callas-darkBlue uppercase tracking-tight">
              CSI Strategy & Socio-Economic Impact
            </h2>
            <p className="text-gray-600 text-sm leading-relaxed text-justify">
              By aligning your organization's Corporate Social Investment (CSI) frameworks with Callas Foundation, you inject direct operational capital into communities that need it most[cite: 1]. We work systematically with transparency matrices, tracking outputs against absolute resource application to ensure sustainable community protection[cite: 1].
            </p>
            <div className="space-y-3">
              <div className="flex items-start gap-3">
                <ShieldCheck className="text-callas-blue mt-0.5 shrink-0" size={18} />
                <p className="text-xs text-gray-700 font-medium">Full compliance verification profiles for governance alignment.</p>
              </div>
              <div className="flex items-start gap-3">
                <ShieldCheck className="text-callas-blue mt-0.5 shrink-0" size={18} />
                <p className="text-xs text-gray-700 font-medium">Audited tracking loops for fund applications across feeding lines and GBV responses[cite: 1].</p>
              </div>
            </div>
          </div>

          {/* Partner Action Highlight Boxes */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            <div className="bg-white border border-gray-100 rounded-2xl p-6 shadow-sm space-y-3">
              <div className="bg-callas-lightBlue text-callas-blue w-10 h-10 rounded-xl flex items-center justify-center">
                <Heart size={20} className="fill-current" />
              </div>
              <h3 className="font-bold text-gray-900 text-base">Direct Funding</h3>
              <p className="text-xs text-gray-600 leading-relaxed">Sponsor daily nutrition runs or professional diagnostic counseling tracks directly[cite: 1].</p>
            </div>

            <div className="bg-white border border-gray-100 rounded-2xl p-6 shadow-sm space-y-3">
              <div className="bg-callas-lightBlue text-callas-blue w-10 h-10 rounded-xl flex items-center justify-center">
                <Handshake size={20} />
              </div>
              <h3 className="font-bold text-gray-900 text-base">Resource In-Kind</h3>
              <p className="text-xs text-gray-600 leading-relaxed">Supply kitchen logistics assets, IT hardware systems, or diagnostic space allocations.</p>
            </div>
          </div>
        </div>

        {/* Informative Callout strip for physical donations */}
        <div className="bg-gradient-callas text-white p-8 sm:p-10 rounded-3xl shadow-md flex flex-col md:flex-row md:items-center justify-between gap-6">
          <div className="max-w-xl space-y-2">
            <h3 className="text-xl sm:text-2xl font-extrabold tracking-tight">Ready to map out a programmatic partnership?</h3>
            <p className="text-blue-100 text-xs sm:text-sm leading-relaxed">
              Get in touch with our operations team to receive full institutional details, project budgets, and custom compliance profiles.
            </p>
          </div>
          <Link
            to="/donate"
            className="bg-white text-callas-darkBlue font-black px-6 py-3.5 rounded-lg text-sm shadow-sm hover:bg-gray-100 transition-colors inline-flex items-center gap-1.5 self-start md:self-center shrink-0"
          >
            Review Donation Pipelines <ArrowRight size={16} />
          </Link>
        </div>

      </section>

      {/* Standard uniform footer template block */}
      <CallToAction />
    </div>
  );
};

export default SupportOurWork;