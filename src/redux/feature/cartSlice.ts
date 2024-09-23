/* eslint-disable @typescript-eslint/ban-types */
/* eslint-disable @typescript-eslint/no-explicit-any */
import { createSlice } from "@reduxjs/toolkit";
const initialState = {
  carts: [] as any,
  selectedCart: 0,
  totalPrice: 0,
};
const cartSlice = createSlice({
  name: "carts",
  initialState,
  reducers: {
    addCart: (state, action) => {
      const isExit = state.carts.find(
        (carts: any) => carts._id === action.payload._id
      );
      if (!isExit) {
        state.carts.push({ ...action.payload, quantity: 1 });
      } else {
        alert("This products already exist");
      }
      state.selectedCart = state.carts.reduce((total: Number, carts: any) => {
        return Number(total + carts.quantity);
      }, 0);
      // state.totalPrice=state.carts.reduce((total:Number,carts:any)=>{
      //     return Number(total )
      // },0)
      state.totalPrice = selectTotal(state);
      console.log("item ", state, isExit);
    },
    updateQuentity: (state, action) => {
      state.carts.map((cart: any) => {
        if (cart._id === action.payload.id) {
          if (action.payload.type === "increment") {
            cart.quantity += 1;
          } else if (action.payload.type === "decrement") {
            cart.quantity -= 1;
          }
        }
      });
      state.totalPrice = selectTotal(state);
    },
    removeCart: (state, action) => {
      console.log(action.payload);
      console.log(state.carts);
      state.carts = state.carts.filter(
        (item: any) => item?._id !== action.payload
      );
      state.totalPrice = selectTotal(state);
    },
    
  },
});
export const selectTotal = (state: any) =>
  state.carts.reduce((total: Number, carts: any) => {
    console.log(
      "total",
      total,
      "carts.quantity",
      carts.quantity,
      "cart price",
      carts.price
    );
    return Number(total) + Number(carts.price * carts.quantity);
  }, 0);

export const { addCart, updateQuentity ,removeCart} = cartSlice.actions;
export default cartSlice.reducer;
