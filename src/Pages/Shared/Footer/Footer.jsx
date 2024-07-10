import { FaLinkedin, FaTwitter } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 p-10 bg-[#E6E6E6] ">
      {/* col1 */}
      <div className="border p-6">
        <div className=" text-3xl w-96 h-40 ">
          Experience remarkable WordPress products with a new level of power,
          beauty, and human-centered designs.
        </div>
        <div className=" mt-20 md:mt-52 text-[#9FA0A1] font-semibold text-xs flex gap-4 ">
          <div>©2024</div>
          <div>Terms of Use</div>
          <div>Privacy Policy</div>
        </div>
        <div className=" text-xs mt-6">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime
          mollitia,molestiae quas vel sint commodi repudiandae consequuntur
          voluptatum laborum numquam blanditiis harum quisquam eius sed odit
          fugiat iusto fuga praesentium optio, eaque rerum! Provident similique
          accusantium nemo autem. Veritatis obcaecati tenetur iure eius earum ut
          molestias architecto voluptate aliquam nihil, eveniet aliquid culpa
          officia aut! Impedit sit sunt quaera
        </div>
      </div>
      {/* col-2 */}
      <nav className="flex flex-col text-xl p-6 text-blue-800 md:mx-auto">
        <h3 className="font-bold text-neutral-400">Jump to</h3>
        <a href="#about" className="mt-7 text-blue-700">
          About Us
        </a>
        <a href="#portfolio" className="mt-7">
          Portfolio
        </a>
        <a href="#news" className="mt-7">
          News
        </a>
        <a href="#stories" className="mt-6">
          Stories
        </a>
        <a href="#jobs" className="mt-7">
          Jobs
        </a>
        <a href="#about-us" className="mt-7 text-blue-700">
          About Us
        </a>
      </nav>
      {/* col-3 */}

      <div className="border grid grid-rows-3 p-6">
        <div className="">
          <div>
            <h1 className="text-xl font-bold">Cambridge</h1>
            <div className="text-xl text-[#191618]">
              <h1>70728 Yost Burg, </h1>
              <h1>North Magdaleneview,</h1>
              <h1>UT 97952-2814</h1>
            </div>
            <div className="divider"></div>
          </div>
        </div>

        <div className="">
          <h1 className="text-xl font-bold">London</h1>
          <h1>Suite 292 903 Stehr Streets, </h1>
          <h1>Langworthtown, SC 94577-9465</h1>
          <div className="divider"></div>
        </div>

        <div className="">
          <h1 className="text-xl font-bold">San Francisco</h1>
          <h1>19837 Gilberto Lodge, </h1>
          <h1>Lake Kendallville, </h1>
          <h1>Colorado - 97392, Bhutan</h1>
          <div className="divider"></div>
        </div>

        <div className="flex gap-4">
          <FaLinkedin className="text-2xl text-[#5a5252]" />
          <FaTwitter className="text-2xl text-[#444040]" />
        </div>
      </div>
    </footer>
  );
};

export default Footer;
