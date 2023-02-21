import {SlPlane} from "react-icons/sl"

const AddingFlight = ({ setIsAddingFlight }) => {
  return (
    <div className='mt-[20px]'>
      <div className='flex items-center gap-[14px] text-black'>
        <p className="font-[800] leading-0">Flight</p>
        <p onClick={()=>{setIsAddingFlight(false)}} className='text-[14px] cursor-pointer text-primary leading-0'>Remove</p>
      </div>

      <div className="flex bg-white border-[1px] border-superLightGrey rounded-[8px] h-[60px] w-[50%] items-center text-grey3 gap-[15px] px-[20px] mt-[10px]">  
        <SlPlane size='20'></SlPlane>
        <input placeholder="City or airport name" className=" outline-none placeholder:text-[16px] placeholder:font-[500]"></input>
      </div>
    </div>
  );
};
export default AddingFlight;
