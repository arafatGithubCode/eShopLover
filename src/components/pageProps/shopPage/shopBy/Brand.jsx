import { useState } from "react";
import { motion } from "framer-motion";
import NavTitle from "./NavTitle";
import { brandList } from "../../../../constants/index.js";
import { useDispatch, useSelector } from "react-redux";
import { toggleBrand } from "../../../../redux/shopLoverSlice.js";

const Brand = () => {
  const [showBrands, setShowBrands] = useState(false);

  const checkedBrands = useSelector(
    (state) => state.shopLoverReducer.checkedBrands
  );

  const dispatch = useDispatch();

  const handleToggleBrands = (brand) => {
    dispatch(toggleBrand(brand));
  };

  return (
    <div className="border-b-[1px] border-b-gray-200">
      <div onClick={() => setShowBrands(!showBrands)}>
        <NavTitle title="Shop by Brand" show={showBrands} />
      </div>
      {showBrands && (
        <motion.div
          initial={{ y: -20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          <ul className="flex flex-col gap-4 text-sm lg:text-base text-[#767676]">
            {brandList.map((item) => (
              <li
                key={item._id}
                className="border-b-[1px] border-b-[#F0F0F0] pb-2 flex items-center gap-2 hover:text-primeColor hover:border-gray-400 duration-300 cursor-pointer"
              >
                <input
                  checked={checkedBrands.some((b) => b._id === item._id)}
                  onChange={() => handleToggleBrands(item)}
                  type="checkbox"
                  id={item._id}
                />
                <label className="cursor-pointer" htmlFor={item._id}>
                  {item.title}
                </label>
              </li>
            ))}
          </ul>
        </motion.div>
      )}
    </div>
  );
};

export default Brand;
