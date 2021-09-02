import { USER_LOGIN,USER_LOGOUT } from "./auth_actions"
const initialState = {
    isLoggedIn:false
}

 
const auth=(state=initialState,action)=>{
 
switch (action.type) {
    case USER_LOGIN:    
        return  {isLoggedIn:true}        
    case USER_LOGOUT:
        return {isLoggedIn:false}
    default:
        return state
                      }
}

export default auth