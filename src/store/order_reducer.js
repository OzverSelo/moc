import { ADD_COFFEE_TYPE } from "./types";
import { db } from '../../config';
import { Alert } from 'react-native'; 

let date=new Date().toLocaleString()
let orderid=Math.random().toString()
const initialState={
   order:'cap'
}

//helper functions

function applyAddCoffeeType(state){

    try { 
        var order=db.collection('testOrder').doc(orderid)
                    order
                    .set
                    ({
                     name:"fix later",
                     Date:date,
                     
                     Order:state.order
                 })
                 .then(Alert.alert('order sent! '+state.order))
                    
   
   
      } catch (error) {
        console.log(error)
        Alert.alert('Couldnt sent your order :( Please try again!')
      }



    return{
        ...state,
        order:state.order
    }
}



//Reducer

function order_reducer(state=initialState,action){
    switch (action.type) {
        case ADD_COFFEE_TYPE:
            return applyAddCoffeeType(action.payload)
        default:
            return state
    }
}


export default order_reducer