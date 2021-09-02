import {Facebook_login_success}from '../actions'
import {Facebook_login_fail} from './../actions';



 



export default function auth (state={},action){
 
switch (action.type) {
    case Facebook_login_success:
        console.log('Auth_Reducer/action fbtoken:',action.payload)    
        return  {token:action.payload}
        
    case Facebook_login_fail:
        return {token:null}
    default:
        return state
      
}



}