import React from 'react';
import { Link } from 'react-router-dom';
import { ShieldAlert, Heart, Users, ArrowRight, Gavel, HeartHandshake, UtensilsCrossed } from 'lucide-react';

const Home = () => {
  return (
    <div className="w-full bg-gray-50">
      {/* Hero Section */}
      <section className="bg-callas-darkBlue text-white py-20 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6 z-10">
            <span className="text-callas-red font-black text-xs uppercase tracking-widest bg-red-950/40 px-3 py-1 rounded border border-callas-red/30">
              Frontline Crisis Intervention
            </span>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black uppercase tracking-tight leading-none">
              Dignity. <br />
              <span className="text-callas-blue">Protection.</span> <br />
              Restoration.
            </h1>
            <p className="text-blue-100 text-sm sm:text-base max-w-lg leading-relaxed">
              Providing localized infrastructure, rapid access to legal justice, and clinical psychosocial care networks for survivors of gender-based violence across the Cape Flats[cite: 1].
            </p>
            <div className="flex flex-wrap gap-4 pt-2">
              <Link to="/get-help" className="bg-callas-red hover:bg-red-700 text-white font-bold text-xs px-6 py-3.5 rounded-lg uppercase tracking-wider transition-all shadow-md flex items-center gap-2">
                <ShieldAlert size={16} /> Get Immediate Help
              </Link>
              <Link to="/programmes" className="bg-white/10 hover:bg-white/20 border border-white/20 text-white font-bold text-xs px-6 py-3.5 rounded-lg uppercase tracking-wider transition-all flex items-center gap-1.5">
                Our Pillars <ArrowRight size={14} />
              </Link>
            </div>
          </div>
          
          <div className="hidden lg:flex justify-center relative">
            <div className="w-80 h-80 bg-callas-blue/10 rounded-full absolute -top-10 -left-10 blur-3xl"></div>
            <div className="w-96 h-96 bg-callas-red/10 rounded-full absolute -bottom-10 -right-10 blur-3xl"></div>
            <div className="border border-white/10 bg-white/5 backdrop-blur-sm p-8 rounded-2xl max-w-sm space-y-4 shadow-xl">
              <span className="text-xs font-bold text-callas-blue uppercase tracking-wider block">Operational Metric Tracking</span>
              <div className="space-y-3">
                <div className="border-b border-white/5 pb-2"><span className="text-2xl font-black block text-white">Daily</span><span className="text-[11px] text-gray-400">Nutritional meal distributions managed[cite: 1].</span></div>
                <div className="border-b border-white/5 pb-2"><span className="text-2xl font-black block text-white">Direct</span><span className="text-[11px] text-gray-400">Court accompaniment case file representation[cite: 1].</span></div>
                <div><span className="text-2xl font-black block text-white">Local</span><span className="text-[11px] text-gray-400">First responder defense systems deployed[cite: 1].</span></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Quick Access Grid */}
      <section className="max-w-7xl mx-auto py-16 px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <h2 className="text-2xl sm:text-3xl font-black text-callas-darkBlue uppercase tracking-tight">Frontline Core Focus Areas</h2>
          <p className="text-xs sm:text-sm text-gray-600 mt-2">Immediate infrastructure channels managed to provide wrap-around care pipelines[cite: 1].</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-white border border-gray-100 p-6 rounded-2xl shadow-sm space-y-4">
            <div className="bg-callas-lightBlue text-callas-blue w-12 h-12 rounded-xl flex items-center justify-center"><Gavel size={22} /></div>
            <h3 className="text-lg font-bold text-callas-darkBlue uppercase tracking-tight">Legal Safeguards</h3>
            <p className="text-xs text-gray-600 leading-relaxed">Direct processing alignment, assistance with filing Protection Orders, and systematic family court accompaniment[cite: 1].</p>
            <Link to="/programmes/access-to-justice" className="text-xs font-bold text-callas-blue inline-flex items-center gap-1 hover:underline">Read Layout Parameters <ArrowRight size={12} /></Link>
          </div>

          <div className="bg-white border border-gray-100 p-6 rounded-2xl shadow-sm space-y-4">
            <div className="bg-callas-lightBlue text-callas-blue w-12 h-12 rounded-xl flex items-center justify-center"><HeartHandshake size={22} /></div>
            <h3 className="text-lg font-bold text-callas-darkBlue uppercase tracking-tight">Psychosocial Care</h3>
            <p className="text-xs text-gray-600 leading-relaxed">Trauma counseling loops designed to stabilize mental health baselines and re-establish long-term individual autonomy[cite: 1].</p>
            <Link to="/programmes/psychosocial-support" className="text-xs font-bold text-callas-blue inline-flex items-center gap-1 hover:underline">Read Layout Parameters <ArrowRight size={12} /></Link>
          </div>

          <div className="bg-white border border-gray-100 p-6 rounded-2xl shadow-sm space-y-4">
            <div className="bg-callas-lightBlue text-callas-blue w-12 h-12 rounded-xl flex items-center justify-center"><UtensilsCrossed size={22} /></div>
            <h3 className="text-lg font-bold text-callas-darkBlue uppercase tracking-tight">Nutritional Logistics</h3>
            <p className="text-xs text-gray-600 leading-relaxed">Operating daily community kitchens to mitigate severe starvation cycles that aggregate household crisis levels[cite: 1].</p>
            <Link to="/programmes/community-kitchen" className="text-xs font-bold text-callas-blue inline-flex items-center gap-1 hover:underline">Read Layout Parameters <ArrowRight size={12} /></Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;