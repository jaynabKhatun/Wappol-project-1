import photo from "../../../assets/stories photo/1.png";
import photo2 from "../../../assets/stories photo/2.png";

const Stories = () => {
  return (
    <div className="md:mt-36 mt-20 px-4">
      <div>
        <h1 className="text-4xl font-serif text-center md:text-left">
          Stories & Ideas
        </h1>
        <p className="text-center md:text-left">The latest news and updates</p>

        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3 mt-10">
          {/* Card 1 */}
          <div className="w-full bg-white mt-16 p-4 shadow-lg">
            <img
              className="transform -translate-y-12 mx-auto"
              src={photo2}
              alt="Story Image"
            />
            <div className="mt-4 space-y-2">
              <h1 className="text-[#2042B6]">By: Sahabuddin Sagor</h1>
              <p className="font-serif text-black">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime
                mollitia.
              </p>
              <button className="bg-[#2042B6] text-white px-3 py-1 rounded-full shadow-md">
                Read More
              </button>
            </div>
          </div>
          {/* Card 2 */}
          <div className="w-full h-80 bg-white mt-16 p-4 shadow-lg">
            <img
              className="transform -translate-y-12 mx-auto"
              src={photo}
              alt="Story Image"
            />
            <div className="mt-4 space-y-2">
              <h1 className="text-[#2042B6]">By: Nayem Khan</h1>
              <p className="font-serif text-black">
                Key Takeaways from Robotics Invest 2023
              </p>
              <button className="bg-[#2042B6] text-white px-3 py-1 mt-4 rounded-full shadow-md">
                Read More
              </button>
            </div>
          </div>
          {/* Card 3 */}
          <div className="w-full bg-white mt-16 p-4 shadow-lg">
            <img
              className="transform -translate-y-12 mx-auto"
              src={photo2}
              alt="Story Image"
            />
            <div className="mt-4 space-y-2">
              <h1 className="text-[#2042B6]">By: Sahabuddin Sagor</h1>
              <p className="font-serif text-black">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime
                mollitia.
              </p>
              <button className="bg-[#2042B6] text-white px-3 py-1 rounded-full shadow-md">
                Read More
              </button>
            </div>
          </div>
          {/* Card 4 */}
          <div className="w-full bg-white mt-16 p-4 shadow-lg">
            <img
              className="transform -translate-y-12 mx-auto"
              src={photo2}
              alt="Story Image"
            />
            <div className="mt-4 space-y-2">
              <h1 className="text-[#2042B6]">By: Sahabuddin Sagor</h1>
              <p className="font-serif text-black">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime
                mollitia.
              </p>
              <button className="bg-[#2042B6] text-white px-3 py-1 rounded-full shadow-md">
                Read More
              </button>
            </div>
          </div>
          {/* Card 5 */}
          <div className="w-full h-80 bg-white mt-16 p-4 shadow-lg">
            <img
              className="transform -translate-y-12 mx-auto"
              src={photo}
              alt="Story Image"
            />
            <div className="mt-4 space-y-2">
              <h1 className="text-[#2042B6]">By: Sahabuddin Sagor</h1>
              <p className="font-serif text-black">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime
                mollitia.
              </p>
              <button className="bg-[#2042B6] text-white px-3 py-1 rounded-full shadow-md">
                Read More
              </button>
            </div>
          </div>
          {/* Card 6 */}
          <div className="w-full bg-white mt-16 p-4 shadow-lg">
            <img
              className="transform -translate-y-12 mx-auto"
              src={photo2}
              alt="Story Image"
            />
            <div className="mt-4 space-y-2">
              <h1 className="text-[#2042B6]">By: Sahabuddin Sagor</h1>
              <p className="font-serif text-black">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime
                mollitia.
              </p>
              <button className="bg-[#2042B6] text-white px-3 py-1 rounded-full shadow-md">
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
