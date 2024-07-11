import assests from "../../../../public/Asset 1@4x 1 (1).png";
const Banner = () => {
  return (
    <div className="w-full h-[800px] bg-[#2042B6] flex justify-center items-center">
      <div className="">
        <img className="opacity-30" src={assests} alt="" />
      </div>
    </div>
  );
};

export default Banner;
