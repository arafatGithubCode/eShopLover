import Slider from "react-slick";
import Heading from "../products/Heading";
import { SplOfferData } from "../../../constants";
import Product from "../products/Product";
import SampleNextArrow from "../newArrivals/SampleNextArrow";
import SamplePrevArrow from "../newArrivals/SamplePrevArrow";

const SpecialProduct = () => {
  const settings = {
    infinite: true,
    autoplay: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
    responsive: [
      {
        breakpoint: 1025,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          infinite: true,
        },
      },
      {
        breakpoint: 769,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          infinite: true,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
        },
      },
    ],
  };
  return (
    <div>
      <Heading heading="Special Products" />
      <Slider {...settings}>
        {SplOfferData &&
          SplOfferData.slice()
            .reverse()
            .map((product) => (
              <div className="px-2" key={`product${product._id}`}>
                <Product
                  _id={product._id}
                  img={product.img}
                  productName={product.productName}
                  price={product.price}
                  color={product.color}
                  badge={product.badge}
                />
              </div>
            ))}
      </Slider>
    </div>
  );
};

export default SpecialProduct;
