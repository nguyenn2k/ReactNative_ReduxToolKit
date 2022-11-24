import { createSlice } from "@reduxjs/toolkit";

//Giá trị ban đầu cho nó bằng 0:
const initialState = {
  value: 0,
}
  
const demoReduxSlice = createSlice({
    //Tên slice (không đặt trùng):
    name: 'reduxslice',
    initialState: initialState,
    reducers: {
      Like: (state,action) => {state.value = state.value +1},
      unLike: (state,action) => {state.value = state.value -1},
    },
})

//Export 2 actions trong slice cho UI Page:
export const { Like, unLike } = demoReduxSlice.actions
//Export reducer để cho Store nó dùng:
export default demoReduxSlice.reducer