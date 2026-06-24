import React from 'react';
import { Link } from 'react-router-dom';
import { Heart, Mail, Phone, MapPin, ArrowUpRight } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-callas-darkBlue text-white pt-16 pb-8 border-t-4 border-callas-red">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
        
        {/* Column 1: Organization Summary */}
        <div className="space-y-4">
          <div className="flex items-center space-x-2">
            <div className="bg-white text-callas-darkBlue p-1.5 rounded-md">
              <Heart size={20} className="fill-current text-callas-red" />
            </div>
            <span className="text-xl font-black tracking-wider">CALLAS FOUNDATION</span>
          </div>
          <p className="text-blue-100 text-sm leading-relaxed">
            Standing alongside survivors across the Cape Flats to secure access to justice, critical mental wellness support, daily nutritional sustenance, and proactive community protection.
          </p>
        </div>

        {/* Column 2: Quick Links Navigation */}
        <div>
          <h4 className="text-md font-bold tracking-wider uppercase border-b border-blue-800 pb-2 mb-4 text-white">Quick Navigation</h4>
          <ul className="space-y-2.5 text-sm text-blue-100">
            <li><Link to="/about" className="hover:text-white hover:underline transition-all inline-flex items-center gap-1">About Our Foundation <ArrowUpRight size={14} /></Link></li>
            <li><Link to="/programmes" className="hover:text-white hover:underline transition-all inline-flex items-center gap-1">Community Programmes <ArrowUpRight size={14} /></Link></li>
            <li><Link to="/support" className="hover:text-white hover:underline transition-all inline-flex items-center gap-1">Support & Partnerships <ArrowUpRight size={14} /></Link></li>
            <li><Link to="/donate" className="hover:text-white hover:underline transition-all inline-flex items-center gap-1">Financial Donations <ArrowUpRight size={14} /></Link></li>
          </ul>
        </div>

        {/* Column 3: Emergency & Urgent Care Actions */}
        <div>
          <h4 className="text-md font-bold tracking-wider uppercase border-b border-blue-800 pb-2 mb-4 text-white">Emergency Support</h4>
          <p className="text-sm text-blue-100 mb-4 leading-relaxed">
            If you or someone you know is currently facing trauma or gender-based violence, reach out directly.
          </p>
          <Link
            to="/get-help"
            className="inline-flex w-full items-center justify-center bg-callas-red hover:bg-red-700 text-white font-extrabold text-sm py-3 px-4 rounded shadow transition-all tracking-wide"
          >
            REQUEST IMMEDIATE HELP
          </Link>
        </div>

        {/* Column 4: Contact & Location Info */}
        <div>
          <h4 className="text-md font-bold tracking-wider uppercase border-b border-blue-800 pb-2 mb-4 text-white">Contact Info</h4>
          <ul className="space-y-3 text-sm text-blue-100">
            <li className="flex items-start gap-2.5">
              <MapPin size={18} className="text-callas-red shrink-0 mt-0.5" />
              <span>Cape Flats, Cape Town, South Africa</span>
            </li>
            <li className="flex items-center gap-2.5">
              <Phone size={18} className="text-callas-red shrink-0" />
              <span>+27 (0) 21 000 0000</span>
            </li>
            <li className="flex items-center gap-2.5">
              <Mail size={18} className="text-callas-red shrink-0" />
              <a href="mailto:info@callasfoundation.org.za" className="hover:text-white hover:underline">info@callasfoundation.org.za</a>
            </li>
          </ul>
        </div>

      </div>

      {/* Subfooter Copyright & Framework Disclaimers */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-12 pt-6 border-t border-blue-900 text-center text-xs text-blue-200 flex flex-col sm:flex-row justify-between items-center gap-4">
        <p>© {currentYear} Callas Foundation NPO. All rights reserved across South Africa.</p>
        <div className="flex gap-4">
          <a href="#" className="hover:underline">Privacy Policy</a>
          <a href="#" className="hover:underline">Terms of Use</a>
          <a href="#" className="hover:underline">Governance & Legal</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;