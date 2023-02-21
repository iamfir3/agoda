import { useState } from "react";
import Tag from "./Tag";
import { SlArrowRight } from "react-icons/sl";
import { AiOutlinePlus, AiOutlineMinus } from "react-icons/ai";
import { TiMinus, TiPlus } from "react-icons/ti";

const AmountPeopleOptions = ({
  handleShowOptions,
  setAmount,
  amount,
  setIsSearching,
  setAmountState,
  amountState,
}) => {
  return (
    <div className="flex w-full">
      <div
        className={`shadow-2xl ${
          amountState !== "solo" && amountState !== "couple"
            ? "w-[50%]"
            : "w-[75%]"
        } transition-all `}
      >
        <div
          className={`flex ${
            amountState === "solo"
              ? "bg-white text-primary"
              : "bg-background3 text-grey3"
          } justify-between px-[20px] py-[14px]  ${
            amountState !== "solo" && amountState !== "couple"
              ? ""
              : "rounded-tr-[8px]"
          }   rounded-tl-[8px] items-center hover:text-primary cursor-pointer`}
          onClick={(e) => {
            e.stopPropagation();
            setAmount({ adult: 1, room: 1, children: 0 });
            setIsSearching(false);
            setAmountState(() => {
              return "solo";
            });
            handleShowOptions("");
          }}
        >
          <div>
            <p className="text-[14px]">Solo traveler</p>
            <Tag>
              <p>Save up to 12%</p>
            </Tag>
          </div>
          <p className="text-[12px]">1 room, 1 adult</p>
        </div>

        <div
          className=""
          onClick={(e) => {
            e.stopPropagation();
            setAmount({ adult: 2, room: 1, children: 0 });
            setAmountState("couple");
            setIsSearching(false);
            handleShowOptions("");
          }}
        >
          <div
            className={`px-[20px] flex ${
              amountState === "couple"
                ? "bg-white text-primary"
                : "bg-background3 text-grey3"
            } justify-between border-b-[1px] border-lightGrey py-[18px] items-center hover:text-primary text-grey3 cursor-pointer`}
          >
            <p className="text-[14px]">Couple/Pair</p>

            <p className="text-[12px]">1 room,2 adult</p>
          </div>
        </div>

        <div
          className=""
          onClick={(e) => {
            e.stopPropagation();
            setAmount({ adult: 1, room: 1, children: 0 });
            setAmountState("family");
          }}
        >
          <div
            className={`px-[20px] flex ${
              amountState === "family"
                ? "bg-white text-primary"
                : "bg-background3 text-grey3"
            } justify-between border-b-[1px] border-lightGrey py-[18px] items-center hover:text-primary text-grey3 cursor-pointer`}
          >
            <p className="text-[14px]">Family travelers</p>
            {amountState === "family" && (
              <div className="text-[11px] text-right">
                {amount.room} {amount.room >= 2 ? "rooms" : "room"},{" "}
                {amount.adult} {amount.adult >= 2 ? "adults" : "adult"}
                {amount.children ? ", " : ""}{" "}
                <p className={`${amount.children ? "" : "hidden"}`}>
                  {amount.children}{" "}
                  {amount.children >= 2 ? "children" : "child"}
                </p>
              </div>
            )}
            {amountState !== "family" && <SlArrowRight></SlArrowRight>}
          </div>
        </div>

        <div
          className=" "
          onClick={(e) => {
            e.stopPropagation();
            setAmount({ adult: 1, room: 1, children: 0 });
            setAmountState("group");
          }}
        >
          <div
            className={`px-[20px] flex ${
              amountState === "group"
                ? "bg-white text-primary"
                : "bg-background3 text-grey3"
            } justify-between border-b-[1px] border-lightGrey py-[18px] items-center hover:text-primary text-grey3 cursor-pointer`}
          >
            <p className="text-[14px]">Group travelers</p>
            {amountState === "group" && (
              <div className="text-[11px] text-right">
                {amount.room} {amount.room >= 2 ? "rooms" : "room"},{" "}
                {amount.adult} {amount.adult >= 2 ? "adults" : "adult"}
                {amount.children ? ", " : ""}{" "}
                <p className={`${amount.children ? "" : "hidden"}`}>
                  {amount.children}{" "}
                  {amount.children >= 2 ? "children" : "child"}
                </p>
              </div>
            )}
            {amountState !== "group" && <SlArrowRight></SlArrowRight>}
          </div>
        </div>

        <div
          className=""
          onClick={(e) => {
            e.stopPropagation();
            setAmount({ adult: 1, room: 1, children: 0 });
            setAmountState("business");
          }}
        >
          <div
            className={`px-[20px] flex ${
              amountState === "business"
                ? "bg-white text-primary"
                : "bg-background3 text-grey3"
            } rounded-bl-[8px] ${
              amountState !== "solo" && amountState !== "couple"
                ? ""
                : "rounded-br-[8px]"
            }  justify-between py-[18px] items-center hover:text-primary text-grey3 cursor-pointer`}
          >
            <p className={`text-[14px] ${amountState==='business'?'w-[10%]':''}`}>Business travelers</p>
            {amountState === "business" && (
              <p className="text-[11px] text-right">
                {amount.room} {amount.room >= 2 ? "rooms" : "room"},{" "}
                {amount.adult} {amount.adult >= 2 ? "adults" : "adult"}
              </p>
            )}
            {amountState !== "business" && <SlArrowRight></SlArrowRight>}
          </div>
        </div>
      </div>

      <div
        className={`bg-white  ${
          amountState !== "solo" && amountState !== "couple"
            ? "w-[50%] translate-x-0 opacity-1"
            : "w-0 translate-x-[-200px] opacity-0"
        } transition-all rounded-tr-[8px] rounded-br-[8px] px-[20px]`}
      >
        <div className="flex items-center w-full justify-around px-[16px] py-[12px] border-b-grey2 border-b-[1px]">
          <TiMinus
            className="text-[12px] text-lightBlue font-[500]"
            onClick={() => {
              if (amount.room > 1) {
                setAmount((prev) => {
                  return { ...prev, room: prev.room - 1 };
                });
              }
            }}
          ></TiMinus>
          <div style={{ "userSelect": "none" }}>
            <span className="text-[20px] font-[500] text-primary">
              {amount.room}
            </span>{" "}
            <span className="text-grey3 font-[400] text-[14px]">
              {amount.room >= 2 ? "Rooms" : "Room"}
            </span>
          </div>
          <TiPlus
            className="text-[12px] text-lightBlue font-[500]"
            onClick={() => {
              setAmount((prev) => {
                return {
                  ...prev,
                  room: prev.room + 1,
                  adult: prev.room >= prev.adult ? prev.adult + 1 : prev.adult,
                };
              });
            }}
          ></TiPlus>
        </div>

        <div className="flex items-center w-full justify-around px-[16px] py-[12px] border-b-grey2 border-b-[1px]">
          <TiMinus
            className="text-[12px] text-lightBlue font-[500]"
            onClick={() => {
              if (amount.adult > 1) {
                setAmount((prev) => {
                  return { ...prev, adult: prev.adult - 1 };
                });
              }
            }}
          ></TiMinus>
          <div style={{ "userSelect": "none" }}>
            <span className="text-[20px] font-[500] text-primary">
              {amount.adult}
            </span>{" "}
            <span className="text-grey3 font-[400] text-[14px]">
              {amount.adult >= 2 ? "Adults" : "Adult"}
            </span>
          </div>
          <TiPlus
            className="text-[12px] text-lightBlue font-[500]"
            onClick={() => {
              setAmount((prev) => {
                return {
                  ...prev,
                  adult: prev.adult + 1,
                };
              });
            }}
          ></TiPlus>
        </div>

        {amountState !== "business" && (
          <div className="flex items-center w-full justify-around px-[16px] py-[12px] border-b-grey2 border-b-[1px]">
            <TiMinus
              className="text-[12px] text-lightBlue font-[500]"
              onClick={() => {
                if (amount.children > 0) {
                  setAmount((prev) => {
                    return { ...prev, children: prev.children - 1 };
                  });
                }
              }}
            ></TiMinus>
            <div style={{ "userSelect": "none" }}>
              <span className="text-[20px] font-[500] text-primary">
                {amount.children}
              </span>{" "}
              <span className="text-grey3 font-[400] text-[14px]">
                {amount.children >= 2 ? "Children" : "Child"}
              </span>
            </div>
            <TiPlus
              className="text-[12px] text-lightBlue font-[500]"
              onClick={() => {
                setAmount((prev) => {
                  return {
                    ...prev,
                    children: prev.children + 1,
                  };
                });
              }}
            ></TiPlus>
          </div>
        )}
      </div>
    </div>
  );
};

export default AmountPeopleOptions;
