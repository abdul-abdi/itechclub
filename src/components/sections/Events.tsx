'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import { Swoosh } from '@/components/ui/Swoosh';

const events = [
  {
    id: 1,
    title: 'Weekly Community Sessions',
    description: 'Join your specific tech community for hands-on learning sessions and project work.',
    date: 'Weekdays',
    location: 'TRC Campus',
    image: 'https://images.unsplash.com/photo-1540575467063-178a50c2df87?q=80&w=2070&auto=format&fit=crop',
  },
  {
    id: 2,
    title: 'iTech\'s Tech Chats',
    description: 'Engaging roundtable discussions on trending tech topics and industry insights.',
    date: 'Every Wednesday',
    location: 'Room L204',
    image: 'https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=2070&auto=format&fit=crop',
  },
  {
    id: 3,
    title: 'Hacker Nights',
    description: 'Late-night coding sessions, problem-solving, and collaborative development.',
    date: '8th - 9th February and 8th - 9th March',
    location: 'Mangu Campus',
    image: 'https://images.unsplash.com/photo-1504384308090-c894fdcc538d?q=80&w=2070&auto=format&fit=crop',
  },
  {
    id: 4,
    title: 'Tech Excursions',
    description: 'Fun outings to connect, network, and unwind with fellow tech enthusiasts in relaxed settings.',
    date: '3 Times This Semester',
    location: 'Various Venues',
    image: 'https://images.unsplash.com/photo-1511795409834-ef04bbd61622?q=80&w=2070&auto=format&fit=crop',
  },
  {
    id: 5,
    title: 'Community Showcase',
    description: 'Present your projects and share your learning journey with fellow members.',
    date: 'End of Month',
    location: 'Community Shoutout',
    image: 'https://images.unsplash.com/photo-1558403194-611308249627?q=80&w=2070&auto=format&fit=crop',
  },
  {
    id: 6,
    title: 'Tech Leadership Forum',
    description: 'Connect with community leads and shape the future of iTech Club.',
    date: 'Everyday',
    location: 'IZET Hub',
    image: 'https://images.unsplash.com/photo-1475721027785-f74eccf877e2?q=80&w=2070&auto=format&fit=crop',
  },
];

export function Events() {
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
            Semester Schedule
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-50px' }}
            transition={{ delay: 0.2 }}
            className="text-lg sm:text-xl text-gray-600"
          >
            Join us throughout the semester for exciting events, workshops, and networking opportunities.
          </motion.p>
        </div>

        {/* Events Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 lg:gap-10">
          {events.map((event, index) => (
            <motion.div
              key={event.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ delay: index * 0.1 }}
              className="group relative bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden"
            >
              {/* Event Image */}
              <div className="relative h-48 sm:h-56 overflow-hidden">
                <Image
                  src={event.image}
                  alt={event.title}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                
                {/* Date Badge */}
                <div className="absolute top-4 right-4 bg-blue-600 text-white px-3 py-1 rounded-full text-sm font-medium">
                  {event.date}
                </div>
              </div>

              {/* Event Content */}
              <div className="p-4 sm:p-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-2">{event.title}</h3>
                <p className="text-gray-600 mb-4 line-clamp-2">{event.description}</p>
                <div className="flex items-center justify-between text-sm">
                  <span className="flex items-center gap-1 text-gray-500">
                    📍 {event.location}
                  </span>
                  <Link
                    href="/events"
                    className="text-blue-600 font-medium hover:text-blue-700 transition-colors"
                  >
                    Register →
                  </Link>
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
            href="/events"
            className="inline-flex items-center justify-center px-6 sm:px-8 py-3 sm:py-4 bg-blue-600 text-white rounded-xl font-semibold transition-all duration-300 hover:bg-blue-700 hover:shadow-xl hover:shadow-blue-200/20"
          >
            View All Events
          </Link>
        </motion.div>
      </div>

      {/* Swoosh Divider */}
      <Swoosh />
    </section>
  );
} 