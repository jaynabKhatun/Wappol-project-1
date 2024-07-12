import logo1 from "../../../assets/feature logo/1.svg";
import logo2 from "../../../assets/feature logo/2.svg";
import logo3 from "../../../assets/feature logo/3.svg";
import logo4 from "../../../assets/feature logo/4.svg";
import logo5 from "../../../assets/feature logo/5.svg";
import logo6 from "../../../assets/feature logo/6.svg";
import logo7 from "../../../assets/feature logo/7.svg";
import logo8 from "../../../assets/feature logo/8.svg";
import logo9 from "../../../assets/feature logo/9.svg";
import logo10 from "../../../assets/feature logo/10.svg";
const PotentialFeature = () => {
  return (
    <div className="md:mt-36 mt-20 p-4 ">
      <div className="mb-10 space-y-6">
        <h1 className="text-4xl text-black">Potential Future Listings</h1>
        <p className="w-[800px]">
          Porem ipsum dolor sit amet, consectetur adipiscing elit. Nunc
          vulputate libero et velit interdum, ac aliquet odio mattis. Class
          aptent taciti sociosqu ad litora torquent per conubia nostra, per
          inceptos himenaeos.
        </p>

        <div className="grid md:grid-cols-5 grid-cols-2  gap-6 items-center ">
          <div className="  p-8 bg-[#FFF]">
            <img src={logo1} alt="" />
          </div>
          <div className="  bg-[#FFF]">
            <img src={logo2} alt="" />
          </div>
          <div className=" p-8 bg-[#FFF] ">
            <img src={logo3} alt="" />
          </div>
          <div className=" p-12 bg-[#FFF] ">
            <img src={logo4} alt="" />
          </div>
          <div className=" p-10 bg-[#FFF]">
            <img src={logo5} alt="" />
          </div>
          <div className=" p-9 bg-[#FFF] ">
            <img src={logo6} alt="" />
          </div>
          <div className=" p-7 bg-[#FFF]">
            <img className="ml-8" src={logo7} alt="" />
          </div>
          <div className=" p-10 bg-[#FFF]">
            <img src={logo8} alt="" />
          </div>
          <div className=" p-9 bg-[#FFF]">
            <img src={logo9} alt="" />
          </div>
          <div className=" p-8 bg-[#FFF]">
            <img src={logo10} alt="" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default PotentialFeature;
