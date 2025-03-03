'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import { Swoosh } from '@/components/ui/Swoosh';
import Link from 'next/link';

export function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-white pb-32">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 hidden sm:block">
        {[...Array(3)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-[800px] h-[800px] bg-blue-500/10 rounded-full"
            initial={{
              x: -100,
              y: -100,
              scale: 0.8,
              opacity: 0.3,
            }}
            animate={{
              x: 100,
              y: 100,
              scale: 1.2,
              opacity: 0.2,
            }}
            transition={{
              duration: 15 + i * 5,
              repeat: Infinity,
              repeatType: 'reverse',
              ease: 'easeInOut',
            }}
            style={{
              left: `${-20 + i * 40}%`,
              top: `${-20 + i * 30}%`,
            }}
          />
        ))}
      </div>

      {/* Main Content */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10 py-12 sm:py-16 lg:py-20">
        <div className="grid lg:grid-cols-2 gap-8 sm:gap-12 lg:gap-16 items-center">
          {/* Left Column - Text Content */}
          <div className="space-y-6 sm:space-y-8 text-center lg:text-left max-w-2xl mx-auto lg:mx-0">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="space-y-4"
            >
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.2, duration: 0.5 }}
                className="inline-block px-4 py-2 bg-blue-50 rounded-full shadow-sm"
              >
                <span className="text-blue-600 font-medium">Welcome to iTech Club</span>
              </motion.div>
              <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold leading-tight sm:leading-tight md:leading-tight lg:leading-tight text-gray-900">
                <motion.span
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.3, duration: 0.5 }}
                  className="block bg-gradient-to-r from-blue-600 to-blue-400 bg-clip-text text-transparent"
                >
                  Innovate.
                </motion.span>
                <motion.span
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.4, duration: 0.5 }}
                  className="block bg-gradient-to-r from-blue-600 to-blue-400 bg-clip-text text-transparent"
                >
                  Create.
                </motion.span>
                <motion.span
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.5, duration: 0.5 }}
                  className="block bg-gradient-to-r from-blue-600 to-blue-400 bg-clip-text text-transparent"
                >
                  Transform.
                </motion.span>
              </h1>
            </motion.div>
            
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="text-lg sm:text-xl text-gray-600 max-w-xl mx-auto lg:mx-0"
            >
              Join Zetech University's premier tech community where innovation meets opportunity.
              Together, we build the future of technology.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.7 }}
              className="flex flex-wrap gap-4 justify-center lg:justify-start"
            >
              <Link
                href="https://chat.whatsapp.com/Jd4j1TARbdoHJntDjImPOj"
                target="_blank"
                rel="noopener noreferrer"
                className="px-6 py-3 rounded-xl bg-blue-600 text-white font-medium hover:bg-blue-700 transition-all hover:scale-105"
              >
                Join Now
              </Link>
              <Link
                href="/about"
                className="px-6 py-3 rounded-xl bg-white/10 text-gray-900 font-medium hover:bg-white/20 transition-all hover:scale-105 border border-gray-200"
              >
                Learn More
              </Link>
            </motion.div>

            {/* Stats */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.8 }}
              className="grid grid-cols-3 gap-4 sm:gap-8 pt-8 sm:pt-10 mt-4 border-t border-gray-100"
            >
              {stats.map((stat, index) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.9 + index * 0.1, duration: 0.5 }}
                  className="text-center"
                >
                  <motion.div
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ delay: 1 + index * 0.1, duration: 0.5, type: 'spring' }}
                    className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900"
                  >
                    {stat.value}
                  </motion.div>
                  <div className="text-gray-500 text-xs sm:text-sm mt-1 font-medium">{stat.label}</div>
                </motion.div>
              ))}
            </motion.div>
          </div>

          {/* Right Column - Image and Floating Cards */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}
            className="relative lg:block mt-8 lg:mt-0"
          >
            {/* Main Image */}
            <div className="relative w-full h-[300px] sm:h-[400px] lg:h-[600px] rounded-2xl overflow-hidden shadow-2xl">
              <Image
                src="/images/hero-image.jpg"
                alt="iTech Club Hero"
                fill
                className="object-cover object-center transform hover:scale-105 transition-transform duration-700"
                priority
              />
              <div className="absolute inset-0 bg-gradient-to-br from-blue-600/30 via-transparent to-blue-900/20 mix-blend-overlay" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />
            </div>

            {/* Floating Achievement Cards */}
            <motion.div
              initial={{ x: -20, y: -20 }}
              animate={{ x: 0, y: 0 }}
              transition={{
                duration: 3,
                repeat: Infinity,
                repeatType: 'reverse',
                ease: 'easeInOut',
              }}
              className="absolute top-20 -left-20 bg-white p-4 rounded-xl shadow-xl hidden lg:block"
            >
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 bg-blue-50 rounded-lg flex items-center justify-center">
                  🏆
                </div>
                <div>
                  <div className="font-semibold text-gray-900">Top Projects</div>
                  <div className="text-sm text-gray-500">50+ Completed</div>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ x: 20, y: 20 }}
              animate={{ x: 0, y: 0 }}
              transition={{
                duration: 3,
                repeat: Infinity,
                repeatType: 'reverse',
                ease: 'easeInOut',
                delay: 0.5,
              }}
              className="absolute bottom-20 -right-20 bg-white p-4 rounded-xl shadow-xl hidden lg:block"
            >
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 bg-blue-50 rounded-lg flex items-center justify-center">
                  👥
                </div>
                <div>
                  <div className="font-semibold text-gray-900">Active Members</div>
                  <div className="text-sm text-gray-500">200+ Students</div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>

      {/* Swoosh Divider */}
      <Swoosh />
    </section>
  );
}

const stats = [
  { value: '200+', label: 'Active Members' },
  { value: '50+', label: 'Tech Projects' },
  { value: '10+', label: 'Events Monthly' },
]; 