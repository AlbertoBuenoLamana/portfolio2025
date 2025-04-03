import React from 'react';
import Header from '@/components/Header';
import Welcome from '@/components/Welcome';
import Timeline from '@/components/Timeline';
import Skills from '@/components/Skills';
import Projects from '@/components/Projects';
import Goals from '@/components/Goals';
import Footer from '@/components/Footer';

const Home: React.FC = () => {
  return (
    <>
      <Header />
      
      <main className="flex-1 max-w-7xl w-full mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <Welcome />
        <Timeline />
        <Skills />
        <Projects />
        <Goals />
      </main>
      
      <Footer />
    </>
  );
};

export default Home;
