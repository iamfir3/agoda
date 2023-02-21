import PromotionItem from "./PromotionItem";
import { IoIosArrowForward, IoIosArrowBack } from "react-icons/io";
import { Link } from "react-router-dom";
import { useRef, useState, useEffect } from "react";
import Cssclass from "../Css/Promotions.module.css";

const DestinationsCarousel = ({ data }) => {
  const [currentImage, setCurrentImage] = useState(0);
  
  return (
    <div className="flex justify-center flex-col w-[60%] overflow-hidden relative pt-[10px]">
      <div
        className={`flex gap-[20px] w-[10000px] relative ${Cssclass.slider}`}
      >
        {currentImage !== 0 && (
          <div className="absolute z-[2] flex items-center h-full bg-gradient-to-r from-white to-[transparent]">
            <div
              className={`bg-white h-[32px] w-[32px] rounded-[50%] shadow-xl flex items-center justify-center translate-x-[20px]`}
              onClick={() => {
                setCurrentImage((prev) => prev - 1);
              }}
            >
              <IoIosArrowBack size="20"></IoIosArrowBack>
            </div>
          </div>
        )}
        {data.map((promotion,i) => (
          <div
          key={i}
            className={`${Cssclass.image} flex flex-col items-center transition-all ease-in-out mr-[20px] `}
            style={{
              "--translateX": currentImage,
              "--move": currentImage !== data.length - 1 ? "1054px" : "1075px",
            }}
          >
            <img
              src={promotion?.image}
              className={`rounded-[50%] lg:h-[124px] lg:w-[124px] relative object-fit hover:scale-[1.05] hover:shadow-xl transition-all ease-in-out`}
            ></img>
            <p className="text-black text-[14px] leading-[22px] font-[700] leading-[22px] mt-[14px]">{promotion.name}</p>
            <p className="text-grey3 text-[12px] leading-[16px] mt-[4px]">{promotion.accommodations} accommodations</p>
          </div>
        ))}
        {currentImage !== Math.ceil((data.length - 1)/7)-1 && (
          <div className="absolute z-[2] flex items-center h-full bg-gradient-to-r from-[transparent] to-white left-[1100px] w-[42px] top-0">
            <div
              className={`bg-white h-[32px] w-[32px] rounded-[50%] shadow-xl flex items-center justify-center translate-x-[-20px]`}
              onClick={() => {
                setCurrentImage((prev) => prev + 1);
              }}
            >
              <IoIosArrowForward size="20"></IoIosArrowForward>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default DestinationsCarousel;
