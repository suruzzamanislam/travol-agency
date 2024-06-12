import Card from '../../../Componet/Card';
import maldiveImg from '../../../assets/maldives1.jpg';
import italyImg from '../../../assets/italy1.jpg';
import franceImg from '../../../assets/france1.jpg';
import greeceImg from '../../../assets/greece1.jpg';
import canadaImg from '../../../assets/canada1.jpg';
const PopularTours = () => {
  return (
    <div className="bg-[#f4f5f8] mt-6 lg:mt-0 py-11 md:py-28">
      <div className="container">
        <p className="uppercase text-[#2095AE] tracking-widest md:tracking-[4px] font-mono">
          CHOOSE YOUR PLACE
        </p>
        <h1 className="font-bold text-4xl lg:text-5xl my-2 mb-5">
          POPULAR <span className="text-[#2095AE]">TOURS</span>
        </h1>
      </div>
      <div className="container grid gap-4 md:gap-8 grid-cols-1 md:grid-cols-3">
        <div className="md:col-span-2">
          <Card
            title="Maldives Tour"
            days="10 Days"
            users="12+"
            place="Maldives"
            reviews="2"
            cost="$2.500"
            img={maldiveImg}
          ></Card>
        </div>
        <div>
          <Card
            title="Italy Tour"
            days="6 Days"
            users="10+"
            place="Italy"
            reviews="4"
            cost="$1.300"
            img={italyImg}
          ></Card>
        </div>
        <div className="">
          <Card
            title="France Tour"
            days="9 Days"
            users="16+"
            place="France"
            reviews="3"
            cost="$400"
            img={franceImg}
          ></Card>
        </div>
        <div>
          <Card
            title="Greece Tour"
            days="2 Days"
            users="4+"
            place="Greece"
            reviews="1"
            cost="$100"
            img={greeceImg}
          ></Card>
        </div>
        <div>
          <Card
            title="Canada Tour"
            days="4 Days"
            users="9+"
            place="Canada"
            reviews="8"
            cost="$9000"
            img={canadaImg}
          ></Card>
        </div>
      </div>
    </div>
  );
};

export default PopularTours;
