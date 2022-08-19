import {SHOW_USERS} from "./constant";

const usersReducer = (data=[],action) =>{
    switch(action.type){
        case SHOW_USERS:
            return [...action.data]
        default:
            return data;
    }
    
}

export default usersReducer;