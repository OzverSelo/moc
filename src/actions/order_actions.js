//handle menu item ordering start simple with an order then add firebase part
import {order_coffee} from './types'

export const sendOrder=(order={})=>(dispatch)=>{
    console.log('order:',order.coffee)
     
    dispatch({type:order_coffee,payload:order})
}

//  try {
      
  //   let createUser=firestore().collection("Users").doc(email).set({
  //     user:user,
  //     userId:userId,
  //     email:email
  //   })  
  //   let newOrder=firestore()
  //                .collection(email) 
  //                .doc(orderid) 
  //                .set
  //                ({
  //                 name:"Order",
  //                 Date:date,
  //                 UserId:userId,
  //                 UserName:user,
  //                 email:email,
  //                 loyaltyUsed:loyalty,
  //                 Order:order
  //             })
  //             .then(Alert.alert('order sent. '+order))
                 


  //  } catch (error) {
  //    console.log(error)
  //  }