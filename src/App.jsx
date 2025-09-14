// src/App.jsx

import Navbar from './components/Navbar'
import Hero from './sections/Hero'
import Footer from './components/Footer';
import Skills from './sections/Skills'; 


function App() {
  return (
    <div className="min-h-screen w-full relative bg-[#000000]">
      <div
        className="inset-0 z-0 absolute"
        style={{
          backgroundImage: `
            linear-gradient(to right, rgba(100,116,139,0.4) 1px, transparent 1px),
            linear-gradient(to bottom, rgba(100,116,139,0.4) 1px, transparent 1px)
          `,
          backgroundSize: "30px 30px",
          WebkitMaskImage:
            "radial-gradient(ellipse 90% 90% at 0% 0%, #000 60%, transparent 100%)",
          maskImage:
            "radial-gradient(ellipse 90% 90% at 0% 0%, #000 90%, transparent 100%)",
        }}
      />

      {/* Page Content */}
      <div className='relative z-10 max-w-4xl mx-auto'>
      <Navbar />
      <Hero />
      <Skills />
      <Footer />
      </div>
      
    </div>
  );
}

export default App;
