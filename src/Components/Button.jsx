const Button = () => {
  return (
    <div className="flex flex-col md:flex-row justify-center items-center mt-10 gap-2">
      <button className="px-3 py-2 md:py-3 rounded-full bg-[#2042B6] text-white shadow-lg text-sm md:text-base w-full md:w-auto">
        Download ‘All Companies’ Data
      </button>
      <button className="px-3 py-2 md:py-3 rounded-full bg-[#2042B6] text-white shadow-lg text-sm md:text-base w-full md:w-auto">
        View Methodology
      </button>
    </div>
  );
};

export default Button;
