import { list } from "../../utils/navlist";
import whiteLogo from "../../assets/white_logo.svg";
import { RxHamburgerMenu } from "react-icons/rx";
import useToogle from "../../store/toogle";

function Navbar() {
  const setOpenTrue = useToogle((t) => t.setOpenTrue);

  return (
    <>
      <div className="flex flex-col justify-center lg:flex-row items-center">
        <div className=" py-5 px-4 md:px-20 lg:px-40 flex text-white    justify-center lg:justify-between w-[100%]  relative">
          <ul className="hidden lg:flex gap-10 text-lg  items-center">
            {list.slice(0, 3).map((value) => (
              <li key={value.id} className="cursor-pointer">
                {value.title}
              </li>
            ))}
          </ul>
          <div className="w-[200px] lg:w-[300px] h-auto sm:mb-5 lg:mb-0">
            <img className="img" src={whiteLogo} alt="" />
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
            className="sm:hidden text-4xl cursor-pointer text-white absolute right-4 top-5"
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

export default Navbar;
