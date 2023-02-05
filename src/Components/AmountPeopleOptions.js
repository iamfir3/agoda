import { useState } from "react";
import Tag from "./Tag";
import { SlArrowRight } from "react-icons/sl";

const AmountPeopleOptions = ({ setShowOptions, setAmount }) => {
  return (
    <div className="w-[75%] absolute bg-white top-[90px] rounded-[8px] left-0 z-[11]">
      <div className="flex justify-between p-[10px] items-center">
        <div>
          <p className="text-[14px] text-grey3">Solo traveler</p>
          <Tag>
            <p>Save up to 12%</p>
          </Tag>
        </div>
        <p className="text-[12px] text-grey3">1 room, 1 adult</p>
      </div>
      <div className="px-[10px] ">
        <div className="flex justify-between border-b-[1px] border-lightGrey py-[20px] items-center">
          <p className="text-[14px] text-grey3">Couple/Pair</p>

          <p className="text-[12px] text-grey3">1 room,2 adult</p>
        </div>
      </div>

      <div className="px-[10px] ">
        <div className="flex justify-between border-b-[1px] border-lightGrey py-[20px] items-center">
          <p className="text-[14px] text-grey3">Family travelers</p>

          <SlArrowRight></SlArrowRight>
        </div>
      </div>

      <div className="px-[10px] ">
        <div className="flex justify-between border-b-[1px] border-lightGrey py-[20px] items-center">
          <p className="text-[14px] text-grey3">Group travelers</p>

          <SlArrowRight></SlArrowRight>
        </div>
      </div>

      <div className="px-[10px]">
        <div className="flex justify-between py-[20px] items-center">
          <p className="text-[14px] text-grey3">Business travelers</p>

          <SlArrowRight></SlArrowRight>
        </div>
      </div>
    </div>
  );
};

export default AmountPeopleOptions;
