import { GET_ERRORS, CLEAR_ERRORS } from "./types";

export const returnErrors = (msg, id=null, status)=> {
        return{
            type : GET_ERRORS,
            payload : {msg, status, id}
        };
};

//clear errors

export const clearErrors = () => {
    return{
        type: CLEAR_ERRORS,
    }
}







