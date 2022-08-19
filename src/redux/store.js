import {configureStore} from "@reduxjs/toolkit";
import createSagaMiddleware from "@redux-saga/core";
import productSaga from "./productSaga";
import rootReducer from "./rootReducer";
import usersSaga from "./usersSaga";

const sagaMiddleware =  createSagaMiddleware();
const store = configureStore({
    reducer:{rootReducer},
    middleware:()=>[sagaMiddleware]
})
sagaMiddleware.run(productSaga);
sagaMiddleware.run(usersSaga);

export default store;