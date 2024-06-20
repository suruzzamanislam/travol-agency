import HeroSection from '../../Componet/HeroSection';
import PCard from '../../Componet/PCard';
import maldives from '../../assets/maldives1 (1).jpg';
import canada from '../../assets/canada1 (1).jpg';
import italy from '../../assets/italy1 (1).jpg';
import greece from '../../assets/greece1 (1).jpg';
import france from '../../assets/france1 (1).jpg';
import dubai from '../../assets/dubai1.jpg';
const Destinations = () => {
  return (
    <div>
      <HeroSection
        title={'CHOOSE YOUR DESTINATION'}
        w1={'POPULAR'}
        colorWord={'DESTINATION'}
      ></HeroSection>
      <div className="py-9 md:py-28">
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3 container ">
          <div>
            <PCard title="Canada" img={canada} tourPackage="3"></PCard>
          </div>
          <div>
            <PCard title="Italy" img={italy} tourPackage="7"></PCard>
          </div>
          <div>
            <PCard title="Greece" img={greece} tourPackage="7"></PCard>
          </div>
          <div>
            <PCard title="Maldives" img={maldives} tourPackage="4"></PCard>
          </div>
          <div>
            <PCard title="Dubai" img={dubai} tourPackage="1"></PCard>
          </div>
          <div>
            <PCard title="France" img={france} tourPackage="5"></PCard>
          </div>
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
    </div>
  );
};

export default Destinations;
