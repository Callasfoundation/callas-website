import React from 'react';
import { Link } from 'react-router-dom';
import { ShieldAlert, Heart, Handshake, UserPlus, PhoneCall } from 'lucide-react';

const CallToAction = () => {
  return (
    <section className="bg-white border-t border-gray-100 py-16 px-4 sm:px-6 lg:px-8 w-full">
      <div className="max-w-7xl mx-auto">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <h2 className="text-2xl sm:text-3xl font-black text-callas-darkBlue tracking-tight uppercase">
            Take Action With Callas
          </h2>
          <div className="h-1.5 w-16 bg-callas-red mx-auto mt-3 rounded-full"></div>
          <p className="text-gray-600 text-sm sm:text-md mt-4">
            Whether you are a survivor seeking protection, an individual looking to volunteer, or a corporate entity exploring impactful CSI partnerships, your action directly shapes lives across the Cape Flats[cite: 1].
          </p>
        </div>

        {/* Priority 7 Grid: Get Help, Donate, Volunteer, Partner, Contact */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6">
          
          {/* Action 1: Get Help */}
          <Link to="/get-help" className="flex flex-col items-center text-center p-6 bg-red-50 hover:bg-red-100/70 border border-red-100 rounded-2xl transition-all duration-200 group">
            <div className="bg-callas-red text-white p-3 rounded-xl mb-4 group-hover:scale-110 transition-transform">
              <ShieldAlert size={24} />
            </div>
            <h3 className="font-bold text-gray-900 text-base mb-1">Get Help</h3>
            <p className="text-xs text-gray-600 leading-normal">Access crisis counselling, court protection lines, and safe routes[cite: 1].</p>
          </Link>

          {/* Action 2: Donate */}
          <Link to="/donate" className="flex flex-col items-center text-center p-6 bg-blue-50 hover:bg-blue-100/70 border border-blue-100 rounded-2xl transition-all duration-200 group">
            <div className="bg-callas-blue text-white p-3 rounded-xl mb-4 group-hover:scale-110 transition-transform">
              <Heart size={24} className="fill-current" />
            </div>
            <h3 className="font-bold text-gray-900 text-base mb-1">Donate</h3>
            <p className="text-xs text-gray-600 leading-normal">Fund meals, emergency protection filings, and youth workshops[cite: 1].</p>
          </Link>

          {/* Action 3: Volunteer */}
          <Link to="/volunteer" className="flex flex-col items-center text-center p-6 bg-gray-50 hover:bg-gray-100 border border-gray-200 rounded-2xl transition-all duration-200 group">
            <div className="bg-callas-darkBlue text-white p-3 rounded-xl mb-4 group-hover:scale-110 transition-transform">
              <UserPlus size={24} />
            </div>
            <h3 className="font-bold text-gray-900 text-base mb-1">Volunteer</h3>
            <p className="text-xs text-gray-600 leading-normal">Contribute operational assistance or skill-based field work.</p>
          </Link>

          {/* Action 4: Partner With Us */}
          <Link to="/support" className="flex flex-col items-center text-center p-6 bg-gray-50 hover:bg-gray-100 border border-gray-200 rounded-2xl transition-all duration-200 group">
            <div className="bg-gray-800 text-white p-3 rounded-xl mb-4 group-hover:scale-110 transition-transform">
              <Handshake size={24} />
            </div>
            <h3 className="font-bold text-gray-900 text-base mb-1">Partner With Us</h3>
            <p className="text-xs text-gray-600 leading-normal">Deploy structural Corporate Social Investment (CSI) options.</p>
          </Link>

          {/* Action 5: Contact Us */}
          <Link to="/contact" className="flex flex-col items-center text-center p-6 bg-gray-50 hover:bg-gray-100 border border-gray-200 rounded-2xl transition-all duration-200 group">
            <div className="bg-green-600 text-white p-3 rounded-xl mb-4 group-hover:scale-110 transition-transform">
              <PhoneCall size={24} />
            </div>
            <h3 className="font-bold text-gray-900 text-base mb-1">Contact Us</h3>
            <p className="text-xs text-gray-600 leading-normal">Reach out to our offices directly with generic questions.</p>
          </Link>

        </div>
      </div>
    </section>
  );
};

export default CallToAction;