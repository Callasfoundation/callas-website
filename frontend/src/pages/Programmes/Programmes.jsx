import React from 'react';
import { Link } from 'react-router-dom';
import { Gavel, HeartHandshake, GraduationCap, Smile, UtensilsCrossed, Shield, Users, ArrowRight } from 'lucide-react';
import CallToAction from '../../components/CTA/CallToAction';

const Programmes = () => {
  const programmaticPillars = [
    { id: "access-to-justice", title: "Access to Justice", icon: <Gavel size={22} />, desc: "Court accompaniment and strict processing support for Protection Orders[cite: 1]." },
    { id: "psychosocial-support", title: "Psychosocial Support", icon: <HeartHandshake size={22} />, desc: "Clinical trauma counseling architectures and peer processing infrastructure[cite: 1]." },
    { id: "gbv-training", title: "GBV First Responders", icon: <GraduationCap size={22} />, desc: "Equipping localized neighborhood groups with containment and routing protocols[cite: 1]." },
    { id: "bbb-boys", title: "BBB Boys Programme", icon: <Smile size={22} />, desc: "Proactive youth behavioral mentorship paths mitigating early patterns of toxic expression[cite: 1]." },
    { id: "community-kitchen", title: "Community Kitchen", icon: <UtensilsCrossed size={22} />, desc: "Sustained daily meal security lines stabilizing vulnerable demographic regions[cite: 1]." },
    { id: "human-rights-club", title: "Human Rights Clubs", icon: <Shield size={22} />, desc: "Classroom-level structural education driving basic safe boundary validation[cite: 1]." },
    { id: "mens-engagement", title: "Men's Engagement", icon: <Users size={22} />, desc: "Generational validation circles re-engineering domestic accountability models[cite: 1]." }
  ];

  return (
    <div className="w-full bg-gray-50">
      <section className="bg-callas-darkBlue text-white py-16 px-4 sm:px-6 lg:px-8 text-center">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-3xl sm:text-4xl font-black uppercase tracking-tight mb-4">
            Our Programmatic Frameworks
          </h1>
          <p className="text-blue-100 text-base sm:text-lg max-w-2xl mx-auto">
            Systematic frontline operations built around long-term prevention, mitigation, and clinical response models[cite: 1].
          </p>
        </div>
      </section>

      <section className="max-w-7xl mx-auto py-16 px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {programmaticPillars.map((prog, idx) => (
            <div key={idx} className="bg-white border border-gray-100 p-6 rounded-2xl shadow-sm flex flex-col justify-between items-start space-y-4">
              <div className="space-y-3 w-full">
                <div className="bg-callas-lightBlue text-callas-blue w-11 h-11 rounded-xl flex items-center justify-center">
                  {prog.icon}
                </div>
                <h3 className="text-base font-bold text-callas-darkBlue uppercase tracking-tight">{prog.title}</h3>
                <p className="text-xs text-gray-600 leading-relaxed text-justify">{prog.desc}</p>
              </div>
              <Link 
                to={`/programmes/${prog.id}`} 
                className="text-xs font-bold text-callas-blue inline-flex items-center gap-1 hover:text-callas-darkBlue transition-colors pt-2 uppercase tracking-wider"
              >
                Access Details <ArrowRight size={12} />
              </Link>
            </div>
          ))}
        </div>
      </section>

      <CallToAction />
    </div>
  );
};

export default Programmes;