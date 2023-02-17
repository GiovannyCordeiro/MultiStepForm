import { configureStore } from "@reduxjs/toolkit";
import { reducerButton } from "./handlerButton";

const store = configureStore(
  {
    reducer: { button: reducerButton }
  }
);

export default store; 

export type RootState = ReturnType<typeof store.getState>;
export type AppDispath = typeof store.dispatch;