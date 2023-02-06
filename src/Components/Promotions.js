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
        "	https://cdn6.agoda.net/images/WebCampaign/wcSS20230126/home_banner_web/en-us.png",
      link: "/",
    },
  ],
  [
    {
      image:
        "	https://cdn6.agoda.net/images/WebCampaign/wcSS20230126/home_banner_web/en-us.png",
      link: "/",
    },
    {
      image:
        "	https://cdn6.agoda.net/images/WebCampaign/wcSS20230126/home_banner_web/en-us.png",
      link: "/",
    },
  ],
  [
    {
      image:
        "	https://cdn6.agoda.net/images/WebCampaign/wcSS20230126/home_banner_web/en-us.png",
      link: "/",
    },
    {
      image:
        "	https://cdn6.agoda.net/images/WebCampaign/wcSS20230126/home_banner_web/en-us.png",
      link: "/",
    },
  ],
];
const Promotions = () => {
  const [currentImage, setCurrentImage] = useState(0);

  return (
    <div className="flex justify-between flex-col w-[60%] overflow-hidden relative">
      <div className="flex justify-between">
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
        className="bg-white h-[50px] w-[50px] rounded-[50%] absolute top-[50%] translate-y-[-50%] flex items-center justify-center"
        onClick={() => {
          setCurrentImage((prev) => prev + 2);
        }}
      >
        <IoIosArrowBack size="20"></IoIosArrowBack>
      </div>
      <div className={`flex gap-[20px] h-[185px] ${Cssclass.slider}`}>
        {data.map((promotion) => (
          <div className="flex w-[1000px] gap-[20px]">
            <img
              src={promotion[0]?.image}
              className="rounded-[8px] w-[85%]"
            ></img>
            <img
              src={promotion[1]?.image}
              className="rounded-[8px] w-[85%]"
            ></img>
          </div>
        ))}
      </div>
      <div
        className="bg-white h-[50px] w-[50px] rounded-[50%] absolute top-[50%] translate-y-[-50%] right-0 flex items-center justify-center"
        onClick={() => {
          setCurrentImage((prev) => prev + 2);
        }}
      >
        <IoIosArrowForward size="20"></IoIosArrowForward>
      </div>
    </div>
  );
};

export default Promotions;
