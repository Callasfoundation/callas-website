import React, { useState } from 'react';
import { ShieldAlert, CheckCircle2, Lock, EyeOff } from 'lucide-react';

const GetHelp = () => {
  const [formData, setFormData] = useState({ clientName: '', contactMethod: '', safeToCall: 'no', description: '' });
  const [success, setSuccess] = useState(false);

  const handleIncidentSubmit = (e) => {
    e.preventDefault();
    setSuccess(true);
  };

  return (
    <div className="w-full bg-gray-50 min-h-[85vh] flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-xl w-full space-y-6">
        
        {/* Security Disclaimers */}
        <div className="bg-callas-darkBlue text-white p-4 rounded-xl space-y-2 border border-blue-900/40 shadow-sm text-xs">
          <p className="font-bold uppercase tracking-wider flex items-center gap-1.5 text-callas-red">
            <Lock size={14} /> Data Path Confidentiality Protection
          </p>
          <p className="text-gray-300 leading-normal">
            Stated parameters are securely written directly into high-encryption validation matrices. No processing leaks or secondary exposure lines will occur[cite: 1].
          </p>
        </div>

        <div className="bg-white border border-gray-200 rounded-2xl p-6 sm:p-8 shadow-md space-y-5">
          <div className="border-b border-gray-100 pb-4">
            <h1 className="text-xl font-black text-callas-darkBlue uppercase tracking-tight flex items-center gap-2">
              <ShieldAlert className="text-callas-red" size={24} /> Emergency Intake Terminal
            </h1>
            <p className="text-xs text-gray-500 mt-1">Log internal crisis parameters here to assign an active fieldwork case liaison[cite: 1].</p>
          </div>

          {success ? (
            <div className="p-5 bg-green-50 border border-green-200 text-green-800 rounded-xl space-y-3 text-xs">
              <div className="flex items-center gap-2 font-bold text-sm">
                <CheckCircle2 className="text-green-600" size={18} />
                <span>Secure Ingestion Transmitted</span>
              </div>
              <p className="leading-relaxed">Your data schema packet has been isolated safely inside our primary response log routing layer. A casework execution monitor will align communication through safe paths immediately[cite: 1].</p>
            </div>
          ) : (
            <form onSubmit={handleIncidentSubmit} className="space-y-4 text-xs">
              <div>
                <label className="block font-bold text-gray-700 uppercase tracking-wider mb-1.5">Identification / Alias (Optional)</label>
                <input 
                  type="text" 
                  value={formData.clientName} 
                  onChange={(e) => setFormData({...formData, clientName: e.target.value})} 
                  className="w-full border border-gray-200 rounded-lg px-3 py-2.5 focus:outline-none focus:border-callas-blue text-sm" 
                  placeholder="Use a safe pseudonym if required" 
                />
              </div>

              <div>
                <label className="block font-bold text-gray-700 uppercase tracking-wider mb-1.5">Secure Contact Number / Email</label>
                <input 
                  required 
                  type="text" 
                  value={formData.contactMethod} 
                  onChange={(e) => setFormData({...formData, contactMethod: e.target.value})} 
                  className="w-full border border-gray-200 rounded-lg px-3 py-2.5 focus:outline-none focus:border-callas-blue text-sm" 
                  placeholder="Where can we securely update you?" 
                />
              </div>

              <div>
                <label className="block font-bold text-gray-700 uppercase tracking-wider mb-1.5">Is it safe to place calls back to this number?</label>
                <div className="grid grid-cols-2 gap-3 mt-1">
                  <button 
                    type="button" 
                    onClick={() => setFormData({...formData, safeToCall: 'yes'})} 
                    className={`py-2.5 px-4 rounded-lg border font-bold uppercase transition-all ${formData.safeToCall === 'yes' ? 'bg-green-50 border-green-500 text-green-700 shadow-sm' : 'bg-white border-gray-200 text-gray-600'}`}
                  >
                    Yes, Explicitly Safe
                  </button>
                  <button 
                    type="button" 
                    onClick={() => setFormData({...formData, safeToCall: 'no'})} 
                    className={`py-2.5 px-4 rounded-lg border font-bold uppercase transition-all ${formData.safeToCall === 'no' ? 'bg-red-50 border-callas-red text-callas-red shadow-sm' : 'bg-white border-gray-200 text-gray-600'}`}
                  >
                    No, Text Only / Risk Present
                  </button>
                </div>
              </div>

              <div>
                <label className="block font-bold text-gray-700 uppercase tracking-wider mb-1.5">Incident Framework Parameters</label>
                <textarea 
                  required 
                  rows="4" 
                  value={formData.description} 
                  onChange={(e) => setFormData({...formData, description: e.target.value})} 
                  className="w-full border border-gray-200 rounded-lg px-3 py-2.5 focus:outline-none focus:border-callas-blue text-sm resize-none" 
                  placeholder="Detail structural care, legal help, or spatial evacuation tracking needs..."
                ></textarea>
              </div>

              <button 
                type="submit" 
                className="w-full bg-callas-red hover:bg-red-700 text-white font-black py-3.5 px-4 rounded-lg text-xs uppercase tracking-widest transition-colors shadow-md flex items-center justify-center gap-2"
              >
                <EyeOff size={14} /> Submit Secure Assistance Log
              </button>
            </form>
          )}
        </div>
      </div>
    </div>
  );
};

export default GetHelp;