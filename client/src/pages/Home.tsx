import React, { useEffect } from 'react';
import Header from '@/components/Header';
import Welcome from '@/components/Welcome';
import Timeline from '@/components/Timeline';
import Skills from '@/components/Skills';
import Projects from '@/components/Projects';
import Goals from '@/components/Goals';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';

function Home() {
  // Efecto para asegurar que la página se cargue desde el inicio al recargar
  useEffect(() => {
    // Función para forzar el scroll al inicio
    const scrollToTop = () => {
      // Forzar el scroll al inicio de la página inmediatamente
      window.scrollTo(0, 0);
      
      // Como medida adicional, limpiar cualquier hash en la URL
      if (window.location.hash) {
        window.history.replaceState(null, '', window.location.pathname);
      }
      
      // Como último recurso, intentar de nuevo después de un breve retraso
      setTimeout(() => {
        window.scrollTo(0, 0);
        
        // Buscar el elemento top y hacer scroll hacia él
        const topElement = document.getElementById('page-top');
        if (topElement) {
          topElement.scrollIntoView();
        }
      }, 100);
    };
    
    // Ejecutar inmediatamente
    scrollToTop();
    
    // También ejecutar después de que la página esté completamente cargada
    window.addEventListener('load', scrollToTop);
    
    // Limpiar el event listener al desmontar el componente
    return () => {
      window.removeEventListener('load', scrollToTop);
    };
  }, []);

  return (
    <div id="page-top">
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
    </div>
  );
}

export default Home;
