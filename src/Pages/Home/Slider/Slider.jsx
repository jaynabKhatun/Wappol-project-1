
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import photo1  from '../../../assets/card photo/1.png'
import photo2  from '../../../assets/card photo/2.png'



// import required modules
import { Pagination,Autoplay } from "swiper/modules";
const Slider = () => {
  return (
    <div className="md:-ml-8">
      <Swiper
        slidesPerView={2}
        spaceBetween={30}
        autoplay={{
            delay: 2500,
            disableOnInteraction: false,
          }}


        
      
        modules={[Pagination,Autoplay]}
       
      >
        <SwiperSlide><img src={photo1} alt="" /></SwiperSlide>
        <SwiperSlide><img src={photo2} alt="" /></SwiperSlide>
        <SwiperSlide><img src={photo1} alt="" /></SwiperSlide>
        <SwiperSlide><img src={photo2} alt="" /></SwiperSlide>
       
       
      </Swiper>
    </div>
  );
};

export default Slider;
