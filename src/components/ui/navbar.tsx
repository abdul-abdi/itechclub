import { motion } from 'framer-motion';
import Link from 'next/link';

export function Navbar() {
  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-lg border-b border-blue-100"
    >
      <nav className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <Link href="/" className="flex items-center gap-2">
            <motion.div
              whileHover={{ rotate: 360 }}
              transition={{ duration: 0.5 }}
              className="w-10 h-10 bg-blue-600 rounded-lg flex items-center justify-center"
            >
              <span className="text-white font-bold text-xl">i</span>
            </motion.div>
            <span className="text-xl font-bold bg-gradient-to-r from-blue-600 to-blue-800 bg-clip-text text-transparent">
              iTech Club
            </span>
          </Link>

          <div className="hidden md:flex items-center gap-8">
            {navItems.map((item) => (
              <motion.div
                key={item.label}
                whileHover={{ y: -2 }}
                className="relative group"
              >
                <Link
                  href={item.href}
                  className="text-gray-600 hover:text-blue-600 transition-colors"
                >
                  {item.label}
                </Link>
                <motion.div
                  className="absolute -bottom-1 left-0 w-0 h-0.5 bg-blue-600 group-hover:w-full transition-all duration-300"
                />
              </motion.div>
            ))}
          </div>

          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition-colors"
          >
            Join Now
          </motion.button>
        </div>
      </nav>
    </motion.header>
  );
}

const navItems = [
  { label: 'Home', href: '/' },
  { label: 'About', href: '#about' },
  { label: 'Programs', href: '#programs' },
  { label: 'Events', href: '#events' },
  { label: 'Contact', href: '#contact' },
]; 