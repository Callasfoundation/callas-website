import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Shield, Heart, Users } from 'lucide-react';

const Hero = () => {
  return (
    <section className="relative bg-callas-blue text-white overflow-hidden">
      {/* Background Overlay/Pattern */}
      <div className="absolute inset-0 bg-gradient-to-r from-callas-blue/95 to-callas-blue/70 z-10"></div>
      <div 
        className="absolute inset-0 bg-cover bg-center opacity-30 z-0"
        style={{ backgroundImage: "url('https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?auto=format&fit=crop&q=80')" }} 
      ></div>

      <div className="relative z-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 md:py-32">
        <div className="max-w-3xl">
          
          {/* Animated Heading */}
          <motion.h1 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-4xl md:text-6xl font-heading font-extrabold leading-tight mb-6"
          >
            Standing With Survivors. <br />
            <span className="text-callas-gold">Building Safer Communities.</span>
          </motion.h1>

          {/* Animated Paragraph */}
          <motion.p 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-lg md:text-xl text-gray-200 mb-8 leading-relaxed"
          >
            Every day, women, children, and families across the Cape Flats face the realities of gender-based violence, trauma, and poverty. Callas Foundation provides frontline support through GBV response, access to justice, psychosocial support, and community feeding programmes.
          </motion.p>

          {/* Call to Action Buttons */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="flex flex-col sm:flex-row gap-4"
          >
            <Link to="/get-help" className="btn-get-help !bg-white !text-callas-red hover:!bg-gray-100 !animate-none justify-center text-lg">
              Get Help Now
            </Link>
            <Link to="/donate" className="btn-donate !bg-callas-red !text-white hover:!bg-callas-redDark justify-center text-lg">
              Support Our Work
            </Link>
          </motion.div>
        </div>

        {/* Floating Trust Indicators */}
        <motion.div 
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, delay: 0.6 }}
          className="hidden lg:block absolute right-10 top-1/2 -translate-y-1/2 bg-white/10 backdrop-blur-md p-8 rounded-2xl border border-white/20 max-w-sm"
        >
          <h3 className="text-xl font-bold mb-4 text-callas-gold">Our Frontline Support</h3>
          <ul className="space-y-3">
            <li className="flex items-center gap-3"><Shield size={20} /> Access to Justice</li>
            <li className="flex items-center gap-3"><Heart size={20} /> Psychosocial Support</li>
            <li className="flex items-center gap-3"><Users size={20} /> Community Feeding</li>
          </ul>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;