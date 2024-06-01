import Banner from "../components/banner/Banner";
import BannerBottom from "../components/banner/BannerBottom";
import Sale from "../components/home/sale/Sale";

const Home = () => {
  return (
    <div className="w-full mx-auto px-2">
      <Banner />
      <BannerBottom />
      <div className="">
        <Sale />
      </div>
    </div>
  );
};

export default Home;
