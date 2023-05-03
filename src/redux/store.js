import { configureStore } from "@reduxjs/toolkit";
import { contactsReducer, filterReducer } from "./slice";


const store = configureStore({
  reducer: {
    contacts: contactsReducer,
    filter: filterReducer,
  },
});

export default store;