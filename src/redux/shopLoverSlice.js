import { createSlice } from "@reduxjs/toolkit";
import { toast } from "react-toastify";

const initialState = {
  userInfo: [],
  products: [],
  checkedBrands: [],
  checkedCategories: [],
  checkedColors: [],
  checkedPrice: [],
};

export const shopLoverSlice = createSlice({
  name: "eShopLover",
  initialState,
  reducers: {
    addToCart: (state, action) => {
      const item = state.products.find(
        (item) => item._id === action.payload._id
      );
      if (item) {
        item.quantity += action.payload.quantity;
      } else {
        state.products.push({ ...action.payload, quantity: 1 });
      }
      //dispatch a success toast
      toast.success("Product added to cart");
    },
    increaseQuantity: (state, action) => {
      const item = state.products.find(
        (item) => item._id === action.payload._id
      );
      if (item) {
        item.quantity++;
      }
    },
    decreaseQuantity: (state, action) => {
      const item = state.products.find(
        (item) => item._id === action.payload._id
      );
      if (item.quantity === 1) {
        item.quantity = 1;
      } else {
        item.quantity--;
      }
    },
    deleteItem: (state, action) => {
      state.products = state.products.filter(
        (item) => item._id !== action.payload
      );
      toast.error("Product removed from cart");
    },
    resetCart: (state) => {
      state.products = [];
    },
    toggleBrand: (state, action) => {
      const brand = action.payload;
      const isBrandChecked = state.checkedBrands.some(
        (b) => b._id === brand._id
      );
      if (isBrandChecked) {
        state.checkedBrands = state.checkedBrands.filter(
          (b) => b._id !== brand._id
        );
      } else {
        state.checkedBrands.push(brand);
      }
    },
    toggleCategory: (state, action) => {
      const category = action.payload;
      const isCategoryChecked = state.checkedCategories.some(
        (c) => c._id === category._id
      );
      if (isCategoryChecked) {
        state.checkedCategories = state.checkedCategories.filter(
          (c) => c._id !== category._id
        );
      } else {
        state.checkedCategories.push(category);
      }
    },
    toggleColor: (state, action) => {
      const color = action.payload;
      const isColorChecked = state.checkedColors.some(
        (c) => c._id === color._id
      );
      if (isColorChecked) {
        state.checkedColors = state.checkedColors.filter(
          (c) => c._id !== color._id
        );
      } else {
        state.checkedColors.push(color);
      }
    },
    togglePrice: (state, action) => {
      const price = action.payload;
      const isPriceChecked = state.checkedPrice.some(
        (p) => p._id === price._id
      );
      if (isPriceChecked) {
        state.checkedPrice = state.checkedPrice.filter(
          (p) => p._id !== price._id
        );
      } else {
        state.checkedPrice.push(price);
      }
    },
  },
});

export const {
  addToCart,
  decreaseQuantity,
  deleteItem,
  increaseQuantity,
  resetCart,
  toggleBrand,
  toggleCategory,
  toggleColor,
  togglePrice,
} = shopLoverSlice.actions;

export default shopLoverSlice.reducer;
