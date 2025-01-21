'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { motion } from 'framer-motion';
import { cn } from '@/lib/utils';

export function MainNav() {
  const [isOpen, setIsOpen] = useState(false);
  const [hasScrolled, setHasScrolled] = useState(false);
  const pathname = usePathname();
  const isHomePage = pathname === '/';

  useEffect(() => {
    const handleScroll = () => {
      setHasScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const links = [
    ['About', '/about'],
    ['Events', '/events'],
    ['Communities', '/communities'],
    ['Resources', '/resources'],
    ['Contact', '/contact'],
  ];

  return (
    <header 
      className={cn(
        'fixed top-0 left-0 right-0 z-50 transition-all duration-300',
        isHomePage && !hasScrolled
          ? 'bg-transparent' 
          : 'bg-white/95 backdrop-blur-sm shadow-sm border-b border-gray-100'
      )}
      style={{ height: isHomePage ? 'auto' : '5rem' }}
    >
      <nav className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link 
            href="/" 
            className={cn(
              'text-xl sm:text-2xl font-bold transition-colors duration-300',
              isHomePage ? 'text-blue-600' : 'text-blue-600'
            )}
          >
            iTech Club
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-2">
            {links.map(([label, href]) => (
              <Link
                key={href}
                href={href}
                className={cn(
                  'px-4 py-2.5 rounded-lg text-sm font-medium transition-all duration-300 relative group',
                  pathname === href
                    ? 'text-blue-600 bg-blue-50'
                    : 'text-gray-600 hover:text-blue-600 hover:bg-blue-50/50'
                )}
              >
                {label}
                {pathname === href && (
                  <motion.div
                    layoutId="navbar-indicator"
                    className="absolute inset-0 bg-blue-50 rounded-lg -z-10"
                    transition={{ type: 'spring', bounce: 0.25, duration: 0.5 }}
                  />
                )}
              </Link>
            ))}
            <Link
              href="https://chat.whatsapp.com/Jd4j1TARbdoHJntDjImPOj"
              target="_blank"
              rel="noopener noreferrer"
              className="ml-2 px-4 py-2.5 rounded-lg text-sm font-medium bg-blue-600 text-white hover:bg-blue-700 transition-colors"
            >
              Join iTech Club
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden p-2 rounded-lg text-blue-600 hover:bg-blue-50 transition-colors"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              {isOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            className="md:hidden py-4 px-2 bg-white border-t border-gray-100"
          >
            <div className="flex flex-col gap-2">
              {links.map(([label, href]) => (
                <Link
                  key={href}
                  href={href}
                  onClick={() => setIsOpen(false)}
                  className={cn(
                    'px-4 py-2.5 rounded-lg text-sm font-medium transition-colors',
                    pathname === href
                      ? 'text-blue-600 bg-blue-50'
                      : 'text-gray-600 hover:text-blue-600 hover:bg-blue-50/50'
                  )}
                >
                  {label}
                </Link>
              ))}
              <Link
                href="https://chat.whatsapp.com/Jd4j1TARbdoHJntDjImPOj"
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => setIsOpen(false)}
                className="px-4 py-2.5 rounded-lg text-sm font-medium bg-blue-600 text-white hover:bg-blue-700 transition-colors"
              >
                Join iTech Club
              </Link>
            </div>
          </motion.div>
        )}
      </nav>
    </header>
  );
}

const subCommunities = [
  {
    name: 'AI/ML Community',
    href: '/communities/ai-ml',
    icon: '🤖',
  },
  {
    name: 'Web Development',
    href: '/communities/web-dev',
    icon: '🌐',
  },
  {
    name: 'Cybersecurity',
    href: '/communities/cybersecurity',
    icon: '🔒',
  },
  {
    name: 'UI/UX Design',
    href: '/communities/ui-ux',
    icon: '🎨',
  },
  {
    name: 'Blockchain',
    href: '/communities/blockchain',
    icon: '⛓️',
  },
  {
    name: 'Product Management',
    href: '/communities/product-management',
    icon: '📱',
  },
  {
    name: 'Project Management',
    href: '/communities/project-management',
    icon: '📊',
  },
  {
    name: 'Cloud Computing',
    href: '/communities/cloud-computing',
    icon: '☁️',
  },
  {
    name: 'IoT',
    href: '/communities/iot',
    icon: '🔌',
  },
  {
    name: 'Data Science',
    href: '/communities/data-science',
    icon: '📊',
  },
]; 