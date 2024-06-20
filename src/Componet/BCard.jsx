import PropTypes from 'prop-types';

const BCard = ({ date, title, img }) => {
  return (
    <div>
      <div className="relative group overflow-hidden">
        <img className="group-hover:scale-105 duration-500" src={img} alt="" />
        <div className="absolute left-3 bottom-3 bg-[#1C6C84] flex justify-center items-center flex-col text-white px-2 py-4">
          <p className="text-sm font-medium">DEC</p>
          <p className="font-semibold">{date}</p>
        </div>
      </div>
      <p className="tracking-widest text-[#1C6C84] mt-4 mb-3">TOURS</p>
      <p className="text-3xl font-semibold text-[#0f2454]">{title}</p>
      <p className="mt-2 text-gray-600">
        Hotel potenti fringilla pretium ipsum non blandit. Vivamus eget nisi non
        mi iaculis iaculis imperie quiseros sevin elentesque habitant morbi
        tristique senectus et netus et malesuada fames ac turpis enesta mauris
        suscipit mis nec est aliquam, a tincidunt eros iacu suscipit risus eu
        ullamcorper fauibu.
      </p>
      <button className="bg-[#1C6C84] duration-200 hover:bg-[#331a86] text-white px-6 py-3 mt-5">
        Read More
      </button>
    </div>
  );
};

export default BCard;
BCard.propTypes = {
  date: PropTypes.string,
  title: PropTypes.string,
  img: PropTypes.img,
};
