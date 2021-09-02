 
import {order_coffee} from '../actions/types'

 const initial_state={order:{}}
export default function (state=initial_state,action){
    switch (action.type) {
        case order_coffee:
            return action.payload
           
    
        default:
            return state;
    }
}