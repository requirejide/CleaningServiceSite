import beauty_laundry from "../assets/beauty_laundry.avif";

function Section6() {
  return (
    <>
      <div
        style={{ backgroundImage: `url(${beauty_laundry})` }}
        className="h-[60vh] md:h-[100vh]  lg:h-[50vh] relative bg-fixed bg-cover   lg:bg-top text-white  px-6 mb-20 md:px-20"
      >
        <ul className="absolute  w-full h-full top-0 bottom-0   lg:py-0 left-0 right-0 bg-[#ee403dcc] grid grid-cols-2 lg:grid-cols-4">
          <li className="h-[200px] relative  flex gap-3 flex-col justify-center items-center">
            <p className="text-5xl">26</p>
            <p className="text-xm">YEARS IN BUSINESS</p>
          </li>
          <li className="h-[200px] relative flex gap-3 flex-col justify-center items-center">
            <p className="text-5xl">2000+</p>
            <p className="text-xm">HAPPY CUSTOMER</p>
            <LongNoMeaningfullLines />
          </li>
          <li className="h-[200px] relative flex gap-3 flex-col justify-center items-center">
            <p className="text-5xl">5000</p>
            <p className="text-xm">REGULAR CLEANS</p>
            <LongNoMeaningfullLines />
          </li>
          <li className="relative h-[200px]  gap-3 flex flex-col justify-center items-center">
            <p className="text-5xl">1400</p>
            <p className="text-xm">IRONED SHIRTS</p>
            <LongNoMeaningfullLines />
          </li>
        </ul>
      </div>
    </>
  );
}

export default Section6;

function LongNoMeaningfullLines() {
  return (
    <>
      {" "}
      <span className="hidden  absolute left-[0%] top-0 lg:inline-block h-[100px] w-[2px] bg-white"></span>
      <span className="hidden absolute -left-[1.7%] bottom-[42%]  lg:inline-block h-[15px] w-[15px] rounded-full border-2 border-white"></span>
    </>
  );
}
