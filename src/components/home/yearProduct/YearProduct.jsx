import { Link } from "react-router-dom";
import Image from "../../designLayouts/Image";
import { productOfTheYear } from "../../../assets/images";
import ShopNow from "../../designLayouts/buttons/ShopNow";

const YearProduct = () => {
  return (
    <Link to="/shop">
      <div className="my-16 bg-[#f3f3f3] md:bg-transparent w-full h-80 relative font-titleFont">
        <Image
          className="w-full h-full object-cover hidden md:block"
          imgSrc={productOfTheYear}
        />
        <div className="w-full md:w-2/3 xl:w-1/2 h-80 absolute top-0 right-0 flex flex-col items-start justify-center gap-6 px-4 md:px-0">
          <h1 className="text-3xl font-semibold text-primeColor">
            Product of The Year
          </h1>
          <p className="text-base text-primeColor font-normal mr-4 max-w-[600px] text-justify">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Pariatur
            quos cupiditate inventore optio! Voluptates possimus maxime delectus
            in, minus provident?
          </p>
          <ShopNow />
        </div>
      </div>
    </Link>
  );
};

export default YearProduct;
