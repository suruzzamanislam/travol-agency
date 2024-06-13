import { GoClock } from 'react-icons/go';
import { IoLocationOutline } from 'react-icons/io5';

const Video = () => {
  return (
    <div className="md:h-[70vh] w-full my-4 md:my-24 relative">
      <video
        className="w-full h-full object-cover"
        loop={true}
        autoPlay={true}
        preload="auto"
        muted
        src="https://duruthemes.com/demo/html/travol/travel-video.mp4"
      ></video>
      <div className="absolute inset-0 text-gray-900 flex w-full h-full items-center justify-center flex-col">
        <p className="text-3xl font-semibold">Costa Victoria Cochin</p>
        <div className="flex gap-x-3 items-center text-lg">
          <p className="flex items-center gap-x-2">
            <IoLocationOutline></IoLocationOutline> <span>Maldives</span>
          </p>
          <p className="flex items-center gap-x-2">
            <GoClock></GoClock> <span>4 days + 3 nights</span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Video;
