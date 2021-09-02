import React,{useState}from 'react'
import Background from '../components/Background' 
import Header from '../components/Header'
import Button from '../components/Button'
import {View,Text,StyleSheet,TextInput,FlatList} from 'react-native';
import { db } from '../../config';
 


import { Alert } from 'react-native';
const OrderForm =({userId,user,email})=>
{
   let initialValues={
    size:'',
    coffee:'',
    milk:'',
    extras:'',
    loyalty:false
}

    const [size,setSize]=useState(initialValues.size);
    const [milk,setMilk]=useState(initialValues.milk);
    const [extras,setExtras]=useState(initialValues.extras);
    const [coffee,setCoffee]=useState(initialValues.coffee);
    const [loyalty,setLoyalty]=useState(initialValues.loyalty);
    

  const  sendOrder=()=>{ 
    let order=[`${size.size}`,`${coffee.coffee}`,`${milk.milk}`,`${extras.extras}`]
    let date=new Date().toLocaleString()
    let orderid=Math.random().toString()
    
   try { 
     var orderr=db.collection('testOrder').doc('orderTest')
                 orderr
                 .set
                 ({
                  name:"Order",
                  Date:date,
                  
                  Order:order
              })
              .then(Alert.alert('order sent. '+order))
                 


   } catch (error) {
     console.log(error)
   }
 
    }
    
    const setItemFromList=(item)=>{
 
                                    switch (item.type) {
                                    case 'Size':
                                      setSize({...size,size:item.value})
                                      break
                                    case 'Coffee':
                                      setCoffee({...coffee,coffee:item.value})
                                      break
                                      case 'Milk':
                                      setMilk({...milk,milk:item.value})
                                    break
                                    }
                                    
                                  }
                                        
                                        
    
    const ItemList = () => {
        return (
        <View style={style.container}>
          <FlatList
            data={[
              {key:'1',type: 'Size',value:'Regular'},
              {key:'2',type: 'Size',value:'Large'},
              {key:'3',type: 'Coffee',value:'Flat White'},
              {key:'4',type: 'Coffee',value:'Cappuccino'},
              {key:'5',type: 'Milk',value:'Full Cream'},
           
            ]}
            renderItem={({item}) =>
          
               <View > 
                  <Button  
                  mode='contained'
                  style={style.size}
                  onPress={()=>setItemFromList(item)}>
                  {`${item.value}`}
                 </Button>
               </View>
            
          }
          keyExtractor={(item)=>item.key}
          />

        </View>
      );
    }
    
 
 
    return ( 
         <Background>
      
                 <Header>Choose Your Size</Header>
                 <View style={style.container}>
                   <ItemList/>
                </View>

                <View style={style.container2}>
                  <Header>Order:</Header>   
                   <Text>Size:{`${size.size}`}</Text>
                   <Text>Coffee:{`${coffee.coffee}`}</Text>
                   <Text>Milk:{`${milk.milk}`}</Text> 
                
               </View>

               <Button  
                  mode='contained'
                  style={style.size}
                  onPress={()=>sendOrder()}>
                    Send Order
                 </Button>
        
    </Background>
          
                
  )
}


 
export default OrderForm;
const style=StyleSheet.create({
    container:{
        flexDirection:'row',
        alignItems:'flex-end'
      
    }, 
    container2:{
      flexDirection:'column',
      alignItems:'flex-start'
     
    },
     size: {
        width: '60%',
        marginVertical: 10,
        marginHorizontal:2,
        paddingVertical: 2,
      },
      coffee: {
        width: '50%',
        marginVertical: 10,
        marginHorizontal:2,
        paddingVertical: 2,
      },
})


