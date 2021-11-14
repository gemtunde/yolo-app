import React, {useEffect} from 'react'
import {useSelector} from 'react-redux';
import { Link } from 'react-router-dom';
import {AvatarGenerator} from 'random-avatar-generator'
import { fetchDataAsync } from '../store/actions/bscscanAction';
import { useDispatch, connect } from 'react-redux';

function Home() {

    const dispatch = useDispatch();

    useEffect(()=>{
        dispatch(fetchDataAsync());
    }, []);

    //select from redux
    const {yolo_token} = useSelector((state)=>state.yolo_token);
    const data = yolo_token.data
    const {name, price, symbol, price_BNB} = data
    console.log(name, price, symbol, price_BNB)
   //console.log(data)
    //console.log(yolo_token)

    return (
        <div>
            {yolo_token ? (
                <div class="card text-center">
                <div class="card-header">
                  NAME -  {name}
                </div>
                <div class="card-body">
                  <h5 class="card-title">PRICE - {price}</h5>
                  <p class="card-text"> PRICE BNB - {price_BNB}</p>
                  
                  
                </div>
                <div class="card-footer text-muted">
                <p class="card-text"> SYMBOL - {symbol}</p>
                </div>
              </div>
            ) : (
                <div> <h3>No token data Available</h3>
                    </div>
            )}
        </div>

        
         )
        }

export default Home
