import { Header, Search, VipBanner,Promotions,Footer, FooterPartner,VacationRental } from "../Components";
import Button from "../Components/Button";
import { color } from "../Utils/Constans";
const Home = () => {
  return (
    <div>
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
      <Search />
      <div className="flex justify-center">
        <VipBanner></VipBanner>
      </div>
      <div className="flex justify-center mt-[30px]">
        <Promotions></Promotions>
      </div>
      <div className="w-full flex justify-center">
        <VacationRental></VacationRental>
      </div>
      <div className="bg-background4 w-full flex justify-center pt-[60px] pb-[50px]">
        <Footer></Footer>
      </div>
      <div className="w-full flex justify-center bg-background5 pt-[48px] pb-[12px]">
        <FooterPartner></FooterPartner>
      </div>
    </div>
  );
};

export default Home;
