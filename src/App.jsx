import Navbar from "./components/Navbar";
import Hero from "./sections/Hero";
import Footer from "./components/Footer";
import Skills from "./sections/Skills";
import Projects from "./sections/Projects";
import Education from "./sections/Education";

function App() {
  return (
    <div className="min-h-screen md:w-full w-fit relative bg-[#000000]">
      <div
        className="inset-0 z-0 absolute"
        style={{
          backgroundImage: `
            linear-gradient(to right, rgba(100,116,139,0.4) 1px, transparent 1px),
            linear-gradient(to bottom, rgba(100,116,139,0.4) 1px, transparent 1px)
          `,
          backgroundSize: "30px 30px",
          WebkitMaskImage:
            "radial-gradient(ellipse 100% 30% at 0% 0%, #000 30%, transparent 100%)",
          maskImage:
            "radial-gradient(ellipse 100% 30% at 0% 0%, #000 30%, transparent 100%)",
        }}
      />

      <div className="relative z-10 max-w-4xl mx-auto">
        <Navbar />
        <Hero />
        <Skills />
        <Projects />
        <Education />
      </div>
      <Footer />
    </div>
  );
}

export default App;
