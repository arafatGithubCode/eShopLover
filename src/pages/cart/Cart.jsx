import { useSelector } from "react-redux";
import Breadcrumbs from "../../components/pageProps/Breadcrumbs";
import ItemCart from "./ItemCart";

const Cart = () => {
  const products = useSelector((state) => state.shopLoverReducer.products);

  return (
    <div className="max-w-container mx-auto px-4">
      <Breadcrumbs title="Cart" />
      {products.length > 0 ? (
        <div className="pb-20">
          <div className="lgl:grid grid-cols-5 place-content-center h-20 bg-[#F5F7F7] text-primeColor hidden px-6 font-titleFont text-lg font-semibold">
            <h2 className="col-span-2">Products</h2>
            <h2>Price</h2>
            <h2>Quantity</h2>
            <h2>Sub Total</h2>
          </div>
          <div className="mt-5">
            {products.map((item) => (
              <div key={`cartNumber-${item._id}`}>
                <ItemCart item={item} />
              </div>
            ))}
          </div>
        </div>
      ) : (
        <div></div>
      )}
    </div>
  );
};

export default Cart;
