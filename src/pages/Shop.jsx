import Breadcrumbs from "../components/pageProps/Breadcrumbs";
import ProductBanner from "../components/pageProps/shopPage/ProductBanner";
import ShopSideNav from "../components/pageProps/shopPage/ShopSideNav";

const Shop = () => {
  return (
    <div>
      <Breadcrumbs title="Products" />
      <div className="flex flex-col lg:flex-row gap-4">
        <ShopSideNav />
        <div className="">
          <ProductBanner />
        </div>
      </div>
    </div>
  );
};

export default Shop;
