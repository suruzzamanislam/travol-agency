import { useState } from 'react';
import CountUp from 'react-countup';
import ScrollTrigger from 'react-scroll-trigger';
import PropTypes from 'prop-types';

const Counter = ({ start, end }) => {
  const [countOn, setCountOn] = useState(false);
  return (
    <>
      <ScrollTrigger
        onEnter={() => setCountOn(true)}
        onExit={() => setCountOn(false)}
      >
        {countOn && (
          <CountUp start={start} end={end} delay={0} duration={2}></CountUp>
        )}
      </ScrollTrigger>
    </>
  );
};

export default Counter;
Counter.propTypes = {
  start: PropTypes.number,
  end: PropTypes.number,
};
