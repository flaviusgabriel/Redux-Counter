import { configureStore } from "@reduxjs/toolkit";

//importam reducerele
import counterReducer from "../features/counter/counterSlice";

export const store = configureStore({
  reducer: {
    counter: counterReducer, // acum e valabil pt intreaga aplicatie prin Provider
  }, // avem un obiect care tine un reducer
});
