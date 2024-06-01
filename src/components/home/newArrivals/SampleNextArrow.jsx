import PropTypes from "prop-types";
import { FaLongArrowAltRight } from "react-icons/fa";

const SampleNextArrow = (props) => {
  const { onClick } = props;
  return (
    <div
      onClick={onClick}
      className="w-14 h-14 rounded-full  text-white bg-black bg-opacity-40 hover:bg-opacity-80 hoverEffect flex justify-center items-center cursor-pointer absolute top-[35%] right-2"
    >
      <span className="text-xl">
        <FaLongArrowAltRight />
      </span>
    </div>
  );
};

SampleNextArrow.propTypes = {
  onClick: PropTypes.func,
};

export default SampleNextArrow;
