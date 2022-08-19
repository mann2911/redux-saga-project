import {GET_USERS, SHOW_USERS} from "./constant";
import {put, takeEvery} from "redux-saga/effects";

function *getUsers(){
        let data = yield fetch("https://jsonplaceholder.typicode.com/users")
        data = yield data.json();
        yield put({type:SHOW_USERS,data})
}

function* usersSaga(){

    yield takeEvery(GET_USERS,getUsers)
   
}

export default usersSaga;