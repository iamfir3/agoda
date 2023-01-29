import Button from "./Button";
import { color } from "../Utils/Constans";
import { CiSearch } from "react-icons/ci";
import { FaRegCalendarCheck, FaRegCalendarTimes } from "react-icons/fa";
import { HiOutlineUsers } from "react-icons/hi";
import { SlArrowDown } from "react-icons/sl";
import Tag from "./Tag";
const Homes = () => {
  return (
    <div className="bg-white w-full px-[48px] pb-[48px] pt-[32px] rounded-[18px]">
      <div className="flex gap-[10px]">
        <Button
          backgroundColor="white"
          hoverColor={color.lightBlue}
          paddingX="5px"
          paddingY="10px"
          textColor={color.lightBlue}
          textHover="white"
          borderColor={color.lightBlue}
        >
          <p>Overnight Stays</p>
        </Button>

        <Button
          backgroundColor="white"
          hoverColor={color.lightBlue}
          paddingX="5px"
          paddingY="10px"
          textColor={color.lightBlue}
          textHover="white"
          borderColor={color.lightBlue}
        >
          <p>Day Use Stays</p>
        </Button>
      </div>

      <div className="flex w-full gap-[15px] border-[1px] border-superLightGrey h-[65px] items-center px-[25px] mt-[13px] rounded-[8px]">
        <CiSearch size="30" className="text-grey placeholder:text-black" />
        <input
          placeholder="Enter a destination or properly"
          className="w-full outline-none"
        />
      </div>

      <div className="flex w-full mt-[12px] gap-[12px]">
        <div className="flex border-[1px] border-superLightGrey py-[15px] w-[45%] rounded-[8px]">
          <div className="flex text-grey items-center gap-[16px] flex-1 border-r-[1px] border-superLightGrey px-[10px] pl-[15px]">
            <FaRegCalendarCheck className="text-[24px]"></FaRegCalendarCheck>
            <div>
              <p className="text-black text-[16px] leading-[23px]">
                2 Feb 2023
              </p>
              <p className="text-[14px] leading-[18px]">Thursday</p>
            </div>
          </div>

          <div className="flex text-grey items-center gap-[16px] flex-1 px-[10px] items-center">
            <FaRegCalendarCheck className="text-[24px]"></FaRegCalendarCheck>
            <div>
              <p className="text-black text-[16px] leading-[23px]">
                2 Feb 2023
              </p>
              <p className="text-[14px] leading-[18px]">Thursday</p>
            </div>
          </div>
        </div>

        <div className="flex border-[1px] border-superLightGrey py-[15px] flex-auto items-center justify-between text-grey rounded-[8px] px-[25px] ">
          <div className="flex gap-[15px] items-center">
            <HiOutlineUsers className="text-[24px]"></HiOutlineUsers>
            <div>
              <p className="text-black text-[16px] leading-[23px]">2 adults</p>
              <p className="text-[14px] leading-[18px]">1 room</p>
            </div>
          </div>
          <SlArrowDown className=""></SlArrowDown>
        </div>
      </div>

      <div className="mt-[24px] flex gap-[8px] items-center">
        <Tag className="mr-[4px]">
          <p>Bundle & Save</p>
        </Tag>

        <div className="flex items-center gap-[8px] border-[1px] border-superLightGrey px-[24px] py-[12px] text-[14px] leading-[20px]">
          <p>+ Add a flight</p>
          <svg
            width="1em"
            height="1em"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
           
          >
            <path d="M13.639 6.772l3.386-3.386a4.5 4.5 0 0 1 1.77-1.091l1.68-.555a1.86 1.86 0 0 1 2.348 2.355l-.558 1.676a4.5 4.5 0 0 1-1.088 1.76l-3.404 3.404 2.155 9.77a1.3 1.3 0 0 1-.35 1.199l-.673.673a1.3 1.3 0 0 1-2.055-.286l-3.834-6.868-3.676 3.072.839 2.626a1 1 0 0 1-.235 1l-.98 1.012a1 1 0 0 1-1.57-.172l-2.226-3.622-3.63-2.228a1 1 0 0 1-.195-1.548l.986-1.017a1 1 0 0 1 1.028-.254l2.779.907 3.017-3.657L2.31 7.745a1.3 1.3 0 0 1-.288-2.056l.672-.673a1.3 1.3 0 0 1 1.194-.351l9.752 2.107z"></path>
          </svg>
        </div>

        <div className="flex items-center gap-[8px] border-[1px] border-superLightGrey px-[24px] py-[12px] text-[14px] leading-[20px]">
          <p>+ Add a flight</p>
          <svg
            width="1em"
            height="1em"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            
          >
            <path d="M2.176 1.018L9.263 1a1.179 1.179 0 0 1 1.182 1.176v7.8c0 .26-.247.447-.498.378L7.5 9.678a.786.786 0 0 0-.995.757v11.358c0 .65-.528 1.178-1.18 1.178H2.18A1.179 1.179 0 0 1 1 21.793V2.197c0-.65.526-1.177 1.176-1.179zm1.387 1.55a1 1 0 0 0-1 1v.357a1 1 0 0 0 1 1h.358a1 1 0 0 0 1-1v-.358a1 1 0 0 0-1-1h-.358zm3.93 0a1 1 0 0 0-1 1v.357a1 1 0 0 0 1 1h.357a1 1 0 0 0 1-1v-.358a1 1 0 0 0-1-1h-.358zm-3.93 3.928a1 1 0 0 0-1 1v.358a1 1 0 0 0 1 1h.358a1 1 0 0 0 1-1v-.358a1 1 0 0 0-1-1h-.358zm0 3.93a1 1 0 0 0-1 1v.357a1 1 0 0 0 1 1h.358a1 1 0 0 0 1-1v-.357a1 1 0 0 0-1-1h-.358zm13.164 3.985c.464.17.773.614.772 1.109l-.013 6.29a1.179 1.179 0 0 1-1.182 1.176h-.008l-1.54-.015a.393.393 0 0 1-.39-.393v-3.113a.393.393 0 0 0-.392-.393h-2.382a.393.393 0 0 0-.393.393v3.113a.393.393 0 0 1-.393.393H9.239a1.179 1.179 0 0 1-1.178-1.178v-9.441a.786.786 0 0 1 1.057-.738l7.609 2.797zm-.375-8.716h5.487c.65 0 1.178.528 1.178 1.179v14.919c0 .65-.527 1.178-1.178 1.178h-1.602a1.179 1.179 0 0 1-1.179-1.178v-7.189c0-.483-.295-.917-.744-1.096l-2.893-1.145a.393.393 0 0 1-.248-.366V6.874c0-.651.528-1.179 1.179-1.179z"></path>
          </svg>
        </div>
      </div>
    </div>
  );
};

export default Homes;
