import { MdSwitchAccount } from "react-icons/md";
import { RiShoppingCart2Fill } from "react-icons/ri";
import { Link } from "react-router-dom";

const SpecialCase = () => {
  return (
    <div className="fixed top-52 right-5 z-50 sm:flex flex-col gap-2 hidden">
      <Link to="/signin">
        <div className="bg-white w-16 h-[70px] rounded-lg flex flex-col justify-center items-center gap-1 cursor-pointer shadow-testShadow overflow-x-hidden group">
          <div className="flex justify-center items-center">
            <MdSwitchAccount className="text-2xl -translate-x-12 group-hover:translate-x-3 transition duration-200 ease-in" />
            <MdSwitchAccount className="text-2xl -translate-x-3 group-hover:translate-x-12 transition duration-200 ease-in" />
          </div>
          <p className="text-xs font-titleFont font-semibold">Profile</p>
        </div>
      </Link>
      <Link to="/shop">
        <div className="bg-white w-16 h-[70px] rounded-lg flex flex-col justify-center items-center gap-1 cursor-pointer shadow-testShadow overflow-x-hidden group relative">
          <div className="flex justify-center items-center">
            <RiShoppingCart2Fill className="text-2xl -translate-x-12 group-hover:translate-x-3 transition duration-200 ease-in" />
            <RiShoppingCart2Fill className="text-2xl -translate-x-3 group-hover:translate-x-12 transition duration-200 ease-in" />
          </div>
          <p className="text-xs font-titleFont font-semibold">Buy Now</p>
          <p className="absolute top-1 right-2 bg-primeColor text-white text-xs w-4 h-4 rounded-full flex items-center justify-center font-semibold">
            5
          </p>
        </div>
      </Link>
    </div>
  );
};

export default SpecialCase;
