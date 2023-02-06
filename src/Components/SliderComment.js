import { FaUserCircle } from "react-icons/fa";
import { AiOutlineArrowLeft, AiOutlineArrowRight } from "react-icons/ai";
import { useState, useEffect } from "react";
function SliderComment() {
  const [count, setCount] = useState(0);
  return (
    <div className="h-full relative z-10 overflow-hidden select-none">
      <div className="h-5/6 w-[30px] bg-gradient-to-r from-[#ffffff] to-transparent absolute left-0"></div>
      <div className="h-5/6 w-[30px] bg-gradient-to-l from-[#ffffff] to-transparent absolute right-0"></div>
      <div
        onClick={() => count > 0 && setCount((value) => --value)}
        className="h-[30px] w-[30px] rounded-full bg-white border-[1px] flex items-center justify-center absolute border-gray-400 top-1/2 left-3 translate-y-[-50%]"
      >
        <AiOutlineArrowLeft />
      </div>
      <div
        onClick={() => count < 2 && setCount((value) => ++value)}
        className="h-[30px] w-[30px] rounded-full bg-white border-[1px] flex items-center justify-center border-gray-400 absolute top-1/2 right-3 translate-y-[-50%]"
      >
        <AiOutlineArrowRight />
      </div>
      {/* comment item */}
      <div
        className={`flex w-[1000px] gap-3 h-5/6 ml-[-${
          count * 300
        }px] transition-all`}
      >
        <div className="border-[1px] transition duration-150  border-gray-300 w-[300px] text-[12px] rounded-md  ">
          <p className="bg-gray-100 rounded-t-md py-2 px-4">
            The rooms are clean and comfortable. The rooms are clean and
            comfortable.
          </p>
          <div className="flex text-[12px] items-center ">
            <div className="flex m-auto pt-2 gap-2">
              <FaUserCircle className="text-xl" />
              <span>SUMONRAT</span>
            </div>
          </div>
        </div>
        <div className="border-[1px] border-gray-300 w-[300px] text-[12px] rounded-md  ">
          <p className="bg-gray-100 rounded-t-md py-2 px-4">
            The rooms are clean and comfortable. The rooms are clean and
            comfortable.
          </p>
          <div className="flex text-[12px] items-center ">
            <div className="flex m-auto pt-2 gap-2">
              <FaUserCircle className="text-xl" />
              <span>SUMONRAT</span>
            </div>
          </div>
        </div>
        <div className="border-[1px] border-gray-300 w-[300px] text-[12px] rounded-md  ">
          <p className="bg-gray-100 rounded-t-md py-2 px-4">
            The rooms are clean and comfortable. The rooms are clean and
            comfortable.
          </p>
          <div className="flex text-[12px] items-center ">
            <div className="flex m-auto pt-2 gap-2">
              <FaUserCircle className="text-xl" />
              <span>SUMONRAT</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SliderComment;
