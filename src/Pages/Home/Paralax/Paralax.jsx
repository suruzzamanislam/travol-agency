import { GiCommercialAirplane } from 'react-icons/gi';
import { HiHomeModern } from 'react-icons/hi2';
import { BiSolidShip } from 'react-icons/bi';
import { GiTicket } from 'react-icons/gi';
import Counter from '../../../Componet/Counter';
import './Paralax.css';
const Paralax = () => {
  return (
    <div id="paralax">
      <div className="container z-10  relative py-7 md:py-32 grid md:grid-cols-2 gap-3 gap-y-10 lg:grid-cols-4 ">
        <div className="group flex flex-col  justify-center items-center text-white">
          <span className="inline-block overflow-hidden relative  w-24 h-24  border-4 border-[#2095AE] p-1 rounded-full">
            <GiCommercialAirplane className="  text-white bg-[#2095AE] rounded-full w-20 h-20 top-1 right-1 absolute group-hover:right-28 group-hover:opacity-0  duration-300 p-3"></GiCommercialAirplane>
            <GiCommercialAirplane className="  text-white bg-[#2095AE] rounded-full w-20 h-20 top-1 -right-28 group-hover:right-1 duration-300 opacity-0 group-hover:opacity-100 absolute p-3"></GiCommercialAirplane>
          </span>
          <p className="text-3xl tracking-widest my-2 font-semibold">
            <Counter start={0} end={600} />
          </p>
          <p className="text-2xl font-medium">Flight Booking</p>
        </div>
        <div className="group flex flex-col  justify-center items-center text-white">
          <span className="inline-block overflow-hidden relative  w-24 h-24  border-4 border-[#2095AE] p-1 rounded-full">
            <HiHomeModern className="  text-white bg-[#2095AE] rounded-full w-20 h-20 top-1 right-1 absolute group-hover:right-28 group-hover:opacity-0  duration-300 p-3"></HiHomeModern>
            <HiHomeModern className="  text-white bg-[#2095AE] rounded-full w-20 h-20 top-1 -right-28 group-hover:right-1 duration-300 opacity-0 group-hover:opacity-100 absolute p-3"></HiHomeModern>
          </span>
          <p className="text-3xl tracking-widest my-2 font-semibold">
            <Counter start={0} end={225} />
          </p>
          <p className="text-2xl font-medium">Amazing Tour</p>
        </div>
        <div className="group flex flex-col  justify-center items-center text-white">
          <span className="inline-block overflow-hidden relative  w-24 h-24  border-4 border-[#2095AE] p-1 rounded-full">
            <BiSolidShip className="  text-white bg-[#2095AE] rounded-full w-20 h-20 top-1 right-1 absolute group-hover:right-28 group-hover:opacity-0  duration-300 p-3"></BiSolidShip>
            <BiSolidShip className="  text-white bg-[#2095AE] rounded-full w-20 h-20 top-1 -right-28 group-hover:right-1 duration-300 opacity-0 group-hover:opacity-100 absolute p-3"></BiSolidShip>
          </span>
          <p className="text-3xl tracking-widest my-2 font-semibold">
            <Counter start={0} end={100} />
          </p>
          <p className="text-2xl font-medium">Cruises Booking</p>
        </div>
        <div className="group flex flex-col  justify-center items-center text-white">
          <span className="inline-block overflow-hidden relative  w-24 h-24  border-4 border-[#2095AE] p-1 rounded-full">
            <GiTicket className="  text-white bg-[#2095AE] rounded-full w-20 h-20 top-1 right-1 absolute group-hover:right-28 group-hover:opacity-0  duration-300 p-3"></GiTicket>
            <GiTicket className="  text-white bg-[#2095AE] rounded-full w-20 h-20 top-1 -right-28 group-hover:right-1 duration-300 opacity-0 group-hover:opacity-100 absolute p-3"></GiTicket>
          </span>
          <p className="text-3xl tracking-widest my-2 font-semibold">
            <Counter start={0} end={130} />
          </p>
          <p className="text-2xl font-medium">Ticket Booking</p>
        </div>
      </div>
    </div>
  );
};

export default Paralax;
