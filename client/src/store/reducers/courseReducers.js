import { ADD_COURSE, COURSE_CREATED, DELETE_COURSE, UPDATE_COURSE } from "../actions/types";


const initialState = {

    loading:true,
    course:[],
    created: false,
    updated : false,
    deleted : false,
}

const courseReducer = (state=initialState, action) =>{

    switch(action.type){
        
            case ADD_COURSE :
                return{
                    ...state,
                    course:[...state.course,...action.payload]
                };
            case COURSE_CREATED:
                return {
                    ...state,
                    created : true
                };
            case UPDATE_COURSE:
                return {
                    ...state,
                    updated : true
                };
            case DELETE_COURSE :
                return{
                    ...state,
                    deleted : true
                };
            default : 
               return     state;
    }
}
export default courseReducer