import FeaturedRecommendedItem from "./FeaturedRecommendedItem";
import { useState } from "react";
import Button from "./Button";
import { color } from "../Utils/Constans";
const data = [
  {
    name: "Nikko Apartments - The Classy Life",
    stars: 5,
    price: 724784,
    address: "District 7,Ho Chi Minh City",
    point: 9.4,
    image:
      "	https://pix8.agoda.net/hotelImages/22423667/-1/c8b11fd11884172c23959f0ccb4ebfc0.jpg?ca=19&ce=1",
  },
  {
    name: "JB Central Apartment",
    stars: 4.5,
    price: 724784,
    address: "District 7,Ho Chi Minh City",
    point: 9.4,
    image:
      "		https://q-xx.bstatic.com/xdata/images/hotel/max500/175844267.jpg?k=c460ccade1db21aff1c030a2ccc7517366b12675717a076959ec2c46085162f3&o=",
  },
  {
    name: "NTA Serviced Apartments",
    stars: 3.5,
    price: 724784,
    address: "District 7,Ho Chi Minh City",
    point: 9.4,
    image:
      "	https://pix8.agoda.net/hotelImages/568/5684454/5684454_18081316440067440969.jpg?ca=0&ce=1",
  },
  {
    name: "Nikko Apartments - The Classy Life",
    stars: 5,
    price: 724784,
    address: "District 7,Ho Chi Minh City",
    point: 9.4,
    image:
      "		https://pix8.agoda.net/hotelImages/36087877/-1/5232f35748f1af5439d39426e1152f70.jpg?ce=0",
  },
  {
    name: "Nikko Apartments - The Classy Life",
    stars: 5,
    price: 724784,
    address: "District 7,Ho Chi Minh City",
    point: 9.4,
    image:
      "		https://pix8.agoda.net/hotelImages/300/300972/300972_16091317470046411711.png?ca=6&ce=1",
  },
  {
    name: "LuxHomes Saigon - Vinhomes Central",
    stars: 5,
    price: 1301818,
    address: "Ho Chi Minh City",
    point: 8.7,
    image:
      "		https://pix8.agoda.net/hotelImages/30670517/0/87f24cead89df921251aad85688a34ea.jpg?ca=27&ce=0",
  },
  {
    name: "Sen Boutique House",
    stars: 4.5,
    price: 599999,
    address: "District 2,Ho Chi Minh City",
    point: 8.6,
    image:
      "		https://pix8.agoda.net/hotelImages/220/2205456/2205456_19100315280081780069.jpg?ca=13&ce=1",
  },
  {
    name: "Lavis 18 Residence",
    stars: 4,
    price: 1618743,
    address: "District 3,Ho Chi Minh City",
    point: 8.4,
    image:
      "		https://pix8.agoda.net/hotelImages/28445719/-1/72042261901c048af5863ea33acbc3b9.jpg?ca=23&ce=0",
  },
];

const places = ["Ho Chi Minh City", "Hanoi", "Da Nang", "Dalat", "Vung Tau"];

const FeaturedRecommended = () => {
  const [currentPlace, setCurrentPlace] = useState(0);
  return (
    <div>
      <p className="text-[24px] text-black font-[500] text-center mb-[25px]">
        Featured homes recommended for you
      </p>
      <div className="flex justify-center mb-[25px]">
        {places.map((place, i) => (
          <div
          key={place}
            className={`${
              currentPlace === i
                ? "border-primary border-b-[2px]"
                : "border-lightGrey border-b-[1px]"
            } transition-all ease-in-out cursor-pointer px-[15px] py-[10px] inline-block`}
            onClick={() => {
              setCurrentPlace(i);
            }}
          >
            <p className="text-[14px]">{place}</p>
          </div>
        ))}
      </div>
      <div className="flex lg:w-[1100px] flex-wrap gap-[10px] justify-center">
        {data.map((data, i) => (
          <FeaturedRecommendedItem
            data={data}
            key={i}
          ></FeaturedRecommendedItem>
        ))}
      </div>
      <div className="flex justify-center mt-[30px]">

      <Button
        paddingX="10px"
        paddingY="14px"
        backgroundColor={color.primary}
        hoverColor={color.lightBlue}
        textColor="white"
        textHover="white"
      >
        <p className="text-[14px] font-[500]">
          See more ({places[currentPlace]}) properties
        </p>
      </Button>
      </div>
    </div>
  );
};

export default FeaturedRecommended;
