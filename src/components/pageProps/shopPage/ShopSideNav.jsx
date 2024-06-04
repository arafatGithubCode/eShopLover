import Brand from "./shopBy/Brand";
import Category from "./shopBy/Category";
import Color from "./shopBy/Color";
import Price from "./shopBy/Price";

const ShopSideNav = () => {
  return (
    <div className="w-full grid grid-cols-1 md:grid-cols-4 xs:grid-cols-2 lg:flex lg:flex-col gap-5 lg:border-r md:h-full pb-3 lg:pb-0">
      <Category />
      <Brand />
      <Color />
      <Price />
    </div>
  );
};

export default ShopSideNav;
