'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import { ArrowLeftIcon, ArrowRightIcon } from '@heroicons/react/24/outline';
import { blogPosts } from '../data';
import { Swoosh } from '@/components/ui/Swoosh';
import { notFound } from 'next/navigation';
import { use } from 'react';

export default function BlogPost({ params }: { params: Promise<{ id: string }> }) {
  const resolvedParams = use(params);
  const post = blogPosts.find(p => p.id.toString() === resolvedParams.id);

  if (!post) {
    notFound();
  }

  return (
    <main className="min-h-screen bg-gradient-to-b from-white via-blue-50/30 to-white">
      {/* Background Decorations */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute top-0 left-0 right-0 h-96 bg-gradient-to-b from-blue-50/50 to-transparent" />
        <div className="absolute top-1/4 -left-48 w-96 h-96 bg-blue-100/40 rounded-full blur-3xl animate-pulse" />
        <div className="absolute top-1/3 -right-48 w-96 h-96 bg-blue-200/40 rounded-full blur-3xl animate-pulse" />
      </div>

      {/* Back Button */}
      <div className="container mx-auto px-4 pt-32">
        <Link
          href="/blog"
          className="inline-flex items-center text-blue-600 hover:text-blue-700 font-medium group"
        >
          <ArrowLeftIcon className="h-4 w-4 mr-2 group-hover:-translate-x-1 transition-transform" />
          Back to Blog
        </Link>
      </div>

      {/* Blog Post Content */}
      <article className="container mx-auto px-4 py-12">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="bg-white/80 backdrop-blur-sm rounded-2xl shadow-xl border border-blue-100/50 overflow-hidden"
          >
            {/* Hero Image */}
            <div className="relative aspect-[21/9] w-full">
              <Image
                src={post.image}
                alt={post.title}
                fill
                className="object-cover"
                priority
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
              <div className="absolute bottom-0 left-0 right-0 p-8 text-white">
                <div className="flex items-center gap-3 mb-4">
                  <span className="px-3 py-1 bg-blue-600/90 backdrop-blur-sm text-sm rounded-full">
                    {post.category}
                  </span>
                  <span className="text-sm">{post.readTime}</span>
                </div>
                <h1 className="text-3xl md:text-4xl font-bold mb-4">
                  {post.title}
                </h1>
                <div className="flex items-center gap-4">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center">
                      <span className="text-blue-600 font-medium">
                        {post.author[0]}
                      </span>
                    </div>
                    <div>
                      <p className="font-medium">{post.author}</p>
                      <p className="text-sm text-gray-200">{post.date}</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Content */}
            <div className="p-8 md:p-12">
              <div className="prose prose-lg max-w-none">
                {post.content.map((section, index) => {
                  switch (section.type) {
                    case 'paragraph':
                      return (
                        <p key={index} className="text-gray-600">
                          {section.content}
                        </p>
                      );
                    case 'heading':
                      return (
                        <h2 key={index} className="text-2xl font-bold text-gray-900 mt-8 mb-4">
                          {section.content}
                        </h2>
                      );
                    case 'list':
                      return (
                        <ul key={index} className="list-disc list-inside space-y-2 text-gray-600">
                          {section.items?.map((item, i) => (
                            <li key={i}>{item}</li>
                          ))}
                        </ul>
                      );
                    case 'code':
                      return (
                        <pre key={index} className="bg-gray-900 text-gray-100 rounded-xl p-6 overflow-x-auto">
                          <code>{section.content}</code>
                        </pre>
                      );
                    default:
                      return null;
                  }
                })}
              </div>
            </div>
          </motion.div>
        </div>
      </article>

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
                    Stay Updated with Our Events
                  </h2>
                  <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
                    Join our WhatsApp community to get instant updates about upcoming events, tech talks, and networking opportunities. Be part of the conversation and never miss an event!
                  </p>
                  <Link
                    href="https://chat.whatsapp.com/LlWo8vl3MknBrRYKPBPcNz"
                    target="_blank"
                    className="inline-flex items-center px-8 py-4 bg-blue-600 text-white rounded-full font-medium hover:bg-blue-700 transition-colors group shadow-lg shadow-blue-500/25"
                  >
                    Join iTech Club Community
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