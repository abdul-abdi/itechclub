'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import Image from 'next/image';

export function Footer() {
  const quickLinks = [
    { name: 'About', href: '/about' },
    { name: 'Events', href: '/events' },
    { name: 'Communities', href: '/communities' },
    { name: 'Resources', href: '/resources' },
    { name: 'Contact', href: '/contact' },
  ];

  const resources = [
    { name: 'Tech Blog', href: '/resources' },
    { name: 'Learning Paths', href: '/resources' },
    { name: 'Project Gallery', href: '/resources' },
    { name: 'Tech Stack', href: '/resources' },
  ];

  const social = [
    { name: 'X (Twitter)', href: 'https://twitter.com/abdullahiabdi00' },
    { name: 'LinkedIn', href: 'https://www.linkedin.com/in/abdullahi-abdi-49a482251/' },
    { name: 'WhatsApp', href: 'https://chat.whatsapp.com/Jd4j1TARbdoHJntDjImPOj' },
    { name: 'GitHub', href: 'https://github.com/0xAbdulKhalid' },
  ];

  return (
    <footer className="bg-white border-t border-gray-100">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 sm:gap-12">
          {/* Brand */}
          <div>
            <Link href="/" className="text-2xl font-bold text-blue-600">
              iTech Club
            </Link>
            <p className="mt-4 text-gray-600 text-sm">
              Empowering students to innovate, learn, and grow together in the world of technology.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-gray-900 font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-gray-600 hover:text-blue-600 transition-colors text-sm"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h3 className="text-gray-900 font-semibold mb-4">Resources</h3>
            <ul className="space-y-3">
              {resources.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-gray-600 hover:text-blue-600 transition-colors text-sm"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Social Links */}
          <div>
            <h3 className="text-gray-900 font-semibold mb-4">Connect With Us</h3>
            <ul className="space-y-3">
              {social.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-600 hover:text-blue-600 transition-colors text-sm"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-gray-100">
          <p className="text-center text-gray-600 text-sm">
            © {new Date().getFullYear()} iTech Club. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
} 