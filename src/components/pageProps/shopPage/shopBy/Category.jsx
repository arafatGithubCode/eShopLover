import { useState } from "react";
import { motion } from "framer-motion";
import { categoryList } from "../../../../constants";
import NavTitle from "./NavTitle";
import { useDispatch, useSelector } from "react-redux";
import { toggleCategory } from "../../../../redux/shopLoverSlice";

const Category = () => {
  const [showCategory, setShowCategory] = useState(false);

  const checkedCategories = useSelector(
    (state) => state.shopLoverReducer.checkedCategories
  );

  const dispatch = useDispatch();

  const handleToggleCategory = (category) => {
    dispatch(toggleCategory(category));
  };

  return (
    <div className="border-b-[1px] border-b-gray-200">
      <div onClick={() => setShowCategory(!showCategory)}>
        <NavTitle title="Shop by Category" show={showCategory} />
      </div>
      {showCategory && (
        <motion.div
          initial={{ y: -20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          <ul className="flex flex-col gap-4 text-sm lg:text-base text-[#767676]">
            {categoryList.map((item) => (
              <li
                className="cursor-pointer border-b-[1px] border-b-[#F0F0F0] pb-2 flex items-center gap-2 hover:text-primeColor hover:border-gray-400 duration-300"
                key={item._id}
              >
                <input
                  checked={checkedCategories.some((b) => b._id === item._id)}
                  onChange={() => handleToggleCategory(item)}
                  type="checkbox"
                  id={item._id}
                />
                <label htmlFor={item._id} className="cursor-pointer">
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

export default Category;
