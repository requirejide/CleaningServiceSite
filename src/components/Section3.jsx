import { GrUserWorker } from "react-icons/gr";
import { HiOutlineHomeModern } from "react-icons/hi2";
import { HiOutlineArrowPathRoundedSquare } from "react-icons/hi2";
import { BsClipboardCheckFill } from "react-icons/bs";
import car_1 from "../assets/car_1.jpg";

function Section3() {
  return (
    <>
      <div className="relative  ">
        <div className="py-20">
          <h3 className="sm:text-2xl relative mb-13 text-center font-bold md:text-4xl">
            WHY CHOOSE DAILY POPPINS
            <span className="inline-block absolute h-[2px] w-[120px] md:w-[200px] -bottom-5 left-[50%] transform translate-x-[-50%] bg-[#EE413D]"></span>
          </h3>
          <p className="text-center w-[90%] md:w-[80%] text-gray-900 text-base leading-[2rem] mx-auto">
            We use professional cleaning techniques and high-quality products
            that have been perfected since we started 25+ years ago. Our teams
            offer regular or one-off cleaning services that can be personalised
            to your needs.
          </p>
        </div>
        <Section3Grid />
        <LearnMoreBtn />
      </div>
    </>
  );
}

export default Section3;

function Section3Grid() {
  return (
    <>
      <div className="px-6 mb-15 md:px-20 gap-y-20 lg:gap-y-0  grid lg:grid-cols-3 justify-items-center   ">
        {/* first grid */}
        <div className="">
          <div className="flex flex-col gap-y-4 items-center lg:items-end mb-10">
            <div className="text-3xl md:text-5xl  text-[#EE413D]">
              <GrUserWorker />
            </div>
            <p className="sm:text-2xl font-semibold">UNIFORMED STAFF</p>
            <p className="text-center lg:text-end w-[270px] sm:w-[350px]">
              All teams are fully insured, led by a team leader, and trained in
              our 360 cleaning system.
            </p>
          </div>
          <div className="flex flex-col gap-y-4 items-center lg:items-end">
            <div className="text-5xl text-[#EE413D]">
              <HiOutlineHomeModern />
            </div>
            <p className="sm:text-2xl font-semibold">PROFESSIONAL STANDARDS</p>
            <p className="text-center lg:text-end w-[270px] sm:w-[350px]">
              We bring a wealth of experience and only the best quality branded
              or eco products to clean your home or office.
            </p>
          </div>
        </div>
        {/* second grid */}
        <div
          style={{ backgroundImage: `url(${car_1})` }}
          className="w-[300px] h-[300px] lg:w-[400px] lg:h-[400px] bg-red-500 bg-cover bg-center rounded-full overflow-hidden"
        >
          {/* <img className="w-full h-auto object-cover" src={car_1} alt="" /> */}
        </div>
        {/* third grid */}
        <div className="">
          <div className="flex flex-col items-center gap-y-4  mb-10">
            <div className="text-3xl sm:text-5xl text-[#EE413D]">
              <BsClipboardCheckFill />
            </div>
            <p className=" sm:text-2xl font-semibold">FLEXIBLE</p>
            <p className="text-center w-[270px] sm:w-[350px]">
              From how often you need cleaning services to your requirements,
              we’ll tailor our cleans to your needs.
            </p>
          </div>
          <div className="flex flex-col items-center gap-y-4  mb-10">
            <div className="text-3xl sm:text-5xl text-[#EE413D]">
              <HiOutlineArrowPathRoundedSquare />
            </div>
            <p className="sm:text-2xl font-semibold">HASSLE-FREE</p>
            <p className=" text-center w-[270px] sm:w-[350px]">
              Whether it’s online or over the phone, scheduling and customising
              your cleans is easy.
            </p>
          </div>
        </div>
      </div>
    </>
  );
}

function LearnMoreBtn() {
  return (
    <>
      <div className="pb-20 text-center">
        <button className="bg-[#EE413D] px-12 py-4 rounded-full text-white">
          Learn More
        </button>
      </div>
    </>
  );
}
