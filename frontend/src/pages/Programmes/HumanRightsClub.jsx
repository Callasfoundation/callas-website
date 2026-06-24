import React from 'react';
import { Link } from 'react-router-dom';
import { Shield, ArrowLeft, BookOpen, Scale, Award } from 'lucide-react';
import CallToAction from '../../components/CTA/CallToAction';

const HumanRightsClub = () => {
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
            <Shield size={36} />
          </div>
          <div>
            <span className="text-xs font-bold text-callas-blue uppercase tracking-widest">Core Pillar 06</span>
            <h1 className="text-2xl sm:text-3xl font-black text-callas-darkBlue uppercase tracking-tight mt-1">
              Human Rights Clubs
            </h1>
          </div>
        </div>

        <div className="text-sm text-gray-700 space-y-6 leading-relaxed text-justify">
          <p>
            Long-term prevention requires embedding basic constitutional rights and protection values within youth environments early[cite: 1]. Our school-centered Human Rights Clubs foster basic safety awareness and human dignity principles directly within classrooms[cite: 1].
          </p>
          <p>
            By designing collaborative workshops and educational groups, we help young learners identify violence warning signals, practice mutual protection, and understand active defense pathways[cite: 1].
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 pt-4">
          <div className="bg-white border border-gray-100 p-6 rounded-xl shadow-sm space-y-3">
            <BookOpen className="text-callas-blue" size={24} />
            <h3 className="font-bold text-gray-950 text-base">School Curriculums</h3>
            <p className="text-xs text-gray-600 leading-normal">Academic alignment scripts teaching constitutional guarantees, equality rights, and protection boundaries[cite: 1].</p>
          </div>
          <div className="bg-white border border-gray-100 p-6 rounded-xl shadow-sm space-y-3">
            <Award className="text-callas-blue" size={24} />
            <h3 className="font-bold text-gray-950 text-base">Youth Leadership</h3>
            <p className="text-xs text-gray-600 leading-normal">Empouring student advocates to manage local support networks and champion safety values within peer ecosystems[cite: 1].</p>
          </div>
        </div>
      </section>

      <CallToAction />
    </div>
  );
};

export default HumanRightsClub;