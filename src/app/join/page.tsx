'use client';

import { MainNav } from '@/components/layout/MainNav';
import { Footer } from '@/components/layout/Footer';
import { motion } from 'framer-motion';
import Link from 'next/link';

export default function Join() {
  return (
    <main className="min-h-screen bg-white">
      <MainNav />
      
      <section className="py-32 bg-gradient-to-b from-white via-blue-50 to-white">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-3xl mx-auto text-center space-y-8"
          >
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="w-20 h-20 bg-blue-100 rounded-2xl mx-auto mb-6 flex items-center justify-center"
            >
              <span className="text-3xl">🚀</span>
            </motion.div>
            <h1 className="text-4xl md:text-6xl font-bold text-gray-900">
              Join iTech Club
            </h1>
            <p className="text-xl text-gray-600">
              We're preparing an amazing onboarding experience for new members. Registration will open soon!
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => window.history.back()}
                className="px-8 py-4 bg-blue-600 text-white rounded-xl font-semibold hover:bg-blue-700 transition-colors hover:shadow-lg hover:shadow-blue-200"
              >
                Go Back
              </motion.button>
              <Link href="/">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="px-8 py-4 bg-white text-blue-600 border border-blue-200 rounded-xl font-semibold hover:bg-blue-50 transition-colors hover:shadow-lg hover:shadow-blue-100"
                >
                  Home
                </motion.button>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      <Footer />
    </main>
  );
} 