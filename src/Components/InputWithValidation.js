import Cssclass from "../Css/Input.module.css";
import { color } from "../Utils/Constans";
import {useRef} from "react";

const InputWithValidation = ({
  validateText,
  type,
  placeholder,
  state,
  setState,
}) => {
  const inputRef=useRef();

  return (
    <div className="w-full mt-[12px] md:mt-[20px]">
      <p className="text-black text-[14px] mb-[6px] font-[500] md:font-[400] leading-[20px]">
        {placeholder}
      </p>
      <input
        type={type}
        placeholder={placeholder}
        className={`w-full px-[10px] py-[8px] placeholder:text-[14px] transition-all ease-in-out placeholder:text-lightGrey outline-none ${Cssclass.InputAuth}`}
        style={{
          "--borderColor": validateText === "" ? color.grey2 : color.red,
          "--borderFocus": validateText === "" ? color.primary : color.red,
        }}
        // onChange={(e) => {
        //   setState(e.target.value);
        // }}
        ref={inputRef}
        onBlur={()=>{setState(inputRef.current.value)}}
      ></input>
      {validateText !== "" && <p className="text-red text-[12px] mt-[4px]">{validateText}</p>}
    </div>
  );
};

export default InputWithValidation;
