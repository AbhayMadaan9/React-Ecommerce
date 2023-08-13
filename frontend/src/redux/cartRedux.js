import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "cart",
  initialState: {
    products: [],
    count: 0,
    price: 0
  },
  reducers: {
    addProduct: (state, action) => {
      state.count += action.payload.count;
      state.products.push(action.payload);
      state.price = action.payload.price*state.count;
    },
    ClearProduct: (state, action) => {
      state.count = 0;
      state.products  = [];
      state.price = 0;
    },
  },
});

export const { addProduct, ClearProduct } = cartSlice.actions;
export default cartSlice.reducer;