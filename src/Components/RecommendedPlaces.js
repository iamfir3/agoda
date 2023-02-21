import RecommendedPlacesItem from "./RecommendedPlacesItem";

const data = [
  {
    image:"https://pix8.agoda.net/hotelImages/7295630/-1/cc29ff8b9c5ab4e1a8009cae17f4e8ec.jpg?ca=13&ce=1",
    point: 8.6,
    name: "The Chill Suites- City Center",
    stars: 4.5,
    price: 1296536,
    discount: 35,
    address: "District 1",
    reviews: 2910,
  },
  {
    image:
      "https://pix8.agoda.net/hotelImages/7295630/-1/cc29ff8b9c5ab4e1a8009cae17f4e8ec.jpg?ca=13&ce=1",
    point: 8.6,
    name: "The Chill Suites- City Center",
    stars: 4.5,
    price: 1296536,
    discount: 35,
    address: "District 1",
    reviews: 2910,
  },
  {
    image:
      "https://pix8.agoda.net/hotelImages/7295630/-1/cc29ff8b9c5ab4e1a8009cae17f4e8ec.jpg?ca=13&ce=1",
    point: 8.6,
    name: "The Chill Suites- City Center",
    stars: 4.5,
    price: 1296536,
    discount: 35,
    address: "District 1",
    reviews: 2910,
  },
  {
    image:
      "https://pix8.agoda.net/hotelImages/7295630/-1/cc29ff8b9c5ab4e1a8009cae17f4e8ec.jpg?ca=13&ce=1",
    point: 8.6,
    name: "The Chill Suites- City Center",
    stars: 4.5,
    price: 1296536,
    discount: 35,
    address: "District 1",
    reviews: 2910,
  },
  {
    image:
      "https://pix8.agoda.net/hotelImages/7295630/-1/cc29ff8b9c5ab4e1a8009cae17f4e8ec.jpg?ca=13&ce=1",
    point: 8.6,
    name: "The Chill Suites- City Center",
    stars: 4.5,
    price: 1296536,
    discount: 35,
    address: "District 1",
    reviews: 2910,
  },
];

const RecommendedPlaces = () => {
  return (
    <div>
      <p className="text-[24px] text-center text-black mb-[20px]">
        Recommended places to stay for your next trip!
      </p>
      <div className="flex gap-[10px] justify-center">
        {data.map((place,i) => (
          <RecommendedPlacesItem key={i} data={place}></RecommendedPlacesItem>
        ))}
      </div>
    </div>
  );
};

export default RecommendedPlaces;
