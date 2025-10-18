import phone from "../assets/mobilePhone.png";

function Section7() {
  return (
    <>
      <div className="px-6 flex flex-wrap gap-10 mb-20  md:flex-nowrap justify-center gap-x-20">
        <div className=" w-[350px] md:w-[400px] lg:w-[500px] h-[300px] ">
          <img
            className="w-full h-full object-contain sm:object-cover md:object-contain "
            src={phone}
            alt=""
          />
        </div>
        <div className="md:w-[400px] lg:w-[500px]   flex flex-col items-center justify-center gap-5">
          <p className="text-3xl md:text-4xl font-semibold">SCHEDULING</p>
          <p className="text-center">
            Your cleaning requirement may be regular or one-off. If it is
            regular, then we can help daily, weekly, fortnightly, or monthly.
            There is complete flexibility around your needs and your budget.
          </p>
          <p className="text-center">
            And if your cleaning requirement is solely one-off such as moving
            house or giving your home a general tidy up, then we can step in and
            save you the time and effort to bring it back to a sparkling
            condition.
          </p>
        </div>
      </div>
    </>
  );
}
export default Section7;
