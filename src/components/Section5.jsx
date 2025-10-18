import React from "react";
import multi_img from "../assets/multiple_img.jpg";

export default function Section5() {
  return (
    <>
      <div className="flex  flex-col lg:flex-row justify-center  items-center gap-10 mb-10 ">
        <div className=" md:w-[500px]  h-fit text-center   gap-5">
          <p className="text-3xl mb-5">WHAT ELSE CAN WE OFFER</p>
          <p className="mb-5  mx-auto leading-[1.5rem] w-[80%]">
            Doing the ironing, taking out the rubbish, and getting to
            harder-to-reach areas are just some of the chores our team can take
            care of. If you would like to book extra time for tasks like
            ironing, that is possible too.
          </p>
          <button className=" py-4 px-10 bg-[#EE413D] text-white rounded-full">
            Book Online
          </button>
        </div>
        <div className="sm:w-[400px] lg:w-[600px] h-fit ">
          <img
            className="w-full h-auto object-cover block"
            src={multi_img}
            alt=""
          />
        </div>
      </div>
    </>
  );
}
