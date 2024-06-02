import PropTypes from "prop-types";
import { RiArrowDropDownLine, RiArrowDropUpLine } from "react-icons/ri";

const NavTitle = ({ title, show }) => {
  return (
    <div className="flex items-center justify-between pb-5 cursor-pointer">
      {show ? (
        <>
          <h3 className="font-bold lg:text-xl text-primeColor">{title}</h3>
          <RiArrowDropUpLine className="text-3xl" />
        </>
      ) : (
        <>
          <h3 className="font-bold lg:text-xl text-primeColor">{title}</h3>
          <RiArrowDropDownLine className="text-3xl" />
        </>
      )}
    </div>
  );
};

NavTitle.propTypes = {
  title: PropTypes.string,
  show: PropTypes.bool,
};

export default NavTitle;
