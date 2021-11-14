import axios from "axios";

//types
import { CLEAR_ERRORS, ADD_COURSE, COURSE_FAIL, COURSE_CREATED, UPDATE_COURSE, DELETE_COURSE } from "./types";

//action type
import { returnErrors} from "./errorAction";

//create course or token

export const createCourse = ( {name, price, description}) => async(dispatch)=> {

            //headers
            const config ={
                headers : {
                    "content-type" : "application/json",
                },
            };
            //request body
            const body = JSON.stringify({name, price, description})
           await axios
            .post("/api/course/create",body, config)
            .then(({data}) => {
                dispatch({type : CLEAR_ERRORS});
                dispatch({type:ADD_COURSE, payload:[ data]});
                dispatch({type : COURSE_CREATED})
            })
            .catch(err => {
                    dispatch({type : COURSE_FAIL});
                    dispatch(
                        returnErrors(err.response.data.msg, err.response.status, )
                    )
            })

}


//read a course or token

export const getCourse = ()=> async(dispatch)=>{
    
    await axios
        .get("/api/course")
        .then(res=>{
            dispatch({type : CLEAR_ERRORS});
            dispatch({type: ADD_COURSE, payload: res.data})
        })
        .catch(err=>{
           dispatch( returnErrors(err.response.data.msg, err.response.status, ))
        })
}

//update course or token

export const updateACourse = ({course_name, slug,uid}) => async(dispatch)=> {
    //request body
    const body = JSON.stringify({
        course_name,
        slug,
        uid,
    });
      //headers
      const config ={
        headers : {
            "content-type" : "application/json",
        },
    };

    await axios.put("/api/course", body, config)
    .then(()=>dispatch({type : UPDATE_COURSE}))
    .catch(err=> {
        dispatch(
            returnErrors(err.response.data.msg, err.response.status, "UPDATE_COURSE_ERROR" )
        )
    })

}

//delete a course token

export const deleteCourse = (id) => async(dispatch) => {

    //headers
  const config ={
    headers : {
        "content-type" : "application/json",
    },    
}
await axios.delete('/api/course', {
    data:{course_id : id}
}, config)
.then(()=>dispatch({type : DELETE_COURSE}))
.catch(err=>{
    dispatch(
        returnErrors(err.response.data.msg, err.response.status,  )
    )
})

}




