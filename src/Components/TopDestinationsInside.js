import DestinationsCarousel from "./DestinationsCarousel";

const data = [
  {
    image:
      "	https://pix6.agoda.net/geo/city/13170/1_13170_02.jpg?ca=6&ce=1&s=345x345&ar=1x1",
    name: "Ho Chi Minh City",
    accommodations: 12283,
  },
  {
    image:
      "		https://pix6.agoda.net/geo/city/2758/1_2758_02.jpg?ca=6&ce=1&s=345x345&ar=1x1",
    name: "Ha Noi",
    accommodations: 12283,
  },
  {
    image:
      "	https://pix6.agoda.net/geo/city/16440/1_16440_02.jpg?ca=6&ce=1&s=345x345&ar=1x1",
    name: "Da Nang",
    accommodations: 12283,
  },
  {
    image:
      "		https://pix6.agoda.net/geo/city/15932/1_15932_02.jpg?ca=6&ce=1&s=345x345&ar=1x1",
    name: "Dalat",
    accommodations: 12283,
  },
  {
    image:
      "	https://pix6.agoda.net/geo/city/17190/1_17190_02.jpg?ca=6&ce=1&s=345x345&ar=1x1",
    name: "Vung Tau",
    accommodations: 12283,
  },
  {
    image:
      "		https://pix6.agoda.net/geo/city/2679/1_2679_02.jpg?ca=6&ce=1&s=345x345&ar=1x1",
    name: "Nha Trang",
    accommodations: 12283,
  },
  {
    image:
      "		https://pix6.agoda.net/geo/city/17188/1_17188_02.jpg?ca=6&ce=1&s=345x345&ar=1x1",
    name: "Phu Quoc Island",
    accommodations: 12283,
  },
  {
    image:
      "		https://pix6.agoda.net/geo/city/16264/1_16264_02.jpg?ca=6&ce=1&s=345x345&ar=1x1",
    name: "Phan Thiet",
    accommodations: 12283,
  },
  {
    image:
      "	https://pix6.agoda.net/geo/city/16552/1_16552_02.jpg?ca=6&ce=1&s=345x345&ar=1x1",
    name: "Hoi An",
    accommodations: 12283,
  },
  {
    image:
      "	https://pix6.agoda.net/geo/city/3738/1_3738_02.jpg?ca=6&ce=1&s=345x345&ar=1x1",
    name: "Hue",
    accommodations: 12283,
  },
];

const TopDestinationsInside = () => {
  return (
    <>
      <p className="text-[24px] text-black font-[500] mb-[20px]">
        Top destinations in Vietnam
      </p>
      <DestinationsCarousel data={data}></DestinationsCarousel>
    </>
  );
};

export default TopDestinationsInside;
