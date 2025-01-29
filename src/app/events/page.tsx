'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import { Swoosh } from '@/components/ui/Swoosh';
import { Modal } from '@/components/ui/Modal';
import { useState } from 'react';
import Link from 'next/link';

interface TechChat {
  id: number;
  date: string;
  time: string;
  title: string;
  description: string;
  detailedDescription?: string;
  location: string;
  type: string;
  leads: string[];
  format: string;
  image: string;
  icon: string;
  showFullDescription?: boolean;
}

interface SpecialEvent {
  id: number;
  date: string;
  title: string;
  description: string;
  detailedDescription?: string;
  type: string;
  location?: string;
  image: string;
  showFullDescription?: boolean;
}

const techChats = [
  {
    id: 1,
    date: 'January 15',
    time: '4:30 PM - 7:00 PM',
    title: 'Kickoff and iTech Activities Showcase',
    description: 'Start the semester with an overview of all iTech activities and opportunities.',
    detailedDescription: 'Join us for an exciting kickoff session where community leads will showcase their plans for the semester. Learn about upcoming events, workshops, and opportunities to grow your tech skills. This session will help you choose the right community that aligns with your interests.',
    location: 'TRC Campus, Room L204',
    type: 'Tech Chat',
    leads: ['iTech Club President', 'Community Leads'],
    format: 'Interactive presentation followed by Q&A and networking',
    image: 'https://images.unsplash.com/photo-1543269865-cbf427effbad?q=80&w=2070&auto=format&fit=crop',
    icon: '🚀'
  },
  {
    id: 2,
    date: 'January 22',
    time: '4:30 PM - 7:00 PM',
    title: 'Blockchain Technology Roundtable',
    description: 'Deep dive into blockchain technology, cryptocurrencies, and decentralized applications.',
    detailedDescription: 'Explore the fascinating world of blockchain technology with our Blockchain community lead. Discuss current trends in cryptocurrencies, smart contracts, and the future of decentralized applications. Perfect for both beginners and those already familiar with blockchain concepts.',
    location: 'TRC Campus, Room L204',
    type: 'Tech Chat',
    leads: ['Blockchain Community Lead'],
    format: 'Technical discussion and real-world use cases',
    image: 'https://images.unsplash.com/photo-1639762681485-074b7f938ba0?q=80&w=2070&auto=format&fit=crop',
    icon: '⛓️'
  },
  {
    id: 3,
    date: 'January 29',
    time: '4:30 PM - 7:00 PM',
    title: 'Networking and CyberSecurity Roundtable',
    description: 'Explore network security, ethical hacking, and cybersecurity best practices.',
    detailedDescription: 'Join our cybersecurity experts for an in-depth discussion on network security, ethical hacking, and the latest cybersecurity trends. Learn about career opportunities in cybersecurity and how to protect digital assets.',
    location: 'TRC Campus, Room L204',
    type: 'Tech Chat',
    leads: ['Cybersecurity Community Lead'],
    format: 'Interactive workshop with live demonstrations',
    image: 'https://images.unsplash.com/photo-1550751827-4bd374c3f58b?q=80&w=2070&auto=format&fit=crop',
    icon: '🔒'
  },
  {
    id: 4,
    date: 'February 5',
    time: '4:30 PM - 7:00 PM',
    title: 'Product/Project Management and Design Roundtable',
    description: 'Learn about product lifecycle, project methodologies, and design thinking.',
    detailedDescription: 'Discover the principles of product management and design thinking. Our community leads will share insights on project methodologies, user experience, and how to build successful products.',
    location: 'TRC Campus, Room L204',
    type: 'Tech Chat',
    leads: ['Product Management Lead', 'Design Community Lead'],
    format: 'Workshop with case studies and group activities',
    image: 'https://images.unsplash.com/photo-1559028012-481c04fa702d?q=80&w=2072&auto=format&fit=crop',
    icon: '📊'
  },
  {
    id: 5,
    date: 'February 12',
    time: '4:30 PM - 7:00 PM',
    title: 'AI/ML/Data Science Roundtable',
    description: 'Special edition exploring artificial intelligence, machine learning, and data science.',
    detailedDescription: 'A special session at Mangu Campus diving deep into AI, ML, and Data Science. Learn about the latest trends, tools, and how to start your journey in these exciting fields.',
    location: 'Mangu Campus (Room TBD)',
    type: 'Special Edition',
    leads: ['AI/ML Community Lead', 'Data Science Lead'],
    format: 'Technical presentations and hands-on exercises',
    image: 'https://images.unsplash.com/photo-1555949963-ff9fe0c870eb?q=80&w=2070&auto=format&fit=crop',
    icon: '🤖'
  },
  {
    id: 6,
    date: 'February 19',
    time: '4:30 PM - 7:00 PM',
    title: 'Career Talk Roundtable',
    description: 'Insights from recruiters and hiring managers on tech industry expectations.',
    detailedDescription: 'Get valuable insights from industry professionals about what companies look for in tech talent. Learn about interview preparation, portfolio building, and career growth strategies.',
    location: 'TRC Campus, Room L204',
    type: 'Tech Chat',
    leads: ['Industry Professionals', 'Career Development Team'],
    format: 'Panel discussion and Q&A session',
    image: 'https://images.unsplash.com/photo-1521737711867-e3b97375f902?q=80&w=2073&auto=format&fit=crop',
    icon: '💼'
  },
  {
    id: 7,
    date: 'February 26',
    time: '4:30 PM - 7:00 PM',
    title: 'IoT Roundtable',
    description: 'Discover the world of Internet of Things and connected devices.',
    detailedDescription: 'Explore the exciting world of IoT with hands-on demonstrations of smart devices and sensors. Learn about IoT architecture, protocols, and real-world applications.',
    location: 'TRC Campus, Room L204',
    type: 'Tech Chat',
    leads: ['IoT Community Lead'],
    format: 'Demo-based workshop with practical exercises',
    image: 'https://images.unsplash.com/photo-1518770660439-4636190af475?q=80&w=2070&auto=format&fit=crop',
    icon: '🌐'
  },
  {
    id: 8,
    date: 'March 5',
    time: '4:30 PM - 7:00 PM',
    title: 'Web Development Roundtable',
    description: 'Special edition covering modern web development technologies and practices.',
    detailedDescription: 'Join us at Nairobi Campus for a special session on modern web development. Learn about the latest frameworks, tools, and best practices in frontend and backend development.',
    location: 'Nairobi Campus (Room TBD)',
    type: 'Special Edition',
    leads: ['Web Development Community Lead'],
    format: 'Code-along session and architecture discussion',
    image: 'https://images.unsplash.com/photo-1627398242454-45a1465c2479?q=80&w=2074&auto=format&fit=crop',
    icon: '🌍'
  },
  {
    id: 9,
    date: 'March 12',
    time: '4:30 PM - 7:00 PM',
    title: 'Android Development Roundtable',
    description: 'Deep dive into Android app development and mobile technologies.',
    detailedDescription: 'Explore mobile app development with a focus on Android. Learn about Kotlin, app architecture, UI design, and publishing to the Play Store.',
    location: 'TRC Campus, Room L204',
    type: 'Tech Chat',
    leads: ['Mobile Development Lead'],
    format: 'Technical workshop with app development demo',
    image: 'https://images.unsplash.com/photo-1607252650355-f7fd0460ccdb?q=80&w=2070&auto=format&fit=crop',
    icon: '📱'
  },
  {
    id: 10,
    date: 'March 19',
    time: '4:30 PM - 7:00 PM',
    title: 'Tech Support Roles Roundtable',
    description: 'Explore Business Dev, HR, IT, QA, and other crucial tech support roles.',
    detailedDescription: 'Discover the diverse range of roles that support tech teams. Learn about quality assurance, technical writing, business development, and how these roles contribute to successful tech projects.',
    location: 'TRC Campus, Room L204',
    type: 'Tech Chat',
    leads: ['Tech Operations Lead', 'QA Lead'],
    format: 'Panel discussion with role-specific breakout sessions',
    image: 'https://images.unsplash.com/photo-1600880292203-757bb62b4baf?q=80&w=2070&auto=format&fit=crop',
    icon: '🔧'
  }
].map(chat => ({
  ...chat,
  time: '4:30 PM - 7:00 PM'
}));

const specialEvents = [
  {
    id: 1,
    date: 'January 25',
    title: 'Karura Forest Excursion',
    description: 'Network and unwind with a refreshing walk through Karura Forest.',
    type: 'Excursion',
    image: 'https://images.unsplash.com/photo-1511497584788-876760111969?q=80&w=2070&auto=format&fit=crop'
  },
  {
    id: 2,
    date: 'February 7-8',
    title: 'Hack & Play: Open Playground Hack Night',
    description: 'A one-of-a-kind overnight event designed to unleash your creativity, no matter your background or skill level.',
    detailedDescription: `Hack & Play: Zetech University's Open Playground Hack Night is a one-of-a-kind event designed to unleash your creativity, no matter your background or skill level. Whether you're an experienced coder, a curious tinkerer, or simply eager to try something new, this hack night is your blank canvas—bring any idea to life in a collaborative, high-energy environment.

What's It All About?
• No Limits: There are no predefined themes or constraints. You decide what to build—software, hardware, or something in between.
• Playful Collaboration: Form a team on-site or bring your own. Share knowledge, learn from peers, and have fun along the way.
• Guided Inspiration: While "Hack & Play" is all about exploration, we'll have optional mini-workshops and mentors available to spark ideas, offer feedback, and help you troubleshoot.
• Show & Tell: At the end of the hack night, teams will have the chance to showcase their projects, demo new technologies, and celebrate each other's achievements.

Who Can Join?
Everyone! Students from all disciplines—Computer Science, Business, Arts, Engineering, Health Sciences, or beyond—are welcome. The more diverse the team, the more innovative the ideas!

Why Participate?
1. Experiment Freely: This is your opportunity to try out bold concepts or test that side project you've been dreaming of.
2. Develop Skills: Gain hands-on experience with coding, design, hardware prototyping, project management, or pitching ideas.
3. Network & Collaborate: Meet like-minded innovators, potential co-founders, or future collaborators.
4. Have Fun: "Hack & Play" emphasizes the joy of creation. Even if your project doesn't "succeed," you'll learn a ton and have a blast doing it!

Highlights
• Idea Pitching: Kick off with quick pitches where anyone can share their idea and form teams spontaneously.
• 24/7 Access to Creativity: Once the hacking begins, you and your team can dive straight into building.
• Support & Resources: Mentors, fellow hackers, and optional tutorials will be on standby to help troubleshoot or provide direction.
• Project Showcases & Celebrations: Wrap up by presenting your creations—functional, half-baked, or even humorous. Prizes may be awarded in fun categories that celebrate experimentation and creativity.

Join us for Hack & Play and watch your wildest ideas take shape at Zetech University's ultimate open playground hack night. Whether you leave with a polished prototype or new friends and fresh inspiration, you'll remember the thrill of unbounded innovation!`,
    type: 'Hacker Night',
    location: 'Mangu Campus',
    image: 'https://images.unsplash.com/photo-1504384308090-c894fdcc538d?q=80&w=2070&auto=format&fit=crop'
  },
  {
    id: 3,
    date: 'February 21',
    title: 'Tech Football Match',
    description: 'Network and have fun with a friendly tech community football match.',
    type: 'Excursion',
    image: 'https://images.unsplash.com/photo-1579952363873-27f3bade9f55?q=80&w=2070&auto=format&fit=crop'
  },
  {
    id: 4,
    date: 'March 7-8',
    title: 'March Hacker Night',
    description: 'Overnight coding session from 6 PM to 9 AM. Build, learn, and collaborate.',
    type: 'Hacker Night',
    location: 'Mangu Campus',
    image: 'https://images.unsplash.com/photo-1504384308090-c894fdcc538d?q=80&w=2070&auto=format&fit=crop'
  },
  {
    id: 5,
    date: 'March 22',
    title: 'Hiking Adventure',
    description: 'End of semester hiking excursion (Location TBA)',
    type: 'Excursion',
    image: 'https://images.unsplash.com/photo-1551632811-561732d1e306?q=80&w=2070&auto=format&fit=crop'
  }
];

export default function Events() {
  const [selectedEvent, setSelectedEvent] = useState<TechChat | SpecialEvent | null>(null);

  // Helper function to determine if event is a tech chat
  const isTechChat = (event: TechChat | SpecialEvent): event is TechChat => {
    return 'time' in event && 'leads' in event;
  };

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
            🎯 Join our events
          </div>
          <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-6">
            Upcoming Events
          </h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Discover and participate in our upcoming tech events, workshops, and meetups. Connect with fellow tech enthusiasts and expand your knowledge.
          </p>
        </motion.div>

        {/* Decorative dots with line */}
        <div className="flex items-center justify-center gap-2">
          <div className="w-3 h-3 rounded-full bg-blue-500"></div>
          <div className="w-32 h-0.5 bg-blue-500"></div>
          <div className="w-3 h-3 rounded-full bg-blue-500"></div>
        </div>

        {/* Tech Chats Section */}
        <section className="relative py-16 sm:py-24">
          <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-6"
            >
              iTech's Tech Chats
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-lg text-gray-600"
            >
              Join us every Wednesday for engaging roundtable discussions on various tech topics.
            </motion.p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {techChats.map((chat, index) => (
              <motion.div
                key={chat.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-50px' }}
                transition={{ delay: index * 0.1 }}
                onClick={() => setSelectedEvent(chat)}
                className="group relative bg-white rounded-xl shadow-sm hover:shadow-xl transition-all duration-300 overflow-hidden border border-gray-100 cursor-pointer hover:-translate-y-1 hover:border-blue-500/50"
              >
                <div className="relative h-40 sm:h-44 lg:h-48">
                  <Image
                    src={chat.image}
                    alt={chat.title}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/30 to-transparent group-hover:via-black/40 transition-colors duration-300" />
                  <div className="absolute top-4 left-4 flex items-center gap-2">
                    <span className="text-3xl transform group-hover:scale-110 transition-transform duration-300">{chat.icon}</span>
                    <span className="inline-flex items-center px-2.5 py-1 rounded-full text-xs font-medium bg-blue-100 text-blue-800 bg-opacity-90 shadow-lg">
                      {chat.type}
                    </span>
                  </div>
                </div>
                <div className="relative p-4 sm:p-6">
                  <div className="absolute inset-0 bg-blue-50/0 group-hover:bg-blue-50/50 transition-colors duration-300" />
                  <div className="relative">
                    <div className="flex items-center justify-between text-sm text-gray-500 mb-3">
                      <span className="font-medium group-hover:text-blue-600 transition-colors">{chat.date}</span>
                      <span className="group-hover:text-blue-600 transition-colors">{chat.time}</span>
                    </div>
                    <h3 className="text-lg font-bold text-gray-900 group-hover:text-blue-600 transition-colors mb-3">
                      {chat.title}
                    </h3>
                    <p className="text-sm text-gray-600 line-clamp-2 mb-4 group-hover:text-gray-700 transition-colors">
                      {chat.description}
                    </p>
                    <div className="flex items-center justify-between">
                      <div className="flex items-center text-sm text-gray-500">
                        <svg className="w-4 h-4 mr-1.5 text-gray-400 group-hover:text-blue-500 transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                        </svg>
                        <span className="group-hover:text-blue-600 transition-colors">{chat.location}</span>
                      </div>
                      <button
                        onClick={() => setSelectedEvent(chat)}
                        className="px-4 py-2 text-sm font-medium text-white bg-blue-600 rounded-lg hover:bg-blue-700 transition-colors"
                      >
                        Learn More
                      </button>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </section>

        {/* Decorative Swoosh between sections */}
        <div className="relative py-16">
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="w-full text-blue-100/40 transform scale-y-75">
              <Swoosh />
            </div>
          </div>
        </div>

        {/* Special Events Section */}
        <section className="relative py-16 sm:py-24 bg-gradient-to-b from-blue-50 via-white to-blue-50">
          <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-6"
            >
              Special Events
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-lg text-gray-600"
            >
              Exciting activities and events throughout the semester.
            </motion.p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 lg:gap-10">
            {specialEvents.map((event, index) => (
              <motion.div
                key={event.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-50px' }}
                transition={{ delay: index * 0.1 }}
                onClick={() => setSelectedEvent(event)}
                className="group relative bg-white rounded-xl shadow-sm hover:shadow-xl transition-all duration-300 overflow-hidden border border-gray-100 cursor-pointer hover:-translate-y-1 hover:border-blue-500/50"
              >
                <div className="relative h-48 sm:h-52 lg:h-56">
                  <Image
                    src={event.image}
                    alt={event.title}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/30 to-transparent group-hover:via-black/40 transition-colors duration-300" />
                  <div className="absolute top-4 right-4">
                    <span className="px-3 py-1.5 rounded-full text-xs sm:text-sm font-medium bg-blue-600 text-white shadow-lg">
                      {event.type}
                    </span>
                  </div>
                </div>
                <div className="relative p-4 sm:p-6">
                  <div className="absolute inset-0 bg-blue-50/0 group-hover:bg-blue-50/50 transition-colors duration-300" />
                  <div className="relative">
                    <h3 className="text-lg sm:text-xl font-bold text-gray-900 mb-2 group-hover:text-blue-600 transition-colors">
                      {event.title}
                    </h3>
                    <p className="text-sm sm:text-base text-gray-600 mb-4">{event.description}</p>
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-2 text-sm text-gray-500">
                        <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                        {event.date}
                      </div>
                      <button
                        onClick={() => setSelectedEvent(event)}
                        className="px-4 py-2 text-sm font-medium text-white bg-blue-600 rounded-lg hover:bg-blue-700 transition-colors"
                      >
                        Learn More
                      </button>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </section>

        {/* Enhanced Modal */}
        <Modal
          isOpen={!!selectedEvent}
          onClose={() => setSelectedEvent(null)}
        >
          {selectedEvent && (
            <div className="relative overflow-hidden">
              {/* Header Image Section */}
              <div className="relative h-48 sm:h-56">
                <Image
                  src={selectedEvent.image}
                  alt={selectedEvent.title}
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/50 to-transparent" />
                
                {/* Event Type Badge */}
                <div className="absolute top-4 left-4 flex items-center gap-2">
                  {isTechChat(selectedEvent) && (
                    <span className="text-3xl">{selectedEvent.icon}</span>
                  )}
                  <span className="px-3 py-1 rounded-full text-sm font-medium bg-blue-100 text-blue-800 shadow-lg backdrop-blur-sm bg-opacity-90">
                    {selectedEvent.type}
                  </span>
                </div>

                {/* Title */}
                <div className="absolute bottom-4 left-4 right-4">
                  <h3 className="text-2xl sm:text-3xl font-bold text-white">
                    {selectedEvent.title}
                  </h3>
                </div>
              </div>

              {/* Content Section */}
              <div className="p-6 space-y-6">
                {/* Key Details Grid */}
                <div className="grid grid-cols-2 gap-4">
                  <div className="flex items-center gap-3 bg-blue-50 rounded-xl p-3">
                    <div className="w-10 h-10 rounded-full bg-blue-100 flex items-center justify-center flex-shrink-0">
                      <svg className="w-5 h-5 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                    </div>
                    <div>
                      <p className="text-xs text-gray-500 font-medium">When</p>
                      <p className="text-sm font-semibold text-gray-900">{selectedEvent.date}</p>
                      {isTechChat(selectedEvent) && (
                        <p className="text-xs text-gray-500">{selectedEvent.time}</p>
                      )}
                    </div>
                  </div>
                  {selectedEvent.location && (
                    <div className="flex items-center gap-3 bg-blue-50 rounded-xl p-3">
                      <div className="w-10 h-10 rounded-full bg-blue-100 flex items-center justify-center flex-shrink-0">
                        <svg className="w-5 h-5 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                        </svg>
                      </div>
                      <div>
                        <p className="text-xs text-gray-500 font-medium">Where</p>
                        <p className="text-sm font-semibold text-gray-900">{selectedEvent.location}</p>
                      </div>
                    </div>
                  )}
                </div>

                {/* Description */}
                <div className="space-y-4">
                  <div className="flex items-center gap-2 text-gray-900">
                    <svg className="w-5 h-5 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    <h4 className="font-semibold">About this Event</h4>
                  </div>
                  <div className="pl-7">
                    <div className="prose prose-sm max-w-none text-gray-600">
                      {selectedEvent.detailedDescription ? (
                        <div className="space-y-3">
                          <p className="text-sm leading-relaxed">{selectedEvent.description}</p>
                          <div className="max-h-[280px] overflow-y-auto pr-4 custom-scrollbar">
                            <div className="whitespace-pre-line text-sm">
                              {selectedEvent.detailedDescription}
                            </div>
                          </div>
                        </div>
                      ) : (
                        <p className="text-sm text-gray-600 leading-relaxed">
                          {selectedEvent.description}
                        </p>
                      )}
                    </div>
                  </div>
                </div>

                {/* Action Button */}
                <div className="pt-2">
                  <Link
                    href="https://chat.whatsapp.com/Jd4j1TARbdoHJntDjImPOj"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center w-full px-6 py-3 bg-blue-600 text-white rounded-xl hover:bg-blue-700 transition-colors gap-2"
                  >
                    <span className="font-medium">Join the Community</span>
                    <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                    </svg>
                  </Link>
                </div>
              </div>
            </div>
          )}
        </Modal>

        {/* Join Community CTA */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center bg-gradient-to-r from-blue-50 via-white to-blue-50 rounded-2xl p-6 sm:p-12 border border-blue-100/50 mt-16"
        >
          <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-6">Stay Updated with Our Events</h2>
          <p className="text-base sm:text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
            Join our WhatsApp community to get instant updates about upcoming events, tech talks, and networking opportunities.
            Be part of the conversation and never miss an event!
          </p>
          <Link
            href="https://chat.whatsapp.com/Jd4j1TARbdoHJntDjImPOj"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center px-6 sm:px-8 py-3 sm:py-4 text-base sm:text-lg font-medium rounded-full text-white bg-blue-600 hover:bg-blue-700 transition-colors duration-300 w-full sm:w-auto"
          >
            Join iTech Club Community
            <svg className="ml-2 w-5 sm:w-6 h-5 sm:h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
            </svg>
          </Link>
        </motion.section>
      </div>
    </main>
  );
} 