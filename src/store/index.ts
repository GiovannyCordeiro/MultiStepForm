import { configureStore } from "@reduxjs/toolkit";
import { createSlice } from "@reduxjs/toolkit";

const initialState = { button : "first", }

const handlerButton = createSlice({
  name: "button",
  initialState,
  reducers: {
    activeOne(state){
      state.button = "first"
    },
    activeTwo(state){
      state.button = "second"
    },
    activeThird(state){
      state.button = "third"
    },
    activeFourth(state){
      state.button = "fourth"
    }
  }
})

const store = configureStore(
  {
    reducer: { button: handlerButton.reducer }
  }
);

export const actions = handlerButton.actions;
export default store; 

export type RootState = ReturnType<typeof store.getState>;
export type AppDispath = typeof store.dispatch;