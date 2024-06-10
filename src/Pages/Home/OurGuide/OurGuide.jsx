import guideImg from '../../../assets/guide.jpeg';
import { IoCheckmarkSharp } from 'react-icons/io5';
import { MdPhoneInTalk } from 'react-icons/md';

const OurGuide = () => {
  return (
    <div className="container h-screen">
      <div className="flex  py-20">
        <div className="w-[60%] pr-16">
          <p className="uppercase text-[#2095AE] tracking-widest md:tracking-[4px] font-mono">
            THE BEST TRAVEL AGENCY
          </p>
          <h1 className="font-bold text-5xl my-5 leading-tight">
            DISCOVER THE <span className="text-[#2095AE]  ">WORLD</span> <br />{' '}
            WITH OUR GUIDE
          </h1>
          <p className="text-gray-500 mb-6 leading-relaxed">
            You can choose any country with good tourism. Agency elementum sesue
            the aucan vestibulum aliquam justo in sapien rutrum volutpat. Donec
            in quis the pellentesque velit. Donec id velit ac arcu posuere
            blane.
          </p>
          <p className="text-gray-500 mb-10 leading-relaxed">
            Hotel ut nisl quam nestibulum ac quam nec odio elementum ceisue the
            miss varius natoque penatibus et magnis dis parturient monte.
          </p>
          <p className="flex items-center gap-x-3 text-gray-600">
            <span className=" border p-2 bg-[#2095AE] text-white rounded-full">
              <IoCheckmarkSharp></IoCheckmarkSharp>
            </span>
            20 Years of Experience
          </p>
          <p className="flex items-center gap-x-3 text-gray-600 mt-5">
            <span className=" border p-2 bg-[#2095AE] text-white rounded-full">
              <IoCheckmarkSharp></IoCheckmarkSharp>
            </span>
            150+ Tour Destinations
          </p>
          <div className="flex items-center gap-x-3 mt-5">
            <span className="p-1 text-[#2095AE] text-3xl">
              <MdPhoneInTalk></MdPhoneInTalk>
            </span>
            <div>
              <p className="text-gray-600">For information</p>
              <p className="text-gray-600">855 333 4444</p>
            </div>
          </div>
        </div>
        <div className="w-[40%] border border-black relative">
          <img
            className="w-5/6 hover:scale-95 duration-500 ease-in-out"
            src={guideImg}
            alt=""
          />
          <div className="absolute top-8 -z-10 right-8 w-[85%] h-[93%] bg-[#2095AE]"></div>
          <div className="dots absolute -top-10 -left-10  w-[40%] h-[35%] -z-10"></div>
        </div>
      </div>
    </div>
  );
};

export default OurGuide;
