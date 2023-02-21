import DestinationsCarousel from "./DestinationsCarousel";

const data = [
  {
    image:
      "	https://pix6.agoda.net/geo/city/14524/1_14524_02.jpg?ca=6&ce=1&s=345x345&ar=1x1",
    name: "Kuala Lumpur",
    accommodations: 12283,
  },
  {
    image:
      "		https://pix6.agoda.net/geo/city/1622/1_1622_02.jpg?ca=6&ce=1&s=345x345&ar=1x1      ",
    name: "Manila",
    accommodations: 12283,
  },
  {
    image:
      "		https://pix6.agoda.net/geo/city/8691/1_8691_02.jpg?ca=6&ce=1&s=345x345&ar=1x1",
    name: "Jakarta",
    accommodations: 12283,
  },
  {
    image:
      "		https://pix6.agoda.net/geo/city/16087/1_16087_02.jpg?ca=6&ce=1&s=345x345&ar=1x1",
    name: "Penang",
    accommodations: 12283,
  },
  {
    image:
      "		https://pix6.agoda.net/geo/city/17072/1_17072_02.jpg?ca=6&ce=1&s=345x345&ar=1x1",
    name: "Las Vegas (NV)",
    accommodations: 12283,
  },
  {
    image:
      "		https://pix6.agoda.net/geo/city/15121/1_15121_02.jpg?ca=6&ce=1&s=345x345&ar=1x1",
    name: "Malacca",
    accommodations: 12283,
  },
  {
    image:
      "		https://pix6.agoda.net/geo/city/9395/1_9395_02.jpg?ca=6&ce=1&s=345x345&ar=1x1",
    name: "Bangkok",
    accommodations: 12283,
  },
  {
    image:
      "	https://pix6.agoda.net/geo/city/13170/1_13170_02.jpg?ca=6&ce=1&s=345x345&ar=1x1",
    name: "Ho Chi Minh City",
    accommodations: 12283,
  },
  {
    image:
      "	https://pix6.agoda.net/geo/city/13170/1_13170_02.jpg?ca=6&ce=1&s=345x345&ar=1x1",
    name: "Ho Chi Minh City",
    accommodations: 12283,
  },
  {
    image:
      "	https://pix6.agoda.net/geo/city/13170/1_13170_02.jpg?ca=6&ce=1&s=345x345&ar=1x1",
    name: "Ho Chi Minh City",
    accommodations: 12283,
  },
];

const TopDestinationsOutside = () => {
  return (
    <>
      <p className="text-[24px] text-black font-[500] mb-[20px]">Popular destinations outside Vietnam</p>
      <DestinationsCarousel data={data}></DestinationsCarousel>
    </>
  );
};

export default TopDestinationsOutside;
