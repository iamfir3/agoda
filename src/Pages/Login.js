import { Header, AuthFormLogin, HeaderWithBack } from "../Components";
import { IoIosArrowBack, IoIosUnlock } from "react-icons/io";
import { HiCheckCircle } from "react-icons/hi";

const Login = () => {
  return (
    <>
      {/* Desktop */}
      <div className="hidden md:block">
        <Header />
        <div className="flex justify-center bg-background1 md:bg-background2 px-[15px] pt-[15px] md:pt-[40px] w-full pb-[30px] md:pb-[80px]">
          <div className="hidden md:flex w-[52%] bg-white shadow-2xl">
            <div className="w-1/2">
              <AuthFormLogin />
            </div>
            <div className=" w-1/2">
              <div className="bg-lightBlue2 flex py-[25px] items-center justify-center">
                <img src="https://cdn0.agoda.net/images/agodavip/signupcage.svg"></img>
              </div>
              <div className="flex flex-col justify-center w-full gap-[8px] px-[46px] pt-[86px] pb-[96px] text-black bg-background3">
                <p className="text-[25px]">Sign in to unlock more benefits!</p>
                <div className="flex items-center gap-[8px] mt-[10px]">
                  <HiCheckCircle size="24" />
                  <p>Best price Guarantee on bookings</p>
                </div>
                <div className="flex items-center gap-[8px]">
                  <HiCheckCircle size="24" />
                  <p>Access our best Insider and VIP deals</p>
                </div>
                <div className="flex items-center gap-[8px]">
                  <HiCheckCircle size="24" />
                  <p>Earn AgodaCash to save even more</p>
                </div>
                <div className="flex items-center gap-[8px]">
                  <HiCheckCircle size="24" />
                  <p>Collect bookings towards your next VIP status</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Mobile */}
      <div className="relative md:hidden bg-background1">
        <HeaderWithBack icon={<IoIosArrowBack size="30"></IoIosArrowBack>}>
          <p className="text-center text-[18px] font-[500]">Sign In</p>
        </HeaderWithBack>
        <div className="h-[60px] w-full"></div>
        <div className="px-[15px] pt-[20px] pb-[30px]">
          <AuthFormLogin />
        </div>
      </div>
    </>
  );
};

export default Login;
