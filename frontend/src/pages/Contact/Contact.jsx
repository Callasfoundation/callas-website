import React from 'react';
import { MapPin, Phone, Mail, Clock } from 'lucide-react';
import ContactForm from '../../components/Forms/ContactForm';

const Contact = () => {
  return (
    <div className="w-full bg-gray-50 min-h-screen">
      <section className="bg-callas-darkBlue text-white py-16 px-4 sm:px-6 lg:px-8 text-center">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-3xl sm:text-4xl font-black uppercase tracking-tight mb-4">
            Contact Our Offices
          </h1>
          <p className="text-blue-100 text-base sm:text-lg max-w-2xl mx-auto">
            Get in touch with our administrative staff for general inquiries, governance queries, or partner alignment configurations.
          </p>
        </div>
      </section>

      <section className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-12 gap-10">
        {/* Contact Info Channels */}
        <div className="lg:col-span-5 space-y-6">
          <div className="bg-white border border-gray-100 p-6 rounded-2xl shadow-sm space-y-6">
            <h2 className="text-xl font-bold text-callas-darkBlue uppercase tracking-wider border-b border-gray-100 pb-3">
              Office Directory
            </h2>

            <div className="space-y-4">
              <div className="flex items-start gap-4">
                <div className="bg-callas-lightBlue text-callas-blue p-2.5 rounded-xl shrink-0">
                  <MapPin size={20} />
                </div>
                <div className="text-sm">
                  <p className="font-bold text-gray-950">Physical Address</p>
                  <p className="text-gray-600 mt-0.5">Cape Flats, Cape Town, South Africa</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="bg-callas-lightBlue text-callas-blue p-2.5 rounded-xl shrink-0">
                  <Phone size={20} />
                </div>
                <div className="text-sm">
                  <p className="font-bold text-gray-950">Phone Number</p>
                  <p className="text-gray-600 mt-0.5">+27 (0) 21 000 0000</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="bg-callas-lightBlue text-callas-blue p-2.5 rounded-xl shrink-0">
                  <Mail size={20} />
                </div>
                <div className="text-sm">
                  <p className="font-bold text-gray-950">Email Connection</p>
                  <a href="mailto:info@callasfoundation.org.za" className="text-callas-blue hover:underline mt-0.5 block">
                    info@callasfoundation.org.za
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="bg-callas-lightBlue text-callas-blue p-2.5 rounded-xl shrink-0">
                  <Clock size={20} />
                </div>
                <div className="text-sm">
                  <p className="font-bold text-gray-950">Operating Hours</p>
                  <p className="text-gray-600 mt-0.5">Monday – Friday: 08:00 – 16:30</p>
                  <p className="text-xs text-callas-red font-semibold mt-0.5">For weekend emergency care lines, use the Get Help link.</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Form Placement */}
        <div className="lg:col-span-7">
          <ContactForm />
        </div>
      </section>
    </div>
  );
};

export default Contact;