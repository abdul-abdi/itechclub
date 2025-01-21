'use client';

import { motion } from 'framer-motion';
import { Swoosh } from '@/components/ui/Swoosh';

const stats = [
  {
    id: 1,
    value: '200+',
    label: 'Active Members',
    icon: '👥',
    description: 'Students actively participating in our community',
  },
  {
    id: 2,
    value: '50+',
    label: 'Tech Projects',
    icon: '💻',
    description: 'Innovative projects completed by our members',
  },
  {
    id: 3,
    value: '20+',
    label: 'Tech Events',
    icon: '🎯',
    description: 'Events organized throughout the academic year',
  },
  {
    id: 4,
    value: '10+',
    label: 'Industry Partners',
    icon: '🤝',
    description: 'Partnerships with leading tech companies',
  },
];

export function Stats() {
  return (
    <section className="relative bg-gradient-to-b from-white via-blue-50/50 to-white py-20 sm:py-24 lg:py-32 pb-32">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 sm:mb-20">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-50px' }}
            className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-6"
          >
            Our Impact
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-50px' }}
            transition={{ delay: 0.2 }}
            className="text-lg sm:text-xl text-gray-600"
          >
            See how iTech Club is making a difference in the tech community at Zetech University.
          </motion.p>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8 lg:gap-10">
          {stats.map((stat, index) => (
            <motion.div
              key={stat.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ delay: index * 0.1 }}
              className="group relative bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 p-6 sm:p-8"
            >
              <div className="flex flex-col items-center text-center space-y-4">
                <motion.div
                  initial={{ scale: 0 }}
                  whileInView={{ scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 + 0.3, type: 'spring', stiffness: 200 }}
                  className="w-16 h-16 rounded-full bg-blue-50 flex items-center justify-center text-3xl"
                >
                  {stat.icon}
                </motion.div>
                <motion.div
                  initial={{ opacity: 0, scale: 0.5 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 + 0.4, type: 'spring', stiffness: 200 }}
                  className="text-4xl font-bold text-gray-900"
                >
                  {stat.value}
                </motion.div>
                <div className="space-y-2">
                  <h3 className="text-xl font-semibold text-gray-900">{stat.label}</h3>
                  <p className="text-gray-600">{stat.description}</p>
                </div>
              </div>

              {/* Hover Effect */}
              <div className="absolute inset-0 bg-gradient-to-br from-blue-600/0 to-blue-600/0 group-hover:from-blue-600/5 group-hover:to-blue-600/10 transition-colors duration-300 rounded-2xl" />
            </motion.div>
          ))}
        </div>
      </div>

      {/* Swoosh Divider */}
      <Swoosh />
    </section>
  );
} 