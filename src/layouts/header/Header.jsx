import { useEffect, useRef, useState } from "react";
import { Link, NavLink, useLocation } from "react-router-dom";
import { motion } from "framer-motion";
import Flex from "../../components/designLayouts/Flex";
import Image from "../../components/designLayouts/Image";
import { logo } from "../../assets/images";
import { navBarList } from "../../constants";
import { HiMenuAlt2 } from "react-icons/hi";
import { MdClose } from "react-icons/md";

const Header = () => {
  const [showMenu, setShowMenu] = useState(true);
  const [sideNav, setSideNav] = useState(false);
  const [category, setCategory] = useState(false);
  const [brand, setBrand] = useState(false);
  const sideNavRef = useRef();
  const location = useLocation();

  useEffect(() => {
    let responsiveMenu = () => {
      if (window.innerWidth < 667) {
        setShowMenu(false);
      } else {
        setShowMenu(true);
      }
    };
    responsiveMenu();
    window.addEventListener("resize", responsiveMenu);
    return () => {
      window.removeEventListener("resize", responsiveMenu);
    };
  }, []);

  useEffect(() => {
    const handleClickOutside = (e) => {
      if (sideNavRef.current && !sideNavRef.current.contains(e.target)) {
        setSideNav(false);
      }
    };
    if (sideNav) {
      document.addEventListener("mousedown", handleClickOutside);
    } else {
      document.removeEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [sideNav]);
  return (
    <div className="border-b-[1px] border-gray-200 w-full h-16 bg-white sticky top-0 shadow z-50">
      <nav className="max-w-container mx-auto px-4 h-full relative">
        <Flex className="flex items-center justify-between h-full">
          <Link to="/">
            <div>
              <Image className="w-32 object-cover" imgSrc={logo} />
            </div>
          </Link>
          {showMenu && (
            <motion.ul
              className="flex items-center w-auto z-50 p-0 gap-2"
              initial={{ y: 30, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.5 }}
            >
              <>
                {navBarList.map(({ _id, title, link }) => (
                  <NavLink
                    key={_id}
                    to={link}
                    state={{ data: location.pathname.split("/")[1] }}
                    className="flex justify-center items-center font-normal hover:font-bold h-6 w-20 px-12 text-base text-[#767676] hover:underline underline-offset-[4px] decoration-1px hover:text-[#262626] md:border-r-[2px] border-r-gray-300 last:border-r-0 hoverEffect z-50"
                  >
                    <li>{title}</li>
                  </NavLink>
                ))}
              </>
            </motion.ul>
          )}
          <HiMenuAlt2
            onClick={() => setSideNav(!sideNav)}
            className="w-10 h-8 inline-block cursor-pointer absolute top-6 right-4 md:hidden"
          />
          {sideNav && (
            <div className="fixed top-0 left-0 w-full h-screen bg-black text-gray-200 bg-opacity-80 z-50">
              <motion.div
                ref={sideNavRef}
                initial={{ x: -300, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ duration: 0.5 }}
                className="w-[80%] h-full relative"
              >
                <div className="h-full w-full bg-primeColor p-6">
                  <h1 className="text-2xl font-bold text-white mb-4">
                    shopLover
                  </h1>
                  <ul className="text-gray-200 flex flex-col gap-2">
                    {navBarList.map(({ _id, title, link }) => (
                      <li
                        key={_id}
                        className="font-normal hover:font-bold items-center text-lg text-gray-200 hover:underline underline-offset-[4px]  hover:text-white md:border-r-[2px] border-r-gray-300 hoverEffect last:border-r-0"
                      >
                        <NavLink
                          state={{ data: location.pathname.split("/")[1] }}
                          to={link}
                          onClick={() => setSideNav(false)}
                        >
                          {title}
                        </NavLink>
                      </li>
                    ))}
                  </ul>
                  <div className="mt-4">
                    <h1
                      className="flex justify-between items-center text-base font-titleFont mb-2 cursor-pointer"
                      onClick={() => setCategory(!category)}
                    >
                      Shop By Category
                      <span>{category ? "-" : "+"}</span>
                    </h1>
                    {category && (
                      <motion.ul
                        initial={{ y: 15, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        transition={{ duration: 0.5 }}
                        className="flex flex-col gap-1 text-sm"
                      >
                        <li className="sideSubHeadLi">New Arrivals</li>
                        <li className="sideSubHeadLi">Gudgets</li>
                        <li className="sideSubHeadLi">Accessories</li>
                        <li className="sideSubHeadLi">Electronics</li>
                        <li className="sideSubHeadLi">Others</li>
                      </motion.ul>
                    )}
                  </div>
                  <div className="mt-4">
                    <h1
                      className="flex justify-between items-center text-base font-titleFont mb-2 cursor-pointer"
                      onClick={() => setBrand(!brand)}
                    >
                      Shop By Brand
                      <span>{brand ? "-" : "+"}</span>
                    </h1>
                    {brand && (
                      <motion.ul
                        initial={{ y: 15, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        transition={{ duration: 0.5 }}
                        className="flex flex-col gap-1 text-sm"
                      >
                        <li className="sideSubHeadLi">New Arrivals</li>
                        <li className="sideSubHeadLi">Gudgets</li>
                        <li className="sideSubHeadLi">Accessories</li>
                        <li className="sideSubHeadLi">Electronics</li>
                        <li className="sideSubHeadLi">Others</li>
                      </motion.ul>
                    )}
                  </div>
                </div>
                <span
                  onClick={() => setSideNav(false)}
                  className="w-8 h-8 text-2xl absolute top-4 -right-12 border-[1px] border-gray-300 flex justify-center items-center rounded hover:border-red-500 cursor-pointer"
                >
                  <MdClose />
                </span>
              </motion.div>
            </div>
          )}
        </Flex>
      </nav>
    </div>
  );
};

export default Header;
