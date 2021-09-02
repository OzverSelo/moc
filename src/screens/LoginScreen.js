import React, { useState } from 'react'
import { TouchableOpacity, StyleSheet, View } from 'react-native'
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
import auth from '../../config'
 
 export default function LoginScreen({ navigation }) 
{
  const [name, setName] = useState('')
  const [email, setEmail] = useState({ value: 'abc@abc.com', error: '' })
  const [password, setPassword] = useState({ value: 'abc1234', error: '' })
 


  const onLoginPressed = () => 
  {
    const emailError = emailValidator(email.value)
    const passwordError = passwordValidator(password.value)
    if (emailError || passwordError) {
      setEmail({ ...email, error: emailError })
      setPassword({ ...password, error: passwordError })   
 
      return
    }
      try 
      {
  
        //Sign In
   const user= auth.length
   console.log(user)
      //  getUserName()
       auth.
       signInWithEmailAndPassword(email.value,password.value)
        .then((user)=>{console.log(user)
          auth().onAuthStateChanged(user=>
                                          {
                                          if(user)
                                          {
                                            navigation.navigate('Dashboard', {
                                              userId: user.uid,
                                              user: name,
                                              email:email.value
                                            });
                                  
                                          }
                                        }
                                    )  }
            )          

    
        .catch((error)=>{
                            switch (error.code) 
                            {
                                case 'auth/invalid-email':
                                setEmail({ ...email, error: error.message })
                                case 'auth/email-already-in-use':
                                setResult(error.message)
                                setEmail({ ...email, error: error.message })
                                case 'auth/weak-password':
                                setPassword({ ...email, error: error.message })

                                default:
                                setEmail({ ...email, error: error.message })
                                setPassword({ ...email, error: error.message })
                                setResult('something went wrong')
                                break;
                            }

                          })
  
   
  } 
  catch 
  (error) {console.log('check try catch error during onSignIn :',error) }
  }
  
  
  return (
    <Background>
      <BackButton goBack={navigation.goBack} />
      <Logo />
      <Header>Welcome back.</Header>
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
      <View style={styles.forgotPassword}>
        <TouchableOpacity
          onPress={() => navigation.navigate('ResetPasswordScreen')}
        >
          <Text style={styles.forgot}>Forgot your password?</Text>
        </TouchableOpacity>
      </View>
      <Button mode="contained" onPress={()=>onLoginPressed()}>
        Login
      </Button>
      <View style={styles.row}>
        <Text>Don’t have an account? </Text>
        <TouchableOpacity onPress={() => navigation.replace('RegisterScreen')}>
          <Text style={styles.link}>Sign up</Text>
        </TouchableOpacity>
      </View>
      <Text>{email.value}</Text>
      <Text>{password.value}</Text>
   
    </Background>
  )
}





const styles = StyleSheet.create({
  forgotPassword: {
    width: '100%',
    alignItems: 'flex-end',
    marginBottom: 24,
  },
  row: {
    flexDirection: 'row',
    marginTop: 4,
  },
  forgot: {
    fontSize: 13,
    color: theme.colors.text,
  },
  link: {
    fontWeight: 'bold',
    color: theme.colors.primary,
  },
})



  
  // try 
  // {
  
  //   //Sign In
 
  //   getUserName()
  //   auth()
  //   .signInWithEmailAndPassword(email.value,password.value)
  //   .then((user)=>{console.log(user)
  //     auth().onAuthStateChanged(user=>
  //                                     {
  //                                     if(user)
  //                                     {
  //                                       navigation.navigate('Dashboard', {
  //                                         userId: user.uid,
  //                                         user: name,
  //                                         email:email.value
  //                                       });
                               
  //                                     }
  //                                   }
  //                               )  }
  //       )          

    
  //   .catch((error)=>{
  //                       switch (error.code) 
  //                       {
  //                           case 'auth/invalid-email':
  //                           setEmail({ ...email, error: error.message })
  //                           case 'auth/email-already-in-use':
  //                           setResult(error.message)
  //                           setEmail({ ...email, error: error.message })
  //                           case 'auth/weak-password':
  //                           setPassword({ ...email, error: error.message })

  //                           default:
  //                           setEmail({ ...email, error: error.message })
  //                           setPassword({ ...email, error: error.message })
  //                           setResult('something went wrong')
  //                           break;
  //                       }

  //                     })
  //   // auth().onAuthStateChanged(user=>
  //   //                             {
  //   //                             if(user){
  //   //                               // navigation.navigate('Dashboard', {
  //   //                               //   userId: user.uid,
  //   //                               //   user: user,
  //   //                               //   email:email.value
  //   //                               // });

  //   //                               <Tab.Navigator>
  //   //                               <Tab.Screen name="Dashboard" component="Dashboard"/>
  //   //                               <Tab.Screen name="Payment" component="Payment"/>
  //   //                             </Tab.Navigator>   
  //   //                             }
  //   //                           }
  //   //                     )                  
   
  // } 
  // catch 
  // (error) {console.log('check try catch error during onSignIn :',error) }
  // }
