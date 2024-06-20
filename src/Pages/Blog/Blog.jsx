import { IoSearch } from 'react-icons/io5';
import BCard from '../../Componet/BCard';
import HeroSection from '../../Componet/HeroSection';
import b1 from '../../assets/blog1.jpg';
import b2 from '../../assets/blog2.jpg';
import b3 from '../../assets/blog3.jpg';
import b4 from '../../assets/blog4.jpg';
const Blog = () => {
  return (
    <div>
      <HeroSection
        title={'READ TRAVEL BLOG'}
        w1={'TRAVEL '}
        colorWord={'EXPERIENCE'}
      ></HeroSection>
      <div className="flex flex-col-reverse md:flex-row container gap-5 py-12 md:py-24">
        <div className="md:w-2/3 space-y-10 md:space-y-20">
          <BCard
            img={b1}
            title="Most Popular Yacht Charter Routes"
            date="03"
          ></BCard>
          <BCard
            img={b2}
            title="Tips Towards a Flawless Honeymoon"
            date="05"
          ></BCard>
          <BCard
            img={b3}
            title="Family Adventure Tours for Teens & Kids"
            date="09"
          ></BCard>
          <BCard
            img={b4}
            title="Practical information for traveling to Egypt"
            date="13"
          ></BCard>
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

        <div className="md:w-1/3 space-y-7">
          <div className="bg-[#f4f5f8] px-7 py-7">
            <div className="relative">
              <input
                type="text"
                placeholder="Type here..."
                className="w-full focus:outline-none border-none p-3"
                name=""
                id=""
              />
              <IoSearch className="absolute right-4 top-4 text-lg"></IoSearch>
            </div>
          </div>
          <div className="bg-[#f4f5f8] px-7 py-7 space-y-5">
            <p className="font-semibold text-lg">Recent Posts</p>
            <div className="flex gap-x-2">
              <img className="w-3/12" src={b1} alt="" />
              <a className="hover:text-[#4053e1]" href="#">
                Most Popular Yacht Charter Routes
              </a>
            </div>
            <div className="flex gap-x-2">
              <img className="w-3/12" src={b2} alt="" />
              <a className="hover:text-[#4053e1]" href="#">
                Tips Towards a Flawless Honeymoon
              </a>
            </div>
            <div className="flex gap-x-2">
              <img className="w-3/12" src={b4} alt="" />
              <a className="hover:text-[#4053e1]" href="#">
                Family Adventure Tours for Teens & Kids
              </a>
            </div>
          </div>
          <div className="bg-[#f4f5f8] px-7 py-7 space-y-5">
            <p className="font-semibold text-lg">Archives</p>
            <ul className="text-gray-600 space-y-3 text-sm">
              <li>December 2023</li>
              <li>November 2023</li>
              <li>October 2023</li>
            </ul>
          </div>
          <div className="bg-[#f4f5f8] px-7 py-7 space-y-5">
            <p className="font-semibold text-lg">Categories</p>
            <ul className="text-gray-600 space-y-3 text-sm">
              <li className="cursor-pointer hover:text-green-500">
                &gt; Travel
              </li>
              <li className="cursor-pointer hover:text-green-500">
                &gt; Tours
              </li>
              <li className="cursor-pointer hover:text-green-500">
                &gt; Destinations
              </li>
            </ul>
          </div>
          <div className="bg-[#f4f5f8] px-7 py-7 space-y-5">
            <p className="font-semibold text-lg">Tags</p>
            <ul className="text-gray-600 text-sm grid grid-cols-3 gap-4">
              <li className="bg-white hover:bg-[#2095AE] hover:text-white px-7 py-3">
                Travel
              </li>
              <li className="bg-white hover:bg-[#2095AE] hover:text-white px-7 py-3 text-center">
                Hotel
              </li>
              <li className="bg-white hover:bg-[#2095AE] hover:text-white px-7 py-3">
                Tours
              </li>
              <li className="bg-white hover:bg-[#2095AE] hover:text-white px-7 py-3 col-span-2 text-center">
                Destinations
              </li>
              <li className="bg-white hover:bg-[#2095AE] hover:text-white px-7 py-3">
                Agency
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Blog;
