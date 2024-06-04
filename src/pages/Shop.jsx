import { useState } from "react";
import Breadcrumbs from "../components/pageProps/Breadcrumbs";
import ProductBanner from "../components/pageProps/shopPage/ProductBanner";
import ShopSideNav from "../components/pageProps/shopPage/ShopSideNav";
import Pagination from "../components/pageProps/shopPage/Pagination";

const Shop = () => {
  const [itemsPerPage, setItemsPerPage] = useState(5);

  const itemsPerPageFromBanner = (itemPerPage) => {
    setItemsPerPage(itemPerPage);
  };

  return (
    <div className="max-w-container mx-auto px-4">
      <Breadcrumbs title="Products" />
      <div className="w-full h-full lg:flex pb-20 justify-between gap-5">
        <div className="w-full lg:w-[25%]">
          <ShopSideNav />
        </div>
        <div>
          <ProductBanner onItemsPerPageFromBanner={itemsPerPageFromBanner} />
          <Pagination itemsPerPage={itemsPerPage} />
        </div>
      </div>
    </div>
  );
};

export default Shop;
