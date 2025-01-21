'use client';

import { Hero } from '@/components/sections/Hero';
import { Features } from '@/components/sections/Features';
import { Stats } from '@/components/sections/Stats';
import { SubCommunities } from '@/components/sections/SubCommunities';
import { Events } from '@/components/sections/Events';
import { Join } from '@/components/sections/Join';

export default function Home() {
  return (
    <main className="bg-white">
      <Hero />
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <Features />
        <Stats />
        <SubCommunities />
        <Events />
      </div>
      <Join />
    </main>
  );
}
