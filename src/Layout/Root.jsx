import { Outlet } from 'react-router-dom';
import Footer from '../Pages/Shared/Footer';
import TravelarsReviews from '../Pages/Shared/TravelarsReviews';

const Root = () => {
  return (
    <div>
      <Outlet></Outlet>
      <TravelarsReviews />
      <Footer />
    </div>
  );
};

export default Root;
