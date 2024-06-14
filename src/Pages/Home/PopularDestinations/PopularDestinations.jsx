import { Pagination } from 'swiper/modules';
import { SwiperSlide, Swiper } from 'swiper/react';
import PCard from '../../../Componet/PCard';
import maldives from '../../../assets/maldives1 (1).jpg';
import canada from '../../../assets/canada1 (1).jpg';
import italy from '../../../assets/italy1 (1).jpg';
import greece from '../../../assets/greece1 (1).jpg';
import france from '../../../assets/france1 (1).jpg';
import dubai from '../../../assets/dubai1.jpg';
const PopularDestinations = () => {
  return (
    <div className="my-10 md:my-20">
      <div className="container">
        <p className="uppercase text-[#2095AE] tracking-widest md:tracking-[4px] font-mono">
          TOP DESTINATION
        </p>
        <h1 className="font-bold text-4xl lg:text-5xl my-2 mb-5">
          POPULAR <span className="text-[#2095AE]">DESTINATION</span>
        </h1>
      </div>
      <div className="container">
        <Swiper
          speed={1500}
          loop={true}
          pagination={{
            clickable: true,
          }}
          modules={[Pagination]}
        >
          <SwiperSlide>
            <div className="grid gap-6 md:grid-cols-3">
              <div>
                <PCard
                  title="Maldives"
                  img={maldives}
                  tourPackage="4"
                  cost="NEW"
                ></PCard>
              </div>
              <div>
                <PCard
                  title="Canada"
                  img={canada}
                  tourPackage="3"
                  cost="25% OFF"
                ></PCard>
              </div>
              <div>
                <PCard
                  title="Italy"
                  img={italy}
                  tourPackage="7"
                  cost="7 Tour"
                ></PCard>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="grid gap-6 md:grid-cols-3">
              <div>
                <PCard
                  title="Greece"
                  img={greece}
                  tourPackage="7"
                  cost="OLD"
                ></PCard>
              </div>
              <div>
                <PCard
                  title="France"
                  img={france}
                  tourPackage="5"
                  cost="25% OFF"
                ></PCard>
              </div>
              <div>
                <PCard
                  title="Dubai"
                  img={dubai}
                  tourPackage="1"
                  cost="9 Tour"
                ></PCard>
              </div>
            </div>
          </SwiperSlide>
        </Swiper>
      </div>
    </div>
  );
};

export default PopularDestinations;
