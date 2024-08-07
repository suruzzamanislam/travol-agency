// swiper js
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/effect-fade';
import { Autoplay, EffectFade, Pagination } from 'swiper/modules';
// custom css
import './Header.css';
// icons
import { IoSearch } from 'react-icons/io5';
import Navbar from '../../Shared/Navbar';
import { motion } from 'framer-motion';

const Header = () => {
  return (
    <div id="header" className="w-full md:h-screen h-[85vh] relative">
      <nav className="absolute top-0 z-50 w-full">
        <Navbar />
      </nav>
      <Swiper
        speed={1500}
        loop={true}
        effect={'fade'}
        autoplay={{
          delay: 2000,
        }}
        pagination={{
          dynamicBullets: true,
        }}
        modules={[Pagination, Autoplay, EffectFade]}
        className="mySwiper h-full w-full"
      >
        <SwiperSlide>
          <div id="slide_1" className="slide_c w-full h-screen relative">
            <div className="bg-transparent absolute w-full h-full flex mt-32 md:mt-0 md:justify-center items-center flex-col text-white z-10">
              <motion.p
                initial={{ y: 100, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{
                  duration: 0.4,
                }}
                className="uppercase md:text-xl tracking-widest md:tracking-[6px] font-mono"
              >
                Let us travel the world with us
              </motion.p>
              <motion.div
                initial={{ y: 100, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                viewport={{ once: false }}
                transition={{
                  duration: 0.4,
                  delay: 0.2,
                }}
                className="text-4xl md:text-7xl font-bold uppercase tracking-wider text-center mt-3"
              >
                <p>Explore The World With</p>
                <p>
                  With <span className="trns_text">Travol</span>
                </p>
              </motion.div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div id="slide_2" className="slide_c w-full h-screen relative">
            <div className="bg-transparent absolute w-full h-full flex mt-32 md:mt-0 md:justify-center items-center flex-col text-white z-10">
              <motion.p
                initial={{ y: 100, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                transition={{
                  duration: 0.4,
                }}
                className="uppercase md:text-xl tracking-widest md:tracking-[6px] font-mono"
              >
                Let us travel the world with us
              </motion.p>
              <motion.div
                initial={{ y: 100, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                viewport={{ once: false }}
                transition={{
                  duration: 0.4,
                  delay: 0.2,
                }}
                className="text-4xl md:text-7xl font-bold uppercase tracking-wider text-center mt-3"
              >
                <p>
                  <span className="trns_text">Discover</span> the world{' '}
                </p>
                <p>with our guide</p>
              </motion.div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div id="slide_3" className="slide_c w-full h-screen relative">
            <div className="bg-transparent absolute w-full h-full flex mt-32 md:mt-0 md:justify-center items-center flex-col text-white z-10">
              <motion.p
                initial={{ y: 100, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                transition={{
                  duration: 0.4,
                }}
                className="uppercase md:text-xl tracking-widest md:tracking-[6px] font-mono"
              >
                Let us travel the world with us
              </motion.p>
              <motion.div
                initial={{ y: 100, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                viewport={{ once: false }}
                transition={{
                  duration: 0.4,
                  delay: 0.2,
                }}
                className="text-4xl md:text-7xl font-bold uppercase tracking-wider text-center mt-3"
              >
                <p>Explore Rome With</p>
                <p>
                  <span className="trns_text">Travol</span>
                </p>
              </motion.div>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
      <div className="absolute bottom-12 md:bottom-28  z-10 w-full ">
        <div className="container ">
          <form
            className="grid md:grid-cols-4 items-center text-gray-500 border-[15px] border-opacity-50  border-gray-300 bg-gray-200 gap-y-4"
            action="#"
          >
            <input
              className="p-4 focus:outline-none md:border-e border-gray-500"
              type="text"
              placeholder="Where to?"
              name=""
              id=""
            />
            <select
              name=""
              className="dst appearance-none p-4 focus:outline-none md:border-e border-gray-500 "
              id=""
            >
              <option value="Destinations">Destinations</option>
              <option value="Greece">Greece</option>
              <option value="London">London</option>
              <option value="Maldives">Maldives</option>
              <option value="Paris">Paris</option>
              <option value="Rome">Rome</option>
            </select>
            <select
              name="dur"
              className="appearance-none p-4 focus:outline-none md:border-e border-gray-500 "
              id=""
            >
              <option value="Duration">Duration</option>
              <option value="1 Day Tour">1 Day Tour</option>
              <option value="2-4 Days Tour">2-4 Days Tour</option>
              <option value="5-7 Days Tour">5-7 Days Tour</option>
              <option value="7+ Days Tour">7+ Days Tour</option>
            </select>
            <button className="flex gap-x-3 justify-center items-center text-white bg-emerald-700 hover:bg-[#0f2454] duration-200 p-4">
              <span>
                <IoSearch></IoSearch>
              </span>{' '}
              Find Now
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Header;
