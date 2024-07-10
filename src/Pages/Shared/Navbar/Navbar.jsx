import { FaHamburger } from "react-icons/fa";
import logo from "../../../../public/wppl logo.svg";
import { GiHamburgerMenu } from "react-icons/gi";
import { IoMdShare } from "react-icons/io";

const Navbar = () => {
  return (
    <div className="navbar bg-base-100">
      <div className="flex-1">
        <img src={logo} alt="" />
      </div>
      <div className="flex-none">
        <ul className="menu menu-horizontal px-1 space-x-6">
          <div className="flex gap-6 justify-center items-center ">
            <li>
              <button className="btn btn-circle">
                <IoMdShare />
              </button>
            </li>
            <li>
              <button className="btn-outline text-white">
                Download the 2024 Report
              </button>
            </li>
          </div>
          <li>
            <details>
              <summary>
                <GiHamburgerMenu className="text-2xl" />
              </summary>
              <ul className="bg-base-100 rounded-t-none p-2">
                <li>
                  <a>Link 1</a>
                </li>
                <li>
                  <a>Link 2</a>
                </li>
              </ul>
            </details>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
