import logo from "../../../../public/wppl logo.svg";
import { GiHamburgerMenu } from "react-icons/gi";
import { IoMdShare } from "react-icons/io";

const Navbar = () => {
  return (
    <div className="navbar fixed z-10 bg-opacity-30 max-w-screen-xl  shadow-2xl">
      <div className="flex-1 px-2 lg:flex-none">
        <img className="w-40 " src={logo} alt="" />
      </div>
      <div className="flex flex-1 justify-end px-2">
        <div className="flex items-stretch gap-4">
          <button className="btn  btn-outline btn-accent  hidden md:block  rounded-full">
            <IoMdShare />
          </button>
          <button className="btn  btn-outline btn-accent md:block  hidden rounded-full">
            Download the 2024 Report
          </button>

          <div className="dropdown dropdown-end">
            <div
              tabIndex={0}
              role="button"
              className="btn btn-ghost rounded-btn"
            >
              <GiHamburgerMenu className="text-2xl" />
            </div>
            <ul
              tabIndex={0}
              className="menu dropdown-content bg-base-100 rounded-box z-[1] mt-4 w-52 p-2 shadow"
            >
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
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
