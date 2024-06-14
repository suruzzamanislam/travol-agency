import { GoClock } from 'react-icons/go';
import { FaRegUser } from 'react-icons/fa6';
import { IoLocationOutline } from 'react-icons/io5';
import { IoMdStar } from 'react-icons/io';
import PropTypes from 'prop-types';

const Card = ({ title, days, users, place, reviews, cost, img }) => {
  return (
    <div className="relative overflow-hidden group">
      <img className="group-hover:scale-110 duration-500" src={img} alt="" />
      <div className="absolute right-0 rotate-[-90deg] group-hover:rotate-0 duration-500 group-hover:right-4 group-hover:top-2 text-white  tracking-widest bg-[#2095AE] top-10 py-2 px-4 text-sm ">
        <p>{cost}</p>
      </div>
      <div className="w-full h-full absolute inset-0 bg-gradient-to-t from-black opacity-20 group-hover:opacity-85 duration-500 "></div>
      <div className="w-full h-full absolute inset-0 flex items-end">
        <div className="text-white w-full px-6 pb-3 translate-y-11 group-hover:translate-y-0 duration-500">
          {reviews && (
            <div className="text-orange-400 flex items-center gap-x-1">
              <IoMdStar></IoMdStar>
              <IoMdStar></IoMdStar>
              <IoMdStar></IoMdStar>
              <IoMdStar></IoMdStar>
              <IoMdStar className="text-white"></IoMdStar>
              <p className="text-xs text-white">
                (<span>{reviews}</span> reviews)
              </p>
            </div>
          )}
          <h1 className="text-2xl font-semibold">{title}</h1>
          <div className="w-1/6 group-hover:w-full duration-500 h-[1px] mt-2 mb-6 origin-left bg-gray-100"></div>
          <div className="flex gap-x-3 items-center text-sm">
            <p className="flex items-center gap-x-2">
              <GoClock></GoClock> <span>{days}</span>
            </p>
            <p className="flex items-center gap-x-2">
              <FaRegUser></FaRegUser> <span>{users}</span>
            </p>
            <p className="flex items-center gap-x-2">
              <IoLocationOutline></IoLocationOutline> <span>{place}</span>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
Card.propTypes = {
  title: PropTypes.string,
  days: PropTypes.string,
  users: PropTypes.string,
  place: PropTypes.string,
  reviews: PropTypes.string,
  cost: PropTypes.string,
  img: PropTypes.img,
};
