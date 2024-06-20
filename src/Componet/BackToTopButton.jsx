import { useContext } from 'react';
import { MdKeyboardDoubleArrowUp } from 'react-icons/md';
import { AllContext } from '../AllProvider/AllProvider';
const BackToTopButton = () => {
  const { isScrollNav, handleBackTop } = useContext(AllContext);
  return (
    <button
      onClick={handleBackTop}
      className={`fixed bottom-7 right-7 text-xl rounded-full p-2 bg-[#0F2454] text-white shadow-md shadow-white z-50 duration-500 hover:text-green-500 ${
        isScrollNav ? 'translate-y-0' : 'translate-y-32'
      }`}
    >
      <MdKeyboardDoubleArrowUp></MdKeyboardDoubleArrowUp>
    </button>
  );
};

export default BackToTopButton;
