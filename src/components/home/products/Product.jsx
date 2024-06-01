import PropTypes from "prop-types";
import Image from "../../designLayouts/Image";
import Badge from "./Badge";
import { Link } from "react-router-dom";
import { GiReturnArrow } from "react-icons/gi";
import { FaShoppingCart } from "react-icons/fa";
import { MdOutlineLabelImportant } from "react-icons/md";
import { BsSuitHeartFill } from "react-icons/bs";

const Product = ({ img, productName, color, badge, price }) => {
  return (
    <div className="w-full relative group hover:shadow-xl">
      <div className="max-w-80 max-h-80 relative overflow-y-hidden">
        <div className="max-w-80 max-h-80 overflow-y-hidden">
          <Image className="w-full h-full object-cover" imgSrc={img} />
        </div>
        <Link to="/shop" className="absolute top-6 left-8">
          {badge && <Badge text="New" />}
        </Link>
        <div className="w-full h-[10rem] absolute -bottom-[200px] group-hover:bottom-0 duration-500 z-50">
          <ul className="w-full h-full flex flex-col items-end justify-center gap-2 font-titleFont px-2 border-1 border-r pt-6 last:pb-10 bg-white">
            <li className="text-[#767676] hover:text-primeColor border-b-[1px] border-b-gray-200 hover:border-b-primeColor font-semibold flex items-center justify-end gap-2 hover:cursor-pointer pb-1 duration-300 w-full">
              compare
              <span>
                <GiReturnArrow />
              </span>
            </li>
            <li className="text-[#767676] hover:text-primeColor border-b-[1px] border-b-gray-200 hover:border-b-primeColor font-semibold flex items-center justify-end gap-2 hover:cursor-pointer pb-1 duration-300 w-full">
              Add to Cart
              <span>
                <FaShoppingCart />
              </span>
            </li>
            <li className="text-[#767676] hover:text-primeColor border-b-[1px] border-b-gray-200 hover:border-b-primeColor font-semibold flex items-center justify-end gap-2 hover:cursor-pointer pb-1 duration-300 w-full">
              View Details
              <span>
                <MdOutlineLabelImportant />
              </span>
            </li>
            <li className="text-[#767676] hover:text-primeColor border-b-[1px] border-b-gray-200 hover:border-b-primeColor font-semibold flex items-center justify-end gap-2 hover:cursor-pointer pb-1 duration-300 w-full">
              Add to Wish List
              <span>
                <BsSuitHeartFill />
              </span>
            </li>
          </ul>
        </div>
      </div>

      <div className="flex justify-between max-w-80 border-[1px] border-t-0 px-4 pb-5">
        <div className="space-y-2">
          <strong className="font-titleFont text-lg text-primeColor">
            {productName}
          </strong>
          <p className="text-[14px] text-[#767676] font-semibold">{color}</p>
        </div>
        <p className="text-[#767676] text-[14px]">${price}</p>
      </div>
    </div>
  );
};

Product.propTypes = {
  img: PropTypes.string,
  productName: PropTypes.string,
  color: PropTypes.string,
  badge: PropTypes.bool,
  price: PropTypes.string,
};

export default Product;
