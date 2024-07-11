import logo from "../../../../public/wppl logo.svg";
import { GiHamburgerMenu } from "react-icons/gi";
import { IoMdShare } from "react-icons/io";

const Navbar = () => {
  return (
    <div className="navbar bg-base-300 fixed z-10 max-w-screen-xl mx-auto rounded-full">
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
              <ul className="bg-base-100 rounded-t-none w-60 ">
                <li>
                  <a>The WPPOOL Index</a>
                </li>
                <li>
                  <a>All Companies</a>
                </li>
                <li>
                  <a>Potential Future Listings</a>
                </li>
                <li>
                  <a>State of USA</a>
                </li>
                <li>
                  <a>Stories & Ideas</a>
                </li>
                <li>
                  <a>About WPPOOL</a>
                </li>
                <li>
                  <a>WPPOOL Portfolio Companies</a>
                </li>
                <li>
                  <a className="text-[#2042B6] font-bold ">Visit WPPOOL</a>
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
