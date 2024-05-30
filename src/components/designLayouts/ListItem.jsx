import PropTypes from "prop-types";

const ListItem = ({ itemName, className }) => {
  return <li className={className}>{itemName}</li>;
};

ListItem.propTypes = {
  itemName: PropTypes.node.isRequired,
  className: PropTypes.string,
};
ListItem.defaultProps = {
  className: "",
};

export default ListItem;
