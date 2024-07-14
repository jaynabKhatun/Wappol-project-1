import React from 'react';
import { FaCaretDown } from 'react-icons/fa';
import Slider from '../Slider/Slider';
import Button2 from '../../../Components/Button2';

const Report = () => {
    return (
        <div>
          <div className="md:mt-36 mt-20 mb-20 ">
      <div>
        <h1 className="text-4xl font-serif">State of USA</h1>
        <div className="dropdown mt-4 z-10">
          <div
            tabIndex={0}
            role="button"
            className=" px-8  flex items-center shadow-[4.0px_8.0px_8.0px_rgba(0,0,0,0.38)] gap-4 rounded-full text-white text-2xl bg-[#2042B6]"
          >
            2024 <FaCaretDown />
          </div>
          
        </div>
        <p className="mt-4 mb-5">
          Click through the slides or download the report to view natively on
          your device.
        </p>
      </div>
      <div>
        <Slider></Slider>
      </div>
      <div >
        <Button2></Button2>
      </div>
    </div>
        </div>
    );
};

export default Report;