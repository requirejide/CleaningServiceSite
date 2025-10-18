import React, { useEffect } from "react";
import useToogle from "../../store/toogle";
import { list } from "../../utils/navlist";
import redLogo from "../../assets/logo_red.svg";
import { RxHamburgerMenu } from "react-icons/rx";

function FixedNavbar() {
  const setOpenTrue = useToogle((t) => t.setOpenTrue);
  const isFixed = useToogle((t) => t.isFixed);
  const setFixedTrue = useToogle((t) => t.setFixedTrue);
  const setFixedFalse = useToogle((t) => t.setFixedFalse);

  useEffect(() => {
    function handleScroll() {
      if (window.scrollY > 100) {
        setFixedTrue();
      } else {
        setFixedFalse();
      }
    }
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [setFixedTrue, setFixedFalse]);

  return (
    <>
      <div className={`${isFixed ? "block" : "hidden"}`}>
        <div className="fixed shadow-[0_4px_6px_-1px_rgba(0,0,0,0.1)] z-50 top-0 py-2 md:py-4 bg-white px-4 md:px-20 lg:px-40 flex justify-center lg:justify-between w-[100%] ">
          <ul className="hidden lg:flex gap-10 text-lg  items-center">
            {list.slice(0, 3).map((value) => (
              <li key={value.id} className="cursor-pointer">
                {value.title}
              </li>
            ))}
          </ul>
          <div className="w-[200px]  lg:w-[220px]  h-auto sm:mb-5 lg:mb-0">
            <img className="img" src={redLogo} alt="" />
          </div>
          <ul className="hidden lg:flex gap-10 text-lg items-center">
            {list.slice(3).map((value) => (
              <li key={value.id} className="cursor-pointer">
                {value.title}
              </li>
            ))}
          </ul>
          <div
            onClick={setOpenTrue}
            className={`sm:hidden ${
              isFixed ? " text-black" : "text-white"
            } text-4xl cursor-pointer  absolute right-4 top-5`}
          >
            <RxHamburgerMenu />
          </div>
        </div>

        <ul className="hidden sm:flex lg:hidden gap-10 text-white ">
          {list.map((value) => (
            <li key={value.id} className="cursor-pointer">
              {value.title}
            </li>
          ))}
        </ul>
      </div>
    </>
  );
}

export default FixedNavbar;
