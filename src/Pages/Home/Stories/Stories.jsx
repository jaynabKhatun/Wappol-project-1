import photo from "../../../assets/stories photo/1.png";
import photo2 from "../../../assets/stories photo/2.png";

const Stories = () => {
  return (
    <div className="md:mt-36 mt-20">
      <div>
        <h1 className="text-4xl font-serif">Stories & Ideas</h1>
        <p>The latest news and updates</p>

        <div className="grid  md:grid-cols-2 lg:grid-cols-3  grid-cols-1  gap-6">
            {/* card 1 */}
          <div className="w-96 h-64 bg-[#FFF] mt-16 p-4  ">
            <img className="-translate-y-12" src={photo2} alt="" />
            <div className="-mt-12 space-y-2">
              <h1 className="text-[#2042B6]">By: Sahabuddin Sagor</h1>
              <p className="font-serif text-black">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime
                mollitia.
              </p>
              <button className="bg-[#2042B6] text-white px-3 py-1 rounded-full shadow-[4.0px_8.0px_8.0px_rgba(0,0,0,0.38)]">
                Read More
              </button>
            </div>
          </div>
          {/* card 2 */}
          <div className="w-96 h-64 bg-[#FFF] mt-16 p-4  ">
            <img className="-translate-y-12" src={photo} alt="" />
            <div className="-mt-12 ">
              <h1 className="text-[#2042B6]">By: Nayem Khan</h1>
              <p className="font-serif text-black">
              Key Takeaways from Robotics Invest 2023
              </p>
              <button className="bg-[#2042B6] text-white px-3 py-1 mt-10 rounded-full shadow-[4.0px_8.0px_8.0px_rgba(0,0,0,0.38)]">
                Read More
              </button>
            </div>
          </div>
          {/* card 3 */}
          <div className="w-96 h-64 bg-[#FFF] mt-16 p-4  ">
            <img className="-translate-y-12" src={photo2} alt="" />
            <p className="-translate-y-[196px] font-serif text-xs translate-x-3 bg-[#FFF] w-14 px-2  rounded-sm">carrot</p>
            <div className="-mt-12 space-y-2">
              <h1 className="text-[#2042B6]">By: Sahabuddin Sagor</h1>
              <p className="font-serif text-black">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime
                mollitia.
              </p>
              <button className="bg-[#2042B6] text-white px-3 py-1 rounded-full shadow-[4.0px_8.0px_8.0px_rgba(0,0,0,0.38)]">
                Read More
              </button>
            </div>
          </div>
          {/* card 4 */}
          <div className="w-96 h-64 bg-[#FFF] mt-16 p-4  ">
            <img className="-translate-y-12" src={photo2} alt="" />
            <div className="-mt-12 space-y-2">
              <h1 className="text-[#2042B6]">By: Sahabuddin Sagor</h1>
              <p className="font-serif text-black">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime
                mollitia.
              </p>
              <button className="bg-[#2042B6] text-white px-3 py-1 rounded-full shadow-[4.0px_8.0px_8.0px_rgba(0,0,0,0.38)]">
                Read More
              </button>
            </div>
          </div>
          <div className="w-96 h-64 bg-[#FFF] mt-16 p-4  ">
            <img className="-translate-y-12" src={photo} alt="" />
            <div className="-mt-12 space-y-2">
              <h1 className="text-[#2042B6]">By: Sahabuddin Sagor</h1>
              <p className="font-serif text-black">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime
                mollitia.
              </p>
              <button className="bg-[#2042B6] text-white px-3 py-1 rounded-full shadow-[4.0px_8.0px_8.0px_rgba(0,0,0,0.38)]">
                Read More
              </button>
            </div>
          </div>
          <div className="w-96 h-64 bg-[#FFF] mt-16 p-4  ">
            <img className="-translate-y-12" src={photo2} alt="" />
            <p className="-translate-y-[196px] font-serif text-xs translate-x-3 bg-[#FFF] w-14 px-2  rounded-sm">carrot</p>
            <div className="-mt-12 space-y-2">
              <h1 className="text-[#2042B6]">By: Sahabuddin Sagor</h1>
              <p className="font-serif text-black">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime
                mollitia.
              </p>
              <button className="bg-[#2042B6] text-white px-3 py-1 rounded-full shadow-[4.0px_8.0px_8.0px_rgba(0,0,0,0.38)]">
                Read More
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Stories;
