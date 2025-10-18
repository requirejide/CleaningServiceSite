import React from "react";
import { MdOutlineWarehouse } from "react-icons/md";
import { CiClock2 } from "react-icons/ci";
import { GiVacuumCleaner } from "react-icons/gi";

function Section2({ bg, tc }) {
  return (
    <>
      <div
        className={`px-4  ${bg} ${tc} md:px-20  lg:px-40 py-15 grid md:grid-cols-2 lg:grid-cols-3 gap-y-10 gap-x-10`}
      >
        <div className="flex gap-5">
          <div className="text-4xl sm:text-6xl text-[#EE413D]">
            <CiClock2 />
          </div>
          <div className=" w-[270px] ">
            <p>BOOK ONLINE</p>
            <p>
              Just Say When... Use our quick and simple online booking system.
            </p>
          </div>
        </div>
        <div className="flex gap-5">
          <div className="text-4xl text-[#EE413D]">
            <MdOutlineWarehouse />
          </div>
          <div className="w-[270px]">
            <p>HASSLE-FREE</p>
            <p>We’ll bring everything needed for your clean.</p>
          </div>
        </div>
        <div className="flex gap-5">
          <div className="text-4xl text-[#EE413D]">
            <GiVacuumCleaner />
          </div>
          <div className="w-[270px]">
            <p>COMPLETE CONTROL</p>
            <p>Login and control your cleaning service 24/7</p>
          </div>
        </div>
      </div>
    </>
  );
}
export default Section2;
