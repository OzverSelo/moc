import React, { useState,useEffect } from 'react'
import { View, StyleSheet, TouchableOpacity } from 'react-native'
import { Text } from 'react-native-paper'
import Background from '../components/Background'
import Logo from '../components/Logo'
import Header from '../components/Header'
import Button from '../components/Button'
import TextInput from '../components/TextInput'
import BackButton from '../components/BackButton'
import { theme } from '../core/theme'
import { emailValidator } from '../helpers/emailValidator'
import { passwordValidator } from '../helpers/passwordValidator'
import { nameValidator } from '../helpers/nameValidator'
import {bindActionCreators} from 'redux' 
import {registryactionCreators} from '../store/msign_actions'
import { connect } from "react-redux";



function RegisterScreen({ navigation,start_registry,signup,}) {
  const [name, setName] = useState({ value: 'selo', error: '' })
  const [email, setEmail] = useState({ value: 'abc@abc.com', error:'' })
  const [password, setPassword] = useState({ value: 'abc1234', error: '' })


 
  useEffect (() => {
    checkToken() },[]
    );
   

    async function checkToken(){
 
              if(idTokenResult.token){
                navigation.navigate('Other')
              }
    }





  const onSignUpPressed = () => {
    const nameError = nameValidator(name.value)
    const emailError = emailValidator(email.value)
    const passwordError = passwordValidator(password.value)

    if (emailError || passwordError || nameError) {
      setName({ ...name, error: nameError })
      setEmail({ ...email, error: emailError })
      setPassword({ ...password, error: passwordError })
      return
    }
    
 
     let info={email:email.value,name:name.value,password:password.value,completed:signup.completed,error:null}
     start_registry(info) 


  }

  return (
    <Background>
      <BackButton goBack={navigation.goBack} />
      <Logo />
      <Header>Create Account</Header>
      <Text style={{fontSize:20}}>{`${signup.completed}`}</Text>
      <TextInput
        label="Name"
        returnKeyType="next"
        value={name.value}
        onChangeText={(text) => setName({ value: text, error: '' })}
        error={!!name.error}
        errorText={name.error}
      />
      <TextInput
        label="Email"
        returnKeyType="next"
        value={email.value}
        onChangeText={(text) => setEmail({ value: text, error: '' })}
        error={!!email.error}
        errorText={email.error}
        autoCapitalize="none"
        autoCompleteType="email"
        textContentType="emailAddress"
        keyboardType="email-address"
      />
      <TextInput
        label="Password"
        returnKeyType="done"
        value={password.value}
        onChangeText={(text) => setPassword({ value: text, error: '' })}
        error={!!password.error}
        errorText={password.error}
        secureTextEntry
      />
      <Button
        mode="contained"
        onPress={()=>onSignUpPressed()}
        style={{ marginTop: 24 }}
      >
        Sign Up
      </Button>
      <View style={styles.row}>
        <Text>Already have an account? </Text>
        <TouchableOpacity onPress={() => navigation.replace('LoginScreen')}>
          <Text style={styles.link}>Login</Text>
        </TouchableOpacity>
      </View>
    </Background>
  )
}

function mapStateToProps(state){
 
  const {signup}=state
  return {signup}
}

function mapDispatchToProps(dispatch){
 
  return{
     start_registry:bindActionCreators(registryactionCreators.start_registry,dispatch),
   }
}

export default connect(mapStateToProps,mapDispatchToProps)(RegisterScreen);

const styles = StyleSheet.create({
  row: {
    flexDirection: 'row',
    marginTop: 4,
  },
  link: {
    fontWeight: 'bold',
    color: theme.colors.primary,
  },
})



/*
()=>{ 
                fauth.onAuthStateChanged(user=>
                                        {
                                        if(user){
                                          storeData({user:name,email:email})
                                          navigation.navigate('Other', {
                                           // userId: user.uid,
                                            user: name.value,
                                            email:email.value
                                          })
                                                }
                                        })
*/