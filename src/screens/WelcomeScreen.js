import 'react-native-gesture-handler';
import React,{ useState, useEffect} from 'react';
import Slides from '../components/Slides'
import { connect } from 'react-redux';
import {FBactionCreators} from '../store/fb_actions'
import {bindActionCreators} from 'redux'
import AsyncStorage from '@react-native-async-storage/async-storage';
import { UserActionCreators } from '../store/auth_actions';

const slide_data=[
  {'text':'Welcome to Ministry of Coffee', color:'#03A9F4'},
  {'text':'We developed this app to make you order your favorite coffee smoothly. ', color:'#009688'},
  {'text':'Also get your free coffee in every ten order.', color:'#009688'},
  {'text':'Lets log you in and we are good to go'}
]

function WelcomeScreen({navigation,loginCheck,isLoggedIn,token}) 
{
 
const [logintoken,setToken]=useState(token)

  async function init(){
    let resultToken=await AsyncStorage.getItem('fb_token')
console.log('girdi',resultToken)
  if (resultToken){
  console.log('girdi mi?',resultToken)
  return setToken(resultToken)
  }
  return setToken(true)
      }     

  useEffect (() => {
 
    if(isLoggedIn.isLoggedIn){
      //if true go no next screen
      navigation.navigate('Other')
    }

    else{
      init()
      if(logintoken){
        navigation.navigate('StartScreen')
      }
    }
  },[]

  );
 

 
  if (isLoggedIn.isLoggedIn){
    console.log(isLoggedIn.isLoggedIn)
  }
  else{console.log(isLoggedIn.isLoggedIn)}

  
   
  
  
   const startButtonCallback=()=>{
      navigation.navigate('StartScreen')
    }
  
   
    return <Slides data={slide_data} callback={startButtonCallback}/>
   
  
}


 

function mapStateToProps(state){
  const {token,isLoggedIn}=state
  return {token,isLoggedIn}
}

function mapDispatchToProps(dispatch){
  return{

      //facebookLogin:bindActionCreators(FBactionCreators.handle_fbLogin,dispatch)
      loginCheck:bindActionCreators(UserActionCreators.userLogin,dispatch)

  }
}
 
export default connect(mapStateToProps,mapDispatchToProps)(WelcomeScreen) 

 