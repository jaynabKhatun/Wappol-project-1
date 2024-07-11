import { FaArrowDown } from "react-icons/fa";
import assets from "../../../../public/banner.png";

const Banner = () => {
  return (
    <div
      className=" min-h-screen bg-[#2042B6]  "
      style={{
        backgroundImage: `url(${assets})`,
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",

        backgroundBlendMode: "multiply",
        overflow: "hidden",
        position: "relative",
        borderRadius: "20px",
      }}
    >
      <div className="flex justify-center items-center ">
        <div className=" md:space-y-9 absolute bottom-10 left-11 font-serif ">
          <div >
            <h1 className="text-3xl text-white">60</h1>
            <p className=" text-[#CDCDCD]">Companies</p>
          </div>
          <div>
            <h1 className="text-3xl text-white">$100B</h1>
            <p className=" text-[#CDCDCD]">Market cap</p>
          </div>
          <div>
            <h1 className="text-3xl text-white">3.5x</h1>
            <p className=" text-[#CDCDCD]">Revenue multiple</p>
          </div>
          <div>
            <h1 className="text-3xl text-white">60%</h1>
            <p className=" text-[#CDCDCD]">LTM avg. revenue growth rate</p>
          </div>
        </div>

        <div className="absolute top-[20%]  md:top-[40%] font-serif p-8">
          <h1 className="md:text-7xl text-3xl  text-[#FFF]">The WPPOOL Index</h1>
          <p className="text-white mt-4">
            Monitor the performance of emerging, publicly traded, financial
            technology companies
          </p>
        </div>
        {/* 3nd */}
        <div className="absolute bottom-10  right-10 ">
          <button className="btn shadow-2xl btn-circle">
            <FaArrowDown/>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Banner;
