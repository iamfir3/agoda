import {
  Header,
  Search,
  VipBanner,
  Promotions,
  Footer,
  FooterPartner,
  VacationRental,
  TopDestinationsInside,
  TopDestinationsOutside,
  FeaturedRecommended,
  RecommendedPlaces,
} from "../Components";
import Button from "../Components/Button";
import { color } from "../Utils/Constans";
import { useState } from "react";
const Home = () => {
  const [isSearching, setIsSearching] = useState(false);
  const [showOptions, setShowOptions] = useState({
    search: false,
    date: false,
    amount: false,
  });
  const handleShowOptions = (option) => {
    if (option) {
      setShowOptions((prev) => {
        const newOptionShow = { ...prev };
        Object.keys(newOptionShow).map((key) => {
          if (key !== option) {
            newOptionShow[key] = false;
          } else {
            newOptionShow[key] = true;
          }
        });
        return newOptionShow;
      });
      setIsSearching(true);
    } else {
      setShowOptions((prev) => {
        const newOptionShow = { ...prev };
        Object.keys(newOptionShow).map((key) => {
          newOptionShow[key] = false;
        });
        return newOptionShow;
      });
    }
  };
  return (
    <div>
      {isSearching && (
        <div
          className="w-screen h-screen fixed z-[4] bg-[rgba(0,0,0,.6)]"
          onClick={() => {
            setIsSearching(false);
            handleShowOptions('');
          }}
        ></div>
      )}
      <Header></Header>
      <div className="flex items-center justify-center bg-lightOrange gap-[16px] px-[32px] py-[12px]">
        <img
          src="	https://img.agoda.net/images/INTTRV-45/default/Bags-heart_2021-09-30.svg"
          alt="agoda"
        />
        <p className="text-[14px] leading-[20px] text-black mr-[24px]">
          Traveling internationally? Get updated information on COVID-19 travel
          guidance and restrictions.
        </p>

        <Button
          paddingX="9px"
          paddingY="2px"
          backgroundColor="white"
          hoverColor={color.lightBlue}
          textColor={color.lightBlue}
          textHover="white"
          borderColor={color.lightBlue}
        >
          <p className="text-[12px] leading-[16px] font-[400]">Learn more</p>
        </Button>
      </div>
      <Search isSearching={isSearching} setIsSearching={setIsSearching} handleShowOptions={handleShowOptions} showOptions={showOptions} />
      <div className="flex justify-center mt-[50px]">
        <VipBanner></VipBanner>
      </div>
      <div className="flex justify-center mt-[30px]">
        <Promotions></Promotions>
      </div>
      <div className="flex flex-col items-center justify-center mt-[70px]">
        <TopDestinationsInside></TopDestinationsInside>
      </div>
      <div className="w-full flex justify-center mt-[88px]">
        <VacationRental></VacationRental>
      </div>
      <div className="w-full flex justify-center mt-[60px]">
        <FeaturedRecommended></FeaturedRecommended>
      </div>
      <div className="w-full flex justify-center mt-[200px]">
        <RecommendedPlaces></RecommendedPlaces>
      </div>
      <div className="flex flex-col items-center justify-center mt-[64px]">
        <TopDestinationsOutside></TopDestinationsOutside>
      </div>
      <div className="bg-background4 w-full flex justify-center pt-[60px] pb-[50px] mt-[80px]">
        <Footer></Footer>
      </div>
      <div className="w-full flex justify-center bg-background5 pt-[48px] pb-[12px]">
        <FooterPartner></FooterPartner>
      </div>
    </div>
  );
};

export default Home;
