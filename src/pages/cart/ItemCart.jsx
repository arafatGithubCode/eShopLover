import PropTypes from "prop-types";
import { ImCross } from "react-icons/im";
import { useDispatch } from "react-redux";
import {
  decreaseQuantity,
  deleteItem,
  increaseQuantity,
} from "../../redux/shopLoverSlice";

const ItemCart = ({ item }) => {
  const dispatch = useDispatch();
  return (
    <div className="w-full grid grid-cols-5 py-2 mb-4 border">
      <div className="flex items-center gap-4 ml-4 col-span-5 mdl:col-span-2">
        <ImCross
          onClick={() => dispatch(deleteItem(item._id))}
          className="text-primeColor hover:text-red-500 hoverEffect cursor-pointer"
        />
        <img className="w-32 h-32" src={item.img} alt={item.name} />
        <h2 className="font-titleFont font-semibold">{item.name}</h2>
      </div>
      <div className="col-span-5 mdl:col-span-3 flex items-center justify-between py-4 mdl:py-0 gap-6  mdl:gap-0 px-4 mdl:px-0">
        <div className="text-lg font-semibold w-1/3 flex items-center">
          {item.price}
        </div>
        <div className="w-1/3 flex items-center gap-6 text-lg">
          <span
            onClick={() => dispatch(decreaseQuantity({ _id: item._id }))}
            className="w-6 h-6 bg-gray-100 text-2xl flex items-center justify-center hover:bg-gray-300 cursor-pointer duration-300 border-[1px] border-gray-300 hover:border-gray-300"
          >
            -
          </span>
          <p>{item.quantity}</p>
          <span
            onClick={() => dispatch(increaseQuantity({ _id: item._id }))}
            className="w-6 h-6 bg-gray-100 text-2xl flex items-center justify-center hover:bg-gray-300 cursor-pointer duration-300 border-[1px] border-gray-300 hover:border-gray-300"
          >
            +
          </span>
        </div>
        <div className="w-1/3 flex items-center font-titleFont font-bold text-lg">
          <p>{item.quantity * item.price}</p>
        </div>
      </div>
    </div>
  );
};

ItemCart.propTypes = {
  item: PropTypes.shape({
    name: PropTypes.string,
    img: PropTypes.string,
    _id: PropTypes.string,
    price: PropTypes.string,
    quantity: PropTypes.number,
  }),
};

export default ItemCart;
