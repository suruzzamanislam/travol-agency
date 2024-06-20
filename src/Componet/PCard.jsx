import { IoLocationOutline } from 'react-icons/io5';
import PropTypes from 'prop-types';
import { FaArrowRightLong } from 'react-icons/fa6';

const PCard = ({ cost, title, tourPackage, img }) => {
  return (
    <div className="relative overflow-hidden group">
      <img className="group-hover:scale-110 duration-500" src={img} alt="" />
      {cost && (
        <div className="absolute right-0 rotate-[-90deg] group-hover:rotate-0 duration-500 group-hover:right-4 group-hover:top-2 text-white  tracking-widest bg-[#2095AE] top-10 py-2 px-4 text-sm ">
          <p>{cost}</p>
        </div>
      )}
      <div className="w-full h-full absolute inset-0 bg-gradient-to-t from-black opacity-20 group-hover:opacity-85 duration-500 "></div>
      <div className="w-full h-full absolute inset-0 flex items-end">
        <div className="text-white w-full px-6 pb-3 translate-y-11 group-hover:translate-y-0 duration-500">
          <div className="flex items-center gap-x-2 text-2xl font-semibold">
            <IoLocationOutline></IoLocationOutline>
            <h1>{title}</h1>
          </div>
          <div className="w-1/6 group-hover:w-full duration-500 h-[1px] mt-2 mb-6 origin-left bg-gray-100"></div>
          <div className="flex justify-between items-center">
            <p>{tourPackage} Tour Packages</p>
            <button className="flex items-center gap-x-2 hover:text-red-500 duration-200">
              Explore <FaArrowRightLong></FaArrowRightLong>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PCard;
PCard.propTypes = {
  cost: PropTypes.string,
  title: PropTypes.string,
  tourPackage: PropTypes.string,
  img: PropTypes.img,
};
