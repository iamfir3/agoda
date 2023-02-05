import VacationRentalItem from "./VacationRentaItem";

const data = [
  {
    image:
      "https://cdn6.agoda.net/images/accommodation/other-property-types/entire-apartment.jpg",
    type: "Apartments",
    properties: 156786,
  },
  {
    image:
      "https://cdn6.agoda.net/images/accommodation/other-property-types/entire-house.jpg",
    type: "Vacation rentals",
    properties: 517703,
  },
  {
    image:
      "https://cdn6.agoda.net/images/accommodation/other-property-types/entire-villa.jpg",
    type: "Private Villas",
    properties: 181167,
  },
  {
    image:
      "https://cdn6.agoda.net/images/accommodation/other-property-types/entire-bungalow.jpg",
    type: "Bungalows",
    properties: 8801,
  },
];

const VacationRental = () => {
  return (
    <div className="">
      <p className="text-center text-[24px] text-black font-[500]">Explore more travel vacation rentals</p>
      <div className="flex justify-center gap-[34px] mt-[30px]">
        {data.map((vacation) => (
          <VacationRentalItem
            key={vacation.properties}
            type={vacation.type}
            properties={vacation.properties}
            image={vacation.image}
          ></VacationRentalItem>
        ))}
      </div>
    </div>
  );
};

export default VacationRental;
