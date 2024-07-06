// import Swiper core and required modules
import { Navigation, Pagination, A11y } from "swiper/modules";

import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";

import "./infoSwiper.css";

function infoswiper({ mainSlider }) {
  return (
    <Swiper
      // install Swiper modules
      modules={[Navigation, Pagination, A11y]}
      slidesPerView={1}
      navigation
      speed="1000"
      pagination={{ clickable: true }}
      scrollbar={{ draggable: true }}
    >
      <SwiperSlide
        className={mainSlider ? "info-swipper main-slider" : "info-swiper"}
      >
        <div className="wrapper">
          <img
            src="QpxDG46St47Ju40e3uH5ODQxFqS3mM8k8UEnqRdG.webp"
            style={{ width: "60%" }}
            alt=""
          />
          <p>خصم 25% على منتجات Logiteck</p>
          <h3>أفضل التخفيضات 2023</h3>
          <a href="">تسوق التخفيضات %</a>
        </div>
      </SwiperSlide>
      <SwiperSlide
        className={mainSlider ? "info-swipper main-slider" : "info-swiper"}
      >
        <div className="wrapper">
          <p>يمكنك إضافة بانر بمقاس كبير أو</p>
          <h3>مقاس مخصص للجوال</h3>
          <a href="">اعرف المزيد</a>
        </div>
      </SwiperSlide>
      <SwiperSlide
        className={mainSlider ? "info-swipper main-slider" : "info-swiper"}
      >
        <div
          className="wrapper"
          style={{ flexDirection: "row", display: "flex" }}
        >
          <div className="image-wrapper" style={{ width: "240px" }}>
            <img src="mainlogo.webp" style={{ width: "100%" }} alt="" />
          </div>
          <div
            className="wrapper"
            style={{ padding: "0 8%", textAlign: "end" }}
          >
            <h3>اكتشف عالم جديد من الإبداع</h3>
            <p>
              وتحكم بأدق تفاصيل تصميم متجرك الإلكتروني مع ثيم مَـلاك المميز
              والجديد كليًا على منصة سلة.
            </p>
            <a href="">ابدأ الآن</a>
          </div>
        </div>
      </SwiperSlide>
    </Swiper>
  );
}

export default infoswiper;
