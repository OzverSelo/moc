import {HANDLE_FBLOGIN} from './types'

import AsyncStorage from '@react-native-async-storage/async-storage';
import {FACEBOOK_LOGIN_SUCCESS}from './types'
import { FACEBOOK_LOGIN_FAIL } from './types';
import * as Facebook from 'expo-facebook';

 
const initialState={
  order:null,
  token:null,
  error:null,
  name:null
}

async function handleToken(state){

    if(state)
              {
           
              let token=await AsyncStorage.getItem('fb_token')
              let name=await AsyncStorage.getItem('fb_name')
              console.log('fbLogin actions token?',state,token)
              return {...state,token:token,name:name}
                        

              }
    else{ 
        
        doFacebookLogin(state)
    }
}



// function facebookLogin ()
// {
//  if (state){
//         return state}
// else { 
//     handleToken(state)
    
// }
// return state
// }



 



const doFacebookLogin=async(state)=>{
    try {
        await Facebook.initializeAsync({
          appId: '897956507621735',
        });
        const {
          type,
          token,
        } = await Facebook.logInWithReadPermissionsAsync({
          permissions: ['public_profile'],
        });

     if (type==='success'){
        const response = await fetch(
            `https://graph.facebook.com/me?access_token=${token}&fields=id,name`
          );
        const { name } = await response.json();
        await AsyncStorage.setItem('fb_token',token)
        await AsyncStorage.setItem('fb_name',name)
      
        return {...state,token:token,name:name}
     }

    else if(type==='cancel'){
      //  dispatch({type:Facebook_login_fail})}
    return {...state,error:'User cancelled the action. '}
    }
    else{return{...state}}
    
    } catch(error){
        console.log(error)
    }
}


export default function fb_reducer (state=initialState.token,action){
 
    switch (action.type) {
        case HANDLE_FBLOGIN:      
            return  handleToken(state)
            
        case FACEBOOK_LOGIN_SUCCESS:
            return {token:action.payload}
        default:
            return state
          
    }
    
    
    
    }