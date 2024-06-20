import PropTypes from 'prop-types';

const DCard = ({ title, perPrice, cost, img, pera }) => {
  return (
    <div className="group relative">
      <div className="relative overflow-hidden group-hover:scale-x-0 origin-left duration-500">
        <img className="" src={img} alt="" />
        {cost && (
          <div className="absolute right-0 rotate-[-90deg] text-white  tracking-widest bg-[#203cae] top-10 py-2 px-4 text-sm ">
            <p>{cost}</p>
          </div>
        )}
        <div className="w-full h-full absolute inset-0 bg-gradient-to-t from-black opacity-85 duration-500 "></div>
        <div className="w-full h-full absolute inset-0 flex items-end">
          <div className="text-white w-full px-6 pb-3 translate-y-0 duration-500">
            <h1 className="text-2xl font-semibold">{title}</h1>
            <div className="w-full duration-500 h-[1px] my-2 bg-gray-100"></div>
            <p>{perPrice}</p>
          </div>
        </div>
      </div>
      <div className="w-full h-full bg-gray-200 absolute inset-0  origin-right scale-x-0 group-hover:scale-x-100 duration-500 flex flex-col justify-center items-center text-center px-7 shadow-md shadow-black">
        <p className="text-2xl font-semibold">{title}</p>
        <p className="text-[#2095AE]">{perPrice}</p>
        <p className="mt-4 tracking-wider text-gray-700">{pera}</p>
        <button className="mt-4 border-b border-gray-600 hover:text-[#2095AE] duration-200 hover:border-[#2095AE]">
          Tour Details
        </button>
      </div>
    </div>
  );
};

export default DCard;
DCard.propTypes = {
  title: PropTypes.string,
  perPrice: PropTypes.string,
  cost: PropTypes.string,
  pera: PropTypes.string,
  img: PropTypes.img,
};
