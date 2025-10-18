import Hero from "./components/header/Hero";
import Navbar from "./components/header/Navbar";
import { useEffect, useState } from "react";
import { hero_words } from "./utils/navlist";
import MobileMenu from "./components/header/MobileNav";
import FixedNavbar from "./components/header/FixedNavbar";
import Section2 from "./components/Section2";
import BookOnline from "./components/BookOnline";
import Section3 from "./components/Section3";
import Section4 from "./components/Section4";
import Section5 from "./components/Section5";
import Section6 from "./components/Section6";
import Section7 from "./components/Section7";
import Section8 from "./components/Section8";
import Footer from "./components/Footer";

function App() {
  const [wordIndex, setWordIndex] = useState(0);

  function operateNextIndex() {
    setWordIndex((prevIndex) => (prevIndex + 1) % hero_words.length);
  }
  useEffect(() => {
    const interval = setInterval(() => {
      operateNextIndex();
    }, 5000);

    return () => clearInterval(interval);
  }, []);
  return (
    <>
      <MobileMenu />
      <FixedNavbar />
      <header
        style={{
          backgroundImage: `url(${hero_words[wordIndex].image})`,
          backgroundPosition: "center",
          backgroundSize: "cover",
        }}
        className=" h-[95vh] md:h-[100vh] lg:h-[95vh]  transition-all duration-200  "
      >
        <Navbar />

        <div className="px-4 md:px-20 lg:px-40 ">
          <Hero
            hero_words={hero_words}
            wordIndex={wordIndex}
            operateNextIndex={operateNextIndex}
          />
        </div>
      </header>
      <Section2 bg="bg-white" tc="text-black" />
      <BookOnline />
      <Section3 />
      <Section4 />
      <Section5 />
      <Section6 />
      <Section7 />
      <Section8 />
      <Section2 bg="bg-black" tc="text-white" />
      <Footer />
    </>
  );
}
export default App;
