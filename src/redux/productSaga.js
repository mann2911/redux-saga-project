import {PRODUCT_LIST, SEARCH_PRODUCT, SET_PRODUCT_LIST} from "./constant"
import {put, takeEvery} from "redux-saga/effects"

// function* means => it is genrator function
function *getProducts(){
    let data = yield fetch("http://localhost:3500/product");
    data = yield data.json();
    yield put({type:SET_PRODUCT_LIST,data});
}

function *searchProducts(data){
    let result = yield fetch(`http://localhost:3500/product?q=${data.query}`);
    result = yield result.json();
    yield put({type:SET_PRODUCT_LIST,data:result});
}

function* productSaga(){
    yield takeEvery(PRODUCT_LIST,getProducts);
    yield takeEvery(SEARCH_PRODUCT,searchProducts);
}


export default productSaga