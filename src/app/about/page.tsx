'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import { Swoosh } from '@/components/ui/Swoosh';

const teamMembers = [
  {
    name: 'Abdullahi Abdi',
    role: 'Club President',
    image: '/team/abdullahi.jpg',
    bio: 'Software Engineer passionate about building tech communities',
    links: {
      twitter: 'https://twitter.com/abdullahiabdi00',
      linkedin: 'https://www.linkedin.com/in/abdullahi-abdi-49a482251/',
      github: 'https://github.com/0xAbdulKhalid'
    }
  },
  // Add more team members here
];

const values = [
  {
    title: 'Innovation',
    description: 'Fostering creative problem-solving and cutting-edge technological solutions',
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
      </svg>
    )
  },
  {
    title: 'Community',
    description: 'Building a supportive network of tech enthusiasts and learners',
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
      </svg>
    )
  },
  {
    title: 'Learning',
    description: 'Continuous growth through hands-on experience and knowledge sharing',
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
      </svg>
    )
  },
  {
    title: 'Collaboration',
    description: 'Working together to create impactful solutions and shared success',
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 15l-2 5L9 9l11 4-5 2zm0 0l5 5M7.188 2.239l.777 2.897M5.136 7.965l-2.898-.777M13.95 4.05l-2.122 2.122m-5.657 5.656l-2.12 2.122" />
      </svg>
    )
  }
];

const achievements = [
  {
    number: '500+',
    label: 'Active Members',
    description: 'Growing community of tech enthusiasts'
  },
  {
    number: '50+',
    label: 'Events Hosted',
    description: 'Tech talks, workshops, and hackathons'
  },
  {
    number: '20+',
    label: 'Tech Projects',
    description: 'Collaborative innovations by our members'
  },
  {
    number: '10+',
    label: 'Partner Companies',
    description: 'Industry connections and opportunities'
  }
];

const initiatives = [
  {
    title: 'Tech Mentorship',
    description: 'Connect with experienced developers and industry professionals who guide you through your tech journey.',
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" />
      </svg>
    )
  },
  {
    title: 'Hands-on Projects',
    description: 'Work on real-world projects that solve actual problems and build your portfolio.',
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
      </svg>
    )
  },
  {
    title: 'Industry Connections',
    description: 'Network with tech companies and professionals through our partnerships and events.',
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
      </svg>
    )
  }
];

const programs = [
  {
    title: 'Code Labs',
    description: 'Weekly coding sessions where members collaborate on projects and learn new technologies.',
    schedule: 'Weekdays',
    category: 'Technical'
  },
  {
    title: 'Tech Talks',
    description: 'Industry experts share insights about latest technologies and career opportunities.',
    schedule: 'Weekly',
    category: 'Learning'
  },
  {
    title: 'Hackathons',
    description: 'Intensive coding competitions where teams build innovative solutions.',
    schedule: 'Monthly',
    category: 'Competition'
  },
  {
    title: 'Career Workshop',
    description: 'Resume building, interview prep, and career guidance sessions.',
    schedule: 'Quarterly',
    category: 'Career'
  }
];

export default function About() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-white via-blue-50/30 to-white pt-32 pb-16 relative overflow-hidden">
      {/* Background Decorations */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute top-0 left-0 right-0 h-96 bg-gradient-to-b from-blue-50/50 to-transparent" />
        <div className="absolute top-1/4 -left-48 w-96 h-96 bg-blue-100/40 rounded-full blur-3xl animate-pulse" />
        <div className="absolute top-1/3 -right-48 w-96 h-96 bg-blue-200/40 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-0 left-0 right-0 w-full text-blue-50/30">
          <Swoosh />
        </div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-20"
        >
          <div className="inline-block p-2 px-4 rounded-full bg-blue-50 text-blue-600 font-medium text-sm mb-6">
            🌟 Our Story
          </div>
          <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-6">
            About iTech Club
          </h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Empowering students to innovate, learn, and grow together in the world of technology.
          </p>
        </motion.div>

        {/* Mission Section */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-4xl mx-auto mb-32 text-center"
        >
          <h2 className="text-3xl font-bold text-gray-900 mb-6">Our Mission</h2>
          <p className="text-lg text-gray-600 leading-relaxed">
            iTech Club is dedicated to fostering a vibrant tech ecosystem within Zetech University. 
            We aim to bridge the gap between academic learning and industry practices by providing hands-on 
            experience, mentorship, and networking opportunities. Our goal is to empower students to become 
            innovative tech leaders who can make a positive impact in the digital world.
          </p>
        </motion.section>

        {/* Values Section */}
        <section className="mb-32">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Our Values</h2>
            <p className="text-lg text-gray-600">The principles that guide our community</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <motion.div
                key={value.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-white rounded-xl p-6 shadow-sm hover:shadow-md transition-all duration-300 border border-gray-100"
              >
                <div className="w-12 h-12 bg-blue-50 rounded-lg flex items-center justify-center text-blue-600 mb-4">
                  {value.icon}
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">{value.title}</h3>
                <p className="text-gray-600">{value.description}</p>
              </motion.div>
            ))}
          </div>
        </section>

        {/* Decorative Swoosh */}
        <div className="relative py-16">
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="w-full text-blue-100/40 transform scale-y-75">
              <Swoosh />
            </div>
          </div>
        </div>

        {/* Achievements Section */}
        <section className="mb-32">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Our Impact</h2>
            <p className="text-lg text-gray-600">What we've achieved together</p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {achievements.map((achievement, index) => (
              <motion.div
                key={achievement.number}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="text-center p-6 bg-gradient-to-br from-blue-50 via-white to-blue-50 rounded-xl border border-blue-100"
              >
                <div className="text-4xl font-bold text-blue-600 mb-2">{achievement.number}</div>
                <div className="text-lg font-semibold text-gray-900 mb-1">{achievement.label}</div>
                <p className="text-gray-600">{achievement.description}</p>
              </motion.div>
            ))}
          </div>
        </section>

        {/* Decorative Swoosh */}
        <div className="relative py-16">
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="w-full text-blue-100/40 transform scale-y-75">
              <Swoosh />
            </div>
          </div>
        </div>

        {/* Initiatives Section */}
        <section className="mb-32">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Our Initiatives</h2>
            <p className="text-lg text-gray-600">Programs that drive our mission forward</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {initiatives.map((initiative, index) => (
              <motion.div
                key={initiative.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-white rounded-xl p-8 shadow-sm hover:shadow-md transition-all duration-300 border border-gray-100"
              >
                <div className="w-12 h-12 bg-blue-50 rounded-lg flex items-center justify-center text-blue-600 mb-6">
                  {initiative.icon}
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">{initiative.title}</h3>
                <p className="text-gray-600">{initiative.description}</p>
              </motion.div>
            ))}
          </div>
        </section>

        {/* Decorative Swoosh */}
        <div className="relative py-16">
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="w-full text-blue-100/40 transform scale-y-75">
              <Swoosh />
            </div>
          </div>
        </div>

        {/* Programs Section */}
        <section className="mb-32">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Our Programs</h2>
            <p className="text-lg text-gray-600">Regular activities that keep our community engaged</p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
            {programs.map((program, index) => (
              <motion.div
                key={program.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-gradient-to-br from-white to-blue-50/50 rounded-xl p-6 border border-blue-100/50"
              >
                <div className="flex items-start justify-between mb-4">
                  <h3 className="text-xl font-semibold text-gray-900">{program.title}</h3>
                  <span className="px-3 py-1 bg-blue-100/50 text-blue-600 rounded-full text-sm font-medium">
                    {program.category}
                  </span>
                </div>
                <p className="text-gray-600 mb-4">{program.description}</p>
                <div className="flex items-center text-sm text-gray-500">
                  <svg className="w-4 h-4 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  {program.schedule}
                </div>
              </motion.div>
            ))}
          </div>
        </section>

        {/* Join Us Section */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center bg-gradient-to-r from-blue-50 via-white to-blue-50 rounded-2xl p-12 border border-blue-100/50"
        >
          <h2 className="text-3xl font-bold text-gray-900 mb-6">Join Our Community</h2>
          <p className="text-lg text-gray-600 mb-8">
            We&apos;re a community of tech enthusiasts, developers, and innovators.
          </p>
          <p className="text-gray-600 mb-6">
            We&apos;re not just a club, we&apos;re a community that&apos;s shaping the future of tech.
          </p>
          <Link
            href="https://chat.whatsapp.com/Jd4j1TARbdoHJntDjImPOj"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center px-6 py-3 bg-blue-600 text-white font-medium rounded-xl hover:bg-blue-700 transition-colors"
          >
            Join Our Community
            <svg className="ml-2 w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
            </svg>
          </Link>
        </motion.section>
      </div>
    </main>
  );
} 