import { createStore } from "redux";
import { composeWithDevTools } from "@redux-devtools/extension";
import { CombinedReducer } from "./ReducerCompaild/ReducerCompild";

const store = createStore(CombinedReducer, composeWithDevTools());

export default store;
