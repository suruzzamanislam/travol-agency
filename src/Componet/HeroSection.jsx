import { useContext } from 'react';
import Navbar from '../Pages/Shared/Navbar';
import './HeroSection.css';
import PropTypes from 'prop-types';
import { AllContext } from '../AllProvider/AllProvider';
import { motion } from 'framer-motion';

const HeroSection = ({ title, w1, w2, w3, w4, colorWord, sColorWord, br }) => {
  const { isOpen } = useContext(AllContext);
  return (
    <div className="hero_box h-[35vh] md:h-[65vh] w-full flex flex-col justify-center">
      <nav className="absolute top-0 z-10 w-full">
        <Navbar />
      </nav>

      <div className="container text-white -mt-10 md:-mt-16">
        <div className={`absolute ${isOpen ? 'z-0' : 'z-10'}`}>
          <motion.p
            initial={{ y: 100, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{
              duration: 0.4,
            }}
            className="tracking-[7px] text-sm mb-3"
          >
            {title}
          </motion.p>
          <motion.p
            initial={{ y: 100, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{
              duration: 0.4,
              delay: 0.1,
            }}
            className="text-3xl md:text-5xl font-bold md:leading-[55px]"
          >
            {w1 && w1}{' '}
            <span className="text-[#57d0ec]">{sColorWord && sColorWord}</span>{' '}
            {w2 && w2} {w3 && w3} {br && <br />}
            <span className="text-[#57d0ec]">{colorWord}</span> {w4 && w4}
          </motion.p>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
HeroSection.propTypes = {
  title: PropTypes.string,
  w1: PropTypes.string,
  w2: PropTypes.string,
  w3: PropTypes.string,
  w4: PropTypes.string,
  colorWord: PropTypes.string,
  sColorWord: PropTypes.string,
  br: PropTypes.bool,
};
