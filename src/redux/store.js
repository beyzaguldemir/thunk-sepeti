import { combineReducers, createStore ,applyMiddleware} from "redux";
import restaurantReducer from "./reducers/restaurantReducer";
import {thunk} from "redux-thunk"
import productReducer from "./reducers/productsReducer";
import basketReducer from "./reducers/basketReducer";
const rootReducer=combineReducers({
    restaurants:restaurantReducer,
    products: productReducer,
    cart:basketReducer,
})
//const store=createStore(rootReducer,applyMiddleware(thunk))
// * applyMiddleware herhangi bir yazılım ı redux a dahil etmeye yarar
// * Biz burda thunk dahil etmek için kullandık

export default createStore(rootReducer,applyMiddleware(thunk))