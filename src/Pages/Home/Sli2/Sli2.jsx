import React from "react";
import { FaArrowLeft, FaArrowRight, FaCaretDown } from "react-icons/fa";
import Slider from "../Slider/Slider";
import Button2 from "../../../Components/Button2";
import { IoMdArrowDropdown } from "react-icons/io";

const Sli2 = () => {
  return (
    <div className="md:mt-36 mt-20 mb-20 ">
      <div>
        <h1 className="text-4xl font-serif">State of USA</h1>
        <div className="dropdown mt-4 z-10">
          <div
            tabIndex={0}
            role="button"
            className=" px-8  flex items-center shadow-[4.0px_8.0px_8.0px_rgba(0,0,0,0.38)] gap-4 rounded-full text-white text-2xl bg-[#2042B6]"
          >
            2023 <FaCaretDown />
          </div>
          <ul
            tabIndex={0}
            className="dropdown-content menu bg-base-100 rounded-box z-[1] w-52 p-2 shadow"
          >
            <li>
              <a>Item 1</a>
            </li>
            <li>
              <a>Item 2</a>
            </li>
          </ul>
        </div>
        <p className="mt-4 mb-5">
          Click through the slides or download the report to view natively on
          your device.
        </p>
      </div>
      <div>
        <Slider></Slider
        >
      </div>
      <div>
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
      </div>
    </div>
  );
};

export default Sli2;
