import PropTypes from "prop-types";

const List = ({ children, className }) => {
  return <ul className={className}>{children}</ul>;
};

List.propTypes = {
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
};
List.defaultProps = {
  className: "",
};

export default List;
