import { Header, AuthForm, HeaderWithBack } from "../Components";
import { color } from "../Utils/Constans";
import { IoIosArrowBack } from "react-icons/io";
import { useState } from "react";
import Cssclass from ".././Css/Login.module.css";

const Login = () => {
  const [loginType,setLoginType]=useState('email');
  return (
    <>
      {/* Desktop */}
      <div className="hidden md:block">
        <Header />
        <div>
          <AuthForm />
        </div>
      </div>

      {/* Mobile */}
      <div className="relative">
        <HeaderWithBack
          icon={<IoIosArrowBack></IoIosArrowBack>}
        ></HeaderWithBack>
        <div className="h-[60px] w-full"></div>
        <div className="flex justify-center bg-background1 px-[15px] pt-[15px] w-full h-screen">
          <div className="bg-white w-full rounded-[8px] flex flex-col items-center h-[unset] px-[12px] py-[20px] shadow-xl">
            <img
              src="https://cdn6.agoda.net/images/kite-js/logo/agoda/color-default.svg"
              alt="agoda"
              className="w-[89px] h-[37px] cursor-pointer"
            ></img>

            <div className="flex w-full mt-[25px]">
              <div className={`${loginType==='email'?'border-b-[2px]':'border-b-[1px]'} w-1/2 transition-all ease-in-out flex justify-center items-center text-[14px] pb-[12px] ${Cssclass.LoginType}`} style={{'--borderColor':loginType==='email'?color.primary:color.grey2}} onClick={()=>{setLoginType('email')}}>
                <p>EMAIL</p>
              </div>

              <div className={`${loginType==='phone'?'border-b-[2px]':'border-b-[1px]'} w-1/2 transition-all ease-in-out flex justify-center items-center text-[14px] pb-[12px] ${Cssclass.LoginType}`} style={{'--borderColor':loginType==='phone'?color.primary:color.grey2}} onClick={()=>{setLoginType('phone')}}>
                <p>PHONE</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;
