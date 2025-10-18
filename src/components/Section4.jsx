import kitchen from "../assets/kitchen_design2.avif";
import { CiClock1 } from "react-icons/ci";
import { MdOutlineDiamond } from "react-icons/md";
import { VscWorkspaceTrusted } from "react-icons/vsc";
function Section4() {
  return (
    <>
      <div
        style={{ backgroundImage: `url(${kitchen})` }}
        className="relative  h-[100vh] md:h-[150vh] lg:h-[70vh] text-white mb-30 lg:mb-10 border-2  bg-fixed bg-center bg-cover "
      >
        <div className="absolute w-full h-full bg-[#0000008a]   flex flex-col items-center justify-center gap-10">
          <p className="text-3xl">WHAT DO WE DO</p>
          <p className="w-[70%] text-center leading-[1.7rem]">
            For each room in your home or office, we cover all aspects of
            cleaning, from scrubbing to vacuuming, polishing, and more. Time
            allowing, no job is too big or small if you have specific cleaning
            or ironing needs.
          </p>
          <ul className="flex gap-10 ">
            <li className="flex flex-col items-center gap-4 ">
              <div className="text-2xl md:text-5xl">
                <CiClock1 />
              </div>
              <p className="text-xs  text-center">JUST SAY WHEN</p>
            </li>
            <li className="flex flex-col items-center gap-4 ">
              <div className="text-2xl md:text-5xl">
                <MdOutlineDiamond />
              </div>
              <p className="text-xs text-center">OUR PROMISE TO YOU</p>
            </li>
            <li className="flex flex-col items-center gap-4 ">
              <div className="text-2xl md:text-5xl">
                <VscWorkspaceTrusted />
              </div>
              <p className="text-xs text-center">TRUSTED BY OUR CUSTOMERS</p>
            </li>
          </ul>

          <p className="w-[80%] text-center lg:w-[60%]">
            Let us know your preferred arrival time and date and we’ll do every
            we can to accommodate your needs. We can work around busy schedules,
            home working, and those times where you’ll be home or away.
          </p>
        </div>
      </div>
    </>
  );
}
export default Section4;
