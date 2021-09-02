import React,{useState} from 'react'
import { ScrollView,StyleSheet,TextInput,Button, Alert ,Text} from 'react-native'
import {API_URL} from '../../config'
import { CardField ,useConfirmPayment} from '@stripe/stripe-react-native'
 

export default function WelcomeScreen({navigation}){
  const [name,setName]=useState('')
  const {confirmPayment,loading}=useConfirmPayment()
  const [cardDetails,setCardDetails]=useState()
  
  const fetchPaymentIntentClientSecret=async()=>{
    const response=await fetch(`${API_URL}/create-payment-intent`,{
    method:'POST',
    headers:{
        'Content-Type':'application/json'
    },
    body:JSON.stringify({
        paymentMethodType:'card',
        currency:'aud'
    })})

    const{clientsecret,error}=await response.json() 
    return {clientsecret,error}

}
  
  
  const handlePayPress =async()=>
  {
  
    if(!cardDetails?.complete||!name){
        Alert.alert('Please enter your name and card details.')
        return
    }
   
   const billingDetails={
       name,
   }
   
  
   console.log('girdi')
   

try {
    const {clientsecret,error}=await fetchPaymentIntentClientSecret()
    if(error){
        console.log('Unable to process payment',error)
    }else{
        const {paymentIntent,error}=await confirmPayment(clientsecret,{
            type:"Card",
            billingDetails:billingDetails
              })
            if(error){
                alert(`Payment Confirmation Error. ${error.message}`)
            }else if (paymentIntent){
                alert("Payment Successful")
                console.log("Payment Successful",paymentIntent)
            }     
         }
} catch (error) {
    
}


  
    // const response=await fetch(`${API_URL}/create-payment-intent`,{
    //     method:'POST',
    //     headers:{
    //         'Content-Type':'application/json'
    //     },
    //     body:JSON.stringify({
    //         paymentMethodType:'card',
    //         currency:'aud'
    //     })
    // })
 //   const{clientsecret}=await response.json()
    // const {error,paymentIntent}=await confirmPayment(clientsecret,{
    //     type:'card',
    //     billingDetails:{name},
         
    // })
    // if (error){
    //     Alert.alert(`Error code: ${error.code}`,error.message)
    // }
    // else if (paymentIntent){
    //     Alert.alert(`Success`,`Payment successful: ${paymentIntent.id}`)
    // }
 
}
  return(
    <ScrollView style={styles.container}>
        <TextInput
        autoCapitalize='none'
        autoCorrect={false}
        placeholder='Name'
        keyboardType="name-phone-pad"
        onChange={(value)=>{setName(value.nativeEvent.text)}}
        style={styles.input}
        />

        <CardField
        postalCodeEnabled={false}
        placeholder={{number:"4242 4242 4242 4242"}}
         style={styles.cardField}
         cardStyle={{borderColor:'black',borderWidth:1}}
        onCardChange={cardDetails=>{setCardDetails(cardDetails)}}
        />

          <Button title='Pay' onPress={handlePayPress} disabled={loading}/> 
          
          <Button title='Back' onPress={()=>navigation.navigate('Account')} disabled={loading}/> 
          
       
    </ScrollView>
)

}

const styles=StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:'white',
        paddingTop:60,
        paddingHorizontal:16

    },
    input:{

    },
    cardField:{
        width:'100%',
        height:50,
        marginVertical:30
    },
    row:{
        flexDirection:'row',
        alignItems:'center',
        marginBottom:20
    },
    text:{

    }
})




 