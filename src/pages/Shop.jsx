import Breadcrumbs from "../components/pageProps/Breadcrumbs";
import ShopSideNav from "../components/pageProps/shopPage/ShopSideNav";

const Shop = () => {
  return (
    <div>
      <Breadcrumbs title="Products" />
      <div className="">
        <ShopSideNav />
      </div>
    </div>
  );
};

export default Shop;
