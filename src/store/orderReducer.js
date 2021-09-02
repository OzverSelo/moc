import ORDER_BEGIN from './types'
import ORDER_SUCCESS from './types'
import ORDER_CANCELLED from './types'
import ORDER_FAILED from './types'
 

const initialOrder={size:'Large',coffee:'flat white',milk:'Skim',Sugar:0}
const initialState = {
    order: initialOrder,
    error: null
}
function addOrder(state){
    return{...state,order:state}
}
const orderReducer = (state = initialState, action) => {
    switch (action.type) {
        case action.ORDER_CANCELLED:
            return {
                ...state,
                error: null
            }
        case action.ORDER_SUCCESS:
            return addOrder(state)
        case action.ORDER_FAILED:
            return {
                ...state,
                error: action.payload.error
            }
        default:
            return state
    }
}

export default orderReducer