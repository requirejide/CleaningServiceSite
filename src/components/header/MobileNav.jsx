import { FaChevronUp } from "react-icons/fa";
import useToogle from "../../store/toogle";
import { list } from "../../utils/navlist";
import { Link } from "react-router-dom";

function MobileMenu() {
  const isOpen = useToogle((t) => t.isOpen);
  const setOpenFalse = useToogle((t) => t.setOpenFalse);

  return (
    <>
      {isOpen && (
        <div className="sm:hidden fixed z-100 w-full h-full top-0 bottom-0  bg-white">
          <div
            onClick={setOpenFalse}
            className="flex justify-center hover:bg-gray-100 cursor-pointer  py-4 text-gray-600"
          >
            <FaChevronUp />
          </div>
          <ul className="">
            {list.map((value) => (
              <Link to={value.link}>
                <li
                  key={value.id}
                  onClick={setOpenFalse}
                  className={`border-b ${
                    value.id === 0 && "bg-[#EE413D] text-white"
                  } border-gray-500 py-4 px-4`}
                >
                  {value.title}
                </li>
              </Link>
            ))}
          </ul>
        </div>
      )}
    </>
  );
}

export default MobileMenu;
