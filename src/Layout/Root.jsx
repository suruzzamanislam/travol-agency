import { Outlet } from 'react-router-dom';
import Footer from '../Pages/Shared/Footer';

const Root = () => {
  return (
    <div>
      <Outlet></Outlet>
      <Footer />
    </div>
  );
};

export default Root;
