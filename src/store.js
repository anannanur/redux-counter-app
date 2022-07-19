import { createStore } from "redux";
import counterReducer from "./Services/reducer/counterReducer";

const store = createStore(counterReducer);
export default store;