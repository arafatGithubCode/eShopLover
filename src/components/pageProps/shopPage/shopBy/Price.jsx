import { useState } from "react";
import { motion } from "framer-motion";
import NavTitle from "./NavTitle";
import { priceList } from "../../../../constants";
import { useDispatch, useSelector } from "react-redux";
import { togglePrice } from "../../../../redux/shopLoverSlice";

const Price = () => {
  const [showPrices, setShowPrices] = useState(false);

  const checkedPrice = useSelector(
    (state) => state.shopLoverReducer.checkedPrice
  );

  const dispatch = useDispatch();

  const handleTogglePrice = (price) => {
    dispatch(togglePrice(price));
  };

  return (
    <div className="border-b-[1px] border-b-gray-200">
      <div onClick={() => setShowPrices(!showPrices)}>
        <NavTitle title="Shop by Price" show={showPrices} />
      </div>
      {showPrices && (
        <motion.div
          initial={{ y: -20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          <ul className="flex flex-col gap-4 text-sm lg:text-base text-[#767676]">
            {priceList.map((item) => (
              <li
                key={item._id}
                className="border-b-[1px] border-b-[#F0F0F0] pb-2 flex items-center gap-2 hover:text-primeColor hover:border-gray-400 duration-300 cursor-pointer"
              >
                <input
                  checked={checkedPrice.some((p) => p._id === item._id)}
                  onChange={() => handleTogglePrice(item)}
                  type="checkbox"
                  id={item._id}
                />
                <label htmlFor={item._id}>
                  $ {item.priceOne.toFixed(2)} - $ {item.priceTwo.toFixed(2)}
                </label>
              </li>
            ))}
          </ul>
        </motion.div>
      )}
    </div>
  );
};

export default Price;
