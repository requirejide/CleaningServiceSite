import React from "react";

function BookOnline() {
  return (
    <>
      <div className="bg-[#F6F6F6] py-20 flex justify-center">
        <button
          className="
      bg-[#EE413D]
      text-white
      rounded-full
      px-12 py-6
      text-3xl
      md:text-5xl font-bold
      shadow-lg shadow-[#ee413d]/40
      hover:shadow-xl hover:shadow-[#ee413d]/60
      hover:scale-105
      active:scale-95
      transition-all duration-300 ease-in-out
    "
        >
          Book Online
        </button>
      </div>
    </>
  );
}

export default BookOnline;
