'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { Swoosh } from '@/components/ui/Swoosh';
import { useState } from 'react';

export default function Contact() {
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(null);

  const contactMethods = [
    {
      name: 'X (Twitter)',
      description: 'Follow us for the latest updates and announcements',
      href: 'https://x.com/ItechclubZetech',
      icon: (
        <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
          <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
        </svg>
      ),
    },
    {
      name: 'LinkedIn',
      description: 'Join our professional network for career opportunities',
      href: 'https://www.linkedin.com/groups/9238662/',
      icon: (
        <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
          <path fillRule="evenodd" d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" clipRule="evenodd" />
        </svg>
      ),
    },
    {
      name: 'WhatsApp',
      description: 'Join our community group for direct communication',
      href: 'https://chat.whatsapp.com/Jd4j1TARbdoHJntDjImPOj',
      icon: (
        <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
          <path fillRule="evenodd" d="M19.355,4.6A10.38,10.38,0,0,0,3.78,17.854L2.254,22.721l5-1.314A10.38,10.38,0,0,0,19.355,4.6ZM12.067,20.7A8.634,8.634,0,0,1,7.484,19.6l-.328-.2L3.664,20.27l.885-3.234-.215-.343a8.63,8.63,0,1,1,7.733,4.008Zm4.709-6.483c-.258-.129-1.527-.754-1.764-.84s-.409-.129-.581.129-.667.84-.818,1.015-.3.193-.559.064a7.066,7.066,0,0,1-2.076-1.284,7.785,7.785,0,0,1-1.436-1.789c-.151-.258-.016-.4.113-.527s.258-.3.387-.451a1.75,1.75,0,0,0,.258-.429.477.477,0,0,0-.022-.451c-.064-.129-.581-1.4-.8-1.916-.209-.5-.422-.432-.581-.441-.151-.006-.323-.009-.5-.009a.948.948,0,0,0-.689.322,2.894,2.894,0,0,0-.9,2.155,5.055,5.055,0,0,0,1.056,2.67,11.628,11.628,0,0,0,4.451,3.938,14.927,14.927,0,0,0,1.483.549,3.575,3.575,0,0,0,1.641.1,2.654,2.654,0,0,0,1.742-1.229,2.16,2.16,0,0,0,.151-1.229C17.214,14.409,17.042,14.344,16.776,14.215Z" clipRule="evenodd" />
        </svg>
      ),
    },
  ];

  const faqs = [
    {
      question: "When and where can I find iTech Club?",
      answer: "You can find us at the IZET Hub, TRC Campus during weekdays. Our hub is a vibrant space where members can collaborate, work on projects, and learn together. Drop by anytime during weekdays - we'd love to meet you!"
    },
    {
      question: "How can I join iTech Club?",
      answer: "Joining is easy! Start by joining our WhatsApp community group. Then, visit us at IZET Hub, TRC Campus during weekdays. We welcome students from all departments who are passionate about technology and innovation."
    },
    {
      question: "Do I need prior tech experience?",
      answer: "Not at all! We welcome members of all skill levels. Whether you're just starting your tech journey or you're an experienced developer, our community is built on learning and growing together. We have resources and mentors to help you at every step."
    },
    {
      question: "What activities does iTech Club organize?",
      answer: "We organize a variety of activities including:\n• Hands-on coding workshops\n• Tech talks and seminars\n• Hackathons and coding competitions\n• Project collaborations\n• Networking events\n• Industry expert sessions"
    },
    {
      question: "Can I propose a tech project or event?",
      answer: "Absolutely! We strongly encourage member initiatives. You can:\n• Share your ideas at IZET Hub\n• Propose projects in our WhatsApp group\n• Lead a workshop on your area of expertise\n• Start a study group\n• Organize a hackathon or tech event"
    },
    {
      question: "What resources are available to members?",
      answer: "Members have access to:\n• IZET Hub workspace and facilities\n• Mentorship from experienced members\n• Learning resources and tutorials\n• Project collaboration opportunities\n• Networking with industry professionals\n• Workshops and training sessions"
    }
  ];

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
            🤝 Connect with us
          </div>
          <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-6">
            Get in Touch
          </h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Have questions or want to join our community? We'd love to hear from you. Reach out through any of these channels.
          </p>
        </motion.div>

        {/* Contact Methods Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {contactMethods.map((method, index) => (
            <motion.a
              key={method.name}
              href={method.href}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group relative p-6 bg-white/80 backdrop-blur-sm rounded-2xl shadow-sm border border-gray-100 hover:shadow-md hover:border-blue-100 transition-all duration-300"
            >
              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 bg-blue-50 rounded-xl flex items-center justify-center text-blue-600 group-hover:bg-blue-600 group-hover:text-white transition-colors">
                  {method.icon}
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 group-hover:text-blue-600 transition-colors">
                    {method.name}
                  </h3>
                  <p className="text-sm text-gray-600 mt-1">
                    {method.description}
                  </p>
                </div>
              </div>
            </motion.a>
          ))}
        </div>

        {/* Physical Location Section - Updated to match community section style */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="max-w-4xl mx-auto mt-20 p-8 bg-gradient-to-br from-blue-50 via-white to-blue-50 rounded-2xl border border-blue-100 shadow-sm"
        >
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Visit IZET Hub</h2>
          <p className="text-gray-600 mb-6">
            Our home is at IZET Hub, TRC Campus - a dynamic space where innovation meets collaboration. Drop by during weekdays to meet fellow tech enthusiasts, work on projects, or just hang out in our creative environment.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-white/80 backdrop-blur-sm p-6 rounded-xl border border-blue-100 shadow-sm hover:shadow-md transition-all duration-300">
              <h3 className="font-semibold text-gray-900 mb-2">Open Hours</h3>
              <p className="text-gray-600">
                Weekdays<br/>
                IZET Hub, TRC Campus<br/>
                Drop in anytime!
              </p>
            </div>
            <div className="bg-white/80 backdrop-blur-sm p-6 rounded-xl border border-blue-100 shadow-sm hover:shadow-md transition-all duration-300">
              <h3 className="font-semibold text-gray-900 mb-2">What to Expect</h3>
              <p className="text-gray-600">
                • Collaborative workspace<br/>
                • Tech workshops & events<br/>
                • Networking opportunities
              </p>
            </div>
          </div>
        </motion.div>

        {/* FAQs Section - Enhanced with more blue accents */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="max-w-4xl mx-auto mt-20"
        >
          <h2 className="text-2xl font-bold text-gray-900 mb-8 text-center">Frequently Asked Questions</h2>
          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-gradient-to-r from-blue-50/80 to-white/80 backdrop-blur-sm rounded-xl border border-blue-100 shadow-sm overflow-hidden hover:shadow-md transition-all duration-300"
              >
                <button
                  onClick={() => setOpenFaqIndex(openFaqIndex === index ? null : index)}
                  className="w-full px-6 py-4 text-left flex justify-between items-center hover:bg-blue-50/50 transition-colors"
                >
                  <h3 className="text-lg font-semibold text-gray-900">{faq.question}</h3>
                  <svg
                    className={`w-5 h-5 text-blue-500 transform transition-transform ${
                      openFaqIndex === index ? 'rotate-180' : ''
                    }`}
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M19 9l-7 7-7-7"
                    />
                  </svg>
                </button>
                <div
                  className={`px-6 transition-all duration-200 ease-in-out ${
                    openFaqIndex === index ? 'py-4 border-t border-blue-100 bg-gradient-to-r from-blue-50/50 to-transparent' : 'py-0 h-0'
                  }`}
                >
                  <p className="text-gray-600 whitespace-pre-line">
                    {openFaqIndex === index ? faq.answer : ''}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Join Community Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="text-center mt-20 p-8 bg-gradient-to-br from-blue-50 via-white to-blue-50 rounded-2xl border border-blue-100 shadow-sm max-w-4xl mx-auto"
        >
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Join Our Community</h2>
          <p className="text-gray-600 mb-6">
            Be part of a vibrant tech community! Join our WhatsApp group to connect with fellow members, stay updated on events, and get instant support.
          </p>
          <Link
            href="https://chat.whatsapp.com/Jd4j1TARbdoHJntDjImPOj"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block px-8 py-4 bg-blue-600 text-white rounded-xl hover:bg-blue-700 transition-colors shadow-sm hover:shadow-md"
          >
            Join WhatsApp Community
          </Link>
        </motion.div>
      </div>
    </main>
  );
} 