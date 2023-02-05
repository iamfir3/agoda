import agoda from "../Assets/agoda.png";
import booking from "../Assets/booking.png";
import kayak from "../Assets/kayak.png";
import opentable from "../Assets/opentable.png";
import priceline from "../Assets/priceline.png";
import rentalcars from "../Assets/rentalcars.png";

const FooterPartner = () => {
  return (
    <div className="flex flex-col justify-center items-center w-[60%] text-white">
      <p className="text-[14px] font-[300] leading-[14px]">
        All material herein © 2005–2022 Agoda Company Pte. Ltd. All Rights
        Reserved.
      </p>
      <p className="text-[14px] font-[300] leading-[14px] mt-[8px]">
        Agoda is part of Booking Holdings Inc., the world leader in online
        travel & related services.
      </p>
      <div className="flex w-full justify-center gap-[80px] mt-[35px] mb-[53px]">
        <img src={agoda} className="w-[154px] h-[38px] object-contain"></img>
        <img src={booking} className="w-[154px] h-[38px] object-contain"></img>
        <img src={kayak} className="w-[154px] h-[38px] object-contain"></img>
        <img
          src={opentable}
          className="w-[154px] h-[38px] object-contain"
        ></img>
        <img
          src={priceline}
          className="w-[154px] h-[38px] object-contain"
        ></img>
        <img
          src={rentalcars}
          className="w-[154px] h-[38px] object-contain"
        ></img>
      </div>
      <p className="text-[11px] font-[400]">hk-pc-2f-acm-web-user-58b79664b-m9xbt</p>
    </div>
  );
};

export default FooterPartner;
