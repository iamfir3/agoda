import { ImStarFull, ImStarHalf, ImStarEmpty } from "react-icons/im";
import Tag from "./Tag";
const RecommendedPlacesItem = ({ data }) => {
  const handleRenderStar = () => {
    const star = data.stars % 1 === 0.5 ? data.stars - 0.5 : data.stars;
    const haftStar = data.stars % 1 === 0.5 ? 1 : 0;
    const renderStar = [];
    for (let i = 1; i <= star; i++) {
      renderStar.push(
        <ImStarFull className="text-yellow text-[14px]" key={i}></ImStarFull>
      );
    }
    if (haftStar) {
      renderStar.push(
        <ImStarHalf className="text-yellow text-[14px]" key={-1}></ImStarHalf>
      );
    }
    return renderStar;
  };
  let comment;
  if (data.point >= 8) {
    comment = "Excellent";
  }
  else if(data.point >=7){
    comment='Very good';
  }
  return (
    <div className="relative rounded-[8px] overflow-hidden lg:w-[215px] shadow-xl hover:shadow-2xl cursor-pointer">
      <div className="absolute flex gap-[10px] items-center justify-center px-[10px] py-[6px] right-[10px] top-[10px] rounded-[4px] bg-[rgba(255,255,255,.9)]">
        <div className="flex flex-col justify-center items-center">
          <p className="text-black text-[13px] font-[500] text-center leading-[12px]">
            {comment}
          </p>
          <p className="text-grey3 text-[12px]">{data.reviews} reviews</p>
        </div>
        <p className="bg-primary text-[16px] text-white font-[500] px-[8px] py-[4px] rounded-[4px]">
          {data.point}
        </p>
      </div>
      <img src={data.image} alt="hi" className="w-full lg:h-[150px]"></img>
      <div className="px-[10px]  pt-[10px] flex flex-col gap-[4px]">
        <p className="text-[15px] font-[500] text-black">{data.name}</p>
        <p className="text-[14px]">{data.address}</p>
        <div className="flex gap-[2px]">{handleRenderStar()}</div>
      </div>
      <div className="flex flex-col items-end gap-[5px] px-[10px] pt-[15px] pb-[20px]">
        <Tag>
          <span className="font-[500]">{data.discount}% DISCOUNT</span>
        </Tag>
        <span className="text-[14px]">
          đ <del>{Number(data.price.toFixed(1)).toLocaleString()}</del>
        </span>
        <span className="text-red font-[500] text-[18px] leading-[12px]">
          đ{" "}
          {Number(
            ((data.price * data.discount) / 100).toFixed(0)
          ).toLocaleString()}
        </span>
      </div>
    </div>
  );
};

export default RecommendedPlacesItem;
