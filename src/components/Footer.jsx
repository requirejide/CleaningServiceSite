import white_logo from "../assets/small_white_logo.svg";

function Footer() {
  return (
    <>
      <div className="px-6 md:px-20 lg:px-40 pt-20 pb-10 bg-[#343C3E] text-white lg:flex  ">
        <div className="flex lg:w-[300px] flex-col gap-y-5 mb-10 lg:mb-0 ">
          <div
            style={{ backgroundImage: `url(${white_logo})` }}
            className="w-[250px] h-[150px] bg-contain bg-no-repeat bg-center "
          ></div>
          <p className="w-[300px]">
            Founded in 1997 Daily Poppins has expanded over the last 26 years
            across the UK specialising in cleaning private homes and small
            commercial properties to an exceptional standard and at an
            affordable price.
          </p>
          <button className="px-8 w-[200px] hover:bg-[#F14F4B] text-white bg-[#40484A] cursor-pointer py-4  rounded-full">
            Learn more
          </button>
        </div>
        <div>
          <ul className=" grid  md:grid-cols-2 lg:grid-cols-4  gap-y-10   gap-x-10">
            <li>
              <p className="mb-3 text-lg">OUR SERVICES</p>
              <ul className="text-sm flex flex-col gap-1">
                <li> House Cleaning</li>
                <li>Ironing</li>
                <li>Commercial Cleaning</li>
              </ul>
            </li>
            <li>
              <p className="mb-3 text-lg">LATEST POSTS</p>
              <ul className="text-sm flex flex-col gap-1">
                <li>Daily Poppin’s 1-Hour Cleaning Challenge</li>
                <li>
                  How keeping your house clean benefits your mental health –
                  Don’t brush it under the carpet!
                </li>
                <li>Experts Reveal How to Clean your Most Googled Items</li>
              </ul>
            </li>
            <li>
              <p className="mb-3 text-lg">INFORMATION</p>
              <ul className="text-sm flex flex-col gap-1">
                <li>Online Dispute Resolution Privacy Policy</li>
                <li>
                  <button>Find branch</button>
                  <button>Make an enquiry</button>
                </li>
              </ul>
            </li>
            <li>
              <p className="mb-3 text-lg">FRANCHISE</p>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
}

export default Footer;
