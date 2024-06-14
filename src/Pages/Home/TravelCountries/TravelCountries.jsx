import { FaArrowRightLong } from 'react-icons/fa6';
import { IoLocationOutline } from 'react-icons/io5';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
// import required modules
import { Autoplay, Pagination } from 'swiper/modules';
import Card from '../../../Componet/Card';
import romeImg from '../../../assets/rome1.jpg';
import veniceImg from '../../../assets/venice1.jpg';
import milanoImg from '../../../assets/milano.jpg';
import pergueaImg from '../../../assets/perugia1.jpg';
import parmaImg from '../../../assets/parma1.jpg';
import aostaImg from '../../../assets/aosta1.jpg';
const TravelCountries = () => {
  return (
    <div className="mb-10 mt-7 md:mt-0">
      <div className="container md:mb-10">
        <p className="uppercase text-[#2095AE] tracking-widest md:tracking-[4px] font-mono">
          MOST POPULAR
        </p>
        <h1 className="font-bold text-4xl lg:text-5xl my-2 md:mb-5">
          <span className="text-[#2095AE]">TRAVEL</span> COUNTRIES
        </h1>
      </div>
      <div className="container flex flex-col md:flex-row gap-x-9 gap-y-7 items-center justify-between">
        {/* text */}
        <div className="md:w-[45%]">
          <p className="text-4xl font-semibold">ITALY, EUROPE</p>
          <p className="text-gray-500 leading-relaxed my-2 md:my-9">
            We provide you with interesting and exciting tours to different
            parts of the world. Orci varius natoque penatibus et magnis disney
            turien nascete ridiculus duru in the mus nellen.
          </p>
          <div className="grid grid-cols-3 gap-y-2 md:my-5 gap-x-10">
            <p className="flex items-center gap-x-2 font-medium  text-gray-500">
              <IoLocationOutline></IoLocationOutline> Roma
            </p>
            <p className="flex items-center gap-x-2 font-medium  text-gray-500">
              <IoLocationOutline></IoLocationOutline> Venice
            </p>
            <p className="flex items-center gap-x-2 font-medium  text-gray-500">
              <IoLocationOutline></IoLocationOutline> San Marino
            </p>
            <p className="flex items-center gap-x-2 font-medium  text-gray-500">
              <IoLocationOutline></IoLocationOutline> Milan
            </p>
            <p className="flex items-center gap-x-2 font-medium  text-gray-500">
              <IoLocationOutline></IoLocationOutline> Florence
            </p>
            <p className="flex items-center gap-x-2 font-medium  text-gray-500">
              <IoLocationOutline></IoLocationOutline> Parma
            </p>
            <p className="flex items-center gap-x-2 font-medium  text-gray-500">
              <IoLocationOutline></IoLocationOutline> Verona
            </p>
            <p className="flex items-center gap-x-2 font-medium  text-gray-500">
              <IoLocationOutline></IoLocationOutline> Perugia
            </p>
            <p className="flex items-center gap-x-2 font-medium  text-gray-500">
              <IoLocationOutline></IoLocationOutline> Aosta
            </p>
          </div>
          <button className="flex items-center gap-x-3 bg-[#2095AE] text-white px-4 py-2 hover:text-black duration-200 mt-4 md:mt-8">
            All Tours <FaArrowRightLong></FaArrowRightLong>
          </button>
        </div>
        {/* card */}
        <div className="w-full md:w-[55%]">
          <Swiper
            slidesPerView={1}
            spaceBetween={10}
            speed={2000}
            loop={true}
            pagination={{
              clickable: true,
            }}
            autoplay={{
              delay: 1000,
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
                slidesPerView: 2,
                spaceBetween: 30,
              },
            }}
            modules={[Pagination, Autoplay]}
            className="mySwiper"
          >
            <SwiperSlide>
              <Card
                title="Rome"
                days="5"
                users="5+"
                place="Venice"
                reviews=""
                cost="$1.300"
                img={veniceImg}
              ></Card>
            </SwiperSlide>
            <SwiperSlide>
              <Card
                title="Venice"
                days="3"
                users="10+"
                place="Itlay"
                reviews=""
                cost="$1.500"
                img={romeImg}
              ></Card>
            </SwiperSlide>
            <SwiperSlide>
              <Card
                title="Milano"
                days="9"
                users="7+"
                place="Milano"
                reviews=""
                cost="$900"
                img={milanoImg}
              ></Card>
            </SwiperSlide>
          </Swiper>
        </div>
      </div>
      <div className="container flex flex-col-reverse md:flex-row gap-x-9 gap-y-7 items-center justify-between mt-7 md:mt-32">
        {/* card */}
        <div className="w-full md:w-[55%]">
          <Swiper
            slidesPerView={1}
            spaceBetween={10}
            speed={2000}
            loop={true}
            pagination={{
              clickable: true,
            }}
            autoplay={{
              delay: 1500,
              reverseDirection: true,
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
                slidesPerView: 2,
                spaceBetween: 30,
              },
            }}
            modules={[Pagination, Autoplay]}
            className="mySwiper"
          >
            <SwiperSlide>
              <Card
                title="Aosta"
                days="=3"
                users="5+"
                place="Aosta"
                reviews=""
                cost="$400"
                img={aostaImg}
              ></Card>
            </SwiperSlide>
            <SwiperSlide>
              <Card
                title="Perugia"
                days="5"
                users="2+"
                place="Perugia"
                reviews=""
                cost="$500"
                img={pergueaImg}
              ></Card>
            </SwiperSlide>
            <SwiperSlide>
              <Card
                title="Parma"
                days="2"
                users="9+"
                place="Parma"
                reviews=""
                cost="$700"
                img={parmaImg}
              ></Card>
            </SwiperSlide>
          </Swiper>
        </div>
        {/* text */}
        <div className="md:w-[45%]">
          <p className="text-4xl font-semibold">FRANCE, EUROPE</p>
          <p className="text-gray-500 leading-relaxed my-2 md:my-9">
            We provide you with interesting and exciting tours to different
            parts of the world. Orci varius natoque penatibus et magnis disney
            turien nascete ridiculus duru in the mus nellen.
          </p>
          <div className="grid grid-cols-3 gap-y-2 md:my-5 gap-x-10">
            <p className="flex items-center gap-x-2 font-medium  text-gray-500">
              <IoLocationOutline></IoLocationOutline> Paris
            </p>
            <p className="flex items-center gap-x-2 font-medium  text-gray-500">
              <IoLocationOutline></IoLocationOutline> Orieans
            </p>
            <p className="flex items-center gap-x-2 font-medium  text-gray-500">
              <IoLocationOutline></IoLocationOutline> Nantes
            </p>
            <p className="flex items-center gap-x-2 font-medium  text-gray-500">
              <IoLocationOutline></IoLocationOutline> Lyon
            </p>
            <p className="flex items-center gap-x-2 font-medium  text-gray-500">
              <IoLocationOutline></IoLocationOutline> Bordeaux
            </p>
            <p className="flex items-center gap-x-2 font-medium  text-gray-500">
              <IoLocationOutline></IoLocationOutline> Toulouse
            </p>
            <p className="flex items-center gap-x-2 font-medium  text-gray-500">
              <IoLocationOutline></IoLocationOutline> Marseille
            </p>
            <p className="flex items-center gap-x-2 font-medium  text-gray-500">
              <IoLocationOutline></IoLocationOutline> Aosta
            </p>
            <p className="flex items-center gap-x-2 font-medium  text-gray-500">
              <IoLocationOutline></IoLocationOutline>Cannes
            </p>
          </div>
          <button className="flex items-center gap-x-3 bg-[#2095AE] text-white px-4 py-2 hover:text-black duration-200 mt-4 md:mt-8">
            All Tours <FaArrowRightLong></FaArrowRightLong>
          </button>
        </div>
      </div>
    </div>
  );
};

export default TravelCountries;
