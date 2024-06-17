import { MdPhoneInTalk } from 'react-icons/md';
import logo from '../../assets/logo.png';
import { CiLocationOn, CiMail } from 'react-icons/ci';
import {
  PiFacebookLogo,
  PiInstagramLogo,
  PiLinkedinLogo,
  PiTwitterLogo,
} from 'react-icons/pi';

const Footer = () => {
  return (
    <footer className="bg-[#0F2454] md:mt-24 text-white pt-16 pb-8">
      <div className="container">
        <div className="flex flex-col md:flex-row justify-between md:items-center gap-y-3 md:gap-y-0 border border-[#2095AE] p-4">
          <div className="flex items-center gap-x-3">
            <MdPhoneInTalk className="text-6xl p-2 bg-[#2095AE]"></MdPhoneInTalk>
            <div className="space-y-2">
              <p className="font-semibold">Call us</p>
              <p>+1 123-456-0606</p>
            </div>
          </div>
          <div className="w-full h-[1px] md:w-[1px] md:h-16 bg-[#2095AE]"></div>
          <div className="flex items-center gap-x-3">
            <CiMail className="text-6xl p-2 bg-[#2095AE]"></CiMail>
            <div className="space-y-2">
              <p className="font-semibold">Write to us</p>
              <p>info@travolagency.com</p>
            </div>
          </div>
          <div className="w-full h-[1px] md:w-[1px] md:h-16 bg-[#2095AE]"></div>
          <div className="flex items-center gap-x-3">
            <CiLocationOn className="text-6xl p-2 bg-[#2095AE]"></CiLocationOn>
            <div className="space-y-2">
              <p className="font-semibold">Address</p>
              <p>24 King St, SC 29401 USA</p>
            </div>
          </div>
        </div>
        <div className="grid gap-y-6  md:grid-cols-3 mt-10 md:mt-20">
          <div className="space-y-4">
            <img className="w-1/2" src={logo} alt="" />
            <p className="leading-loose text-gray-300 text-sm">
              Quisque imperdiet sapien porttito the bibendum sellentesque the
              commodo erat acar accumsa lobortis, enim diam the nesuen.
            </p>
            <div className="flex gap-x-2">
              <PiInstagramLogo className="text-4xl p-2 rounded-full hover:text-black cursor-pointer duration-200 bg-[#2095AE]"></PiInstagramLogo>
              <PiTwitterLogo className="text-4xl p-2 rounded-full hover:text-black cursor-pointer duration-200 bg-[#2095AE]"></PiTwitterLogo>
              <PiFacebookLogo className="text-4xl p-2 rounded-full hover:text-black cursor-pointer duration-200 bg-[#2095AE]"></PiFacebookLogo>
              <PiLinkedinLogo className="text-4xl p-2 rounded-full hover:text-black cursor-pointer duration-200 bg-[#2095AE]"></PiLinkedinLogo>
            </div>
          </div>
          <div className="md:ml-20">
            <p className="text-xl font-medium">Quick Links</p>
            <ul className="text-gray-300 mt-2 space-y-3">
              <li className="cursor-pointer hover:text-[#2095AE]">About</li>
              <li className="cursor-pointer hover:text-[#2095AE]">Tours</li>
              <li className="cursor-pointer hover:text-[#2095AE]">
                Destinations
              </li>
              <li className="cursor-pointer hover:text-[#2095AE]">Blog</li>
            </ul>
          </div>
          <div className="md:ml-10 space-y-3">
            <p className="text-xl font-medium">Subscribe</p>
            <p className="leading-loose text-gray-300 text-sm">
              Sign up for our monthly blogletter to stay informed about travel
              and tours
            </p>
            <div className="bg-white flex p-2">
              <input
                className="border-none w-full focus:outline-none px-3 py-2 text-gray-700"
                type="text"
                name=""
                id=""
                placeholder="Email Address"
              />
              <button className="bg-[#2095AE] px-7 shadow-sm shadow-black">
                Send
              </button>
            </div>
          </div>
        </div>
        <div className="w-full my-8 h-[1px] bg-[#2095AE]"></div>
        <p className="text-sm text-gray-300">
          ©2023 DuruThemes. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
