import { Link } from "react-router-dom";
import React from "react";
import { RxDotsHorizontal } from "react-icons/rx";
import CssClass from "../Css/Header.module.css";
import TagWithTriangle from "./TagWithTriangle";
import Button from "./Button";
import flag from "../Assets/ukflag.jpg";
import { BsCart3 } from "react-icons/bs";
import { color } from "../Utils/Constans";

const Header = () => {
  return (
    <div className="hidden md:flex items-center h-[60px] px-[40px] gap-[56px]">
      <img
        src="https://cdn6.agoda.net/images/kite-js/logo/agoda/color-default.svg"
        alt="agoda"
        className="w-[89px] h-[37px] cursor-pointer"
      ></img>
      <div className="flex justify-between w-full">
        <div className=" flex items-center gap-[32px] text-[14px] font-[500] text-black">
          <Link
            to="/packages"
            className={`${CssClass.NavLink} hover:text-primary transition-all`}
          >
            Flight + Hotel
          </Link>
          <Link
            to="/"
            className={`${CssClass.NavLink} hover:text-primary transition-all`}
          >
            Hotels & Homes
          </Link>
          <Link
            to="/flights"
            className={`${CssClass.NavLink} hover:text-primary transition-all`}
          >
            Flights
          </Link>
          <Link
            to="/deals"
            className={`${CssClass.NavLink} hover:text-primary transition-all relative`}
          >
            <TagWithTriangle />
            Coupons & Deals
          </Link>
          <Link
            to="/apartments"
            className={`${CssClass.NavLink} flex gap-[5px] items-center hover:text-primary transition-all`}
          >
            <svg
              width="1em"
              height="1em"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              className="text-[20px]"
            >
              <path
                fillRule="evenodd"
                d="M12 2c5.523 0 10 4.477 10 10 0 5.43-4.327 9.848-9.72 9.996L12 22a10 10 0 0 1-9-5.637l-.08-.169A9.963 9.963 0 0 1 2 12C2 6.477 6.477 2 12 2zm-.5 12h-3v4h3v-4zm4 0h-3v4h3v-4zm-4-5c-1.624.274-2.84 1.632-2.985 3.272l-.012.19L8.5 13h3V9zm1 0v4h3v-.508l-.01-.193c-.129-1.593-1.265-2.917-2.796-3.261L12.5 9zM12 3.5a8.5 8.5 0 0 0-8.485 9.014L12 4.5l8.485 8.013A8.5 8.5 0 0 0 12 3.5z"
              ></path>
            </svg>
            Apartments
          </Link>
          <Link
            to="/activities"
            className={`${CssClass.NavLink} hover:text-primary transition-all relative`}
          >
            <TagWithTriangle />
            Things to do
          </Link>
          <div className="relative">
            <label htmlFor="otherNav">
              <RxDotsHorizontal size="22" />
            </label>
            <input className={CssClass.input} id="otherNav"></input>
            <div className={`${CssClass.otherNavContainer} p-[10px]`}>
              <Link
                to="/airport-transfer"
                className={`inline-block w-[110px] mt-[8px] mb-[4px] hover:text-primary transition-all`}
              >
                Airport transfer
              </Link>
              <Link
                to="/car-rentals "
                className={`inline-block w-[110px] mt-[4px] mb-[8px] hover:text-primary transition-all`}
              >
                Car rentals
              </Link>
            </div>
          </div>
        </div>

        <div className="flex gap-[8px] items-center">
          <Button
            paddingX="12px"
            paddingY="12px"
            backgroundColor="white"
            hoverColor={color.lightRed}
            borderColor={color.lightRed}
            textColor={color.lightRed}
            textHover="white"
          >
            <p className="text-[14px] font-[400] leading-[20px]">
              List your place
            </p>
          </Button>
          <img
            src={flag}
            className="w-[26px] h-[20px] ml-[8px] mr-[26px] cursor-pointer"
            alt="agoda"
          />
          <p className="font-[300] text-[14px] text-black mr-[26px] cursor-pointer translate-y-[-3px]">
            đ
          </p>

          <svg
            width="1em"
            height="1em"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            className="text-black text-[25px] mr-[16px] cursor-pointer"
          >
            <path d="M3.133 3c.7 0 1.3.482 1.459 1.152l.026.136L4.862 6h15.536a1 1 0 0 1 1 1l-.005.093-.013.091-1.083 5.777a2.5 2.5 0 0 1-2.286 2.033l-.17.006H6.146l.103.712a1.5 1.5 0 0 0 1.346 1.282l.139.006H19.5a.5.5 0 0 1 .09.992L19.5 18h-2a2.5 2.5 0 1 1-4 0h-3a2.5 2.5 0 1 1-3.807-.228 2.496 2.496 0 0 1-1.404-1.753l-.03-.165L3.629 4.429a.5.5 0 0 0-.404-.42L3.133 4H1.5a.5.5 0 0 1-.09-.992L1.5 3h1.633zM8.5 18a1.5 1.5 0 1 0 0 3 1.5 1.5 0 0 0 0-3zm7 0a1.5 1.5 0 1 0 0 3 1.5 1.5 0 0 0 0-3zm-9.496-4H17.84a1.5 1.5 0 0 0 1.441-1.084l.033-.14L20.398 7H5.005l.999 7z"></path>
          </svg>
          <Link to="/login">
            <Button
              paddingX="12px"
              paddingY="12px"
              backgroundColor="white"
              hoverColor={color.lightBlue}
              borderColor="transparent"
              textColor={color.lightBlue}
              textHover="white"
            >
              <p className="text-[14px] font-[400] leading-[14px]">Sign in</p>
            </Button>
          </Link>
          <Link to='/signup'>
            <Button
              paddingX="12px"
              paddingY="12px"
              backgroundColor="white"
              hoverColor={color.lightBlue}
              borderColor={color.lightBlue}
              textColor={color.lightBlue}
              textHover="white"
            >
              <p className="text-[14px] font-[300] leading-[14px]">
                Create account
              </p>
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default React.memo(Header);
