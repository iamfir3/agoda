import { Header, SliderComment } from "../Components";
import { CiSearch } from "react-icons/ci";
import {
  FaRegCalendarCheck,
  FaRegCalendarTimes,
  FaCheck,
} from "react-icons/fa";
import Button from "../Components/Button";
import { color } from "../Utils/Constans";
import { HiOutlineUsers } from "react-icons/hi";
import { GiAchievement } from "react-icons/gi";
import { AiFillLike, AiFillCar } from "react-icons/ai";
import { SlArrowDown } from "react-icons/sl";
import { BsCheck2 } from "react-icons/bs";
import { BiWalk } from "react-icons/bi";
function Detail() {
  return (
    <div className="">
      {/* hEADER - SEARCH-Date */}
      <Header></Header>
      <div className="bg-[#1f254a] h-[70px] flex justify-center ">
        <div className="min-w-[1100px] py-[10px] flex">
          <div className="flex w-1/3 relative  bg-white border-[1px] h-full items-center px-[25px] rounded-[6px] mr-[12px]">
            <CiSearch size="30" className="text-grey placeholder:text-black" />
            <input
              placeholder="Enter a destination or properly"
              className="w-full rounded-md outline-none "
              value="Nikko Apartments - The Classy Life"
            />
          </div>

          <div className="flex w-2/3 gap-[12px]">
            <div className="flex border-[1px] bg-white py-[15px] w-[45%] rounded-[8px]">
              <div className="flex text-grey items-center gap-[16px] flex-1 border-r-[1px] px-[10px] pl-[15px]">
                <FaRegCalendarCheck className="text-[24px]"></FaRegCalendarCheck>
                <div>
                  <p className="text-black text-[16px] leading-[23px]">
                    2 Feb 2023
                  </p>
                  <p className="text-[14px] leading-[18px]">Thursday</p>
                </div>
              </div>

              <div className="flex text-grey items-center gap-[16px] flex-1 px-[10px] items-center">
                <FaRegCalendarCheck className="text-[24px]"></FaRegCalendarCheck>
                <div>
                  <p className="text-black text-[16px] leading-[23px]">
                    2 Feb 2023
                  </p>
                  <p className="text-[14px] leading-[18px]">Thursday</p>
                </div>
              </div>
            </div>

            <div className="flex border-[1px] bg-white py-[15px] flex-auto items-center justify-between text-grey rounded-[8px] px-[25px] ">
              <div className="flex gap-[15px] items-center">
                <HiOutlineUsers className="text-[24px]"></HiOutlineUsers>
                <div>
                  <p className="text-black text-[16px] leading-[23px]">
                    2 adults
                  </p>
                  <p className="text-[14px] leading-[18px]">1 room</p>
                </div>
              </div>
              <SlArrowDown className=""></SlArrowDown>
            </div>
            <Button
              paddingX="25px"
              paddingY="2px"
              backgroundColor="#75A8F9"
              hoverColor={color.lightBlue}
              textColor="white"
              textHover="white"
              borderColor={color.lightBlue}
            >
              <p className="text-[14px] leading-[16px] font-[500]">UPDATE</p>
            </Button>
          </div>
        </div>
      </div>
      {/* Image */}
      <div className="flex justify-center my-8">
        <div className="  w-[1100px] flex gap-4">
          <div className="h-full w-1/3 hover:opacity-[85%] cursor-pointer">
            <img
              src="https://pix8.agoda.net/hotelImages/22423667/-1/212427ca112689f84ad768806f5cad04.jpg?ca=19&ce=1&s=1024x768"
              className="object-cover h-full w-full rounded-l-md "
              alt=""
            />
          </div>
          <div className=" h-full w-2/3 flex flex-col gap-4">
            <div className="flex gap-4 h-1/2 ">
              <div className="w-1/3 hover:opacity-[85%] cursor-pointer ">
                <img
                  src="https://pix8.agoda.net/hotelImages/22423667/-1/5c5132fd165dfabd8fdbeb62990eb910.jpg?ca=19&ce=1&s=1024x768"
                  className="object-cover h-full w-full "
                  alt=""
                />
              </div>
              <div className="w-1/3 hover:opacity-[85%] cursor-pointer">
                <img
                  src="https://q-xx.bstatic.com/xdata/images/hotel/840x460/421068290.jpg?k=254faf038ed281c3e643ea263eb375ee15cbc5d11ffe0533c49aede85c93c001&o="
                  className="object-cover h-full w-full "
                  alt=""
                />
              </div>
              <div className="w-1/3 hover:opacity-[85%] cursor-pointer">
                <img
                  src="https://pix8.agoda.net/hotelImages/22423667/-1/212427ca112689f84ad768806f5cad04.jpg?ca=19&ce=1&s=1024x768"
                  className="object-cover h-full w-full rounded-tr-md"
                  alt=""
                />
              </div>
            </div>
            <div className="flex gap-4 h-1/2">
              <div className="w-1/3 hover:opacity-[85%] cursor-pointer">
                <img
                  src="https://q-xx.bstatic.com/xdata/images/hotel/840x460/286163781.jpg?k=76227dc7c727ea656151d1980eed4c082173ba3de10e99c066bd9e41678bb9b1&o="
                  className="object-cover h-full w-full  "
                  alt=""
                />
              </div>
              <div className="w-1/3 hover:opacity-[85%] cursor-pointer">
                <img
                  src="https://q-xx.bstatic.com/xdata/images/hotel/840x460/286150454.jpg?k=57104fa3db57898dc516b3d693ed68d6ddfeed375b96dc7edd2e271cc11a1f3a&o="
                  className="object-cover h-full w-full "
                  alt=""
                />
              </div>
              <div className="w-1/3 hover:opacity-[85%] cursor-pointer">
                <img
                  src="https://pix8.agoda.net/hotelImages/22423667/-1/905aed8e33aec7c0eedce33baf472b5a.jpg?ca=19&ce=1&s=1024x768"
                  className="object-cover h-full w-full rounded-br-md"
                  alt=""
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* infor */}
      <div className="w-[1100px]  m-auto">
        <div className="   border-[1px] rounded-md px-5 text-gray-500 flex justify-between items-center ">
          <div className="flex gap-8 items-center h-[70px]">
            <span className="border-b-4 border-primary h-full flex items-center">
              Overview
            </span>
            <span className=" border-primary h-full flex items-center">
              Room
            </span>
            <span className=" border-primary h-full flex items-center">
              Facilities
            </span>
            <span className=" border-primary h-full flex items-center">
              Reviews
            </span>
            <span className=" border-primary h-full flex items-center">
              Location
            </span>
            <span className=" border-primary h-full flex items-center">
              Policies
            </span>
          </div>
          <div className="flex gap-1">
            <span className="text-xs place-self-center  text-gray-400">
              from
            </span>
            <span className="text-red justify-self-center">đ</span>
            <span className="text-red text-2xl">699,999</span>
            <Button
              paddingX="15px"
              paddingY="2px"
              backgroundColor="#75A8F9"
              hoverColor={color.lightBlue}
              textColor="white"
              textHover="white"
              borderColor={color.lightBlue}
            >
              <p className="text-[14px] leading-[16px] font-[550]">
                VIEW THIS DEAL
              </p>
            </Button>
          </div>
        </div>
        {/* Mo ta */}
        <div className="flex gap-4">
          <div className="w-2/3">
            <div className="flex mt-3">
              <div className=" border-[1px] p-5">
                <p className="text-[25px] font-semibold">
                  Nikko Apartments - The Classy Life
                </p>
                <span className="text-[15px] mr-1">
                  District 7, Ho Chi Minh City, Vietnam
                </span>
                <a href="" className="mb-3">
                  <span className="text-[12px] text-primary">- SEE MAP</span>
                </a>
                <hr />
                <p className="mt-3">
                  Get your trip off to a great start with a stay at this
                  property, which offers free Wi-Fi in all rooms. Conveniently
                  situated in the District 7 part of Ho Chi Minh City, this
                  property puts you close to attractions and interesting dining
                  options. Don't leave before paying a visit to the famous War
                  Remnants Museum. This 5-star property is packed with in-house
                  facilities to improve the quality and joy of your stay.
                </p>
              </div>
            </div>
            <div className="flex mt-3">
              <div className=" border-[1px] p-5 w-full">
                <div className="mb-5 font-medium text-xl">Highlights</div>
                <div className="flex text-[12px] font-semibold flex-1">
                  <div className="w-1/6">
                    <img
                      src="https://cdn6.agoda.net/images/property/highlights/spray.svg"
                      alt=""
                      className="m-auto"
                    />
                    <p className="text-center">Sparkling clean</p>
                  </div>
                  <div className="w-1/6">
                    <img
                      src="https://cdn6.agoda.net/images/property/highlights/medal.svg"
                      alt=""
                      className="m-auto"
                    />
                    <p className="text-center">Top Value</p>
                  </div>
                  <div className="w-2/6">
                    <img
                      src="https://cdn6.agoda.net/images/property/highlights/baggage-pay.svg"
                      alt=""
                      className="m-auto"
                    />
                    <p className="text-center">
                      Rated highly by Business travelers
                    </p>
                  </div>
                  <div className="w-1/6">
                    <img
                      src="https://cdn6.agoda.net/images/property/highlights/door.svg"
                      alt=""
                      className="m-auto"
                    />
                    <p className="text-center">Check-in [24-hour]</p>
                  </div>
                  <div className="w-1/6">
                    <img
                      src="https://cdn6.agoda.net/images/property/highlights/bedKing.svg"
                      alt=""
                      className="m-auto"
                    />
                    <p className="text-center">
                      Excellent room comfort & quality
                    </p>
                  </div>
                </div>
              </div>
            </div>
            {/* Hygiene Plus */}
            <div className="flex mt-3 ">
              <div className=" border-[1px] p-5 w-full">
                <div className="mb-3 font-medium text-xl">Hygiene Plus</div>
                <span>
                  This property has self-selected and self-certified the
                  following hygiene measures.
                </span>
                <a href="" className="text-primary">
                  Learn more
                </a>
                <div className="flex text-[12px] font-semibold gap-3 mt-3">
                  <div className="w-1/3 flex bg-slate-100 p-2">
                    <div className="w-1/4 ">
                      <img
                        src="https://cdn6.agoda.net/images/default/SafetyFeatures.svg"
                        alt=""
                        className="m-auto"
                      />
                    </div>
                    <div className="w-3/4">
                      <p>Safety Features</p>
                      <div className="flex py-1">
                        <FaCheck className="text-base text-[#32A923] font-bold" />
                        <span className="pl-2 text-gray-400 font-light">
                          Staff trained in safety protocol
                        </span>
                      </div>
                    </div>
                  </div>
                  <div className="w-1/3 flex bg-slate-100 p-2">
                    <div className="w-1/4 ">
                      <img
                        src="https://cdn6.agoda.net/images/default/PreventiveEquipment.svg"
                        alt=""
                        className="m-auto"
                      />
                    </div>
                    <div className="w-3/4">
                      <p>Preventative Equipment</p>
                      <div className="flex py-1">
                        <FaCheck className="text-base text-[#32A923] font-bold" />
                        <span className="pl-2 text-gray-400 font-light">
                          Hand sanitizer
                        </span>
                      </div>
                    </div>
                  </div>
                  <div className="w-1/3 flex bg-slate-100 p-2">
                    <div className="w-1/4 ">
                      <img
                        src="https://cdn6.agoda.net/images/default/HealthAndMedical.svg"
                        alt=""
                        className="m-auto"
                      />
                    </div>
                    <div className="w-3/4">
                      <p>Health and Medical</p>
                      <div className="flex py-1">
                        <FaCheck className="text-base text-[#32A923] font-bold" />
                        <span className="pl-2 text-gray-400 font-light">
                          First aid kit
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/* Facilities */}
            <div className="flex mt-3 ">
              <div className=" border-[1px] p-5 w-full">
                <div className="mb-3 font-medium text-xl">Facilities</div>
                <div className="text-[12px] flex gap-3 mt-3">
                  <div className="flex gap-2 w-1/4 text-primary">
                    <BsCheck2 className="text-xl " />
                    <span className="">Front desk [24-hour]</span>
                  </div>
                  <div className="flex gap-2 w-1/4">
                    <BsCheck2 className="text-xl " />
                    <span className="">Airport transfer</span>
                  </div>
                  <div className="flex gap-2 w-1/4">
                    <BsCheck2 className="text-xl " />
                    <span className="">Car park</span>
                  </div>
                  <div className="flex gap-2 w-1/4">
                    <BsCheck2 className="text-xl " />
                    <span className="">Shuttle service</span>
                  </div>
                </div>
                <div className="text-[12px] flex gap-3 mt-3">
                  <div className="flex gap-2 w-1/4">
                    <BsCheck2 className="text-xl " />
                    <span className="">Free Wi-Fi in all rooms!</span>
                  </div>
                  <div className="flex gap-2 w-1/4">
                    <BsCheck2 className="text-xl " />
                    <span className="">Check-in/out [express]</span>
                  </div>
                  <div className="flex gap-2 w-1/4">
                    <BsCheck2 className="text-xl " />
                    <span className="">BBQ facilities</span>
                  </div>
                  <div className="flex gap-2 w-1/4">
                    <BsCheck2 className="text-xl " />
                    <span className="">Laundry service</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* Rate */}
          <div className="w-1/3 flex flex-col gap-4">
            <div className="h-2/5 border-[1px] mt-3 p-3 flex flex-1 flex-col gap-1">
              {/* Exceptional */}
              <div className="h-fit">
                <div className="flex gap-5 mb-3">
                  <div className="bg-primary rounded-t-full rounded-l-full h-[50px] w-[50px] flex justify-center items-center">
                    <b className="font-bold text-xl text-white">9.2</b>
                  </div>
                  <div className="">
                    <p className="">Exceptional</p>
                    <p className="text-primary text-[15px]">433 reviews</p>
                  </div>
                </div>
                <div className="flex flex-wrap gap-1">
                  <div className="flex border-[1px] p-2 gap-2 text-xs rounded-[5px]">
                    <span>Housekeeping</span>
                    <span>12</span>
                    <AiFillLike className="text-[#32a923]" />
                  </div>
                  <div className="flex border-[1px] p-2 gap-2 text-xs rounded-[5px]">
                    <span>Breakfast</span>
                    <span>12</span>
                    <AiFillLike className="text-[#32a923]" />
                  </div>
                  <div className="flex border-[1px] p-2 gap-2 text-xs rounded-[5px]">
                    <span>Shops</span>
                    <span>12</span>
                    <AiFillLike className="text-[#32a923]" />
                  </div>
                </div>
              </div>

              <div className="flex-auto">
                <SliderComment />
              </div>
            </div>
            <div className="h-3/5 border-[1px] p-3 text-gray-600">
              <div className="h-[120px] relative overflow-hidden">
                <p className="absolute bottom-0 z-10  left-1/2 translate-x-[-50%]">
                  SEE MAP
                </p>
                <img
                  src="https://cdn6.agoda.net/images/MAPS-1214/default/property-map-entry-1.svg"
                  alt=""
                  className="object-cover h-full w-full hover:duration-500  hover:scale-125 cursor-pointer"
                />
              </div>
              <div className="mt-3">
                <div className="flex gap-5 ">
                  <div className="border-primary border-[1px]  rounded-t-full rounded-l-full h-[35px] w-[35px] flex justify-center items-center">
                    <b className="font-bold text-sm text-primary">9.2</b>
                  </div>
                  <div className="mb-3">
                    <p className="font-bold">Exceptional</p>
                    <p className="text-[15px]">Location rating score</p>
                  </div>
                </div>
                <div className="text-sm font-semibold mb-3">
                  <p className="flex gap-3 ">
                    <GiAchievement className="text-3xl mb-2" />
                    <p>Exceptional location</p>
                  </p>
                  <p className="flex gap-3 ">
                    <BiWalk className="text-3xl" />
                    <p>Excellent for walking</p>
                  </p>
                </div>
                <hr />
                <div className="flex gap-3 text-gray-400 justify-between mt-3">
                  <span className="flex gap-3">
                    <AiFillCar className="text-3xl" />
                    <p>Parking</p>
                  </span>
                  <span className="text-[#32A923] mb-3">FREE</span>
                </div>
                <hr />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Detail;
