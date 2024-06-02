import Brand from "./shopBy/Brand";
import Category from "./shopBy/Category";
import Color from "./shopBy/Color";
import Price from "./shopBy/Price";

const ShopSideNav = () => {
  return (
    <div className="grid sm:grid-cols-2 gap-2 px-4 lg:grid-cols-1 lg:w-1/4 lg:border-r xl:w-1/5">
      <Category />
      <Brand />
      <Color />
      <Price />
    </div>
  );
};

export default ShopSideNav;
