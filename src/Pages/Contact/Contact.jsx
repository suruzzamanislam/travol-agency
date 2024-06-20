import { MdPhoneInTalk } from 'react-icons/md';
import HeroSection from '../../Componet/HeroSection';
import { CiLocationOn, CiMail } from 'react-icons/ci';

const Contact = () => {
  return (
    <div>
      <HeroSection
        title={'GET IN TOUCH'}
        w1={'CONTACT'}
        colorWord={'US'}
      ></HeroSection>
      <div className="flex flex-col gap-y-9 md:flex-row container py-10 md:py-24">
        <div className="md:w-3/5 md:pr-20 space-y-8">
          <p className="text-3xl font-medium">Travel Agency Inc.</p>
          <p className="text-gray-600">
            Travel duru nisl quam nestibulum ac quam nec odio elementum sceisue
            the aucan ligula. Orci varius natoque penatibus et magnis dis
            parturient monte nascete ridiculus mus nellentesque habitant
            morbine.
          </p>
          <div className="flex items-center gap-x-2">
            <MdPhoneInTalk className="text-6xl text-[#2095AE]"></MdPhoneInTalk>
            <div className="text-xl">
              <p className="text-gray-500">Phone</p>
              <p className="text-[#2095AE]">855 333 4444</p>
            </div>
          </div>
          <div className="flex items-center gap-x-2">
            <CiMail className="text-6xl text-[#2095AE]"></CiMail>
            <div className="text-xl">
              <p className="text-gray-500">e-Mail Address</p>
              <p className="text-[#2095AE]">info@luxuryhotel.com</p>
            </div>
          </div>
          <div className="flex items-center gap-x-2">
            <CiLocationOn className="text-6xl text-[#2095AE]"></CiLocationOn>
            <div className="text-xl">
              <p className="text-gray-500">Location</p>
              <p className="text-[#2095AE]">
                1616 Broadway NY, New York 10001 United States of America
              </p>
            </div>
          </div>
        </div>
        <div className="md:w-2/5 ">
          <div className="border shadow-md shadow-gray-300 sticky top-20">
            <div className="bg-[#2095AE] py-6">
              <p className="text-2xl text-center text-white font-semibold">
                Get in touch
              </p>
            </div>
            <form
              className="space-y-4 bg-gray-200 text-gray-500  px-4 pb-8 py-6"
              action="#"
            >
              <div className="flex gap-x-3">
                <input
                  className="p-4 focus:outline-none  w-full"
                  type="text"
                  placeholder="Your Name*"
                  name=""
                  id=""
                />
                <input
                  className="p-4 focus:outline-none  w-full"
                  type="text"
                  placeholder="Your Email*"
                  name=""
                  id=""
                />
              </div>
              <div className="flex gap-x-3">
                <input
                  className="p-4 focus:outline-none  w-full"
                  type="text"
                  placeholder="Your Number*"
                  name=""
                  id=""
                />
                <input
                  className="p-4 focus:outline-none  w-full"
                  type="text"
                  placeholder="Subject*"
                  name=""
                  id=""
                />
              </div>

              <textarea
                name=""
                className="w-full h-36 p-4 focus:outline-none"
                placeholder="Message*"
                id=""
              ></textarea>

              <button className="flex gap-x-3 justify-center items-center text-white bg-[#2095AE] hover:bg-[#0f2454] duration-200 p-4  w-full">
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
