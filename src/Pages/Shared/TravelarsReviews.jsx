import { MdPhoneInTalk } from 'react-icons/md';
import user1 from '../../assets/user1.png';
import user2 from '../../assets/user2.png';
import user3 from '../../assets/user3.png';
import icon1 from '../../assets/icon1.png';
import icon2 from '../../assets/icon2.png';
import icon3 from '../../assets/icon3.png';
import icon4 from '../../assets/icon4.png';
import { BsStarFill } from 'react-icons/bs';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination } from 'swiper/modules';
import { CgCheck } from 'react-icons/cg';
const TravelarsReviews = () => {
  return (
    <div className="">
      <div className="md:h-[60vh] py-5 md:py-0" id="paralax">
        <div className="relative w-full h-full z-10 container">
          <div className=" text-white w-full h-full flex flex-col justify-center">
            <h1 className="text-2xl font-semibold">
              We Provide Top Destinations Expecially <br /> For You Book Now and
              Enjoy!
            </h1>
            <div className="flex items-center gap-x-3 mt-2 lg:mt-5  ">
              <span className="p-1  text-6xl">
                <MdPhoneInTalk></MdPhoneInTalk>
              </span>
              <div>
                <p>Call Now</p>
                <p>855 333 4444</p>
              </div>
            </div>
            <p className="flex items-center">
              <CgCheck className="text-4xl"></CgCheck> Call us, it is toll-free.
            </p>
          </div>

          <div
            data-aos="fade-up"
            data-aos-duration={1000}
            className="md:absolute right-0 -bottom-20 bg-white p-3 md:p-6 lg:px-14 lg:py-12 shadow-sm shadow-gray-300 md:w-2/5 my-5 md:my-0"
          >
            <div className="container">
              <p className="uppercase text-[#2095AE] tracking-widest md:tracking-[4px] font-mono">
                TESTIMONIALS
              </p>
              <h1 className="font-bold text-xl lg:text-3xl mb-5">
                TRAVELERS <span className="text-[#2095AE]">REVIEWS</span>
              </h1>
            </div>
            <Swiper
              speed={1500}
              loop={true}
              pagination={{
                clickable: true,
              }}
              modules={[Pagination]}
              className=" md:h-72"
            >
              <SwiperSlide>
                <div>
                  <p className="text-gray-600 text-base lg:leading-loose">
                    Travel dapibus asue metus the nec feusiate era the miss
                    hendreri the vemante the lemon insan toleon nectan feugiat
                    erat hendrerit necuis vesaire tours inilla neca ine the sene
                    miss habitan.
                  </p>
                  <div className="flex gap-x-2 items-center mt-4">
                    <img className="w-16 h-16" src={user1} alt="" />
                    <div className=" text-sm">
                      <div className="flex items-center text-xs gap-x-1">
                        <BsStarFill className="text-orange-300"></BsStarFill>
                        <BsStarFill className="text-orange-300"></BsStarFill>
                        <BsStarFill className="text-orange-300"></BsStarFill>
                        <BsStarFill className="text-orange-300"></BsStarFill>
                        <BsStarFill className="text-orange-300"></BsStarFill>
                      </div>
                      <p className="mt-1 font-medium">Emily Brown</p>
                      <p className="text-xs">Guest review</p>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div>
                  <p className="text-gray-600 text-base lg:leading-loose">
                    Travel dapibus asue metus the nec feusiate era the miss
                    hendreri the vemante the lemon insan toleon nectan feugiat
                    erat hendrerit necuis vesaire tours inilla neca ine the sene
                    miss habitan.
                  </p>
                  <div className="flex gap-x-2 items-center mt-4">
                    <img className="w-16 h-16" src={user2} alt="" />
                    <div className=" text-sm">
                      <div className="flex items-center text-xs gap-x-1">
                        <BsStarFill className="text-orange-300"></BsStarFill>
                        <BsStarFill className="text-orange-300"></BsStarFill>
                        <BsStarFill className="text-orange-300"></BsStarFill>
                        <BsStarFill className="text-orange-300"></BsStarFill>
                        <BsStarFill className="text-orange-300"></BsStarFill>
                      </div>
                      <p className="mt-1 font-medium">Emily Brown</p>
                      <p className="text-xs">Guest review</p>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div>
                  <p className="text-gray-600 text-base lg:leading-loose">
                    Travel dapibus asue metus the nec feusiate era the miss
                    hendreri the vemante the lemon insan toleon nectan feugiat
                    erat hendrerit necuis vesaire tours inilla neca ine the sene
                    miss habitan.
                  </p>
                  <div className="flex gap-x-2 items-center mt-4">
                    <img className="w-16 h-16" src={user3} alt="" />
                    <div className=" text-sm">
                      <div className="flex items-center text-xs gap-x-1">
                        <BsStarFill className="text-orange-300"></BsStarFill>
                        <BsStarFill className="text-orange-300"></BsStarFill>
                        <BsStarFill className="text-orange-300"></BsStarFill>
                        <BsStarFill className="text-orange-300"></BsStarFill>
                        <BsStarFill className="text-orange-300"></BsStarFill>
                      </div>
                      <p className="mt-1 font-medium">Emily Brown</p>
                      <p className="text-xs">Guest review</p>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
            </Swiper>
          </div>
          <div className="md:w-3/5">
            <Swiper
              slidesPerView={4}
              spaceBetween={10}
              speed={1500}
              loop={true}
              autoplay={{
                delay: 1500,
              }}
              modules={[Autoplay]}
            >
              <SwiperSlide>
                <img src={icon1} alt="" />
              </SwiperSlide>
              <SwiperSlide>
                <img src={icon2} alt="" />
              </SwiperSlide>
              <SwiperSlide>
                <img src={icon3} alt="" />
              </SwiperSlide>
              <SwiperSlide>
                <img src={icon4} alt="" />
              </SwiperSlide>
              <SwiperSlide>
                <img src={icon3} alt="" />
              </SwiperSlide>
            </Swiper>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TravelarsReviews;
