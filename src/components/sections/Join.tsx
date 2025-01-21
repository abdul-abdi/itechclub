'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { Swoosh } from '@/components/ui/Swoosh';

const benefits = [
  {
    id: 1,
    icon: '🚀',
    title: 'Hands-on Learning',
    description: 'Gain practical experience through real-world projects and workshops.',
  },
  {
    id: 2,
    icon: '🤝',
    title: 'Networking',
    description: 'Connect with like-minded peers and industry professionals.',
  },
  {
    id: 3,
    icon: '💡',
    title: 'Innovation',
    description: 'Work on cutting-edge technologies and innovative solutions.',
  },
  {
    id: 4,
    icon: '🎯',
    title: 'Career Growth',
    description: 'Develop skills that are in high demand in the tech industry.',
  },
];

export function Join() {
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
            Join iTech Club
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-50px' }}
            transition={{ delay: 0.2 }}
            className="text-lg sm:text-xl text-gray-600"
          >
            Be part of a vibrant community that's shaping the future of technology at Zetech University.
          </motion.p>
        </div>

        {/* Benefits Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8 lg:gap-10 mb-16">
          {benefits.map((benefit, index) => (
            <motion.div
              key={benefit.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ delay: index * 0.1 }}
              className="group relative bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 p-6 sm:p-8"
            >
              <div className="flex flex-col items-center text-center">
                <span className="text-4xl mb-4">{benefit.icon}</span>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">{benefit.title}</h3>
                <p className="text-gray-600">{benefit.description}</p>
              </div>
              
              {/* Hover Overlay */}
              <div className="absolute inset-0 bg-blue-600/0 group-hover:bg-blue-600/5 transition-colors duration-300 rounded-2xl" />
            </motion.div>
          ))}
        </div>

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-50px' }}
          transition={{ delay: 0.4 }}
          className="text-center"
        >
          <Link
            href="https://chat.whatsapp.com/Jd4j1TARbdoHJntDjImPOj"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center px-6 sm:px-8 py-3 sm:py-4 text-base sm:text-lg font-medium rounded-full text-white bg-blue-600 hover:bg-blue-700 transition-colors duration-300"
          >
            Become a Member
            <svg className="ml-2 w-5 sm:w-6 h-5 sm:h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
            </svg>
          </Link>
          <p className="mt-4 text-sm text-gray-500">
            Join us in building the future of technology!
          </p>
        </motion.div>
      </div>

      {/* Swoosh Divider */}
      <Swoosh />
    </section>
  );
} 