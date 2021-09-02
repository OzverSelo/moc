import React,{useEffect, useState} from 'react';
import Background from '../components/Background'
import Logo from '../components/Logo'
import Button from '../components/Button'
import { theme } from '../core/theme'
import { Text } from 'react-native-paper'
import { connect } from 'react-redux';
import {FBactionCreators} from '../store/fb_actions'
import {bindActionCreators} from 'redux'
import AsyncStorage from '@react-native-async-storage/async-storage' 
function AccountScreen({navigation,facebookLogin,token,name}) 
{  

  let [userName,setUserName]=useState(name)

  useEffect(() => {
  
    onAuthComplete()}, 
   []) 
 
   const onAuthComplete=async()=>{
    let tokenn= await AsyncStorage.getItem('fb_token');
    let name= await AsyncStorage.getItem('fb_name');
    if(name){
      setUserName(name)
    }
    if(token){ console.log('token:',token)}
   
  }
    
    return( <Background>
        <Logo />  
        <Text>Hi! {`${userName}`}</Text>
        <Button
          mode="contained"
          backgroundColor={theme.colors.moc}
          style={[{backgroundColor:theme.colors.facebook}]}
          onPress={()=>navigation.navigate('Card') }
        > CC Payment
        </Button>

        <Button
        mode="outlined"
        onPress={()=>navigation.navigate('Welcome')}
        >Logout
        </Button>
    
      </Background>)
 
  } 
const mapStateToProps = (state)=> {
   console.log('auth',state)
  const {token,name}=state
  return {token,name}
 }
 function mapDispatchToProps(dispatch){
  return{
    //   startTimer:bindActionCreators(actions.startTimer,dispatch),
    //   restartTimer:bindActionCreators(actionCreators.restartTimer,dispatch),
    //   addSecond:bindActionCreators(actions.addSecond,dispatch),
    //   addCoffeeType:bindActionCreators(orderactionCreators.addCoffeeType,dispatch),
    //  // facebookLogin:bindActionCreators(facebookLogin,dispatch)
      facebookLogin:bindActionCreators(FBactionCreators.handle_fbLogin,dispatch)
  }
}

 
export default connect(mapStateToProps,)(AccountScreen);