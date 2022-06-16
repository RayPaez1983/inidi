import React from "react";
import NewCards from "../../newCards/newCards";
import HomeSlider from "../../slider/slider";
import Offers from "../../offers/offers";


const Home = () => {
  return (
    <>
      <HomeSlider />
      <NewCards />
      <Offers />
    </>
  );
};

export default Home;
