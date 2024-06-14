import PropTypes from 'prop-types';

const ECard = ({ ftitle, stitle, img, date }) => {
  return (
    <div className="relative group overflow-hidden">
      <img
        className="group-hover:scale-110 group-hover:rotate-2 duration-300 ease-linear"
        src={img}
        alt=""
      />
      <div className="flex flex-col justify-center items-center bg-[#2095ae] absolute p-2 text-sm top-0 left-0 z-10">
        <p>DEC</p>
        <p className="font-semibold">{date}</p>
      </div>
      <div className="w-full flex items-center justify-center">
        <div className="bg-white text-gray-700 w-5/6 mx-auto px-5 py-6 shadow-md shadow-black duration-300 absolute -bottom-20 group-hover:bottom-8 z-10">
          <p className="text-[#2095ae] uppercase">{ftitle}</p>
          <p className="text-xl font-semibold text-[#0f2454]">{stitle}</p>
        </div>
      </div>
      <div className="w-full h-full absolute inset-0 bg-black z-0 opacity-0 group-hover:opacity-50 duration-300"></div>
    </div>
  );
};

export default ECard;
ECard.propTypes = {
  ftitle: PropTypes.string,
  stitle: PropTypes.string,
  img: PropTypes.img,
  date: PropTypes.string,
};
