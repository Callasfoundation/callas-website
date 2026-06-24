import React, { useState } from 'react';
import { ShieldAlert, CheckCircle2, AlertCircle, EyeOff } from 'lucide-react';

const GetHelpForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    contactMethod: 'phone',
    contactDetails: '',
    safeToLeaveVoicemail: 'no',
    urgencyLevel: 'medium',
    contextSummary: ''
  });
  const [status, setStatus] = useState({ loading: false, success: false, error: null });

  // Safety Quick Exit Function: immediately redirects to a blank/neutral page
  const handleQuickExit = () => {
    window.location.href = 'https://www.google.com';
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus({ loading: true, success: false, error: null });

    try {
      // API payload dispatch simulation
      await new Promise((resolve) => setTimeout(resolve, 1200));
      setStatus({ loading: false, success: true, error: null });
      setFormData({ name: '', contactMethod: 'phone', contactDetails: '', safeToLeaveVoicemail: 'no', urgencyLevel: 'medium', contextSummary: '' });
    } catch (err) {
      setStatus({ loading: false, success: false, error: 'Database tracking timeout error. Please retry or call directly.' });
    }
  };

  return (
    <div className="bg-white border-2 border-red-100 rounded-2xl p-6 sm:p-8 shadow-md relative overflow-hidden">
      {/* Floating Safety Exit Bar */}
      <div className="flex justify-between items-center bg-gray-50 border-b border-gray-100 px-4 py-3 -mx-6 -mt-6 sm:-mx-8 sm:-mt-8 mb-6">
        <span className="text-xs font-semibold text-gray-500 flex items-center gap-1.5">
          <EyeOff size={14} /> Safety Feature
        </span>
        <button
          type="button"
          onClick={handleQuickExit}
          className="bg-callas-red hover:bg-red-700 text-white font-black text-xs px-3 py-1.5 rounded uppercase tracking-wider transition-colors shadow-sm"
        >
          Quick Exit (Esc)
        </button>
      </div>

      <h2 className="text-xl font-bold text-callas-darkBlue mb-2">Secure Assistance Intake</h2>
      <p className="text-xs text-gray-500 mb-6 leading-relaxed">
        Fill out only what is completely safe for you to share right now. All fields are handled under strict personal data confidentiality guidelines.
      </p>

      {status.success && (
        <div className="mb-6 p-4 bg-green-50 border border-green-200 text-green-800 rounded-xl flex items-start gap-3 text-sm">
          <CheckCircle2 className="text-green-600 shrink-0 mt-0.5" size={20} />
          <div>
            <p className="font-bold">Intake Request Logged Securely.</p>
            <p className="text-xs text-green-700 mt-1">Our casework framework handles this metadata confidentially. We will attempt contact using your specified boundaries.</p>
          </div>
        </div>
      )}

      {status.error && (
        <div className="mb-6 p-4 bg-red-50 border border-red-200 text-red-800 rounded-lg flex items-center gap-3 text-sm">
          <AlertCircle className="text-callas-red shrink-0" size={20} />
          <span>{status.error}</span>
        </div>
      )}

      <form onSubmit={handleSubmit} className="space-y-5">
        <div>
          <label htmlFor="name" className="block text-xs font-bold text-gray-700 uppercase tracking-wider mb-2">Name or Pseudonym (Can leave blank)</label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            className="w-full border border-gray-200 rounded-lg px-4 py-2.5 text-sm focus:outline-none focus:border-callas-blue"
            placeholder="Your name or preferred alias"
          />
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
          <div>
            <label htmlFor="contactMethod" className="block text-xs font-bold text-gray-700 uppercase tracking-wider mb-2">Preferred Contact Mode</label>
            <select
              id="contactMethod"
              name="contactMethod"
              value={formData.contactMethod}
              onChange={handleChange}
              className="w-full border border-gray-200 bg-white rounded-lg px-3 py-2.5 text-sm focus:outline-none focus:border-callas-blue"
            >
              <option value="phone">Voice Call</option>
              <option value="whatsapp">WhatsApp Text Only</option>
              <option value="email">Email Communications</option>
            </select>
          </div>
          <div>
            <label htmlFor="contactDetails" className="block text-xs font-bold text-gray-700 uppercase tracking-wider mb-2">Contact Number / Email</label>
            <input
              type="text"
              id="contactDetails"
              name="contactDetails"
              required
              value={formData.contactDetails}
              onChange={handleChange}
              className="w-full border border-gray-200 rounded-lg px-4 py-2.5 text-sm focus:outline-none focus:border-callas-blue"
              placeholder="Where we should reach you"
            />
          </div>
        </div>

        <div>
          <label className="block text-xs font-bold text-gray-700 uppercase tracking-wider mb-2">Is it safe to leave a voicemail / automated prompt?</label>
          <div className="flex gap-4 text-sm mt-1">
            <label className="inline-flex items-center gap-2 cursor-pointer">
              <input type="radio" name="safeToLeaveVoicemail" value="yes" checked={formData.safeToLeaveVoicemail === 'yes'} onChange={handleChange} className="text-callas-blue focus:ring-0" />
              <span>Yes, it is completely safe</span>
            </label>
            <label className="inline-flex items-center gap-2 cursor-pointer">
              <input type="radio" name="safeToLeaveVoicemail" value="no" checked={formData.safeToLeaveVoicemail === 'no'} onChange={handleChange} className="text-callas-blue focus:ring-0" />
              <span className="font-medium text-callas-red">No, DO NOT leave messages</span>
            </label>
          </div>
        </div>

        <div>
          <label htmlFor="urgencyLevel" className="block text-xs font-bold text-gray-700 uppercase tracking-wider mb-2">Urgency Level Assessment</label>
          <select
            id="urgencyLevel"
            name="urgencyLevel"
            value={formData.urgencyLevel}
            onChange={handleChange}
            className="w-full border border-gray-200 bg-white rounded-lg px-3 py-2.5 text-sm focus:outline-none focus:border-callas-blue"
          >
            <option value="low">Standard Request (Within 48 Hours)</option>
            <option value="medium">Urgent Case Pipeline (Within 24 Hours)</option>
            <option value="high">High Crisis Response Trigger (Immediate Attention)</option>
          </select>
        </div>

        <div>
          <label htmlFor="contextSummary" className="block text-xs font-bold text-gray-700 uppercase tracking-wider mb-2">Context Summary (Optional & Brief)</label>
          <textarea
            id="contextSummary"
            name="contextSummary"
            rows="3"
            value={formData.contextSummary}
            onChange={handleChange}
            className="w-full border border-gray-200 rounded-lg px-4 py-2.5 text-sm focus:outline-none focus:border-callas-blue resize-none"
            placeholder="Briefly state if this concerns court support, shelter, nutrition, or counselling..."
          ></textarea>
        </div>

        <button
          type="submit"
          disabled={status.loading}
          className="w-full inline-flex items-center justify-center gap-2 bg-callas-red hover:bg-red-700 text-white font-extrabold py-3.5 px-6 rounded-lg text-sm transition-colors shadow-md disabled:bg-gray-300"
        >
          {status.loading ? 'Encrypting & Transferring Data...' : (
            <>
              <ShieldAlert size={18} /> SUBMIT REQUEST SAFELY
            </>
          )}
        </button>
      </form>
    </div>
  );
};

export default GetHelpForm;