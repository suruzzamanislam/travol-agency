import { IoSearch } from 'react-icons/io5';
import HeroSection from '../../Componet/HeroSection';
import DCard from '../../Componet/DCard';
import romeImg from '../../assets/rome1.jpg';
import veniceImg from '../../assets/venice1.jpg';
import milanoImg from '../../assets/milano.jpg';
import parmaImg from '../../assets/parma1.jpg';
const Tour = () => {
  return (
    <div>
      <HeroSection
        title={'CHOOSE YOUR TOUR'}
        w1={'MOST POPULAR'}
        colorWord={'TOURS'}
      ></HeroSection>
      <div className="container py-10 md:py-24 flex flex-col-reverse md:flex-row gap-8">
        <div className="md:w-2/3 ">
          <div className="grid lg:grid-cols-2 gap-6">
            <DCard
              title="Rome"
              perPrice="$1.500 / per person"
              cost="ITALY"
              img={romeImg}
              pera="Travel non lorem ac erat susce bibendum nulla facilisi. Sedeuter nunc voluat miss conse viventa amet vestibulum"
            ></DCard>
            <DCard
              title="Venice"
              perPrice="$700 / per person"
              img={veniceImg}
              pera="Travel non lorem ac erat susce bibendum nulla facilisi. Sedeuter nunc voluat miss conse viventa amet vestibulum"
            ></DCard>
            <DCard
              title="Milano"
              perPrice="$900 / per person"
              img={milanoImg}
              pera="Travel non lorem ac erat susce bibendum nulla facilisi. Sedeuter nunc voluat miss conse viventa amet vestibulum"
            ></DCard>
            <DCard
              title="Perguea"
              perPrice="$1.400 / per person"
              img={parmaImg}
              cost="PERGUEA"
              pera="Travel non lorem ac erat susce bibendum nulla facilisi. Sedeuter nunc voluat miss conse viventa amet vestibulum"
            ></DCard>
          </div>
          <div className="text-xl flex justify-center items-center gap-x-3 mt-12">
            <button className="w-10 h-10 rounded-full hover:bg-[#2095AE] duration-200 hover:text-white border">
              &lt;
            </button>
            <button className="w-10 h-10 rounded-full hover:bg-[#2095AE] duration-200 hover:text-white border">
              1
            </button>
            <button className="w-10 h-10 rounded-full bg-[#2095AE] duration-200 text-white border">
              2
            </button>
            <button className="w-10 h-10 rounded-full hover:bg-[#2095AE] duration-200 hover:text-white border">
              3
            </button>
            <button className="w-10 h-10 rounded-full hover:bg-[#2095AE] duration-200 hover:text-white border">
              &gt;
            </button>
          </div>
        </div>
        <div className=" md:w-1/3 ">
          <div className="border shadow-md shadow-gray-300 sticky top-36">
            <div className="bg-[#2095AE] py-6">
              <p className="text-2xl text-center text-white font-semibold">
                Plan Your Trip
              </p>
            </div>
            <form
              className="space-y-4 bg-gray-200 text-gray-500  px-4 pb-8 py-6"
              action="#"
            >
              <select
                name=""
                className="dst appearance-none p-4 focus:outline-none  w-full"
                id=""
              >
                <option value="Destinations">Destinations</option>
                <option value="Greece">Greece</option>
                <option value="London">London</option>
                <option value="Maldives">Maldives</option>
                <option value="Paris">Paris</option>
                <option value="Rome">Rome</option>
              </select>
              <input
                className="p-4 focus:outline-none  w-full"
                type="text"
                placeholder="Travel Type"
                name=""
                id=""
              />

              <input
                className="p-4 focus:outline-none  w-full"
                type="text"
                placeholder="Start Date"
                id=""
              />
              <input
                className="p-4 focus:outline-none  w-full"
                type="text"
                placeholder="End Date"
                id=""
              />
              <button className="flex gap-x-3 justify-center items-center text-white bg-[#2095AE] hover:bg-[#0f2454] duration-200 p-4  w-full">
                <span>
                  <IoSearch></IoSearch>
                </span>{' '}
                Search
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Tour;
