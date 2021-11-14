import axios from "axios";

import { FETCH_ALL, FETCH_FAIL } from "./types";

export const fetchDataAsync = () => {
    return (dispatch) => {
      axios
       // .get("https://jsonplaceholder.typicode.com/users")
       // .get("https://bscscan.com/address/0x10ed43c718714eb63d5aa57b78b54704e256024e")
        .get("https://api.pancakeswap.info/api/v2/tokens/0xd084c5a4a621914ed2992310024d2438dfde5bfd")
        .then(({ data }) => dispatch({ type: FETCH_ALL, payload: data }))
        .catch((err) => dispatch({ type: FETCH_FAIL, error: err }));
    };
  };






