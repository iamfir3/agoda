import { HiCheckCircle } from "react-icons/hi";
import { color } from "../Utils/Constans";
import Button from "./Button";

const VipBanner = () => {
  return (
    <div className="bg-darkGrey flex items-center justify-between rounded-[8px] px-[20px] py-[12px] w-[60%]">
      <div className="flex items-center w-[70%] gap-[15px]">
        <img
          src="https://cdn6.agoda.net/images/agodavip/agoda-vip-logo.png"
          className="w-[144px] h-[24px]"
        ></img>
        <div className="w-full">
          <div className="text-white font-[500] mb-[5px]">
            <p>Become a VIP member to save and earn more!</p>
          </div>
          <div className="flex text-white gap-[10px] justify-between">
            <div className="w-1/2 ">
              <div className="flex items-center gap-[5px]">
                <HiCheckCircle size="22"></HiCheckCircle>
                <p>Get up to 25% VIP discount</p>
              </div>
              <div className="flex items-center gap-[5px]">
                <HiCheckCircle size="22"></HiCheckCircle>
                <p>Free perks on select properties</p>
              </div>
            </div>

            <div className="w-1/2">
              <div className="flex items-center gap-[5px]">
                <HiCheckCircle size="22"></HiCheckCircle>
                <p>Best price guarantee</p>
              </div>
              <div className="flex items-center gap-[5px]">
                <HiCheckCircle size="22"></HiCheckCircle>
                <p>Earn and redeem AgodaCash</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="">
        <Button
          backgroundColor="white"
          hoverColor={color.lightBlue}
          textColor={color.primary}
          textHover="white"
          paddingX="10px"
          paddingY="10px"
        >
          <p className="text-[14px] font-[500]">Sign up - it's free</p>
        </Button>
      </div>
    </div>
  );
};

export default VipBanner;
