import { MdPlace } from "react-icons/md";
import { ImStarFull, ImStarHalf, ImStarEmpty } from "react-icons/im";
const FeaturedRecommendedItem = ({ data }) => {
  const handleRenderStar = () => {
    const star = data.stars % 1 === 0.5 ? data.stars - 0.5 : data.stars;
    const haftStar = data.stars % 1 === 0.5 ? 1 : 0;
    const renderStar = [];
    for (let i = 1; i <= star; i++) {
      renderStar.push(<ImStarFull className="text-pink text-[14px]" key={i}></ImStarFull>);
    }
    if (haftStar) {
      renderStar.push(<ImStarHalf className="text-pink text-[14px]" key={-1}></ImStarHalf>);
    }
    return renderStar;
  };
  return (
    <div className="relative cursor-pointer ">
      <div className="absolute text-white font-[700] bg-primary p-[10px] rounded-[6px] top-[10px] right-[30px] text-[14px]">{data.point}</div>
      <img src={data.image} className="lg:w-[266px] lg:h-[200px]"></img>
      <p className="lg:text-[14px] font-[500] text-black mt-[4px] mb-[6px]">{data.name}</p>
      <div>
        <div></div>
        <div className="flex items-center gap-[10px]">
          <div className="flex gap-[2px]">{handleRenderStar()}</div>
          <div className="flex items-center text-primary text-[12px] font-[600] gap-[4px]">
            <MdPlace className="text-[14px]"/>
            <p>{data.address}</p>
          </div>
        </div>
      </div>
      <p className="text-red font-[500] mt-[8px]">VND {Number(data.price.toFixed(1))?.toLocaleString()}</p>
    </div>
  );
};

export default FeaturedRecommendedItem;
