import PropTypes from "prop-types";

const Image = ({ imgSrc = "", className = "" }) => {
  return <img src={imgSrc} className={className} alt="Image" />;
};

Image.propTypes = {
  imgSrc: PropTypes.string,
  className: PropTypes.string,
};

export default Image;
