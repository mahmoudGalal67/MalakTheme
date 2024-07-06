import "bootstrap/dist/css/bootstrap.min.css";
import Navbar from "./components/navbar/navbar";
import Header from "./components/header/header";
import InfoSwiper from "./components/infoSwiper/infoswiper";
import ProductSection from "./components/productSection/ProductSection";
import ProductSection2 from "./components/productSection2/ProductSection2";
import Flipbanner from "./components/flipbanner/Flipbanner";
import Blog from "./components/blog/BlogSection";

import "./App.css";

import CountDownProducts from "./components/countDownProducts/CountDownProducts";
import Banner from "./components/banner/Banner";
import Features from "./components/features/Features";
import Brands from "./components/brands/Brands";
import Games from "./components/games/Games";
import Questions from "./components/questions/Questions";
import Testimonials from "./components/testimonials/Testimonials";
import Map from "./components/map/Map";
import { useState } from "react";
import Footer from "./components/footer/Footer";

function App() {
  const [currentTHeme, setcurrentTHeme] = useState("light");

  const changeTheme = () => {
    setcurrentTHeme((prev) => (prev === "light" ? "dark" : "light"));
  };

  return (
    <div className={currentTHeme === "dark" ? "dark-theme" : ""}>
      <Navbar changeTheme={changeTheme} currentTHeme={currentTHeme} />
      <Header />
      <InfoSwiper mainSlider={true} />
      <CountDownProducts />
      <Flipbanner />
      <ProductSection />
      <Banner />
      <ProductSection2 />
      <Features />
      <Blog />
      <Brands />
      <Games />
      <Questions />
      <Testimonials />
      <Map />
      <Footer />
    </div>
  );
}

export default App;
