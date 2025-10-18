import { useEffect, useState } from "react";
import handsHolding from "../assets/hands-holding.avif";
import profile_1 from "../assets/profile_1.avif";
import profile_2 from "../assets/profile_2.avif";
import { IoMdQuote } from "react-icons/io";
import { motion, AnimatePresence } from "framer-motion";
motion;
const reviews = [
  {
    id: 0,
    profile: profile_1,
    comment: `I have been using Daily Poppins for over ten years. Agnes and her
              team are excellent cleaners, they have never let me down and
              provide a superior service. I highly recommend them for all
              cleaning services.`,
  },
  {
    id: 1,
    profile: profile_2,
    comment: `I have been using Daily Poppins3 for over ten years. Agnes and her
              team are excellent cleaners, they have never let me down and
              provide a superior service. I highly recommend them for all
              cleaning services.`,
  },
];

function Section8() {
  const [nextId, setNextId] = useState(0);

  // Rotate every 4 seconds for a smoother rhythm
  useEffect(() => {
    const interval = setInterval(() => {
      setNextId((prev) => (prev + 1) % reviews.length);
    }, 6000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div
      style={{ backgroundImage: `url(${handsHolding})` }}
      className="h-[90vh] sm:h-[80vh] md:h-[160vh] lg:h-[80vh]  bg-fixed relative bg-cover bg-center"
    >
      <div className="absolute px-6 text-white overflow-hidden w-full h-full py-20 top-0 bottom-0 left-0 right-0 bg-[#000000b3]">
        <div className="mb-20">
          <p className="text-2xl lg:text-4xl  lg:w-[700px] mx-auto mb-5 font-bold text-center">
            HERE’S WHAT OUR CUSTOMERS SAY
          </p>
          <p className="text-center text-sm md:text-base lg:w-[900px] mx-auto">
            Our business is based on repeat business therefore we must be
            getting something right having conducted over 1,000,000 hours of
            regular cleaning services! We have customers who have used our
            services for over 26 years.
          </p>
        </div>

        <AnimatePresence mode="wait">
          <motion.div
            key={nextId}
            initial={{ opacity: 0, x: 200 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -200 }}
            transition={{ duration: 0.8 }}
            className="flex flex-col  md:w-[50%] mx-auto items-center"
          >
            <div className="w-[100px] mb-3 mx-auto overflow-hidden h-[100px] rounded-full shadow-lg">
              <img
                className="w-full h-full object-cover"
                src={reviews[nextId].profile}
                alt="Customer profile"
              />
            </div>
            <div>
              <p className="flex justify-center text-3xl">
                <IoMdQuote />
              </p>
              <p className="lg:w-[500px] text-sm mx-auto text-center leading-relaxed md:text-base">
                {reviews[nextId].comment}
              </p>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>
    </div>
  );
}

export default Section8;
