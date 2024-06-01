import PropTypes from "prop-types";
import { FaLongArrowAltLeft } from "react-icons/fa";

const SamplePrevArrow = (props) => {
  const { onClick } = props;
  return (
    <div
      onClick={onClick}
      className="w-14 h-14 rounded-full text-white bg-black bg-opacity-40 hover:bg-opacity-100 duration-300 cursor-pointer flex justify-center items-center absolute z-10 top-[35%] left-2"
    >
      <span>
        <FaLongArrowAltLeft />
      </span>
    </div>
  );
};

SamplePrevArrow.propTypes = {
  onClick: PropTypes.func,
};

export default SamplePrevArrow;
