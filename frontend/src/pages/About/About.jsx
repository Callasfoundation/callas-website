import React from 'react';
import { Users, Eye, Target, Award, ShieldCheck } from 'lucide-react';
import CallToAction from '../../components/CTA/CallToAction';

const About = () => {
  return (
    <div className="w-full bg-gray-50">
      {/* Banner Header */}
      <section className="bg-callas-darkBlue text-white py-16 px-4 sm:px-6 lg:px-8 text-center">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-3xl sm:text-4xl font-black uppercase tracking-tight mb-4">
            About Our Foundation
          </h1>
          <p className="text-blue-100 text-base sm:text-lg max-w-2xl mx-auto leading-relaxed">
            Fostering systemic community protection, implementing responsive crisis assets, and walking alongside survivors on the path to restoration.
          </p>
        </div>
      </section>

      {/* Core Mission & Vision */}
      <section className="max-w-7xl mx-auto py-16 px-4 sm:px-6 lg:px-8 grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="bg-white border border-gray-100 p-8 rounded-2xl shadow-sm space-y-4">
          <div className="bg-callas-lightBlue text-callas-blue w-12 h-12 rounded-xl flex items-center justify-center">
            <Target size={24} />
          </div>
          <h2 className="text-xl font-bold text-callas-darkBlue uppercase tracking-tight">Our Mission</h2>
          <p className="text-gray-600 text-sm leading-relaxed">
            To provide immediate crisis containment, legal pathway navigation, and robust psychosocial development frameworks for individuals impacted by gender-based violence and socio-economic vulnerability.
          </p>
        </div>

        <div className="bg-white border border-gray-100 p-8 rounded-2xl shadow-sm space-y-4">
          <div className="bg-callas-lightBlue text-callas-blue w-12 h-12 rounded-xl flex items-center justify-center">
            <Eye size={24} />
          </div>
          <h2 className="text-xl font-bold text-callas-darkBlue uppercase tracking-tight">Our Vision</h2>
          <p className="text-gray-600 text-sm leading-relaxed">
            A safe, equitable society free from systemic cycles of violence, where vulnerable demographics possess immediate infrastructure access to claim safety, dignity, and restorative justice.
          </p>
        </div>
      </section>

      {/* Pillars of Implementation */}
      <section className="bg-white border-y border-gray-100 py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <h2 className="text-2xl font-black text-callas-darkBlue uppercase tracking-tight">Our Values</h2>
            <div className="h-1 w-16 bg-callas-red mx-auto mt-2 rounded-full"></div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { title: "Confidentiality", desc: "Securing victim records and maintaining strictly safe data paths." },
              { title: "Accountability", desc: "Auditable programmatic deployments and resource allocations." },
              { title: "Dignity", desc: "Upholding human rights uniformly across all outreach points." },
              { title: "Empowerment", desc: "Transitioning survivors from crisis control into continuous self-reliance." }
            ].map((val, idx) => (
              <div key={idx} className="p-5 border border-gray-100 rounded-xl bg-gray-50/50 space-y-2">
                <ShieldCheck className="text-callas-blue" size={20} />
                <h3 className="font-bold text-gray-900 text-base">{val.title}</h3>
                <p className="text-xs text-gray-600 leading-relaxed">{val.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CallToAction />
    </div>
  );
};

export default About;