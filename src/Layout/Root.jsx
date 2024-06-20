import { Outlet } from 'react-router-dom';
import Footer from '../Pages/Shared/Footer';
import TravelarsReviews from '../Pages/Shared/TravelarsReviews';
import ScrollNav from '../Pages/Shared/ScrollNav';
import BackToTopButton from '../Componet/BackToTopButton';

const Root = () => {
  return (
    <div>
      <ScrollNav />
      <BackToTopButton />
      <Outlet></Outlet>
      <TravelarsReviews />
      <Footer />
    </div>
  );
};

export default Root;
