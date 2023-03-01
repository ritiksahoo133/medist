import { createSlice } from "@reduxjs/toolkit";

const productsSlice = createSlice({
  name: "products",
  initialState: [],
  reducers: {
    setProducts(state, action) {
      state.push(...action.payload);
    },
  },
});

export const productActions = productsSlice.actions;
export default productsSlice;
