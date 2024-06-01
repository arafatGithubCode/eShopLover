import { Link } from "react-router-dom";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { slides } from "../../constants";
import Image from "../designLayouts/Image";
import { useState } from "react";

const Banner = () => {
  const [dotActive, setDotActive] = useState(0);
  const settings = {
    dots: true,
    infinite: true,
    autoplay: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    adaptiveHeight: true,
    arrows: false,
    beforeChange: (prev, next) => {
      setDotActive(next);
    },
    appendDots: (dots) => (
      <div
        style={{
          position: "absolute",
          bottom: "10%",
          left: "7%",
        }}
      >
        <ul style={{ margin: "0px" }}> {dots} </ul>
      </div>
    ),
    customPaging: (i) => (
      <div
        style={
          i === dotActive
            ? {
                width: "30px",
                color: "#262626",
                borderRight: "3px #262626 solid",
                padding: "8px 0",
                cursor: "pointer",
              }
            : {
                width: "30px",
                color: "transparent",
                borderRight: "3px white solid",
                padding: "8px 0",
                cursor: "pointer",
              }
        }
      >
        {i + 1}
      </div>
    ),
    responsive: [
      {
        breakpoint: 676,
        settings: {
          dots: true,
          appendDots: (dots) => (
            <div
              style={{
                position: "absolute",
                bottom: "10%",
                left: "7%",
              }}
            >
              <ul style={{ margin: "0px" }}> {dots} </ul>
            </div>
          ),
          customPaging: (i) => (
            <div
              style={
                i === dotActive
                  ? {
                      width: "25px",
                      color: "#262626",
                      borderRight: "3px #262626 solid",
                      cursor: "pointer",
                      fontSize: "12px",
                    }
                  : {
                      width: "25px",
                      color: "transparent",
                      borderRight: "3px white solid",
                      cursor: "pointer",
                      fontSize: "12px",
                    }
              }
            >
              {i + 1}
            </div>
          ),
        },
      },
    ],
  };
  return (
    <div className="bg-gray-100 overflow-hidden">
      <Slider {...settings}>
        {slides &&
          slides.map((slide, index) => (
            <div className="py-3 relative" key={index}>
              <div className="md:w-[50%] w-[80%] mt-12 space-y-5">
                <h1 className="md:text-5xl text-3xl font-bold text-gray-700 leading-[4rem]">
                  {slide.text}
                </h1>
                <p className="md:text-3xl text-xl text-gray-900">
                  {slide.Subtext}
                </p>

                <Link to={slide.buttonLink}>
                  <button className="bg-primeColor text-white text-lg font-bodyFont w-[185px] h-[50px] hover:bg-black duration-300 font-bold mt-5 z-50 inline-block">
                    {slide.buttonText}
                  </button>
                </Link>
              </div>
              <div className="absolute top-0 right-0">
                <div className="md:w-[300px] w-[150px] mt-5">
                  <Image imgSrc={slide.imgSrc} className="w-full" />
                </div>
              </div>
            </div>
          ))}
      </Slider>
    </div>
  );
};

export default Banner;
