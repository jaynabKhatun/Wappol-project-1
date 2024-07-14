import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import { IoMdArrowDropdown } from "react-icons/io";

const Button2 = () => {
  return (
    <div className="grid md:grid-cols-2 gap-8 md:-mt-10">
      <div className="flex gap-4 md:gap-6 items-center justify-center md:justify-start">
        <button className="btn btn-circle bg-[#FFF] shadow-md">
          <FaArrowLeft />
        </button>
        <button className="btn btn-circle bg-[#FFF] shadow-md">
          <FaArrowRight />
        </button>
        <p className="text-sm md:text-base">pages</p>
        <button className="btn bg-[#FFF] text-xl shadow-md flex items-center space-x-1">
          <span>1 & 2</span> <IoMdArrowDropdown />
        </button>
        <p className="text-sm md:text-base">of 37</p>
      </div>

      <div className="flex justify-evenly">
        <button className="px-1 md:px-3  py-1 md:py-2 rounded-full bg-[#2042B6] text-white shadow-[4.0px_8.0px_8.0px_rgba(0,0,0,0.38)] text-xs">
        Download the 2023 Report
        </button>
      </div>
    </div>

   
  );
};

export default Button2;
