const About = () => {
  return (
    <div className="md:mt-36 mt-20 p-4   md:h-96 bg-[#FFF] ">
      <div className="grid grid-cols-2  ">
        <div className="  p-10 space-y-4">
          <h1 className="text-5xl text-black font-serif">About WPPOOL</h1>
          <h2 className="text-[#7D7F81] text-2xl font-serif ">
            Investing in wppool for over 50 years
          </h2>
          <p className="text-[#191618]">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime
            mollitia,molestiae quas vel sint commodi repudiandae consequuntur
            voluptatum laborumnumquam blanditiis harum quisquam eius sed odit
            fugiat iusto fuga praesentiumoptio, eaque rerum! Provident similique
            accusantium nemo autem.
          </p>
          <button className="px-1 md:px-3  py-1 md:py-2 rounded-full bg-[#2042B6] text-white shadow-[4.0px_8.0px_8.0px_rgba(0,0,0,0.38)] text-xs">
            Download ‘All Companies’ Data
          </button>
        </div>

        <div className=" flex justify-center">
          <img
            loading="lazy"
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/6121d21eec527d45e148931d08c41a63205e10015c45a614a364599d34f7bf34?apiKey=a90fe2e643fb4b1cbc71a2887f0be298&"
            alt="WPPOOL visual representation"
            className="grow w-full h-[370px] aspect-[1.25] max-md:max-w-full"
          />
         
        </div>
      </div>
    </div>
  );
};

export default About;
