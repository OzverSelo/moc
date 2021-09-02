import { ADD_COFFEE_TYPE } from "./types";


function addCoffeeType(payload){
    return{
        type:ADD_COFFEE_TYPE,
        payload
    }
}

const orderactionCreators={
   addCoffeeType
}

export {orderactionCreators}