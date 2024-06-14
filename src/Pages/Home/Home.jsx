import Header from './Header/Header';
import OurGuide from './OurGuide/OurGuide';
import Paralax from './Paralax/Paralax';
import PopularDestinations from './PopularDestinations/PopularDestinations';
import PopularTours from './PopularTours/PopularTours';
import TravelCountries from './TravelCountries/TravelCountries';
import Video from './Video/Video';

const Home = () => {
  return (
    <div className="">
      <Header />
      <OurGuide />
      <PopularTours />
      <Paralax />
      <div className="hidden md:block">
        <PopularDestinations />
      </div>
      <Video />
      <TravelCountries />
    </div>
  );
};

export default Home;
