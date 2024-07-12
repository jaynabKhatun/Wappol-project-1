import React from "react";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import { IoMdArrowDropdown } from "react-icons/io";

const Button2 = () => {
  return (
    <div className="grid grid-cols-2 gap-8 -mt-10">
      <div className="flex gap-6 items-center">
        <button className="btn btn-circle bg-[#FFF] shadow-[4.0px_8.0px_8.0px_rgba(0,0,0,0.38)]">
          <FaArrowLeft />
        </button>
        <button className="btn btn-circle shadow-[4.0px_8.0px_8.0px_rgba(0,0,0,0.38)] bg-[#FFF]">
          <FaArrowRight />
        </button>
        <p>pages</p>
        <button className="btn bg-[#FFF] text-xl shadow-[4.0px_8.0px_8.0px_rgba(0,0,0,0.38)] ">
          1 & 2 <IoMdArrowDropdown />
        </button>
        <p>of 37</p>
      </div>

      <div className="border border-red-500">2</div>
    </div>
  );
};

export default Button2;
