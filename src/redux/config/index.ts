import { configureStore } from "@reduxjs/toolkit";
import { combineReducers } from "redux";
import toDoModule from "redux/modules/toDoModule";

const rootReducer = combineReducers({
  toDoReducer: toDoModule.reducer,
});

const store = configureStore({ reducer: rootReducer });

export default store;

export type RootState = ReturnType<typeof rootReducer>;
