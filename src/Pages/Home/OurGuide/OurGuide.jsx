import guideImg from '../../../assets/guide.jpeg';
import { IoCheckmarkSharp } from 'react-icons/io5';
import { MdPhoneInTalk } from 'react-icons/md';
import './OurGuide.css';
import { motion } from 'framer-motion';

const OurGuide = () => {
  const text = '. travel agency . travel agency';
  // console.log("text", text);

  const Letter = text.split('');
  // console.log(Letter);
  return (
    <div className="container lg:h-screen">
      <div className="flex flex-col gap-y-5 lg:gap-y-0 lg:flex-row py-8  lg:py-20">
        <motion.div
          initial={{ y: 100, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{
            duration: 0.4,
          }}
          className="lg:w-[60%] lg:pr-16"
        >
          <p className="uppercase text-[#2095AE] tracking-widest md:tracking-[4px] font-mono">
            THE BEST TRAVEL AGENCY
          </p>
          <h1 className="font-bold text-4xl lg:text-5xl my-2 lg:my-5 leading-tight">
            DISCOVER THE <span className="text-[#2095AE]  ">WORLD</span> <br />{' '}
            WITH OUR GUIDE
          </h1>
          <p className="text-gray-500 mb-2 lg:mb-6 leading-relaxed">
            You can choose any country with good tourism. Agency elementum sesue
            the aucan vestibulum aliquam justo in sapien rutrum volutpat. Donec
            in quis the pellentesque velit. Donec id velit ac arcu posuere
            blane.
          </p>
          <p className="text-gray-500 mb-3 lg:mb-10 leading-relaxed">
            Hotel ut nisl quam nestibulum ac quam nec odio elementum ceisue the
            miss varius natoque penatibus et magnis dis parturient monte.
          </p>
          <p className="flex items-center gap-x-3 text-gray-600">
            <span className=" border p-2 bg-[#2095AE] text-white rounded-full">
              <IoCheckmarkSharp></IoCheckmarkSharp>
            </span>
            20 Years of Experience
          </p>
          <p className="flex items-center gap-x-3 text-gray-600 mt-2 lg:mt-5">
            <span className=" border p-2 bg-[#2095AE] text-white rounded-full">
              <IoCheckmarkSharp></IoCheckmarkSharp>
            </span>
            150+ Tour Destinations
          </p>
          <div className="flex items-center gap-x-3 mt-2 lg:mt-5">
            <span className="p-1 text-[#2095AE] text-3xl">
              <MdPhoneInTalk></MdPhoneInTalk>
            </span>
            <div>
              <p className="text-gray-600">For information</p>
              <p className="text-gray-600">855 333 4444</p>
            </div>
          </div>
        </motion.div>
        <motion.div
          initial={{ y: 100, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{
            duration: 0.4,
            delay: 0.1,
          }}
          className="lg:w-[40%] relative"
        >
          <img
            className="w-full md:w-5/6 hover:scale-95 duration-500 ease-in-out"
            src={guideImg}
            alt=""
          />
          <div className="absolute top-8 -z-10 right-10 w-full md:w-5/6 h-full bg-[#2095AE]"></div>
          <div className="dots hidden md:block absolute -top-10 -left-10  w-[40%] h-[35%] -z-10"></div>
          <div className="">
            <section className=" md:right-[75px]">
              {Letter.map((item, index) => {
                return (
                  <span
                    key={index}
                    className="letter uppercase text-gray-500"
                    style={{
                      transform: `rotate(${index * 10}deg)`,
                    }}
                  >
                    {item}
                  </span>
                );
              })}
            </section>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default OurGuide;
