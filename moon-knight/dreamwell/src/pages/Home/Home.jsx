import React from "react";
import Navbar from "../../components/Navbar/Navbar";
import Footer from "../../components/Footer/Footer";
import Banner from "../../components/Banner/Banner";
import JewelCollection from "../../components/JewelCollection/JwelCollection";
import NewArrival from "../../components/NewArrival/NewArrival";

const Home = () => {
  return (
    <>
      <Navbar />
      <Banner />
      <JewelCollection />
      <NewArrival />
      <Footer />
    </>
  );
};

export default Home;
