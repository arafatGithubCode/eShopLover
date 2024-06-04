import PropTypes from "prop-types";
import { paginationItems } from "../../../constants";
import { useState } from "react";
import { useSelector } from "react-redux";
import Product from "../../home/products/Product";
import ReactPaginate from "react-paginate";

const items = paginationItems;

const Items = ({
  currentItems,
  selectedBrand,
  selectedCategory,
  selectedColor,
  selectedPrice,
}) => {
  const filteredItems = currentItems.filter((item) => {
    const isBrandSelected =
      selectedBrand.length === 0 ||
      selectedBrand.some((brand) => brand.title === item.brand);

    const isCategorySelected =
      selectedCategory.length === 0 ||
      selectedCategory.some((category) => category.title === item.cat);

    const isColorSelected =
      selectedColor.length === 0 ||
      selectedColor.some((color) => color.title === item.color);

    const isPriceSelected =
      selectedPrice.length === 0 ||
      selectedPrice.some(
        (price) => item.price >= price.priceOne && item.price <= price.priceTwo
      );
    return (
      isBrandSelected &&
      isCategorySelected &&
      isColorSelected &&
      isPriceSelected
    );
  });
  return (
    <>
      {filteredItems &&
        filteredItems.map((item) => (
          <div key={item._id}>
            <Product
              _id={item._id}
              img={item.img}
              productName={item.productName}
              price={item.price}
              color={item.color}
              badge={item.badge}
            />
          </div>
        ))}
    </>
  );
};

Items.propTypes = {
  currentItems: PropTypes.arrayOf(
    PropTypes.shape({
      _id: PropTypes.string.isRequired,
      brand: PropTypes.string.isRequired,
      cat: PropTypes.string.isRequired,
      color: PropTypes.string.isRequired,
      price: PropTypes.string.isRequired,
      img: PropTypes.string,
      productName: PropTypes.string,
      badge: PropTypes.bool,
    })
  ).isRequired,
  selectedBrand: PropTypes.arrayOf(
    PropTypes.shape({
      title: PropTypes.string.isRequired,
    })
  ).isRequired,
  selectedCategory: PropTypes.arrayOf(
    PropTypes.shape({
      title: PropTypes.string.isRequired,
    })
  ).isRequired,
  selectedColor: PropTypes.arrayOf(
    PropTypes.shape({
      title: PropTypes.string.isRequired,
    })
  ).isRequired,
  selectedPrice: PropTypes.arrayOf(
    PropTypes.shape({
      priceOne: PropTypes.number.isRequired,
    })
  ).isRequired,
};

const Pagination = ({ itemsPerPage }) => {
  const [itemOffSet, setItemOffSet] = useState(0);
  const [itemStart, setItemStart] = useState(1);

  const endOffSet = itemOffSet + itemsPerPage;
  const currentItems = items.slice(itemOffSet, endOffSet);

  const selectedBrand = useSelector(
    (state) => state.shopLoverReducer.checkedBrands
  );
  const selectedCategory = useSelector(
    (state) => state.shopLoverReducer.checkedCategories
  );
  const selectedColor = useSelector(
    (state) => state.shopLoverReducer.checkedColors
  );
  const selectedPrice = useSelector(
    (state) => state.shopLoverReducer.checkedPrice
  );

  const pageCount = Math.ceil(items.length / itemsPerPage);

  const handlePageClick = (event) => {
    const newOffset = (event.selected * itemsPerPage) % items.length;
    const newStart = newOffset + 1;
    setItemStart(newStart);
    setItemOffSet(newOffset);
  };

  return (
    <div>
      <div className="grid md:grid-cols-2 xl:grid-cols-3">
        <Items
          currentItems={currentItems}
          selectedBrand={selectedBrand}
          selectedCategory={selectedCategory}
          selectedColor={selectedColor}
          selectedPrice={selectedPrice}
        />
      </div>
      <div className="flex flex-col mdl:flex-row justify-center mdl:justify-between items-center md:pr-3">
        <ReactPaginate
          nextLabel=""
          onPageChange={handlePageClick}
          pageRangeDisplayed={3}
          marginPagesDisplayed={2}
          pageCount={pageCount}
          previousLabel=""
          pageLinkClassName="w-9 h-9 border-[1px] border-lightColor hover:border-gray-500 duration-300 flex justify-center items-center"
          pageClassName="mr-6"
          containerClassName="flex text-base font-semibold font-titleFont py-10"
          activeClassName="bg-black text-white"
        />
        <p>{`Products from ${itemStart} to ${Math.min(
          endOffSet,
          items.length
        )} of ${items.length}`}</p>
      </div>
    </div>
  );
};

Pagination.propTypes = {
  itemsPerPage: PropTypes.number,
};

export default Pagination;
