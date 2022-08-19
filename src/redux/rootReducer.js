import {cartData} from "./reducer";
import {combineReducers} from "redux";
import {productData} from "./productReducer";
import usersReducer from "./usersReducer";

export default combineReducers({cartData,productData,usersReducer}) 