import React from "react";
import styles from "./Home.module.css";
import { Navbar } from "../../Components/Navbar/Navbar";
import { Banner } from "./Components/Banner/Banner";
import { Footer } from "../../Components/Footer/Footer";

export const Home = () => {
  return (
    <>
      <Navbar />
      <Banner/>
      <Footer/>
    </>
  );
};
