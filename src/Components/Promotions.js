import PromotionItem from "./PromotionItem";
import { IoIosArrowForward, IoIosArrowBack } from "react-icons/io";
import { Link } from "react-router-dom";
import { useRef, useState, useEffect } from "react";
import Cssclass from "../Css/Promotions.module.css";

const data = [
  [
    {
      image:
        "	https://cdn6.agoda.net/images/WebCampaign/wcSS20230126/home_banner_web/en-us.png",
      link: "/",
    },
    {
      image:
        "	https://cdn0.agoda.net/images/blt2/wcActivities/Awareness/VN/Desktop/en-us/VN_20230126.png",
      link: "/",
    },
  ],
  [
    {
      image:
        "		https://cdn6.agoda.net/images/WebCampaign/wcSP20230120VN/home_banner_web/en-us.png",
      link: "/",
    },
    {
      image:
        "		https://cdn6.agoda.net/images/WebCampaign/wcSP20230109All/home_banner_web/en-us.png",
      link: "/",
    },
  ],
  [
    {
      image:
        "	https://cdn6.agoda.net/images/WebCampaign/wcSP20230201VN/home_banner_web/en-us.png",
      link: "/",
    },
    {
      image:
        "	https://cdn6.agoda.net/images/WebCampaign/wcSS20230119/home_banner_web2/en-us.png",
      link: "/",
    },
  ],
  [
    {
      image:
        "		https://cdn6.agoda.net/images/WebCampaign/wcNO20230101/home_banner_web2/en-us.png",
      link: "/",
    },
    {
      image:
        "	https://cdn6.agoda.net/images/WebCampaign/DesignTest20221001_Post2/10/web/en-us.png",
      link: "/",
    },
  ],
];
const Promotions = () => {
  const [currentImage, setCurrentImage] = useState(0);

  return (
    <div className="flex justify-center flex-col w-[60%] overflow-hidden relative">
      <div className="flex justify-between mb-[24px]">
        <div className="w-[50px] h-full"></div>
        <p className="text-[24px] text-black font-[500]">
          Accommodation Promotions
        </p>
        <Link
          to="/"
          className="flex items-center gap-[4px] justify-self-end text-primary"
        >
          <p className="text-[14px]">View all</p>{" "}
          <IoIosArrowForward size="14"></IoIosArrowForward>
        </Link>
      </div>

      <div
        className={`flex gap-[20px] h-[185px] w-[10000px] relative ${Cssclass.slider}`}
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
            className={`${Cssclass.image} flex gap-[20px] ${
              currentImage > 0 && currentImage !== data.length - 1
                ? "lg:w-[1014px]"
                : "lg:w-[1054px]"
            } transition-all ease-in-out mr-[20px] `}
            style={{
              "--translateX": currentImage,
              "--move": currentImage !== data.length - 1 ? "1054px" : "1075px",
            }}
          >
            <img
              src={promotion[0]?.image}
              className={`rounded-[8px] relative ${
                currentImage > 0 && currentImage !== data.length - 1
                  ? "lg:w-[507px] left-[50px]"
                  : "lg:w-[527px]"
              } object-fit`}
            ></img>
            <img
              src={promotion[1]?.image}
              className={`rounded-[8px] relative ${
                currentImage > 0 && currentImage !== data.length - 1
                  ? "lg:w-[507px] left-[50px]"
                  : "lg:w-[527px]"
              } object-fit`}
            ></img>
          </div>
        ))}
        {currentImage !== data.length - 1 && (
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

      <div className="flex justify-center mt-[16px]">
        <div className="flex gap-[8px]">
          {data.map((dot, i) => (
            <div
              key={i}
              className={`w-[12px] h-[12px] ${
                currentImage === i ? "bg-primary" : "bg-[#dde9fd]"
              } rounded-[50%]`}
              onClick={() => {
                setCurrentImage(i);
              }}
            ></div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Promotions;
