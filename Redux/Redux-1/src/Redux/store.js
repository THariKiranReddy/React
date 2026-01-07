import { legacy_createStore } from "redux";
import { reducerFunction } from "./reducerFunction";
const initialArg = {
    counter:10,
    todo:[],
    isLoading:false,
    isError:false
};
export const store = legacy_createStore(reducerFunction,initialArg);