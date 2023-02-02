import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Cssclass from ".././Css/Login.module.css";
import { color } from "../Utils/Constans";
import InputWithValidation from "./InputWithValidation";

const regexEmail = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/g;

const AuthFormSignup = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [passwordConfirmation, setPasswordConfirmation] = useState("");

  const [validateEmailText, setValidateEmailText] = useState("");
  const [validatePasswordText, setValidatePasswordText] = useState("");
  const [
    validatePasswordConfirmationText,
    setValidatePasswordConfirmationText,
  ] = useState("");

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
    if (password.length < 8) {
      setValidatePasswordText("Minimum password required 8");
    } else {
      setValidatePasswordText("");
    }
    if (password === "") {
      setValidatePasswordText("");
    }
  }, [password]);

  useEffect(() => {
    if (password.length < 8) {
      setValidatePasswordText("Minimum password required 8");
    } else {
      setValidatePasswordText("");
    }
    if (password === "") {
      setValidatePasswordText("");
    }
  }, [password]);

  useEffect(() => {
    if (password !== passwordConfirmation) {
      setValidatePasswordConfirmationText("Password not match");
    } else {
      setValidatePasswordConfirmationText("");
    }
    if (passwordConfirmation === "") {
      setValidatePasswordConfirmationText("");
    }
  }, [passwordConfirmation]);
  return (
    <div className="flex justify-center bg-background1 md:bg-white px-[15px] pt-[15px] w-full pb-[30px] md:pb-[22px]">
      <div className="bg-white w-full rounded-[8px] flex flex-col items-center px-[12px] py-[20px] md:py-[5px] shadow-xl md:shadow-none overflow-hidden">
        <div className="self-start text-[25px] font-[500]">
          <p>Sign up</p>
        </div>
        <InputWithValidation
          type="text"
          placeholder="First Name"
          state={firstName}
          setState={setFirstName}
          validateText=""
        ></InputWithValidation>
        <InputWithValidation
          type="text"
          placeholder="Last Name"
          state={lastName}
          setState={setLastName}
          validateText=""
        ></InputWithValidation>
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
        <InputWithValidation
          type="password"
          placeholder="Password Confirmation"
          state={passwordConfirmation}
          setState={setPasswordConfirmation}
          validateText={validatePasswordConfirmationText}
        ></InputWithValidation>

        <div className="flex items-center gap-[10px] mt-[20px] mb-[10px]">
          <input
            type="checkbox"
            id="check"
            className="h-[30px] w-[30px] md:h-[25px] md:w-[25px] hover:border-primary"
          ></input>
          <label
            htmlFor="check"
            className="text-primary md:text-black md:hover:text-primary transition-all ease-in-out text-[13px] font-[500]"
          >
            Email me exclusive Agoda promotions. I can opt out later as started
            in the Privacy Policy
          </label>
        </div>

        <button className="w-full bg-primary  transition-all ease-in-out text-white h-[40px] text-[14px] font-[500] rounded-[6px] mt-[5px] shadow-xl active:bg-[#003385]">
          Sign up
        </button>

        <div className="w-full mt-[30px]">
          <div className="w-full justify-center items-center relative hidden md:flex ">
            <p className="text-[12px] font-[500] relative z-[2] bg-white px-[10px]">
              Or Countinue With
            </p>
            <div className="h-[1px] w-full bg-lightGrey absolute z-[1]"></div>
          </div>

          <div className="hidden md:flex w-full text-primary font-[500] text-[14px] gap-[6px] justify-center border-[1px] border-primary h-[45px] rounded-[6px] items-center mt-[16px] hover:scale-[1.02] transition-all ease-in-out">
            <img
              src="https://cdn6.agoda.net/images/universal-login/google-logo-v2.svg"
              className="w-[22px] h-[22px]"
            ></img>
            <p className="cursor-pointer">Google</p>
          </div>

          <div className="gap-[10px] hidden md:flex ">
            <div className="flex-1 flex justify-center items-center h-[45px] border-[1px] border-primary rounded-[6px] mt-[10px] text-primary font-[500] text-[14px] gap-[6px] hover:scale-[1.02] transition-all ease-in-out">
              <img
                src="https://cdn6.agoda.net/images/universal-login/facebook-logo.svg"
                className="md:h-[22px] md:w-[22px]"
              ></img>
              <p className="cursor-pointer">Facebook</p>
            </div>
            <div className="flex-1 flex justify-center items-center h-[45px] border-[1px] border-primary rounded-[6px] mt-[10px] text-primary font-[500] text-[14px] gap-[6px] hover:scale-[1.02] transition-all ease-in-out">
              <img
                src="https://cdn6.agoda.net/images/universal-login/apple-logo.svg"
                className="md:h-[22px] md:w-[22px]"
              ></img>
              <p className="cursor-pointer">Apple</p>
            </div>
          </div>

          <div className="w-full justify-center items-center relative hidden md:flex mt-[20px]">
            <div className="h-[1px] w-full bg-lightGrey absolute z-[1]"></div>
          </div>

          <div className="hidden md:flex w-full text-primary font-[500] text-[14px] gap-[6px] justify-center border-[1px] border-primary h-[45px] rounded-[6px] items-center mt-[16px] hover:bg-lightBlue hover:text-white transition-all ease-in-out">
            <p className="cursor-pointer">Already have an account? Sign in</p>
          </div>

          <p className="text-[12px] text-center mt-[10px] md:mt-[20px] md:mt-[18px]">
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
    </div>
  );
};

export default AuthFormSignup;
