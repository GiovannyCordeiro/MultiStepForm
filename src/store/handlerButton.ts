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

export const reducerButton = handlerButton.reducer;
export const actionsButton = handlerButton.actions;