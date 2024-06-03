import { useState } from "react";
import { motion } from "framer-motion";
import NavTitle from "./NavTitle";
import { colorList } from "../../../../constants";
import { useDispatch, useSelector } from "react-redux";
import { toggleColor } from "../../../../redux/shopLoverSlice";

const Color = () => {
  const [showColors, setShowColors] = useState(false);

  const checkedColors = useSelector(
    (state) => state.shopLoverReducer.checkedColors
  );

  const dispatch = useDispatch();

  const handleToggleColor = (color) => {
    dispatch(toggleColor(color));
  };

  return (
    <div className="border-b-[1px] border-b-gray-200">
      <div onClick={() => setShowColors(!showColors)}>
        <NavTitle title="Shop by Color" show={showColors} />
      </div>
      {showColors && (
        <motion.div
          initial={{ y: -20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          <ul className="flex flex-col gap-4 text-sm lg:text-base text-[#767676]">
            {colorList.map((item) => (
              <li
                key={item._id}
                className="border-b-[1px] border-b-[#F0F0F0] pb-2 flex items-center gap-2"
              >
                <input
                  checked={checkedColors.some((c) => c._id === item._id)}
                  onChange={() => handleToggleColor(item)}
                  type="checkbox"
                  id={item._id}
                />
                <span
                  style={{ background: item.base }}
                  className={`w-3 h-3 bg-gray-500 rounded-full`}
                ></span>
                <label htmlFor={item._id} className="cursor-pointer">
                  {" "}
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

export default Color;
