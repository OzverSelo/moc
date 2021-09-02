import React,{useState,useEffect} from 'react'
import { StatusBar } from 'react-native'
import { Provider as Paper } from 'react-native-paper'
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import {Provider} from 'react-redux';
import { createStore,compose, applyMiddleware,combineReducers } from "redux";
import themeReducer from './src/store/themeReducer'
import order_reducer from './src/store/order_reducer'
import fb_reducer from './src/store/fb_reducer'
import auth from './src/store/auth_reducer'
import manual_registry from './src/store/msign_reducer'
import thunk from "redux-thunk";
import { theme } from './src/core/theme'
import { StripeProvider } from '@stripe/stripe-react-native'
import Card from './src/components/Card'

import {
  StartScreen,
  LoginScreen,
  RegisterScreen,
  ResetPasswordScreen,
  OrderDetail,
  Account,
  WelcomeScreen,
  AuthScreen,
  OrderScreen,
  Rewards,
} from './src/screens'

 StatusBar.setBarStyle('light-content')
 
 
function App() {
  const [publishableKey,setPublishableKey]=useState('pk_test_YtTMMYjvAfYbuQWvVJbw1gyy00hHBQQPKF')

useEffect(()=>{
 async function init(){
  const publishableKey=await fetchPublishableKey()
  if(publishableKey){
    setPublishableKey(publishableKey)
  }
 }
})





  const HomeStack = createStackNavigator();
  const Stack = createStackNavigator();
  const OtherStack = createBottomTabNavigator();
 


const rootReducer = combineReducers({
  token:fb_reducer,
  name:fb_reducer,
  appTheme:themeReducer,
  order:order_reducer,
  signup:manual_registry,
  isLoggedIn:auth
 })
 
 
 
  const store = createStore(
    rootReducer, 
   compose(applyMiddleware(thunk))
)
 

  function HomeStackScreen() {
      return (
        <HomeStack.Navigator>
          
          <HomeStack.Screen 
            name="Welcome" 
            component={WelcomeScreen}  
          />

          <HomeStack.Screen 
           name="Auth" 
           component={AuthScreen} />

        </HomeStack.Navigator>
      );
  } 

  function OtherStackScreen() {
      return (
        <OtherStack.Navigator
         tabBarOptions={{style:{backgroundColor:'black'}}}>
          <OtherStack.Screen name="Order" component={OrderScreen} //Add tabs from import show bottom tab
         
          />
          <OtherStack.Screen name="Account" component={Account}/>
          <OtherStack.Screen name="Rewards" component={Rewards}/>
        </OtherStack.Navigator>
      );
  } 
  return (
<StripeProvider publishableKey={publishableKey}>
<Provider store={store}>
<Paper theme={theme}>
      <NavigationContainer>
        <Stack.Navigator
          initialRouteName="Home"
          screenOptions={{
            headerShown: false,  //tabBarIcon:coffeeLogo.tabBarIcon 
          }}
        >
          <Stack.Screen name='Home' component={HomeStackScreen} />
          <Stack.Screen name="StartScreen" component={StartScreen} />
          <Stack.Screen name="LoginScreen" component={LoginScreen} />
          <Stack.Screen name="RegisterScreen" component={RegisterScreen} />
          <Stack.Screen name="Other" component={OtherStackScreen}  />
          <Stack.Screen  name="Auth" component={AuthScreen} />
          <Stack.Screen  name="Card" component={Card} />
          <Stack.Screen  name="OrderDetail" component={OrderDetail} />
          <Stack.Screen
            name="ResetPasswordScreen"
            component={ResetPasswordScreen}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </Paper>
</Provider>
</StripeProvider>
  )
}



export default App



 