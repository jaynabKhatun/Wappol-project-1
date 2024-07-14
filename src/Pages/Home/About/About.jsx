const About = () => {
  return (
    <div className="mt-20 md:mt-36 p-4 bg-white md:h-96">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div className="p-4 md:p-10 space-y-4">
          <h1 className="text-3xl md:text-5xl text-black font-serif">
            About WPPOOL
          </h1>
          <h2 className="text-xl md:text-2xl text-gray-500 font-serif">
            Investing in WPPOOL for over 50 years
          </h2>
          <p className="text-sm md:text-base text-gray-800">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime
            mollitia, molestiae quas vel sint commodi repudiandae consequuntur
            voluptatum laborum numquam blanditiis harum quisquam eius sed odit
            fugiat iusto fuga praesentium optio, eaque rerum! Provident
            similique accusantium nemo autem.
          </p>
          <button className="px-3 py-2 rounded-full bg-blue-800 text-white shadow-lg text-xs md:text-sm">
            Download ‘All Companies’ Data
          </button>
        </div>
        
        <div className="flex justify-center items-center">
          <img
            loading="lazy"
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/6121d21eec527d45e148931d08c41a63205e10015c45a614a364599d34f7bf34?apiKey=a90fe2e643fb4b1cbc71a2887f0be298&"
            alt="WPPOOL visual representation"
            className="w-full h-auto max-w-md"
          />
        </div>
      </div>
    </div>
  );
};

export default About;
