import { list } from "../utils/navlist";
import redLogo from "../assets/logo_red.svg";
import { RxHamburgerMenu } from "react-icons/rx";
import useToogle from "../store/toogle";
import MobileMenu from "../components/header/MobileNav";
import { Link } from "react-router-dom";

function Enquiry() {
  return (
    <>
      <MobileMenu />
      <WhiteNav />
      <div className="px-10  lg:px-40  my-20 ">
        {/* Header */}
        <div className="text-center mb-6">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-2">
            SEND AN ENQUIRY
          </h2>
          <p className="text-gray-600">
            Please use the form below to submit an enquiry to the Reading
            branch.
          </p>
        </div>

        {/* Contact Details */}
        <div className="mb-6">
          <h3 className="text-lg font-semibold text-gray-800 mb-3">
            Contact Details
          </h3>
          <form className="grid grid-cols-2 gap-4">
            <input
              type="text"
              placeholder="Name*"
              className="border border-gray-300 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-red-500"
            />
            <input
              type="email"
              placeholder="Email*"
              className="border border-gray-300 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-red-500"
            />
            <input
              type="text"
              placeholder="Phone*"
              className="border border-gray-300 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-red-500"
            />
            <input
              type="text"
              placeholder="Address line one"
              className="border border-gray-300 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-red-500"
            />
          </form>
        </div>

        {/* Service Details */}
        <div className="mb-6">
          <h3 className="text-lg font-semibold text-gray-800 mb-3">
            Service Details
          </h3>
          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="block text-gray-700 mb-1">Service type</label>
              <select className="border border-gray-300 rounded-lg p-3 w-full focus:outline-none focus:ring-2 focus:ring-red-500">
                <option value="">Choose</option>
                <option value="one-off">One off clean</option>
                <option value="regular">Regular clean</option>
              </select>
            </div>

            <div>
              <label className="block text-gray-700 mb-1">Size of house</label>
              <select className="border border-gray-300 rounded-lg p-3 w-full focus:outline-none focus:ring-2 focus:ring-red-500">
                <option value="">Choose</option>
                <option value="1-2">1–2 Bed Property</option>
                <option value="2-3">2–3 Bed Property</option>
                <option value="3-4">3–4 Bed Property</option>
              </select>
            </div>

            <div className="col-span-2">
              <label className="block  text-gray-700 mb-1">
                Additional details
              </label>
              <textarea
                rows="4"
                placeholder="Write your message..."
                className="border border-gray-300 rounded-lg p-3 w-full focus:outline-none focus:ring-2 focus:ring-red-500"
              ></textarea>
            </div>
          </div>
        </div>

        {/* Submit button */}
        <div className="text-center">
          <button className="bg-red-600 text-white py-3 px-8 rounded-full font-semibold hover:bg-red-700 transition duration-200">
            Submit Enquiry
          </button>
        </div>
      </div>
    </>
  );
}
export default Enquiry;

function WhiteNav() {
  const setOpenTrue = useToogle((t) => t.setOpenTrue);

  return (
    <>
      <div className="shadow-[0_4px_6px_-1px_rgba(0,0,0,0.1)] z-50 top-0 py-2 md:py-4 bg-white px-4 md:px-20 lg:px-40 flex justify-center lg:justify-between w-[100%] ">
        <ul className="hidden lg:flex gap-10 text-base  items-center">
          {list.slice(0, 3).map((value) => (
            <Link to={value.title === "Home" && "/"}>
              <li key={value.id} className="cursor-pointer">
                {value.title}
              </li>
            </Link>
          ))}
        </ul>
        <div className="w-[200px]  lg:w-[220px]  h-auto sm:mb-5 lg:mb-0">
          <img className="img" src={redLogo} alt="" />
        </div>
        <ul className="hidden lg:flex gap-10 text-base items-center">
          {list.slice(3).map((value) => (
            <Link to={value.link}>
              <li key={value.id} className="cursor-pointer">
                {value.title}
              </li>
            </Link>
          ))}
        </ul>
        <div
          onClick={setOpenTrue}
          className={`sm:hidden text-black text-4xl cursor-pointer  absolute right-4 top-5`}
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
    </>
  );
}
