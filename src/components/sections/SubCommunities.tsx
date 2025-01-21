'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import { Swoosh } from '@/components/ui/Swoosh';

const communities = [
  {
    id: 1,
    name: 'AI/ML Community',
    description: 'Explore artificial intelligence and machine learning through hands-on projects and research.',
    icon: '🤖',
    image: 'https://images.unsplash.com/photo-1591453089816-0fbb971b454c?q=80&w=2070&auto=format&fit=crop',
    members: '50+',
    projects: '10+',
  },
  {
    id: 2,
    name: 'Web Development',
    description: 'Build modern web applications using cutting-edge technologies and frameworks.',
    icon: '🌐',
    image: 'https://images.unsplash.com/photo-1565106430482-8f6e74349ca1?q=80&w=2070&auto=format&fit=crop',
    members: '45+',
    projects: '15+',
  },
  {
    id: 3,
    name: 'Cybersecurity',
    description: 'Learn about digital security, ethical hacking, and protecting digital assets.',
    icon: '🔒',
    image: 'https://images.unsplash.com/photo-1563013544-824ae1b704d3?q=80&w=2070&auto=format&fit=crop',
    members: '30+',
    projects: '8+',
  },
  {
    id: 4,
    name: 'UI/UX Design',
    description: 'Create beautiful and functional user interfaces with modern design principles.',
    icon: '🎨',
    image: 'https://images.unsplash.com/photo-1586717791821-3f44a563fa4c?q=80&w=2070&auto=format&fit=crop',
    members: '35+',
    projects: '12+',
  },
  {
    id: 5,
    name: 'Blockchain',
    description: 'Dive into blockchain technology, smart contracts, and decentralized applications.',
    icon: '⛓️',
    image: 'https://images.unsplash.com/photo-1639762681485-074b7f938ba0?q=80&w=2070&auto=format&fit=crop',
    members: '25+',
    projects: '6+',
  },
  {
    id: 6,
    name: 'Cloud Computing',
    description: 'Master cloud platforms, serverless architecture, and scalable solutions.',
    icon: '☁️',
    image: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=2072&auto=format&fit=crop',
    members: '40+',
    projects: '9+',
  }
];

export function SubCommunities() {
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
            Explore Our Communities
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-50px' }}
            transition={{ delay: 0.2 }}
            className="text-lg sm:text-xl text-gray-600"
          >
            Join any of our diverse and growing tech communities. From AI/ML to Cloud Computing, Web Development to Cybersecurity, and many more emerging tech domains - there's a place for every tech enthusiast.
          </motion.p>
        </div>

        {/* Communities Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 lg:gap-10">
          {communities.map((community, index) => (
            <motion.div
              key={community.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ delay: index * 0.1 }}
              className="group relative bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden"
            >
              {/* Community Image */}
              <div className="relative h-48 sm:h-56 overflow-hidden">
                <Image
                  src={community.image}
                  alt={community.name}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                <div className="absolute bottom-4 left-4 right-4">
                  <div className="flex items-center gap-2 text-white">
                    <span className="text-2xl">{community.icon}</span>
                    <h3 className="text-lg sm:text-xl font-semibold">{community.name}</h3>
                  </div>
                </div>
              </div>

              {/* Community Content */}
              <div className="p-4 sm:p-6">
                <p className="text-gray-600 mb-4 line-clamp-2">{community.description}</p>
                <div className="flex items-center justify-between text-sm text-gray-500">
                  <span className="flex items-center gap-1">
                    👥 {community.members} Members
                  </span>
                  <span className="flex items-center gap-1">
                    💻 {community.projects} Projects
                  </span>
                </div>
              </div>

              {/* Hover Overlay */}
              <div className="absolute inset-0 bg-blue-600/0 group-hover:bg-blue-600/5 transition-colors duration-300" />
            </motion.div>
          ))}
        </div>

        {/* CTA Button */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-50px' }}
          transition={{ delay: 0.4 }}
          className="text-center mt-12 sm:mt-16"
        >
          <Link
            href="/join"
            className="inline-flex items-center justify-center px-6 sm:px-8 py-3 sm:py-4 bg-blue-600 text-white rounded-xl font-semibold transition-all duration-300 hover:bg-blue-700 hover:shadow-xl hover:shadow-blue-200/20"
          >
            Join a Community
          </Link>
        </motion.div>
      </div>

      {/* Swoosh Divider */}
      <Swoosh />
    </section>
  );
} 