import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import { HiOutlineMenuAlt4 } from "react-icons/hi";
import Flex from "../../components/designLayouts/Flex";
import { Link } from "react-router-dom";
import { categoryList, user } from "../../constants";
import { FaCaretDown, FaSearch, FaShoppingCart, FaUser } from "react-icons/fa";
import { BsSuitHeartFill } from "react-icons/bs";
const HeaderBottom = () => {
  const [showCategory, setShowCategory] = useState(false);
  const categoryMenuList = useRef(null);
  const userMenuList = useRef(null);
  const [showUser, setShowUser] = useState(false);

  const handleClickOutside = (event) => {
    if (
      categoryMenuList.current &&
      !categoryMenuList.current.contains(event.target)
    ) {
      setShowCategory(false);
    }

    if (userMenuList.current && !userMenuList.current.contains(event.target)) {
      setShowUser(false);
    }
  };

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <div className="w-full relative bg-[#F5F5F3] shadow">
      <div className="max-w-container mx-auto">
        <Flex className="flex flex-col md:flex-row lg:justify-around py-3 gap-2 px-5 md:px-0">
          <div
            ref={categoryMenuList}
            onClick={() => setShowCategory(!showCategory)}
            className="flex items-center gap-2 text-primeColor h-14 cursor-pointer relative"
          >
            <HiOutlineMenuAlt4 className="w-5 h-5" />
            <p className="text-[14px] font-normal">Shop by category</p>
            {showCategory && (
              <motion.ul
                initial={{ y: 30, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.5 }}
                className="bg-primeColor text-[#767676] w-auto h-auto p-4 pb-6 absolute top-24 left-10 z-50"
              >
                {categoryList.map(({ _id, title, link }) => (
                  <Link key={_id} to={link}>
                    <li className="text-gray-400 px-4 py-1 border-b-[1px] hover:text-white hover:border-white border-gray-300 hoverEffect whitespace-nowrap">
                      {title}
                    </li>
                  </Link>
                ))}
              </motion.ul>
            )}
          </div>
          <div className="flex flex-1 justify-between items-center bg-white rounded p-3 md:max-w-md">
            <input
              type="text"
              placeholder="Search your products here..."
              className="flex-1 outline-none placeholder:text-[15px] placeholder:text-gray-400 placeholder:font-semibold px-5 py-1"
            />
            <FaSearch className="w-5 h-5" />
          </div>
          <div
            className="mt-3 relative flex gap-4 items-center"
            ref={userMenuList}
          >
            <div
              onClick={() => setShowUser(!showUser)}
              className="flex items-center text-xl cursor-pointer"
            >
              <FaUser />
              <FaCaretDown />
            </div>
            {showUser && (
              <motion.ul
                initial={{ y: 30, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.5 }}
                className="bg-primeColor text-[#767676] w-auto h-auto p-4 pb-6 absolute top-8 left-10 md:top-16 md:-left-10 z-50"
              >
                {user.map(({ _id, title, link }) => (
                  <Link key={_id} to={link}>
                    <li className="text-gray-400 px-10 py-1 border-b-[1px] hover:text-white hover:border-white border-gray-300 hoverEffect whitespace-nowrap">
                      {title}
                    </li>
                  </Link>
                ))}
              </motion.ul>
            )}
            <Link to="/cart">
              <div className="text-xl">
                <FaShoppingCart />
              </div>
            </Link>
            <BsSuitHeartFill className="text-xl" />
          </div>
        </Flex>
      </div>
    </div>
  );
};

export default HeaderBottom;
