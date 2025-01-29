'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import { ArrowRightIcon } from '@heroicons/react/24/outline';
import { blogPosts } from './data';
import { Swoosh } from '@/components/ui/Swoosh';

export default function BlogPage() {
  const [selectedCategory, setSelectedCategory] = useState<string>('All');

  const categories = ['All', ...new Set(blogPosts.map(post => post.category))];
  
  const filteredPosts = selectedCategory === 'All'
    ? blogPosts
    : blogPosts.filter(post => post.category === selectedCategory);

  return (
    <main className="min-h-screen bg-gradient-to-b from-white via-blue-50/30 to-white">
      {/* Background Decorations */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute top-0 left-0 right-0 h-96 bg-gradient-to-b from-blue-50/50 to-transparent" />
        <div className="absolute top-1/4 -left-48 w-96 h-96 bg-blue-100/40 rounded-full blur-3xl animate-pulse" />
        <div className="absolute top-1/3 -right-48 w-96 h-96 bg-blue-200/40 rounded-full blur-3xl animate-pulse" />
      </div>

      {/* Hero Section */}
      <section className="relative pt-32 pb-20 overflow-hidden">
        <div className="container mx-auto px-4 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="max-w-4xl mx-auto text-center"
          >
            <div className="inline-block p-2 px-4 rounded-full bg-blue-50 text-blue-600 font-medium text-sm mb-6">
              📚 Tech Insights & Tutorials
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              iTech Club Blog
            </h1>
            <p className="text-xl text-gray-600 mb-12 max-w-2xl mx-auto">
              Explore in-depth articles, tutorials, and insights about technology, development, and innovation from our community experts
            </p>
            <div className="flex flex-wrap justify-center gap-3">
              {categories.map((category) => (
                <button
                  key={category}
                  onClick={() => setSelectedCategory(category)}
                  className={`px-6 py-2.5 rounded-full text-sm font-medium transition-all transform hover:scale-105 ${
                    selectedCategory === category
                      ? 'bg-blue-600 text-white shadow-lg shadow-blue-500/25'
                      : 'bg-white text-gray-600 hover:bg-gray-50 hover:text-blue-600'
                  }`}
                >
                  {category}
                </button>
              ))}
            </div>
          </motion.div>
        </div>
        <div className="absolute bottom-0 left-0 right-0 text-blue-50/20">
          <Swoosh />
        </div>
      </section>

      {/* Blog Posts Grid */}
      <section className="container mx-auto px-4 py-16 relative z-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredPosts.map((post, index) => (
            <motion.div
              key={post.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group bg-white/80 backdrop-blur-sm rounded-xl shadow-md hover:shadow-xl transition-all duration-300 border border-gray-100 hover:border-blue-500/50 flex flex-col"
            >
              <Link href={`/blog/${post.id}`} className="flex-1">
                <div className="relative aspect-[16/9] rounded-t-xl overflow-hidden">
                  <Image
                    src={post.image}
                    alt={post.title}
                    fill
                    className="object-cover transition-transform duration-300 group-hover:scale-105"
                  />
                </div>
                <div className="p-8 space-y-4">
                  <div className="flex items-center gap-3">
                    <span className="px-3 py-1 bg-blue-100 text-blue-800 text-sm rounded-full">
                      {post.category}
                    </span>
                    <span className="text-gray-500 text-sm">{post.readTime}</span>
                  </div>
                  <h2 className="text-xl font-semibold text-gray-900 group-hover:text-blue-600 transition-colors line-clamp-2">
                    {post.title}
                  </h2>
                  <p className="text-gray-600 line-clamp-2">
                    {post.excerpt}
                  </p>
                  <div className="flex items-center gap-3 pt-4 border-t border-gray-100">
                    <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center">
                      <span className="text-blue-600 font-medium">
                        {post.author[0]}
                      </span>
                    </div>
                    <div>
                      <p className="text-sm font-medium text-gray-900">
                        {post.author}
                      </p>
                      <p className="text-sm text-gray-500">
                        {post.date}
                      </p>
                    </div>
                  </div>
                </div>
              </Link>
              <div className="px-8 pb-8 mt-auto">
                <Link 
                  href={`/blog/${post.id}`}
                  className="inline-flex items-center justify-center w-full px-6 py-3 bg-blue-600 text-white rounded-xl font-medium transition-colors group hover:bg-blue-700"
                >
                  Check out this blog
                  <ArrowRightIcon className="h-4 w-4 ml-2 group-hover:translate-x-1 transition-transform" />
                </Link>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Swoosh Divider */}
      <div className="relative w-full overflow-hidden py-20">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-blue-50/10 to-transparent" />
        <div className="text-blue-50/20 transform -translate-y-1/2">
          <Swoosh />
        </div>
      </div>

      {/* Join Community CTA */}
      <section className="relative py-24 overflow-hidden">
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto">
            <div className="bg-gradient-to-b from-blue-50 to-white rounded-3xl p-8 md:p-12 shadow-lg relative overflow-hidden">
              <div className="absolute inset-0">
                <div className="absolute inset-0 bg-gradient-to-b from-white/50 to-white/20" />
                <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-px bg-gradient-to-r from-transparent via-blue-500/50 to-transparent" />
              </div>
              <div className="relative">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5 }}
                  className="text-center"
                >
                  <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                    Stay Updated with Tech Content
                  </h2>
                  <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
                    Join our WhatsApp community to get exclusive tech insights, tutorials, and in-depth articles. Connect with fellow tech enthusiasts and never miss our latest content!
                  </p>
                  <Link
                    href="https://chat.whatsapp.com/LlWo8vl3MknBrRYKPBPcNz"
                    target="_blank"
                    className="inline-flex items-center px-8 py-4 bg-blue-600 text-white rounded-full font-medium hover:bg-blue-700 transition-colors group shadow-lg shadow-blue-500/25"
                  >
                    Join Our Tech Community
                    <ArrowRightIcon className="h-5 w-5 ml-2 group-hover:translate-x-1 transition-transform" />
                  </Link>
                </motion.div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
} 