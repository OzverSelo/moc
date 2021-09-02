import {combineReducers} from 'redux'
import auth from './auth_reducer'
import themeReducer from './themeReducer'
import order_reducer from './order_reducer'
export default combineReducers({
  //  auth //state that has a token or not,
    auth,themeReducer,order_reducer

})

