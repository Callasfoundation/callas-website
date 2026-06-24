import React, { useState } from 'react';
import { Heart, ShieldCheck, CheckCircle2 } from 'lucide-react';
import CallToAction from '../../components/CTA/CallToAction';

const Donate = () => {
  const [selectedTier, setSelectedTier] = useState(null);
  const [customAmount, setCustomAmount] = useState('');
  const [success, setSuccess] = useState(false);

  const donationTiers = [
    { amount: 'R150', label: 'Feeds 5 individuals for a week via our community kitchen' },
    { amount: 'R500', label: 'Funds 1 professional trauma counselling session' },
    { amount: 'R1200', label: 'Covers transport and legal processing for a Protection Order' }
  ];

  const handleProcessDonation = (e) => {
    e.preventDefault();
    setSuccess(true);
  };

  return (
    <div className="w-full bg-gray-50">
      <section className="bg-callas-darkBlue text-white py-16 px-4 sm:px-6 lg:px-8 text-center">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-3xl sm:text-4xl font-black uppercase tracking-tight mb-4">
            Financial Contributions
          </h1>
          <p className="text-blue-100 text-base sm:text-lg max-w-2xl mx-auto">
            Your resources directly stabilize frontline field structures and guarantee programmatic continuity.
          </p>
        </div>
      </section>

      <section className="max-w-7xl mx-auto py-16 px-4 sm:px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-12 gap-10">
        
        {/* Tier Selections */}
        <div className="lg:col-span-7 space-y-6">
          <h2 className="text-xl font-bold text-callas-darkBlue uppercase tracking-wider">Select Impact Level</h2>
          
          <div className="grid grid-cols-1 gap-4">
            {donationTiers.map((tier, idx) => (
              <button
                key={idx}
                type="button"
                onClick={() => { setSelectedTier(tier.amount); setCustomAmount(''); }}
                className={`w-full text-left p-5 rounded-xl border transition-all flex items-center justify-between gap-4 ${selectedTier === tier.amount ? 'bg-blue-50/80 border-callas-blue shadow-sm' : 'bg-white border-gray-200 hover:border-gray-300'}`}
              >
                <div className="space-y-1">
                  <span className="text-xl font-extrabold text-callas-darkBlue block">{tier.amount}</span>
                  <span className="text-xs text-gray-600 font-medium block">{tier.label}</span>
                </div>
                <div className={`w-5 h-5 rounded-full border flex items-center justify-center shrink-0 ${selectedTier === tier.amount ? 'border-callas-blue bg-callas-blue text-white' : 'border-gray-300'}`}>
                  {selectedTier === tier.amount && <div className="w-2 h-2 bg-white rounded-full"></div>}
                </div>
              </button>
            ))}
          </div>

          {/* Custom Input */}
          <div className="bg-white border border-gray-200 p-5 rounded-xl">
            <label className="block text-xs font-bold text-gray-700 uppercase tracking-wider mb-2">Or enter custom amount (ZAR)</label>
            <input
              type="number"
              value={customAmount}
              onChange={(e) => { setCustomAmount(e.target.value); setSelectedTier(null); }}
              placeholder="Enter custom amount value"
              className="w-full border border-gray-200 rounded-lg px-4 py-2.5 text-sm focus:outline-none focus:border-callas-blue"
            />
          </div>
        </div>

        {/* Payment Summary Box */}
        <div className="lg:col-span-5">
          <div className="bg-white border border-gray-100 rounded-2xl p-6 shadow-md space-y-6 sticky top-24">
            <h3 className="text-lg font-bold text-callas-darkBlue flex items-center gap-2">
              <Heart size={20} className="text-callas-red fill-current" /> Contribution Summary
            </h3>

            {success ? (
              <div className="p-4 bg-green-50 border border-green-200 text-green-800 rounded-lg flex items-start gap-2.5 text-xs">
                <CheckCircle2 className="text-green-600 shrink-0 mt-0.5" size={16} />
                <p>Framework routing simulation successful. Your contribution has been mock registered securely.</p>
              </div>
            ) : (
              <form onSubmit={handleProcessDonation} className="space-y-4">
                <div className="border-b border-gray-100 pb-4 text-center">
                  <span className="text-xs text-gray-500 font-semibold block">Total Selected Contribution</span>
                  <span className="text-3xl font-black text-callas-darkBlue mt-1 block">
                    {selectedTier || (customAmount ? `R${customAmount}` : 'R0')}
                  </span>
                </div>

                <div className="space-y-3 text-xs text-gray-600">
                  <div className="flex gap-2"><ShieldCheck className="text-green-600 shrink-0" size={16} /><span>Auditable accounting distribution compliance paths.</span></div>
                  <div className="flex gap-2"><ShieldCheck className="text-green-600 shrink-0" size={16} /><span>Secure processing infrastructure validation layers.</span></div>
                </div>

                <button
                  type="submit"
                  disabled={!selectedTier && !customAmount}
                  className="w-full bg-callas-blue hover:bg-blue-700 disabled:bg-gray-200 text-white font-bold py-3 px-4 rounded-lg text-sm transition-colors shadow-sm uppercase tracking-wider"
                >
                  Proceed to Contribution
                </button>
              </form>
            )}
          </div>
        </div>
      </section>

      <CallToAction />
    </div>
  );
};

export default Donate;