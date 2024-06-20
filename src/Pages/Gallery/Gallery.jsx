import HeroSection from '../../Componet/HeroSection';
import ig1 from '../../assets/img-gallery/img-gallery-1.jpg';
import ig2 from '../../assets/img-gallery/img-gallery-2.jpg';
import ig3 from '../../assets/img-gallery/img-gallery-3.jpg';
import ig4 from '../../assets/img-gallery/img-gallery-4.jpg';
import ig5 from '../../assets/img-gallery/img-gallery-5.jpg';
import { TiMediaPlay } from 'react-icons/ti';

const Gallery = () => {
  return (
    <div>
      <HeroSection
        title={'IMAGES AND VIDEOS'}
        w1={'IMAGE'}
        sColorWord={'&'}
        w2={'VIDEO'}
        colorWord={'GALLERY'}
      ></HeroSection>
      {/* image gallery */}
      <div className="py-10 md:py-24">
        <div className="container">
          <p className="uppercase text-[#2095AE] tracking-widest md:tracking-[4px] font-mono">
            IMAGES
          </p>
          <h1 className="font-bold text-4xl lg:text-5xl my-2 mb-5">
            IMAGE <span className="text-[#2095AE]">GALLERY</span>
          </h1>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-3 container gap-5">
          <img className="hover:scale-105 duration-200" src={ig1} alt="" />
          <img className="hover:scale-105 duration-200" src={ig2} alt="" />
          <img
            className="hover:scale-105 duration-200 col-span-2 md:col-span-1"
            src={ig3}
            alt=""
          />
        </div>
        <div className="grid grid-cols-2 gap-5 container mt-5">
          <img className="hover:scale-105 duration-200" src={ig4} alt="" />
          <img className="hover:scale-105 duration-200" src={ig5} alt="" />
        </div>
      </div>
      {/* video gallery */}
      <div className="py-10 md:py-24 bg-[#f4f5f8]">
        <div className="container">
          <div className="">
            <p className="uppercase text-[#2095AE] tracking-widest md:tracking-[4px] font-mono">
              VIDEOS
            </p>
            <h1 className="font-bold text-4xl lg:text-5xl my-2 mb-5">
              VIDEO <span className="text-[#2095AE]">GALLERY</span>
            </h1>
          </div>
          <div className="grid grid-cols-2 gap-5 container mb-5">
            <div className="relative">
              <img className="" src={ig3} alt="" />
              <TiMediaPlay className="absolute right-2 bottom-2 text-4xl p-1 border border-black cursor-pointer rounded-full hover:bg-white"></TiMediaPlay>
            </div>
            <div className="relative">
              <img className="" src={ig2} alt="" />
              <TiMediaPlay className="absolute right-2 bottom-2 text-4xl p-1 border border-black cursor-pointer rounded-full hover:bg-white"></TiMediaPlay>
            </div>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 container gap-5">
            <div className="relative">
              <img className="" src={ig4} alt="" />
              <TiMediaPlay className="absolute right-2 bottom-2 text-4xl p-1 border border-black cursor-pointer rounded-full hover:bg-white"></TiMediaPlay>
            </div>
            <div className="relative">
              <img className="" src={ig5} alt="" />
              <TiMediaPlay className="absolute right-2 bottom-2 text-4xl p-1 border border-black cursor-pointer rounded-full hover:bg-white"></TiMediaPlay>
            </div>
            <div className="relative col-span-2 md:col-span-1">
              <img className="" src={ig1} alt="" />
              <TiMediaPlay className="absolute right-2 bottom-2 text-4xl p-1 border border-black cursor-pointer rounded-full hover:bg-white"></TiMediaPlay>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Gallery;
