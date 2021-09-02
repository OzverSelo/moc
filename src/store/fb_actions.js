import {HANDLE_FBLOGIN,FACEBOOK_LOGIN_SUCCESS,FACEBOOK_LOGIN_FAIL} from './types'

function handle_fbLogin(){
    return{
        type:HANDLE_FBLOGIN,
       
    }
}

function fbLogin_success(){
    return{
        type:FACEBOOK_LOGIN_SUCCESS
    }
}
const FBactionCreators={
    handle_fbLogin,fbLogin_success
}

export {FBactionCreators}