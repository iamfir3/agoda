import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Cssclass from ".././Css/Login.module.css";
import { color } from "../Utils/Constans";
import InputWithValidation from "./InputWithValidation";
import { IoIosUnlock } from "react-icons/io";

const regexEmail = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/g;
const regexPhone = /(((\+|)84)|0)(3|5|7|8|9)+([0-9]{8})\b/;

const AuthFormLogin = () => {
  const [loginType, setLoginType] = useState("email");
  const [validateEmailText, setValidateEmailText] = useState("");
  const [validatePhoneText, setValidatePhoneText] = useState("");
  const [validatePasswordText, setValidatePasswordText] = useState("");
  const [validatePasswordPhoneText, setValidatePasswordPhoneText] =
    useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [password, setPassword] = useState("");
  const [passwordPhone, setPasswordPhone] = useState("");
  useEffect(() => {
    if (regexEmail.test(email) === false) {
      if (validateEmailText !== "Invalid email")
        setValidateEmailText("Invalid email");
    } else {
      setValidateEmailText("");
    }
    if (email === "") {
      setValidateEmailText("");
    }
  }, [email]);

  useEffect(() => {
    if (regexPhone.test(phone) === false) {
      if (validatePhoneText !== "Invalid phone number") {
        setValidatePhoneText("Invalid phone number");
      }
    } else {
      setValidatePhoneText("");
    }
    if (phone === "") {
      setValidatePhoneText("");
    }
  }, [phone]);

  useEffect(() => {
    if (password.length < 8) {
      console.log(1);
      setValidatePasswordText("Minimum password required 8");
    } else {
      setValidatePasswordText("");
    }
    if (password === "") {
      setValidatePasswordText("");
    }
  }, [password]);

  useEffect(() => {
    if (passwordPhone.length < 8) {
      setValidatePasswordPhoneText("Minimum password required 8");
    } else {
      setValidatePasswordPhoneText("");
    }
    if (passwordPhone === "") {
      setValidatePasswordPhoneText("");
    }
  }, [passwordPhone]);
  return (
    <>
      {/* Desktop */}
      <div className="bg-white w-full rounded-[8px] flex flex-col items-center px-[12px] md:px-[25px] py-[20px] md:py-[30px] shadow-xl md:shadow-none overflow-hidden">
        <img
          src="https://cdn6.agoda.net/images/kite-js/logo/agoda/color-default.svg"
          alt="agoda"
          className="w-[89px] h-[37px] cursor-pointer md:hidden"
        ></img>

        <div className="hidden md:block self-start">
          <p className="font-[500] text-[24px]">Sign in</p>
          <p className="text-[16px]">
            For security, please sign in to access your information
          </p>
        </div>

        <div className="flex w-full mt-[25px]">
          <div
            className={`${
              loginType === "email"
                ? "border-b-[2px] text-primary"
                : "border-b-[1px] text-black"
            } w-1/2 transition-all  ease-in-out flex justify-center items-center text-[14px] pb-[12px] ${
              Cssclass.LoginType
            }`}
            style={{
              "--borderColor":
                loginType === "email" ? color.primary : color.grey2,
            }}
            onClick={() => {
              setLoginType("email");
            }}
          >
            <p>EMAIL</p>
          </div>

          <div
            className={`${
              loginType === "phone"
                ? "border-b-[2px] text-primary"
                : "border-b-[1px] text-black"
            } w-1/2 transition-all ease-in-out flex justify-center items-center text-[14px] pb-[12px] ${
              Cssclass.LoginType
            }`}
            style={{
              "--borderColor":
                loginType === "phone" ? color.primary : color.grey2,
            }}
            onClick={() => {
              setLoginType("phone");
            }}
          >
            <p>PHONE</p>
          </div>
        </div>

        <div className="w-full mt-[5px] relative">
          <div
            className={`w-full ${
              loginType === "email"
                ? "translate-x-[0] opacity-1 w-auto h-auto"
                : "translate-x-[-100vw] h-0 opacity-0 absolute top-0 left-0"
            } transition-all  ease-in-out`}
          >
            <InputWithValidation
              type="email"
              placeholder="Email"
              state={email}
              setState={setEmail}
              validateText={validateEmailText}
            ></InputWithValidation>

            <InputWithValidation
              type="password"
              placeholder="Password"
              state={password}
              setState={setPassword}
              validateText={validatePasswordText}
            ></InputWithValidation>
          </div>

          <div
            className={`w-full ${
              loginType === "phone"
                ? "translate-x-[0px] opacity-1 w-auto h-auto"
                : "translate-x-[100vw] h-0 opacity-0 absolute top-0 left-0"
            } transition-all  ease-in-out`}
          >
            <InputWithValidation
              type="text"
              placeholder="Phone number"
              state={phone}
              setState={setPhone}
              validateText={validatePhoneText}
            ></InputWithValidation>

            <InputWithValidation
              type="password"
              placeholder="Password"
              state={passwordPhone}
              setState={setPasswordPhone}
              validateText={validatePasswordPhoneText}
            ></InputWithValidation>
          </div>
        </div>

        <button className="w-full bg-primary  transition-all ease-in-out text-white h-[40px] md:h-[45px] text-[14px] font-[500] rounded-[6px] mt-[20px] shadow-xl active:bg-[#003385]">
          Sign in
        </button>

        <div className="flex justify-between text-[12px] md:text-[14px] items-center text-primary w-full mt-[22px]">
          <Link to="/signup">Create Account</Link>
          <p className="flex items-center">
            <IoIosUnlock></IoIosUnlock> Forget Password?
          </p>
        </div>

        <div className="w-full mt-[30px]">
          <div className="w-full flex justify-center items-center relative">
            <p className="text-[12px] font-[500] relative z-[2] bg-white px-[10px]">
              Or Sign In With
            </p>
            <div className="h-[1px] w-full bg-lightGrey absolute z-[1]"></div>
          </div>

          <div className="w-full flex text-primary font-[500] text-[14px] gap-[6px] justify-center border-[1px] border-primary h-[45px] rounded-[6px] items-center mt-[16px]">
            <img
              src="https://cdn6.agoda.net/images/universal-login/google-logo-v2.svg"
              className="w-[22px] h-[22px]"
            ></img>
            <p>Google</p>
          </div>

          <div className="flex gap-[10px]">
            <div className="flex-1 flex justify-center items-center h-[45px] border-[1px] border-primary rounded-[6px] mt-[10px] text-primary font-[500] text-[14px] gap-[6px]">
              <img
                src="https://cdn6.agoda.net/images/universal-login/facebook-logo.svg"
                className="md:h-[22px] md:w-[22px]"
              ></img>
              <p>Facebook</p>
            </div>
            <div className="flex-1 flex justify-center items-center h-[45px] border-[1px] border-primary rounded-[6px] mt-[10px] text-primary font-[500] text-[14px] gap-[6px]">
              <img
                src="https://cdn6.agoda.net/images/universal-login/apple-logo.svg"
                className="md:h-[22px] md:w-[22px]"
              ></img>
              <p>Apple</p>
            </div>
          </div>

          <p className="text-[12px] text-center mt-[10px] md:mt-[18px]">
            By signing in, I agree to Agoda's{" "}
            <Link to="" className="text-primary">
              Terms of Use
            </Link>{" "}
            and{" "}
            <Link to="/" className="text-primary">
              Privacy Policy
            </Link>
          </p>
        </div>
      </div>

      {/* Mobile */}
      <div></div>
    </>
  );
};

export default AuthFormLogin;
