import { FaCaretDown } from "react-icons/fa";
import Slider from "../Slider/Slider";

const State = () => {
  return (
    <div className="md:mt-36 mt-20 mb-20 ">
      <div>
        <h1 className="text-2xl">State of USA</h1>
        <div className="dropdown mt-4 z-10">
          <div
            tabIndex={0}
            role="button"
            className=" px-8  flex items-center shadow-[4.0px_8.0px_8.0px_rgba(0,0,0,0.38)] gap-4 rounded-full text-white text-2xl bg-[#2042B6]"
          >
            2024 <FaCaretDown />
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
        <Slider></Slider>
      </div>
    </div>
  );
};

export default State;
