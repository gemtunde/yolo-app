

import { FETCH_ALL, FETCH_FAIL } from "../actions/types";

const initialState = {
    yolo_token : [],
    error : "",
}
export const bscscanReducer=(state = initialState, action)=> {
    switch(action.type){
        case FETCH_ALL : 
         return {
             ...state,
             yolo_token:action.payload,
         };

         case FETCH_FAIL : 
            return {
                ...state,
                error : action.error
            }
         default :
         return state
    }
}