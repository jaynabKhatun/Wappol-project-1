const Button = () => {
  return (
    <div className="flex justify-center items-center mt-10  gap-2  ">
      <button className="px-1 md:px-3  py-1 md:py-2 rounded-full bg-[#2042B6] text-white shadow-[4.0px_8.0px_8.0px_rgba(0,0,0,0.38)] text-xs">
        Download ‘All Companies’ Data
      </button>
      <button className="px-1 md:px-3 md:py-2 py-1 rounded-full bg-[#2042B6] text-white shadow-[4.0px_8.0px_8.0px_rgba(0,0,0,0.38)] text-xs">
        View Methodology
      </button>
    </div>
  );
};

export default Button;
