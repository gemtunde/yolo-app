import {combineReducers}from 'redux';


//reducers

import courseReducer from './courseReducers';
import errorReducer from './errorReducers';
import { bscscanReducer } from './bscscanReducers';


 const rootReducer = combineReducers({
   
   course: courseReducer,
   error: errorReducer,
   yolo_token: bscscanReducer 
})

export default rootReducer


