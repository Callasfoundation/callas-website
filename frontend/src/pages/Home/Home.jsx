import React from 'react';
import { Link } from 'react-router-dom';
import { ShieldAlert, Heart, ArrowRight } from 'lucide-react';
import ImpactCounter from '../../components/Impact/ImpactCounter';
import { impactStats } from '../../data/impactStats';

const Home = () => {
  return (
    <div className="w-full bg-gray-50">
      {/* Hero Content Section */}
      <section className="relative bg-gradient-to-b from-white to-callas-lightBlue/30 pt-12 pb-20 px-4 sm:px-6 lg:px-8 border-b border-gray-100">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-black text-callas-darkBlue tracking-tight leading-tight mb-8">
            Standing With Survivors.<br className="hidden sm:inline" /> Building Safer Communities.
          </h1>
          
          <div className="space-y-6 text-base sm:text-lg text-gray-700 leading-relaxed text-justify sm:text-center">
            <p>
              Every day, women, children and families across the Cape Flats face the realities of gender-based violence, trauma, poverty and food insecurity[cite: 1]. Callas Foundation provides frontline support through gender-based violence response services, access to justice, psychosocial support, community feeding programmes, and violence prevention initiatives that strengthen individuals, families and communities[cite: 1].
            </p>
            <p>
              We work alongside survivors to access safety, healing and justice, while empowering communities to prevent violence before it occurs[cite: 1]. Through advocacy, counselling, court support, community training, youth programmes and daily feeding initiatives, we are building safer, more resilient communities where everyone can live with dignity and hope[cite: 1].
            </p>
            <p className="font-extrabold text-callas-blue text-lg sm:text-xl pt-2">
              Together, we can break cycles of violence, address inequality, and create lasting change[cite: 1].
            </p>
          </div>

          <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              to="/get-help"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-callas-red text-white text-base font-black px-8 py-4 rounded-md shadow-md hover:bg-red-700 active:bg-red-800 transition-colors tracking-wide"
            >
              <ShieldAlert size={22} />
              GET HELP NOW
            </Link>
            <Link
              to="/donate"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-callas-blue text-white text-base font-black px-8 py-4 rounded-md shadow-md hover:bg-blue-700 active:bg-blue-800 transition-colors tracking-wide"
            >
              <Heart size={20} className="fill-current" />
              SUPPORT OUR WORK
            </Link>
          </div>
        </div>
      </section>

      {/* Prominent Impact Statistics Grid Block Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-2xl sm:text-3xl font-black text-callas-darkBlue tracking-tight uppercase">
            Our Monitored Impact
          </h2>
          <div className="h-1.5 w-24 bg-callas-red mx-auto mt-3 rounded-full"></div>
          <p className="text-gray-600 text-sm sm:text-md mt-4 font-medium">
            Verifiable tracking data illustrating programmatic operations deployed directly across regional target groups[cite: 1].
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6">
          {impactStats.map((stat) => (
            <ImpactCounter
              key={stat.id}
              number={stat.number}
              label={stat.label}
              iconName={stat.iconName}
            />
          ))}
        </div>
      </section>

      {/* Structured Call To Action Footing Block */}
      <section className="bg-callas-darkBlue text-white py-16 px-4 sm:px-6 lg:px-8 text-center border-t-4 border-callas-blue">
        <div className="max-w-3xl mx-auto">
          <h3 className="text-2xl sm:text-3xl font-extrabold tracking-tight mb-4">
            Want to Collaborate, Volunteer, or Partner?
          </h3>
          <p className="text-blue-100 text-base mb-8 max-w-xl mx-auto">
            Your resources directly fuel ground infrastructure across the Cape Flats, enhancing survivor support lines and feeding capacities[cite: 1].
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link
              to="/support"
              className="inline-flex items-center gap-1 bg-white text-callas-darkBlue font-bold px-6 py-3 rounded hover:bg-gray-100 transition-colors"
            >
              Partner With Us <ArrowRight size={16} />
            </Link>
            <Link
              to="/volunteer"
              className="inline-flex items-center gap-1 border border-white hover:bg-white hover:text-callas-darkBlue text-white font-bold px-6 py-3 rounded transition-colors"
            >
              Become a Volunteer
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;