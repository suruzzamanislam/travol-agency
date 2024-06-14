import ECard from '../../../Componet/ECard';
import img1 from '../../../assets/experience1.jpg';
import img2 from '../../../assets/experience2.jpg';
import img3 from '../../../assets/experience3.jpg';
import img4 from '../../../assets/experience4.jpg';
import img5 from '../../../assets/experience5.jpg';
import img6 from '../../../assets/experience6.jpg';
import { Navigation } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css/navigation';
import './TravelExperience.css';
const TravelExperience = () => {
  return (
    <div className="bg-[#0F2454] py-8 md:py-20">
      <div className="container mb-5 md:mb-10">
        <p className="uppercase text-[#2095AE] tracking-widest md:tracking-[4px] font-mono">
          TRAVEL BLOG
        </p>
        <h1 className="font-bold text-4xl lg:text-5xl my-2 md:mb-5 text-white">
          <span className="text-[#2095AE]">TRAVEL</span> EXPERIENCE
        </h1>
      </div>
      <div className="container text-white ">
        <Swiper
          slidesPerView={1}
          spaceBetween={10}
          loop={true}
          navigation={{
            clickable: true,
          }}
          breakpoints={{
            640: {
              slidesPerView: 1,
              spaceBetween: 10,
            },
            768: {
              slidesPerView: 2,
              spaceBetween: 30,
            },
            1024: {
              slidesPerView: 3,
              spaceBetween: 30,
            },
          }}
          modules={[Navigation]}
          className="mySwiper"
        >
          <SwiperSlide>
            <ECard
              ftitle="Travel"
              stitle="Practical information for traveling to Egypt"
              img={img1}
              date="02"
            />
          </SwiperSlide>
          <SwiperSlide>
            <ECard
              ftitle="Tours"
              stitle="Most Popular Yacht Charter Routes"
              img={img2}
              date="04"
            />
          </SwiperSlide>
          <SwiperSlide>
            <ECard
              ftitle="Travel"
              stitle="Tips Towards a Flawless Honeymoon"
              img={img3}
              date="07"
            />
          </SwiperSlide>
          <SwiperSlide>
            <ECard
              ftitle="Travel"
              stitle="5 things you can not miss in Miami"
              img={img4}
              date="09"
            />
          </SwiperSlide>
          <SwiperSlide>
            <ECard
              ftitle="Tours"
              stitle="Family Adventure Tours for Teens & Kids"
              img={img5}
              date="13"
            />
          </SwiperSlide>
          <SwiperSlide>
            <ECard
              ftitle="Tours"
              stitle="Small group tours with flights from the USA"
              img={img6}
              date="18"
            />
          </SwiperSlide>
        </Swiper>
      </div>
    </div>
  );
};

export default TravelExperience;
