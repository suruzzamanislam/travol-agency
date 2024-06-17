import { createBrowserRouter } from 'react-router-dom';
import Root from '../Layout/Root';
import Home from '../Pages/Home/Home';
import About from '../Pages/About/About';
import Tour from '../Pages/Tour/Tour';
import Destinations from '../Pages/Destinations/Destinations';
import Gallery from '../Pages/Gallery/Gallery';
import Blog from '../Pages/Blog/Blog';
import Contact from '../Pages/Contact/Contact';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Root></Root>,
    children: [
      {
        path: '/',
        element: <Home></Home>,
      },
      {
        path: '/about',
        element: <About></About>,
      },
      {
        path: '/tour',
        element: <Tour></Tour>,
      },
      {
        path: '/destinations',
        element: <Destinations></Destinations>,
      },
      {
        path: '/gallery',
        element: <Gallery></Gallery>,
      },
      {
        path: '/blog',
        element: <Blog></Blog>,
      },
      {
        path: '/contact',
        element: <Contact></Contact>,
      },
    ],
  },
]);
export default router;
