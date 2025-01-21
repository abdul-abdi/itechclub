'use client';

import { motion } from 'framer-motion';
import { Swoosh } from '@/components/ui/Swoosh';

const features = [
  {
    id: 1,
    icon: '🎯',
    title: 'Focused Learning',
    description: 'Specialized tracks in various tech domains to help you master your chosen field.',
  },
  {
    id: 2,
    icon: '🤝',
    title: 'Mentorship',
    description: 'Get guidance from experienced mentors and industry professionals.',
  },
  {
    id: 3,
    icon: '💼',
    title: 'Industry Projects',
    description: 'Work on real-world projects and build a professional portfolio.',
  },
  {
    id: 4,
    icon: '🌐',
    title: 'Networking',
    description: 'Connect with like-minded peers and industry leaders.',
  },
  {
    id: 5,
    icon: '🏆',
    title: 'Competitions',
    description: 'Participate in hackathons and coding competitions.',
  },
  {
    id: 6,
    icon: '📈',
    title: 'Career Growth',
    description: 'Access to job opportunities and career development resources.',
  },
  {
    id: 7,
    icon: '🔧',
    title: 'Hands-on Experience',
    description: 'Practical workshops and training sessions to build your skills.',
  },
  {
    id: 8,
    icon: '🎓',
    title: 'Certifications',
    description: 'Earn certificates and badges to showcase your achievements.',
  },
];

export function Features() {
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
            Why Join iTech Club?
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-50px' }}
            transition={{ delay: 0.2 }}
            className="text-lg sm:text-xl text-gray-600"
          >
            Discover the benefits of being part of our thriving tech community at Zetech University.
          </motion.p>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8 lg:gap-10">
          {features.map((feature, index) => (
            <motion.div
              key={feature.id}
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
                  {feature.icon}
                </motion.div>
                <h3 className="text-xl font-semibold text-gray-900">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
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