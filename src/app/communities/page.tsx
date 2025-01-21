'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Swoosh } from '@/components/ui/Swoosh';
import Link from 'next/link';
import { cn } from '@/lib/utils';

interface Community {
  name: string;
  icon: string;
  description: string;
  whatsappLink: string;
  topics: string[];
  projects: string[];
  meetingSchedule: string;
  leads: { name: string; role: string }[];
  benefits: string[];
}

const communities: Community[] = [
  {
    name: 'AI/ML Community',
    icon: '🤖',
    description: 'Dive into the world of Artificial Intelligence and Machine Learning. From neural networks to deep learning, we explore cutting-edge technologies that shape the future of computing. Join us in building intelligent systems that solve real-world problems.',
    whatsappLink: 'https://chat.whatsapp.com/your-ai-ml-link',
    topics: ['Neural Networks', 'Computer Vision', 'Natural Language Processing', 'Deep Learning', 'Data Science Fundamentals', 'Reinforcement Learning', 'AI Ethics'],
    projects: ['Image Recognition System', 'Chatbot Development', 'Predictive Analytics', 'Sentiment Analysis Tool'],
    meetingSchedule: 'Every Tuesday, 4:00 PM',
    leads: [
      { name: 'John Doe', role: 'Technical Lead' },
      { name: 'Jane Smith', role: 'Project Coordinator' }
    ],
    benefits: [
      'Hands-on experience with AI/ML tools',
      'Real-world project implementation',
      'Industry expert sessions',
      'Research opportunities',
      'Access to GPU resources'
    ]
  },
  {
    name: 'Web Development',
    icon: '🌐',
    description: 'Master the art of modern web development. From responsive design to full-stack applications, we cover everything you need to build the next generation of web applications. Learn industry-standard practices and tools used by top tech companies.',
    whatsappLink: 'https://chat.whatsapp.com/your-web-dev-link',
    topics: ['Frontend Development', 'Backend Systems', 'Database Design', 'API Development', 'Web Security', 'Performance Optimization', 'Progressive Web Apps'],
    projects: ['E-commerce Platform', 'Social Media Dashboard', 'Portfolio Generator', 'Real-time Chat Application'],
    meetingSchedule: 'Every Wednesday, 3:00 PM',
    leads: [
      { name: 'Alex Johnson', role: 'Frontend Lead' },
      { name: 'Sarah Wilson', role: 'Backend Lead' }
    ],
    benefits: [
      'Portfolio building opportunities',
      'Modern tech stack exposure',
      'Collaborative coding sessions',
      'Code review practices',
      'Industry mentorship'
    ]
  },
  {
    name: 'Cybersecurity',
    icon: '🔒',
    description: 'Explore the critical field of cybersecurity. Learn to protect systems, networks, and data from digital threats. Get hands-on experience with security tools and participate in ethical hacking challenges to develop real-world skills.',
    whatsappLink: 'https://chat.whatsapp.com/your-cybersec-link',
    topics: ['Network Security', 'Ethical Hacking', 'Cryptography', 'Security Auditing', 'Incident Response', 'Malware Analysis', 'Digital Forensics'],
    projects: ['Security Assessment Tool', 'Vulnerability Scanner', 'Encryption System', 'Network Monitor'],
    meetingSchedule: 'Every Thursday, 2:00 PM',
    leads: [
      { name: 'Mike Brown', role: 'Security Lead' },
      { name: 'Emma Davis', role: 'Research Coordinator' }
    ],
    benefits: [
      'Certification preparation',
      'CTF competitions',
      'Security lab access',
      'Industry connections',
      'Real-world security scenarios'
    ]
  },
  {
    name: 'Mobile Development',
    icon: '📱',
    description: 'Create innovative mobile applications for iOS and Android. Learn cross-platform development, native features, and best practices for building engaging mobile experiences that users love.',
    whatsappLink: 'https://chat.whatsapp.com/your-mobile-dev-link',
    topics: ['iOS Development', 'Android Development', 'React Native', 'Flutter', 'Mobile UI/UX', 'App Store Optimization', 'Mobile Security'],
    projects: ['Fitness Tracking App', 'Food Delivery Platform', 'Educational Games', 'Social Networking App'],
    meetingSchedule: 'Every Monday, 2:00 PM',
    leads: [
      { name: 'Chris Lee', role: 'iOS Lead' },
      { name: 'Maria Garcia', role: 'Android Lead' }
    ],
    benefits: [
      'Cross-platform development skills',
      'App publishing experience',
      'UI/UX best practices',
      'Performance optimization techniques',
      'Mobile-first thinking'
    ]
  },
  {
    name: 'UI/UX Design',
    icon: '🎨',
    description: 'Shape the future of digital experiences through thoughtful design. Learn to create intuitive interfaces, conduct user research, and build design systems that scale. Transform your creative vision into user-centered designs.',
    whatsappLink: 'https://chat.whatsapp.com/your-design-link',
    topics: ['User Research', 'Interface Design', 'Prototyping', 'Usability Testing', 'Design Systems', 'Interaction Design', 'Visual Design'],
    projects: ['Mobile App Redesign', 'UX Case Studies', 'Design System Creation', 'User Research Projects'],
    meetingSchedule: 'Every Friday, 3:00 PM',
    leads: [
      { name: 'Lisa Chen', role: 'Design Lead' },
      { name: 'Tom Wilson', role: 'UX Researcher' }
    ],
    benefits: [
      'Design portfolio development',
      'User testing experience',
      'Industry tool mastery',
      'Design critique sessions',
      'Real client projects'
    ]
  },
  {
    name: 'Cloud Computing',
    icon: '☁️',
    description: 'Master cloud technologies and build scalable infrastructure. Learn to architect solutions using leading cloud platforms, containerization, and DevOps practices. Prepare for a future in cloud-native development.',
    whatsappLink: 'https://chat.whatsapp.com/your-cloud-link',
    topics: ['AWS', 'Azure', 'DevOps', 'Containerization', 'Serverless Architecture', 'Cloud Security', 'Cost Optimization'],
    projects: ['Cloud Migration Project', 'Serverless Application', 'Container Orchestration', 'Multi-Cloud Setup'],
    meetingSchedule: 'Every Monday, 4:00 PM',
    leads: [
      { name: 'David Kim', role: 'Cloud Architect' },
      { name: 'Rachel Green', role: 'DevOps Lead' }
    ],
    benefits: [
      'Cloud certification prep',
      'Hands-on cloud experience',
      'Infrastructure management',
      'Cost optimization skills',
      'DevOps practices'
    ]
  },
  {
    name: 'Data Science',
    icon: '📊',
    description: 'Unlock insights from data and drive decision-making through analytics. Learn statistical analysis, data visualization, and predictive modeling. Turn raw data into actionable insights.',
    whatsappLink: 'https://chat.whatsapp.com/your-data-science-link',
    topics: ['Statistical Analysis', 'Data Visualization', 'Big Data', 'Business Intelligence', 'Data Mining', 'Predictive Modeling', 'ETL Processes'],
    projects: ['Market Analysis Dashboard', 'Predictive Sales Model', 'Customer Segmentation', 'Data Pipeline'],
    meetingSchedule: 'Every Tuesday, 2:00 PM',
    leads: [
      { name: 'Sophie Chen', role: 'Data Science Lead' },
      { name: 'Mark Thompson', role: 'Analytics Lead' }
    ],
    benefits: [
      'Real dataset experience',
      'Statistical analysis skills',
      'Visualization techniques',
      'Business insight development',
      'Industry tools mastery'
    ]
  },
  {
    name: 'Blockchain',
    icon: '⛓️',
    description: 'Explore the revolutionary world of blockchain technology. Learn about cryptocurrencies, smart contracts, and decentralized applications. Build the future of trustless systems.',
    whatsappLink: 'https://chat.whatsapp.com/your-blockchain-link',
    topics: ['Smart Contracts', 'DeFi', 'Web3', 'Cryptocurrency', 'Consensus Mechanisms', 'dApps', 'Token Economics'],
    projects: ['DeFi Application', 'NFT Marketplace', 'Smart Contract System', 'Blockchain Explorer'],
    meetingSchedule: 'Every Thursday, 4:00 PM',
    leads: [
      { name: 'Ryan Park', role: 'Blockchain Lead' },
      { name: 'Amanda White', role: 'Smart Contract Developer' }
    ],
    benefits: [
      'Web3 development skills',
      'Smart contract auditing',
      'DeFi protocol experience',
      'Crypto ecosystem knowledge',
      'Network building'
    ]
  },
  {
    name: 'Game Development',
    icon: '🎮',
    description: 'Create immersive gaming experiences and interactive entertainment. Learn game design, development, and optimization across multiple platforms and engines.',
    whatsappLink: 'https://chat.whatsapp.com/your-game-dev-link',
    topics: ['Game Design', 'Unity', 'Unreal Engine', '3D Modeling', 'Game Physics', 'Level Design', 'Game AI'],
    projects: ['2D Platformer', 'Mobile Puzzle Game', 'Multiplayer Arena', 'VR Experience'],
    meetingSchedule: 'Every Wednesday, 4:00 PM',
    leads: [
      { name: 'James Wilson', role: 'Game Design Lead' },
      { name: 'Elena Rodriguez', role: 'Technical Artist' }
    ],
    benefits: [
      'Game engine mastery',
      'Portfolio development',
      'Asset creation skills',
      'Performance optimization',
      'Game publishing experience'
    ]
  },
  {
    name: 'IoT & Embedded',
    icon: '🔌',
    description: 'Connect the physical and digital worlds through IoT and embedded systems. Build smart devices, automate processes, and create innovative solutions for real-world problems.',
    whatsappLink: 'https://chat.whatsapp.com/your-iot-link',
    topics: ['Embedded Systems', 'Sensor Networks', 'IoT Protocols', 'Hardware Programming', 'Edge Computing', 'Arduino', 'Raspberry Pi'],
    projects: ['Smart Home System', 'Environmental Monitor', 'Industrial IoT Solution', 'Wearable Device'],
    meetingSchedule: 'Every Friday, 2:00 PM',
    leads: [
      { name: 'Michael Chang', role: 'IoT Architect' },
      { name: 'Laura Martinez', role: 'Hardware Lead' }
    ],
    benefits: [
      'Hardware experience',
      'Sensor integration',
      'Protocol knowledge',
      'System design skills',
      'Real-world applications'
    ]
  }
];

export default function Communities() {
  const [selectedCommunity, setSelectedCommunity] = useState<Community | null>(null);
  const [activeSection, setActiveSection] = useState('web-development');

  // Function to scroll to section
  const scrollToSection = (name: string) => {
    const element = document.getElementById(name.replace(/\s+/g, '-').toLowerCase());
    if (element) {
      const offset = 100; // Offset for fixed header
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - offset;
      
      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
      setActiveSection(name);
    }
  };

  // Update active section on scroll
  useEffect(() => {
    const handleScroll = () => {
      const sections = communities.map(c => c.name);
      for (const section of sections) {
        const element = document.getElementById(section.replace(/\s+/g, '-').toLowerCase());
        if (element) {
          const rect = element.getBoundingClientRect();
          if (rect.top <= 150 && rect.bottom >= 150) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <main className="min-h-screen bg-gradient-to-b from-white via-blue-50/30 to-white pt-32 pb-16 relative overflow-hidden">
      {/* Background Decorations */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute top-0 left-0 right-0 h-96 bg-gradient-to-b from-blue-50/50 to-transparent" />
        <div className="absolute top-1/4 -left-48 w-96 h-96 bg-blue-100/40 rounded-full blur-3xl animate-pulse" />
        <div className="absolute top-1/3 -right-48 w-96 h-96 bg-blue-200/40 rounded-full blur-3xl animate-pulse" />
      </div>

      {/* Main Content */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-20"
        >
          <div className="inline-block p-2 px-4 rounded-full bg-blue-50 text-blue-600 font-medium text-sm mb-6">
            🤝 Join our communities
          </div>
          <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-6">
            Tech Communities
          </h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Join our specialized tech communities to connect, learn, and grow with fellow enthusiasts in your field of interest.
          </p>
        </motion.div>

        {/* Communities */}
        <div className="space-y-32">
          {/* AI/ML Community */}
          <motion.section
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="relative"
          >
            {/* Community Header */}
            <div className="flex flex-col md:flex-row items-start gap-8 mb-12">
              <div className="w-full md:w-2/3">
                <div className="flex items-center gap-4 mb-6 flex-wrap">
                  <div className="w-16 h-16 bg-blue-50 rounded-xl flex items-center justify-center text-3xl">
                    {communities[0].icon}
                  </div>
                  <h2 className="text-2xl sm:text-3xl font-bold text-gray-900">{communities[0].name}</h2>
                </div>
                <p className="text-base sm:text-lg text-gray-600 mb-6">{communities[0].description}</p>
                <div className="flex flex-wrap gap-2 mb-6">
                  {communities[0].topics.map((topic) => (
                    <span
                      key={topic}
                      className="px-3 py-1 bg-blue-50 text-blue-600 rounded-full text-sm font-medium"
                    >
                      {topic}
                    </span>
                  ))}
                </div>
                <Link
                  href={communities[0].whatsappLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center px-6 py-3 bg-blue-600 text-white font-medium rounded-xl hover:bg-blue-700 transition-colors w-full sm:w-auto"
                >
                  Join {communities[0].name}
                  <svg className="ml-2 w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                  </svg>
                </Link>
              </div>
              <div className="w-full md:w-1/3 bg-gradient-to-br from-blue-50 to-white rounded-xl p-4 sm:p-6 border border-blue-100/50">
                <div className="mb-6">
                  <h3 className="text-lg font-semibold text-gray-900 mb-3">Community Leads</h3>
                  <div className="space-y-3">
                    {communities[0].leads.map((lead) => (
                      <div key={lead.name} className="flex items-center gap-3 bg-white rounded-lg p-3 shadow-sm">
                        <div className="w-10 h-10 bg-blue-50 rounded-full flex items-center justify-center text-blue-600 font-bold">
                          {lead.name[0]}
                        </div>
                        <div>
                          <div className="font-medium text-gray-900">{lead.name}</div>
                          <div className="text-sm text-gray-600">{lead.role}</div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-3">Meeting Schedule</h3>
                  <div className="flex items-center text-gray-600">
                    <svg className="w-5 h-5 mr-2 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    <span className="text-sm sm:text-base">{communities[0].meetingSchedule}</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Projects and Benefits Grid */}
            <div className="grid md:grid-cols-2 gap-4 sm:gap-8">
              <div className="bg-gradient-to-br from-white to-blue-50/50 rounded-xl p-4 sm:p-6 border border-blue-100/50">
                <h3 className="text-xl font-semibold text-gray-900 mb-4">Current Projects</h3>
                <div className="space-y-4">
                  {communities[0].projects.map((project) => (
                    <div key={project} className="bg-white rounded-lg p-3 sm:p-4 shadow-sm">
                      <div className="flex items-center gap-3">
                        <div className="w-8 h-8 bg-blue-50 rounded-lg flex items-center justify-center text-blue-600 flex-shrink-0">
                          <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
                          </svg>
                        </div>
                        <span className="text-gray-800 text-sm sm:text-base">{project}</span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
              <div className="bg-gradient-to-br from-white to-blue-50/50 rounded-xl p-4 sm:p-6 border border-blue-100/50">
                <h3 className="text-xl font-semibold text-gray-900 mb-4">Community Benefits</h3>
                <div className="space-y-4">
                  {communities[0].benefits.map((benefit) => (
                    <div key={benefit} className="bg-white rounded-lg p-3 sm:p-4 shadow-sm">
                      <div className="flex items-center gap-3">
                        <div className="w-8 h-8 bg-blue-50 rounded-lg flex items-center justify-center text-blue-600 flex-shrink-0">
                          <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                          </svg>
                        </div>
                        <span className="text-gray-800 text-sm sm:text-base">{benefit}</span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </motion.section>

          {/* Swoosh Divider (except after last section) */}
          {communities.length > 1 && (
            <div className="relative py-16">
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-full text-blue-100/40 transform scale-y-75">
                  <Swoosh />
                </div>
              </div>
            </div>
          )}

          {/* Rest of the communities */}
          {communities.slice(1).map((community, index) => (
            <div 
              key={community.name}
              id={community.name.replace(/\s+/g, '-').toLowerCase()}
            >
              <motion.section
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="mb-16 scroll-mt-32"
              >
                {/* Community Header */}
                <div className="flex flex-col md:flex-row items-start gap-8 mb-12">
                  <div className="w-full md:w-2/3">
                    <div className="flex items-center gap-4 mb-6 flex-wrap">
                      <div className="w-16 h-16 bg-blue-50 rounded-xl flex items-center justify-center text-3xl">
                        {community.icon}
                      </div>
                      <h2 className="text-2xl sm:text-3xl font-bold text-gray-900">{community.name}</h2>
                    </div>
                    <p className="text-base sm:text-lg text-gray-600 mb-6">{community.description}</p>
                    <div className="flex flex-wrap gap-2 mb-6">
                      {community.topics.map((topic) => (
                        <span
                          key={topic}
                          className="px-3 py-1 bg-blue-50 text-blue-600 rounded-full text-sm font-medium"
                        >
                          {topic}
                        </span>
                      ))}
                    </div>
                    <Link
                      href={community.whatsappLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center justify-center px-6 py-3 bg-blue-600 text-white font-medium rounded-xl hover:bg-blue-700 transition-colors w-full sm:w-auto"
                    >
                      Join {community.name}
                      <svg className="ml-2 w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                      </svg>
                    </Link>
                  </div>
                  <div className="w-full md:w-1/3 bg-gradient-to-br from-blue-50 to-white rounded-xl p-4 sm:p-6 border border-blue-100/50">
                    <div className="mb-6">
                      <h3 className="text-lg font-semibold text-gray-900 mb-3">Community Leads</h3>
                      <div className="space-y-3">
                        {community.leads.map((lead) => (
                          <div key={lead.name} className="flex items-center gap-3 bg-white rounded-lg p-3 shadow-sm">
                            <div className="w-10 h-10 bg-blue-50 rounded-full flex items-center justify-center text-blue-600 font-bold">
                              {lead.name[0]}
                            </div>
                            <div>
                              <div className="font-medium text-gray-900">{lead.name}</div>
                              <div className="text-sm text-gray-600">{lead.role}</div>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-gray-900 mb-3">Meeting Schedule</h3>
                      <div className="flex items-center text-gray-600">
                        <svg className="w-5 h-5 mr-2 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                        <span className="text-sm sm:text-base">{community.meetingSchedule}</span>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Projects and Benefits Grid */}
                <div className="grid md:grid-cols-2 gap-4 sm:gap-8">
                  <div className="bg-gradient-to-br from-white to-blue-50/50 rounded-xl p-4 sm:p-6 border border-blue-100/50">
                    <h3 className="text-xl font-semibold text-gray-900 mb-4">Current Projects</h3>
                    <div className="space-y-4">
                      {community.projects.map((project) => (
                        <div key={project} className="bg-white rounded-lg p-3 sm:p-4 shadow-sm">
                          <div className="flex items-center gap-3">
                            <div className="w-8 h-8 bg-blue-50 rounded-lg flex items-center justify-center text-blue-600 flex-shrink-0">
                              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
                              </svg>
                            </div>
                            <span className="text-gray-800 text-sm sm:text-base">{project}</span>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                  <div className="bg-gradient-to-br from-white to-blue-50/50 rounded-xl p-4 sm:p-6 border border-blue-100/50">
                    <h3 className="text-xl font-semibold text-gray-900 mb-4">Community Benefits</h3>
                    <div className="space-y-4">
                      {community.benefits.map((benefit) => (
                        <div key={benefit} className="bg-white rounded-lg p-3 sm:p-4 shadow-sm">
                          <div className="flex items-center gap-3">
                            <div className="w-8 h-8 bg-blue-50 rounded-lg flex items-center justify-center text-blue-600 flex-shrink-0">
                              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                              </svg>
                            </div>
                            <span className="text-gray-800 text-sm sm:text-base">{benefit}</span>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </motion.section>

              {/* Swoosh Divider (except after last section) */}
              {index < communities.length - 1 && (
                <div className="relative py-16">
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="w-full text-blue-100/40 transform scale-y-75">
                      <Swoosh />
                    </div>
                  </div>
                </div>
              )}
            </div>
          ))}

          {/* Final CTA Section */}
          <motion.section
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center bg-gradient-to-r from-blue-50 via-white to-blue-50 rounded-2xl p-6 sm:p-12 border border-blue-100/50 mt-16"
          >
            <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-6">Ready to Start Your Tech Journey?</h2>
            <p className="text-base sm:text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
              Join our main iTech Club group to stay updated with all community activities and events.
              Connect with tech enthusiasts across all domains.
            </p>
            <Link
              href="https://chat.whatsapp.com/Jd4j1TARbdoHJntDjImPOj"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center px-6 sm:px-8 py-3 sm:py-4 text-base sm:text-lg font-medium rounded-full text-white bg-blue-600 hover:bg-blue-700 transition-colors duration-300 w-full sm:w-auto"
            >
              Join Main iTech Club Group
              <svg className="ml-2 w-5 sm:w-6 h-5 sm:h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
              </svg>
            </Link>
          </motion.section>
        </div>
      </div>
    </main>
  );
} 