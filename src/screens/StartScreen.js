import React from 'react'
import Background from '../components/Background'
import Logo from '../components/Logo'
import Header from '../components/Header'
import Button from '../components/Button'
import Paragraph from '../components/Paragraph'
import { theme } from '../core/theme'
import AsyncStorage from '@react-native-async-storage/async-storage'
import { connect } from 'react-redux';
import {FBactionCreators} from '../store/fb_actions'
import {bindActionCreators} from 'redux'
import Auth from 'react-native-firebaseui-auth';

 
// or using ES6 imports:
import * as firebaseui from 'firebaseui'
import 'firebaseui/dist/firebaseui.css'


function StartScreen({ navigation,facebookLogin }) {
 
  const config = {
    providers: [
      'anonymous',
      'facebook', 
      'google', 
      'email', 
      'phone', 
      'apple', 
      'yahoo', 
      'github', 
      'twitter', 
      'microsoft'
    ],
    tosUrl: 'https://example.com/tos.htm',
    privacyPolicyUrl: 'https://example.com/privacypolicy.htm',
  };
  const func=async()=>{
  
   let token= await AsyncStorage.getItem('fb_token');
   let name= await AsyncStorage.getItem('fb_name');
    console.log('token:',name,token)
  }
  const func2=async()=>{
    //  await AsyncStorage.removeItem('fb_token');
    //  await AsyncStorage.removeItem('fb_name');
  const selo= Auth.getCurrentUser().then(user => console.log(user));
   
   }    
  return (
    <Background>
      <Logo />
      <Header>Ministry of Coffee</Header>
      <Paragraph>
        Give me my coffee and nobody gets hurt.
      </Paragraph>
      <Button
        mode="outlined"
        onPress={() => navigation.navigate('LoginScreen')}
      >
        Login
      </Button>
      <Button
        mode="outlined"
        onPress={() => navigation.navigate('RegisterScreen')}
      >
        Sign Up
      </Button>
      <Button
        mode="contained"
        backgroundColor={theme.colors.moc}
        style={[{backgroundColor:theme.colors.facebook}]}
        onPress={() => navigation.navigate('Auth')}
      >
        Facebook Login
      </Button>
      <Button
        mode="contained"
        backgroundColor={theme.colors.moc}
        style={[{backgroundColor:theme.colors.facebook}]}
        onPress={() =>func() }
      >
       Get token
      </Button>

      <Button
        mode="contained"
        backgroundColor={theme.colors.moc}
        style={[{backgroundColor:theme.colors.facebook}]}
        onPress={() =>func2() }
      >
       Remove token
      </Button>
    </Background>
  )
}



function mapStateToProps(state){
  const {token,name}=state
  return {token,name}
}

function mapDispatchToProps(dispatch){
  return{
 
      facebookLogin:bindActionCreators(FBactionCreators.handle_fbLogin,dispatch)
  }
}


export default connect(mapStateToProps,mapDispatchToProps)(StartScreen);