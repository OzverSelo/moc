import 'react-native-gesture-handler';
import React,{ useEffect,useState} from 'react';
import { StyleSheet,Text, View } from 'react-native'
import { connect } from 'react-redux';
import AsyncStorage from '@react-native-async-storage/async-storage'; 
import {FBactionCreators} from '../store/fb_actions'
 
import {bindActionCreators} from 'redux'
 


const AuthScreen=({facebookLogin,navigation,token,user})=>  {

 
 
  useEffect (() => {
    facebookLogin()
    
    },[]
  
    );
   
    if (token){
      console.log('token1',token)
        // navigation.navigate('Other')
     }
     else{
        init()
    //      console.log('token1',token)
    //      token?navigation.navigate('Other'):navigation.navigate('StartScreen')
    // console.log('token2',token)
    }
       
    async function init(){
      token=await AsyncStorage.getItem('fb_token')
    }
   
      
 
  return (
      <View style={styles.container}>
          <Text>{user}</Text>
          
      </View>
  );
 
}

const styles = StyleSheet.create({
  container: {

  }
});
 


function mapStateToProps(state){
  const {token,user}=state
  return {token,user}
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

export default connect(mapStateToProps,mapDispatchToProps)(AuthScreen);