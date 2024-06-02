import { useEffect, useState } from "react";
import { BsGridFill } from "react-icons/bs";
import { GoTriangleDown } from "react-icons/go";
import { ImList } from "react-icons/im";

const ProductBanner = () => {
  const [gridViewActive, setGridViewActive] = useState(true);
  const [listViewActive, setListViewActive] = useState(false);

  useEffect(() => {
    const gridView = document.querySelector(".gridView");
    const listView = document.querySelector(".listView");

    gridView.addEventListener("click", () => {
      setGridViewActive(true);
      setListViewActive(false);
    });

    listView.addEventListener("click", () => {
      setListViewActive(true);
      setGridViewActive(false);
    });
  }, [gridViewActive, listViewActive]);

  return (
    <div className="grid gap-5 lg:gap-0 px-4 lg:px-0 lg:grid-cols-2 lg:w-1/2">
      <div className="w-full flex items-center gap-4">
        <span
          className={`${
            gridViewActive
              ? "bg-primeColor text-white"
              : "text-[#737373] border-[1px] border-gray-300"
          } gridView w-8 h-8 flex justify-center items-center text-lg cursor-pointer`}
        >
          <BsGridFill />
        </span>
        <span
          className={`${
            listViewActive
              ? "bg-primeColor text-white"
              : "text-[#737373] border-[1px] border-gray-300"
          } listView w-8 h-8 flex justify-center items-center text-lg cursor-pointer`}
        >
          <ImList />
        </span>
      </div>

      <div className="w-full flex items-center justify-between gap-5">
        <div className="flex items-center gap-3 text-[#767676]">
          <label
            className="block font-titleFont whitespace-nowrap"
            htmlFor="sort"
          >
            Sort by:
          </label>
          <div className="relative">
            <select
              className="w-32 md:w-52 border border-gray-200 py-1 px-4 block text-primeColor  text-base cursor-pointer dark:placeholder-gray-400 appearance-none focus-within:outline-none focus-visible:border-primeColor"
              id="sort"
            >
              <option value="Best Sellers">Best Sellers</option>
              <option value="New Arrival">New Arrival</option>
              <option value="Featured">Featured</option>
              <option value="Final Offer">Final Offer</option>
            </select>
            <span className="text-lg absolute top-2 right-1">
              <GoTriangleDown />
            </span>
          </div>
        </div>

        <div className="flex items-center gap-3 text-[#767676]">
          <label
            className="block font-titleFont whitespace-nowrap"
            htmlFor="show"
          >
            Show:
          </label>
          <div className="relative">
            <select
              className="w-32 md:w-52 border border-gray-200 py-1 px-4 block text-primeColor  text-base cursor-pointer dark:placeholder-gray-400 appearance-none focus-within:outline-none focus-visible:border-primeColor"
              id="show"
            >
              <option value="12">12</option>
              <option value="24">24</option>
              <option value="36">36</option>
              <option value="48r">48r</option>
            </select>
            <span className="text-lg absolute top-2 right-1">
              <GoTriangleDown />
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductBanner;
