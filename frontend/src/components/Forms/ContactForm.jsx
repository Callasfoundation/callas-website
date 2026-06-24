import React, { useState } from 'react';
import { Send, CheckCircle2, AlertCircle } from 'lucide-react';

const ContactForm = () => {
  const [formData, setFormData] = useState({ name: '', email: '', phone: '', message: '' });
  const [status, setStatus] = useState({ loading: false, success: false, error: null });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus({ loading: true, success: false, error: null });

    try {
      // Mock API infrastructure pathway targeting contact backend service endpoint
      await new Promise((resolve) => setTimeout(resolve, 1000));
      setStatus({ loading: false, success: true, error: null });
      setFormData({ name: '', email: '', phone: '', message: '' });
    } catch (err) {
      setStatus({ loading: false, success: false, error: "Failed to dispatch form input data. Please try again." });
    }
  };

  return (
    <div className="bg-white border border-gray-100 rounded-2xl p-6 sm:p-8 shadow-sm">
      <h3 className="text-xl font-bold text-callas-darkBlue mb-6">Send an Inquiry</h3>
      
      {status.success && (
        <div className="mb-6 p-4 bg-green-50 border border-green-200 text-green-800 rounded-lg flex items-center gap-3 text-sm">
          <CheckCircle2 className="text-green-600 shrink-0" size={20} />
          <span>Your message has been captured successfully. Our tracking coordinator will follow up shortly.</span>
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
          <label htmlFor="name" className="block text-xs font-bold text-gray-700 uppercase tracking-wider mb-2">Full Name</label>
          <input
            type="text"
            id="name"
            name="name"
            required
            value={formData.name}
            onChange={handleChange}
            className="w-full border border-gray-200 rounded-lg px-4 py-3 text-sm focus:outline-none focus:border-callas-blue transition-colors"
            placeholder="John Doe"
          />
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
          <div>
            <label htmlFor="email" className="block text-xs font-bold text-gray-700 uppercase tracking-wider mb-2">Email Address</label>
            <input
              type="email"
              id="email"
              name="email"
              required
              value={formData.email}
              onChange={handleChange}
              className="w-full border border-gray-200 rounded-lg px-4 py-3 text-sm focus:outline-none focus:border-callas-blue transition-colors"
              placeholder="name@domain.com"
            />
          </div>
          <div>
            <label htmlFor="phone" className="block text-xs font-bold text-gray-700 uppercase tracking-wider mb-2">Phone Number</label>
            <input
              type="tel"
              id="phone"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              className="w-full border border-gray-200 rounded-lg px-4 py-3 text-sm focus:outline-none focus:border-callas-blue transition-colors"
              placeholder="+27 (0) 00 000 0000"
            />
          </div>
        </div>

        <div>
          <label htmlFor="message" className="block text-xs font-bold text-gray-700 uppercase tracking-wider mb-2">Your Message</label>
          <textarea
            id="message"
            name="message"
            required
            rows="5"
            value={formData.message}
            onChange={handleChange}
            className="w-full border border-gray-200 rounded-lg px-4 py-3 text-sm focus:outline-none focus:border-callas-blue transition-colors resize-none"
            placeholder="Please detail your core requirement context here..."
          ></textarea>
        </div>

        <button
          type="submit"
          disabled={status.loading}
          className="w-full inline-flex items-center justify-center gap-2 bg-callas-blue hover:bg-blue-700 text-white font-bold py-3.5 px-6 rounded-lg text-sm transition-colors shadow-sm disabled:bg-gray-300 disabled:cursor-not-allowed"
        >
          {status.loading ? 'Processing Submission...' : (
            <>
              Submit Form Details <Send size={16} />
            </>
          )}
        </button>
      </form>
    </div>
  );
};

export default ContactForm;