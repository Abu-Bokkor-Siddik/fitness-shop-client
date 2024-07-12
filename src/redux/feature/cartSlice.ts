import { createSlice } from '@reduxjs/toolkit';
const initialState={
    cart:[]
}
 const cartSlice = createSlice({
    name: 'carts',
    initialState,
    reducers:{}

})
export default cartSlice.reducer;