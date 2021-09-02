import AsyncStorage from '@react-native-async-storage/async-storage';
import {Facebook_login_success}from './types'
import { Facebook_login_fail } from './types';
import * as Facebook from 'expo-facebook';

export const facebookLogin=()=>async(dispatch)=>{
    let token=await AsyncStorage.getItem('fb_token')
    if(token){
        dispatch({type:Facebook_login_success,payload:token})
    }
    else{ 
        
        doFacebookLogin(dispatch)
    }
}

const doFacebookLogin=async(dispatch)=>{
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
         dispatch({type:Facebook_login_success,payload:token})
     }

    if(type==='cancel'){
        dispatch({type:Facebook_login_fail})}

    } catch(error){
        console.log(error)
    }
}