import React, { useState } from 'react';
import { UserPlus, CheckCircle2, ShieldCheck } from 'lucide-react';
import CallToAction from '../../components/CTA/CallToAction';

const Volunteer = () => {
  const [formData, setFormData] = useState({ name: '', email: '', phone: '', programPreference: 'community-kitchen', message: '' });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className="w-full bg-gray-50">
      <section className="bg-callas-darkBlue text-white py-16 px-4 sm:px-6 lg:px-8 text-center">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-3xl sm:text-4xl font-black uppercase tracking-tight mb-4">
            Join Our Volunteer Cadre
          </h1>
          <p className="text-blue-100 text-base sm:text-lg max-w-2xl mx-auto">
            Contribute your localized skills, processing support, or field logistics to expand our active protection reach.
          </p>
        </div>
      </section>

      <section className="max-w-3xl mx-auto py-16 px-4 sm:px-6 lg:px-8">
        <div className="bg-white border border-gray-100 rounded-2xl p-6 sm:p-8 shadow-sm">
          <h2 className="text-xl font-bold text-callas-darkBlue mb-2 flex items-center gap-2">
            <UserPlus size={22} className="text-callas-blue" /> Volunteer Intake Registry
          </h2>
          <p className="text-xs text-gray-500 mb-6">Complete the layout schema parameters below to record your operational support path.</p>

          {submitted ? (
            <div className="p-5 bg-green-50 border border-green-200 text-green-800 rounded-xl space-y-2 text-sm">
              <div className="flex items-center gap-2 font-bold"><CheckCircle2 className="text-green-600" size={18} /><span>Intake Application Logged</span></div>
              <p className="text-xs text-green-700">Thank you for opting into our field matrix alignment structure. An orchestration coordinator will review your stated data lines shortly.</p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-5">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                <div>
                  <label className="block text-xs font-bold text-gray-700 uppercase tracking-wider mb-2">Full Name</label>
                  <input required type="text" value={formData.name} onChange={(e)=>setFormData({...formData, name: e.target.value})} className="w-full border border-gray-200 rounded-lg px-4 py-2.5 text-sm focus:outline-none focus:border-callas-blue" placeholder="Jane Doe" />
                </div>
                <div>
                  <label className="block text-xs font-bold text-gray-700 uppercase tracking-wider mb-2">Email Address</label>
                  <input required type="email" value={formData.email} onChange={(e)=>setFormData({...formData, email: e.target.value})} className="w-full border border-gray-200 rounded-lg px-4 py-2.5 text-sm focus:outline-none focus:border-callas-blue" placeholder="jane@domain.com" />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                <div>
                  <label className="block text-xs font-bold text-gray-700 uppercase tracking-wider mb-2">Contact Number</label>
                  <input required type="tel" value={formData.phone} onChange={(e)=>setFormData({...formData, phone: e.target.value})} className="w-full border border-gray-200 rounded-lg px-4 py-2.5 text-sm focus:outline-none focus:border-callas-blue" placeholder="+27 (0) 00 000 0000" />
                </div>
                <div>
                  <label className="block text-xs font-bold text-gray-700 uppercase tracking-wider mb-2">Preferred Domain Pathway</label>
                  <select value={formData.programPreference} onChange={(e)=>setFormData({...formData, programPreference: e.target.value})} className="w-full border border-gray-200 bg-white rounded-lg px-3 py-2.5 text-sm focus:outline-none focus:border-callas-blue">
                    <option value="community-kitchen">Community Feeding Runs</option>
                    <option value="court-support">Court Support Accompaniment</option>
                    <option value="youth-mentorship">Youth Program Workshops</option>
                    <option value="admin-tech">Administrative / Digital Tasks</option>
                  </select>
                </div>
              </div>

              <div>
                <label className="block text-xs font-bold text-gray-700 uppercase tracking-wider mb-2">Skills & Allocation Notes</label>
                <textarea rows="4" value={formData.message} onChange={(e)=>setFormData({...formData, message: e.target.value})} className="w-full border border-gray-200 rounded-lg px-4 py-2.5 text-sm focus:outline-none focus:border-callas-blue resize-none" placeholder="Detail any specialized clinical, legal, or culinary log backgrounds here..."></textarea>
              </div>

              <button type="submit" className="w-full bg-callas-blue hover:bg-blue-700 text-white font-bold py-3.5 px-6 rounded-lg text-sm transition-colors shadow-sm tracking-wide uppercase">
                Submit Registry Record
              </button>
            </form>
          )}
        </div>
      </section>

      <CallToAction />
    </div>
  );
};

export default Volunteer;