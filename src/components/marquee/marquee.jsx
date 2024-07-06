import Marquee from "react-fast-marquee";

import "./marquess.css";

const marquee = function () {
  return (
    <div style={{ position: "fixed", zIndex: "100" }}>
      <Marquee
        direction="right"
        speed={100}
        pauseOnHover={true}
        className="marquee"
        style={{ height: "40px" }}
      >
        <div className="marquee-wrapper flex">
          <p className="white">عام كامل من الإبداع والتميز</p>
          <img src="logo.webp" alt="" style={{ width: "80px" }} />
        </div>
        <div className="marquee-wrapper flex">
          <p>الحقوق محفوظة متجر تجريبي 2024</p>
          <img src="logo.webp" alt="" style={{ width: "80px" }} />
        </div>
        <div className="marquee-wrapper flex">
          <p className="white">عام كامل من الإبداع والتميز</p>
          <img src="logo.webp" alt="" style={{ width: "80px" }} />
        </div>
        <div className="marquee-wrapper flex">
          <p>الحقوق محفوظة متجر تجريبي 2024</p>
          <img src="logo.webp" alt="" style={{ width: "80px" }} />
        </div>
        <div className="marquee-wrapper flex">
          <p className="white">عام كامل من الإبداع والتميز</p>
          <img src="logo.webp" alt="" style={{ width: "80px" }} />
        </div>
        <div className="marquee-wrapper flex">
          <p>الحقوق محفوظة متجر تجريبي 2024</p>
          <img src="logo.webp" alt="" style={{ width: "80px" }} />
        </div>
        <div className="marquee-wrapper flex">
          <p className="white">عام كامل من الإبداع والتميز</p>
          <img src="logo.webp" alt="" style={{ width: "80px" }} />
        </div>
      </Marquee>
    </div>
  );
};

export default marquee;
