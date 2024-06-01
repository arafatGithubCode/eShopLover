import Banner from "../components/banner/Banner";
import BannerBottom from "../components/banner/BannerBottom";
import BestSellerProductList from "../components/home/bestSellers/BestSellers";
import NewArrivals from "../components/home/newArrivals/NewArrivals";
import Sale from "../components/home/sale/Sale";

const Home = () => {
  return (
    <div className="w-full mx-auto px-2">
      <Banner />
      <BannerBottom />
      <div className="max-w-container mx-auto px-4">
        <Sale />
        <NewArrivals />
        <BestSellerProductList />
      </div>
    </div>
  );
};

export default Home;
