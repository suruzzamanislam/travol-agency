import {
  PiFacebookLogo,
  PiInstagramLogo,
  PiLinkedinLogo,
  PiTwitterLogo,
} from 'react-icons/pi';
import HeroSection from '../../Componet/HeroSection';
import member1 from '../../assets/member1.jpg';
import member2 from '../../assets/member2.jpg';
import member3 from '../../assets/member3.jpg';
const About = () => {
  return (
    <div>
      <HeroSection
        title={'THE BEST TRAVEL AGENCY'}
        w1={'WE HELPING YOU FIND'}
        br={true}
        colorWord={'YOUR DREAM'}
        w4={'VOCATION'}
      />
      <div className="bg-[#0f2454] py-12 md:py-24 pb-16 md:pb-32">
        <div className="container mb-5 md:mb-10">
          <p className="uppercase text-[#2095AE] tracking-widest md:tracking-[4px] font-mono">
            TRAVEL EXPERTS
          </p>
          <h1 className="font-bold text-4xl lg:text-5xl my-2 md:mb-5 text-white">
            MEET OUR <span className="text-[#2095AE]">GUIDES</span>
          </h1>
        </div>
        <div className="container grid md:grid-cols-3 gap-14 md:gap-5">
          <div className="relative group">
            <div>
              <img src={member1} alt="" />
            </div>
            <div className="w-full h-full flex justify-center">
              <div className="absolute w-4/5 bg-[#248EA4] text-white lg:px-16 py-5 mx-auto text-center -bottom-10 group-hover:bottom-5 group-hover:opacity-0 duration-300">
                <p className="font-semibold text-lg">Emily Norman</p>
                <p>Switzerland Guide</p>
              </div>
            </div>
            <div className="absolute inset-0 scale-y-0 bg-opacity-75  origin-bottom group-hover:scale-y-100 duration-300 bg-[#248EA4] flex justify-center items-center flex-col text-center">
              <div className="p-5 flex flex-col justify-center items-center  text-white">
                <p className="font-semibold text-lg">Emily Norman</p>
                <p>Switzerland Guide</p>
                <p className="mt-4">
                  Nulla quis efficitur lacus sulvinar suere ausue in eduis euro
                  vesatien arcuman ontese auctor ac aleuam aretra.
                </p>
                <div className="flex gap-x-2 mt-3">
                  <PiInstagramLogo className="text-4xl p-2 rounded-full hover:text-black cursor-pointer duration-200 bg-[#0a4c5b]"></PiInstagramLogo>
                  <PiTwitterLogo className="text-4xl p-2 rounded-full hover:text-black cursor-pointer duration-200 bg-[#0a4c5b]"></PiTwitterLogo>
                  <PiFacebookLogo className="text-4xl p-2 rounded-full hover:text-black cursor-pointer duration-200 bg-[#0a4c5b]"></PiFacebookLogo>
                  <PiLinkedinLogo className="text-4xl p-2 rounded-full hover:text-black cursor-pointer duration-200 bg-[#0a4c5b]"></PiLinkedinLogo>
                </div>
              </div>
            </div>
          </div>
          <div className="relative group">
            <div>
              <img src={member2} alt="" />
            </div>
            <div className="w-full h-full flex justify-center">
              <div className="absolute w-4/5 bg-[#248EA4] text-white lg:px-16 py-5 mx-auto text-center -bottom-10 group-hover:bottom-5 group-hover:opacity-0 duration-300">
                <p className="font-semibold text-lg">Suruzzaman</p>
                <p>Maldives Guide</p>
              </div>
            </div>
            <div className="absolute inset-0 scale-y-0 bg-opacity-75  origin-bottom group-hover:scale-y-100 duration-300 bg-[#248EA4] flex justify-center items-center flex-col text-center">
              <div className="p-5 flex flex-col justify-center items-center  text-white">
                <p className="font-semibold text-lg">Suruzzaman</p>
                <p>Maldives Guide</p>
                <p className="mt-4">
                  Nulla quis efficitur lacus sulvinar suere ausue in eduis euro
                  vesatien arcuman ontese auctor ac aleuam aretra.
                </p>
                <div className="flex gap-x-2 mt-3">
                  <PiInstagramLogo className="text-4xl p-2 rounded-full hover:text-black cursor-pointer duration-200 bg-[#0a4c5b]"></PiInstagramLogo>
                  <PiTwitterLogo className="text-4xl p-2 rounded-full hover:text-black cursor-pointer duration-200 bg-[#0a4c5b]"></PiTwitterLogo>
                  <PiFacebookLogo className="text-4xl p-2 rounded-full hover:text-black cursor-pointer duration-200 bg-[#0a4c5b]"></PiFacebookLogo>
                  <PiLinkedinLogo className="text-4xl p-2 rounded-full hover:text-black cursor-pointer duration-200 bg-[#0a4c5b]"></PiLinkedinLogo>
                </div>
              </div>
            </div>
          </div>
          <div className="relative group">
            <div>
              <img src={member3} alt="" />
            </div>
            <div className="w-full h-full flex justify-center">
              <div className="absolute w-4/5 bg-[#248EA4] text-white lg:px-16 py-5 mx-auto text-center -bottom-10 group-hover:bottom-5 group-hover:opacity-0 duration-300">
                <p className="font-semibold text-lg">Angelina White</p>
                <p>Greece Guide</p>
              </div>
            </div>
            <div className="absolute inset-0 scale-y-0 bg-opacity-75  origin-bottom group-hover:scale-y-100 duration-300 bg-[#248EA4] flex justify-center items-center flex-col text-center">
              <div className="p-5 flex flex-col justify-center items-center  text-white">
                <p className="font-semibold text-lg">Angelina White</p>
                <p>Greece Guide</p>
                <p className="mt-4">
                  Nulla quis efficitur lacus sulvinar suere ausue in eduis euro
                  vesatien arcuman ontese auctor ac aleuam aretra.
                </p>
                <div className="flex gap-x-2 mt-3">
                  <PiInstagramLogo className="text-4xl p-2 rounded-full hover:text-black cursor-pointer duration-200 bg-[#0a4c5b]"></PiInstagramLogo>
                  <PiTwitterLogo className="text-4xl p-2 rounded-full hover:text-black cursor-pointer duration-200 bg-[#0a4c5b]"></PiTwitterLogo>
                  <PiFacebookLogo className="text-4xl p-2 rounded-full hover:text-black cursor-pointer duration-200 bg-[#0a4c5b]"></PiFacebookLogo>
                  <PiLinkedinLogo className="text-4xl p-2 rounded-full hover:text-black cursor-pointer duration-200 bg-[#0a4c5b]"></PiLinkedinLogo>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
