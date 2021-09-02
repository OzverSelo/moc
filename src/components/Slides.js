import React, { Component } from 'react'
import { StyleSheet,ScrollView,View,Dimensions } from 'react-native'
import { Text } from 'react-native-paper'
import Background from '../components/Background'
import Button from '../components/Button'
import { connect } from 'react-redux';



fullScreenWidth=Dimensions.get('window').width

class Slides extends Component 
{

findLastSlide(index){
if(this.props.data.length===index+1){
  return (
    <View>
      <Button 
      mode="contained" 
      onPress={this.props.callback}>
      Ready! 
    </Button> 
    </View>
  )
}
 
}

  renderSlides(){
 
    return this.props.data.map((slide,index)=>{
      return(
        <View 
          key={slide.text} 
          style={styles.container}> 
         <Background>
         <Text style={styles.textStyle}>{slide.text}</Text>
         {this.findLastSlide(index)}
         </Background>     
        </View>
      )
    })
  }


  render(){
 
    return (
      <ScrollView 
      horizontal
      pagingEnabled
      style={{flex:1}}
     >
      {this.renderSlides()}
      </ScrollView>
    )
  }
 
}

const styles = StyleSheet.create({
  textStyle: {
     color:'white', 
    fontSize:30
  },
  container:{
    flex:1,
    justifyContent:'center',
    alignItems:'center',
    width:fullScreenWidth
  }
})

function mapStateToProps(state){
//  console.log('Slides state:',state)
  const {token}=state

  return {token}
}


export default connect(mapStateToProps,)(Slides) 