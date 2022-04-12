import React from "react";
import style from "./HeaderContent.module.css";
import Content1 from "./content1/Content1";
import Content2 from "./content2/Content2";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

const HeaderContent = () => {
  let settings = {
    // dots: true,
    infinite: true,
    speed: 1000,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: true,
    autoplay: true,
    autoplaySpeed: 8000,
    className: "slider",
    pauseOnHover: false,
    fade: true,
  };
  return (
    <section className={style.headerContent}>
      <Slider {...settings}>
        <Content1 />
        <Content2 />
      </Slider>
    </section>
  );
};

export default HeaderContent;
