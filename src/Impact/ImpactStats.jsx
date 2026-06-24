import { useEffect, useState, useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { Utensils, Users, GraduationCap, MapPin } from 'lucide-react';

const stats = [
  { id: 1, icon: Utensils, value: 750, suffix: '+', label: 'Meals Served Daily', color: 'text-callas-red' },
  { id: 2, icon: Users, value: 1200, suffix: '+', label: 'Survivors Supported', color: 'text-callas-blue' },
  { id: 3, icon: GraduationCap, value: 150, suffix: '+', label: 'GBV Responders Trained', color: 'text-callas-gold' },
  { id: 4, icon: MapPin, value: 12, suffix: '', label: 'Communities Served', color: 'text-green-600' },
];

const Counter = ({ end, suffix }) => {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  useEffect(() => {
    if (isInView) {
      let start = 0;
      const duration = 2000;
      const stepTime = Math.abs(Math.floor(duration / end));
      const timer = setInterval(() => {
        start += Math.ceil(end / 50);
        if (start >= end) {
          setCount(end);
          clearInterval(timer);
        } else {
          setCount(start);
        }
      }, stepTime);
      return () => clearInterval(timer);
    }
  }, [isInView, end]);

  return <span ref={ref}>{count}{suffix}</span>;
};

const ImpactStats = () => {
  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-heading font-bold text-callas-blue mb-4">
            Our Impact in Numbers
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Together, we are breaking cycles of violence and creating lasting change across the Cape Flats.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat) => (
            <motion.div 
              key={stat.id}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: stat.id * 0.1 }}
              className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-shadow text-center border-b-4 border-callas-red"
            >
              <div className={`inline-flex p-4 rounded-full bg-gray-100 mb-4 ${stat.color}`}>
                <stat.icon size={32} />
              </div>
              <h3 className="text-4xl font-extrabold text-gray-900 mb-2">
                <Counter end={stat.value} suffix={stat.suffix} />
              </h3>
              <p className="text-gray-600 font-medium">{stat.label}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ImpactStats;