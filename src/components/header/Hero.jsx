import { CiCircleChevLeft } from "react-icons/ci";
import { CiCircleChevRight } from "react-icons/ci";
import { AnimatePresence, motion } from "framer-motion";
motion;
function Hero({ hero_words, wordIndex, operateNextIndex }) {
  return (
    <>
      <motion.div
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, ease: "backInOut", delay: 0.5 }}
        className=" text-center   transition-all duration-200  py-20 relative"
      >
        <h1
          key={wordIndex}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="text-4xl md:text-5xl mb-5 md:mb-10 text-white"
        >
          {hero_words[wordIndex].top}
        </h1>

        <p
          key={wordIndex + "-p"}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.6, ease: "easeOut", delay: 0.2 }}
          className="text-xl md:text-3xl mb-10 text-white"
        >
          {hero_words[wordIndex].middle}
        </p>

        <div className="flex justify-center gap-5 flex-wrap">
          <RedButton hero_words={hero_words} wordIndex={wordIndex} />
        </div>

        <div
          onClick={operateNextIndex}
          className="text-6xl cursor-pointer text-white absolute -left-20 top-[50%] 
             active:scale-90 active:opacity-70 transition-transform duration-150"
        >
          <CiCircleChevLeft />
        </div>

        <div
          onClick={operateNextIndex}
          className="hidden cursor-pointer md:block text-6xl text-white absolute -right-20 top-[50%]
             active:scale-90 active:opacity-70 transition-transform duration-150"
        >
          <CiCircleChevRight />
        </div>
      </motion.div>

      <div className="absolute transform translate-x-[-50%] left-[50%] transition-all duration-200 bottom-[8%] md:-bottom-[85%] lg:bottom-[8%] ">
        <span
          className={`inline-block w-[15px] scale-50 ${
            wordIndex === 0 && "bg-white scale-100"
          } h-[15px] mr-3 rounded-full border-2 border-white`}
        ></span>
        <span
          className={`inline-block w-[15px] h-[15px] scale-50 ${
            wordIndex === 1 && "bg-white scale-100"
          } rounded-full border-2 border-white`}
        ></span>
      </div>
    </>
  );
}
export default Hero;

function RedButton({ hero_words, wordIndex }) {
  return (
    <>
      {hero_words[wordIndex].btn.map((val, index) => (
        <motion.div key={index} className="">
          <button className="bg-[#EE413D] text-white cursor-pointer rounded-full px-10 py-4 active:scale-90 active:opacity-70 transition-transform duration-150">
            {val}
          </button>
        </motion.div>
      ))}
    </>
  );
}
