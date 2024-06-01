import PropTypes from "prop-types";

const Heading = ({ heading }) => {
  return (
    <div className="text-3xl font-semibold pb-6 text-black">{heading}</div>
  );
};

Heading.propTypes = {
  heading: PropTypes.string,
};

export default Heading;
