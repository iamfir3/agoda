import PromotionItem from "./PromotionItem";
import { IoIosArrowForward } from "react-icons/io";
import { Link } from "react-router-dom";

const Promotions = () => {
  return (
    <div className="flex justify-between w-[60%]">
      <div className="w-[50px] h-full"></div>
      <p className="text-[24px] text-black font-[500]">
        Accommodation Promotions
      </p>
      <Link to="/" className="flex items-center gap-[4px] justify-self-end text-primary">
        <p className="text-[14px]">View all</p> <IoIosArrowForward size="14"></IoIosArrowForward>
      </Link>

      
    </div>
  );
};

export default Promotions;
