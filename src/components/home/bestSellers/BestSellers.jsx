import { bestSellerProducts } from "../../../constants";
import Heading from "../products/Heading";
import Product from "../products/Product";

const BestSellerProductList = () => {
  return (
    <div>
      <Heading heading="Our Bestsellers" />
      <div className="w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-10">
        {bestSellerProducts.map((product) => (
          <Product
            key={product._id}
            _id={product._id}
            img={product.img}
            productName={product.productName}
            price={product.price}
            color={product.color}
            badge={product.badge}
            des={product.des}
            ficheTech={product.ficheTech}
          />
        ))}
      </div>
    </div>
  );
};

export default BestSellerProductList;
