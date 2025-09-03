import { createAction, createSlice } from "@reduxjs/toolkit";

const initialState = {
  items: [],
  status: "idle",
};

export const fetchAsync = createAction("cart/fetchItems/pending");
export const fetchAsyncFulfilled = createAction("cart/fetchItems/fulfilled");
export const addAsync = createAction("cart/addItems/pending");
export const addAsyncFulfilled = createAction("cart/addItems/fulfilled");
export const deleteAsync = createAction("cart/deleteItem/pending");
export const deleteAsyncFulfilled = createAction("cart/deleteItem/fulfilled");
export const updateAsync = createAction("cart/updateItem/pending");
export const updateAsyncFulfilled = createAction("cart/updateItem/fulfilled");

// export const fetchAsync = createAsyncThunk("cart/fetchItems", async () => {
//   const response = await fetchItems();
//   return response.data;
// });
// export const addAsync = createAsyncThunk("cart/addItems", async (item) => {
//   const { id, title, brand, thumbnail, price } = item;
//   const response = await addItem({
//     id,
//     title,
//     brand,
//     thumbnail,
//     price,
//     quantity: 1,
//   });
//   return response.data;
// });
// export const updateAsync = createAsyncThunk(
//   "cart/updateItem",
//   async ({ id, change }) => {
//     // to pass multiple params we need to use object
//     const response = await updateItem(id, change);
//     return response.data;
//   }
// );
// export const deleteAsync = createAsyncThunk("cart/deleteItem", async (id) => {
//   await deleteItem(id);
//   return id;
// });

export const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchAsync, (state) => {
        state.status = "loading";
      })
      .addCase(fetchAsyncFulfilled, (state, action) => {
        state.status = "idle";
        state.items = action.payload;
      })
      .addCase(addAsyncFulfilled, (state, action) => {
        state.status = "idle";
        state.items.push(action.payload);
      })
      .addCase(updateAsyncFulfilled, (state, action) => {
        state.status = "idle";
        const index = state.items.findIndex(
          (item) => item.id === action.payload.id
        );
        state.items.splice(index, 1, action.payload);
      })
      .addCase(deleteAsyncFulfilled, (state, action) => {
        state.status = "idle";
        const index = state.items.findIndex(
          (item) => item.id === action.payload
        );
        state.items.splice(index, 1);
      });
  },
});

// export const {} = cartSlice.actions;

export default cartSlice.reducer;
