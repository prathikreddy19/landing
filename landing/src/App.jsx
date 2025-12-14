import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import WhatIBuild from "./components/WhatIBuild";
import Highlights from "./components/Highlights";
import CTA from "./components/CTA";
import Footer from "./components/Footer";
import ScrollProgress from "./components/ScrollProgress";

export default function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <About />
      <WhatIBuild />
      <Highlights />
      <CTA />
      <Footer />
      <ScrollProgress />
    </>
  );
}
