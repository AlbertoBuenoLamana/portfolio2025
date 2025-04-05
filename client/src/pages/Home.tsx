import React from 'react';
import Header from '@/components/Header';
import Welcome from '@/components/Welcome';
import Timeline from '@/components/Timeline';
import Skills from '@/components/Skills';
import Projects from '@/components/Projects';
import Goals from '@/components/Goals';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';

function Home() {
  return (
    <>
      <Header />
      
      <main className="flex-1 max-w-[1600px] w-full mx-auto px-4 sm:px-6 md:px-8 lg:px-10 xl:px-12 py-8 md:py-12 space-y-16 md:space-y-24 transition-all duration-300 ease-in-out">
        <section className="scroll-mt-20 transition-all duration-300">
          <Welcome />
        </section>
        
        <section className="scroll-mt-20 transition-all duration-300">
          <Timeline />
        </section>
        
        <section className="scroll-mt-20 transition-all duration-300">
          <Skills />
        </section>
        
        <section className="scroll-mt-20 transition-all duration-300">
          <Projects />
        </section>
        
        <section className="scroll-mt-20 transition-all duration-300">
          <Goals />
        </section>
        
        <section className="scroll-mt-20 transition-all duration-300">
          <Contact />
        </section>
      </main>
      
      <Footer />
    </>
  );
}

export default Home;
