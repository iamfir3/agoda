const VacationRentalItem = ({ type, properties, image }) => {
  return (
    <div className="hover:shadow-2xl transition-all ease-in-out">
      <img src={image}></img>
      <div className="pl-[10px] py-[8px] border-[1px] border-lightGrey">
        <p className="font-[500] text-[16px]">{type}</p>
        <p className="text-[14px] mt-[6px] text-grey3">
          {properties} <span>properties</span>
        </p>
      </div>
    </div>
  );
};

export default VacationRentalItem;
