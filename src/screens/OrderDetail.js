import React,{useEffect,useState } from 'react';
import {bindActionCreators} from 'redux' 
import {orderactionCreators} from '../store/order_actions'
import {
    View,
    Text,
    Image,
    TouchableOpacity,
    ImageBackground,
    ScrollView,
} from 'react-native';

import { dummyData, COLORS, FONTS, SIZES, icons } from "../constants";
import { IconButton } from "../components";
import { connect } from "react-redux";
import { Button } from 'react-native-paper';
import { theme } from '../core/theme'



const OrderDetail = ({ navigation, route,order,addCoffeeType}) => 
{

    const [selectedItem, setSelectedItem] = useState(null)
    const [selectedSize, setSelectedSize] = useState('Large')

    const [selectedMilkIndex, setSelectedMilkIndex] = useState(0)
    const [selectedMilk,setSelectedMilk]=useState('Full Cream')
    const [selectedSugarLevel, setselectedSugarLevel] = useState(0)
    const [selectedSweetnessLevel, setselectedSweetnessLevel] = useState(0)

    useEffect(() => {
        let { selectedItem } = route.params
        setSelectedItem(selectedItem)
    }, [])
  
    function assignMilk(){
       
        if (selectedMilkIndex===0){
           
            setSelectedMilk('Full Cream')
        }
        else if (selectedMilkIndex===1) {
      
            setSelectedMilk('Skim Milk')

        }  else if (selectedMilkIndex===2) {
        
            setSelectedMilk('Soy Milk')

        }    else if (selectedMilkIndex===3) {
            
            setSelectedMilk('Oat Milk')
        } 
        else {
            setSelectedMilk('Almond Milk')
        }
        console.log(selectedMilkIndex,selectedMilk)
   
 
    }

    function handleOrder(){
        let order=[`${selectedItem.name}`,`${selectedSize}`,`${selectedMilk}`,`${selectedSugarLevel}`,`${selectedSweetnessLevel}`]
        addCoffeeType({order})
        navigation.navigate('Rewards') //fix later!!!
    }
 
    function milkButtonHandler(action) {
   
        if (action == "next" && selectedMilkIndex < dummyData.milkList.length -1) {
            setSelectedMilkIndex(selectedMilkIndex + 1)
            let milk=dummyData.milkList[selectedMilkIndex].name
            setSelectedMilk(milk)
            console.log(selectedMilk,milk)
        } else if (action == "prev" && selectedMilkIndex > 0) {
          setSelectedMilkIndex(selectedMilkIndex - 1)  
          let milk=dummyData.milkList[selectedMilkIndex].name
            setSelectedMilk(milk)
        } 
    }

    function sweetnessLevelButtonHandler(action) {
        if (action == "+" && selectedSugarLevel < 10) {
            setselectedSugarLevel(selectedSugarLevel + 1)
        } else if (action == "-" && selectedSugarLevel > 0) {
            setselectedSugarLevel(selectedSugarLevel - 1)
        }
    }

    function iceLevelButtonHandler(action) {
        if (action == "+" && selectedSweetnessLevel < 10) {
            setselectedSweetnessLevel(selectedSweetnessLevel + 1)
        } else if (action == "-" && selectedSweetnessLevel > 0) {
            setselectedSweetnessLevel(selectedSweetnessLevel - 1)
        }
    }

    function renderHeaderSection() {
        return (
            <View
                style={{
                    width: "100%",
                    height: Platform.OS === 'ios' ? "55%" : "50%",
                    alignItems: 'center',
                    justifyContent: 'center'
                }}
            >
                <View
                    style={{
                        position: 'absolute',
                        top: 0,
                        bottom: 0,
                        right: 0,
                        left: 40,
                        borderBottomLeftRadius: 100,
                        backgroundColor: COLORS.primary
                    }}
                />

                <Image
                    source={selectedItem?.thumbnail}
                    resizeMode="contain"
                    style={{
                        width: SIZES.width * 0.7,
                        height: SIZES.width * 0.7
                    }}
                />

                {/* Back Button */}
                <IconButton
                    containerStyle={{
                        position: 'absolute',
                        top: 45,
                        left: 20,
                        padding: 10,
                        borderRadius: SIZES.radius,
                        backgroundColor: COLORS.black
                    }}
                    icon={icons.leftArrow}
                    onPress={() => navigation.goBack()}
                />
            </View>
        )
    }

    function renderDetailSection() {
        return (
            <View
                style={{
                    flex: 1,
                    paddingHorizontal: 30,
                    marginTop: SIZES.padding,
                    justifyContent: 'space-between'
                }}
            >
                {/* Name and Desc */}
                <View>
                    <Text
                        style={{
                            color: COLORS.yellow,
                            ...FONTS.h1,
                            fontSize: 25
                        }}
                    >
                        {selectedItem?.name}
                    </Text>
                    <Text
                        style={{
                            marginTop: SIZES.base,
                            color: COLORS.white,
                            ...FONTS.body3
                        }}
                    >
                        {selectedItem?.description}
                    </Text>
                </View>

                {/* Size */}
                <View
                    style={{
                        flexDirection: 'row',
                        alignItems: 'center',
                        marginTop: SIZES.radius
                    }}
                >
                    {/* Label */}
                    <Text
                        style={{
                            flex: 1,
                            color: COLORS.yellow,
                            ...FONTS.h2,
                            fontSize: 20
                        }}
                    >
                        Pick A Size
                    </Text>

                    {/* Cup */}
                    <View
                        style={{
                            flex: 1,
                            flexDirection: 'row'
                        }}
                    >
                        <TouchableOpacity
                            style={{
                                alignItems: 'center',
                                justifyContent: 'flex-end'
                            }}
                            onPress={() => setSelectedSize('Small')}
                        >
                            <ImageBackground
                                source={icons.coffee_cup}
                                style={{
                                    width: 80,
                                    height: 80,
                                    alignItems: 'center',
                                    justifyContent: 'center'
                                }}
                                imageStyle={{
                                    tintColor: selectedSize == 'Small' ? COLORS.primary : COLORS.gray2
                                }}
                            >
                                <Text style={{ color: COLORS.white, ...FONTS.body3 }}>Small</Text>
                            </ImageBackground>

                            <Text
                                style={{
                                    marginTop: 3,
                                    color: COLORS.white,
                                    ...FONTS.body3
                                }}
                            >
                                $4.50
                            </Text>
                        </TouchableOpacity>

                        <TouchableOpacity
                            style={{
                                alignItems: 'center',
                                justifyContent: 'flex-end'
                            }}
                            onPress={() => setSelectedSize('Large')}
                        >
                            <ImageBackground
                                source={icons.coffee_cup}
                                style={{
                                    width: 100,
                                    height: 100,
                                    alignItems: 'center',
                                    justifyContent: 'center'
                                }}
                                imageStyle={{
                                    tintColor: selectedSize == 'Large' ? COLORS.primary : COLORS.gray2
                                }}
                            >
                                <Text style={{ color: COLORS.white, ...FONTS.body3 }}>Large</Text>
                            </ImageBackground>

                            <Text
                                style={{
                                    marginTop: 3,
                                    color: COLORS.white,
                                    ...FONTS.body3
                                }}
                            >
                                $5.00
                            </Text>
                        </TouchableOpacity>
                    </View>
                </View>

                {/* Milk, Sweetness and Ice */}
                <View
                    style={{
                        flexDirection: 'row',
                        marginTop: SIZES.padding
                    }}
                >
                    {/* Milk */}
                    <View
                        style={{
                            flex: 1,
                            alignItems: 'center'
                        }}
                    >
                        <Text
                            style={{
                                color: COLORS.yellow,
                                ...FONTS.h2,
                                fontSize: 20
                            }}
                        >
                            Milk
                        </Text>

                        <View
                            style={{
                                flexDirection: 'row',
                                width: 100,
                                height: 100,
                                marginTop: SIZES.base,
                                alignItems: 'center',
                                borderRadius: SIZES.radius,
                                backgroundColor: COLORS.primary
                            }}
                        >
                            <IconButton
                                icon={icons.leftArrow}
                                containerStyle={{
                                    marginLeft: -15,
                                    width: 25,
                                    height: 25,
                                    borderRadius: 3,
                                    backgroundColor: COLORS.white,
                                    zIndex: 1
                                }}
                                iconStyle={{
                                    width: 15,
                                    height: 15,
                                    tintColor: COLORS.black
                                }}
                                onPress={( ) => milkButtonHandler("prev")}
                            />

                            <Image
                                source={dummyData.milkList[selectedMilkIndex].image}
                                resizeMode="contain"
                                style={{
                                    flex: 1,
                                    width: 70,
                                    height: 70,
                                    tintColor: COLORS.white
                                }}
                            />

                            <IconButton
                                icon={icons.rightArrow}
                                containerStyle={{
                                    marginRight: -15,
                                    width: 25,
                                    height: 25,
                                    borderRadius: 3,
                                    backgroundColor: COLORS.white,
                                    zIndex: 1
                                }}
                                iconStyle={{
                                    width: 15,
                                    height: 15,
                                    tintColor: COLORS.black
                                }}
                                onPress={( ) => milkButtonHandler("next")}
                            />
                        </View>

                        <Text
                            style={{
                                marginTop: SIZES.base,
                                color: COLORS.white,
                                ...FONTS.body3
                            }}
                        >
                            {dummyData.milkList[selectedMilkIndex].name}
                        </Text>
                    </View>

                    {/* Sweetness & Ice */}
                    <View
                        style={{
                            flex: 1
                        }}
                    >
                        {/* Sweetness */}
                        <View
                            style={{
                                flex: 1,
                                justifyContent: 'center',
                                paddingHorizontal: SIZES.padding
                            }}
                        >
                            <Text
                                style={{
                                    textAlign: 'center',
                                    color: COLORS.yellow,
                                    ...FONTS.h2,
                                    fontSize: 20
                                }}
                            >
                                Sugar
                            </Text>

                            <View
                                style={{
                                    flexDirection: 'row',
                                    alignItems: "center",
                                    justifyContent: "center",
                                    height: "60%",
                                    borderRadius: 15,
                                    backgroundColor: COLORS.primary
                                }}
                            >
                                <IconButton
                                    icon={icons.leftArrow}
                                    containerStyle={{
                                        marginLeft: -8,
                                        width: 25,
                                        height: 25,
                                        borderRadius: 3,
                                        backgroundColor: COLORS.white
                                    }}
                                    iconStyle={{
                                        width: 15,
                                        height: 15,
                                        tintColor: COLORS.black
                                    }}
                                    onPress={() => sweetnessLevelButtonHandler("-")}
                                />

                                <View
                                    style={{
                                        flex: 1,
                                        alignItems: 'center',
                                        justifyContent: 'center'
                                    }}
                                >
                                    <Text
                                        style={{
                                            color: COLORS.white,
                                            ...FONTS.h3
                                        }}
                                    >
                                        {selectedSugarLevel}
                                    </Text>
                                </View>

                                <IconButton
                                    icon={icons.rightArrow}
                                    containerStyle={{
                                        marginRight: -8,
                                        width: 25,
                                        height: 25,
                                        borderRadius: 3,
                                        backgroundColor: COLORS.white
                                    }}
                                    iconStyle={{
                                        width: 15,
                                        height: 15,
                                        tintColor: COLORS.black
                                    }}
                                    onPress={() => sweetnessLevelButtonHandler("+")}
                                />
                            </View>
                        </View>

                        {/* Ice */}
                        <View
                            style={{
                                flex: 1,
                                justifyContent: 'center',
                                paddingHorizontal: SIZES.padding
                            }}
                        >
                            <Text
                                style={{
                                    textAlign: 'center',
                                    color:COLORS.yellow,
                                    ...FONTS.h2,
                                    fontSize: 20
                                }}
                            >
                                Sweetener
                            </Text>

                            <View
                                style={{
                                    flexDirection: 'row',
                                    alignItems: "center",
                                    justifyContent: "center",
                                    height: "60%",
                                    borderRadius: 15,
                                    backgroundColor: COLORS.primary
                                }}
                            >
                                <IconButton
                                    icon={icons.leftArrow}
                                    containerStyle={{
                                        marginLeft: -8,
                                        width: 25,
                                        height: 25,
                                        borderRadius: 3,
                                        backgroundColor: COLORS.white
                                    }}
                                    iconStyle={{
                                        width: 15,
                                        height: 15,
                                        tintColor: COLORS.black
                                    }}
                                    onPress={() => iceLevelButtonHandler("-")}
                                />

                                <View
                                    style={{
                                        flex: 1,
                                        alignItems: 'center',
                                        justifyContent: 'center'
                                    }}
                                >
                                    <Text
                                        style={{
                                            color: COLORS.white,
                                            ...FONTS.h3
                                        }}
                                    >
                                        {selectedSweetnessLevel}
                                    </Text>
                                </View>

                                <IconButton
                                    icon={icons.rightArrow}
                                    containerStyle={{
                                        marginRight: -8,
                                        width: 25,
                                        height: 25,
                                        borderRadius: 3,
                                        backgroundColor: COLORS.white
                                    }}
                                    iconStyle={{
                                        width: 15,
                                        height: 15,
                                        tintColor: COLORS.black
                                    }}
                                    onPress={() => iceLevelButtonHandler("+")}
                                />
                            </View>
                        </View>
                    </View>
                </View>
            </View>
        )
    }

    return (
        <View style={{ flex: 1, backgroundColor: theme.colors.surface}}>
            <ScrollView
                contentContainerStyle={{
                    paddingBottom: 200
                }}
            >
                {/* Header Section */}
                {renderHeaderSection()}

                {/* Detail */}
                {renderDetailSection()}
                <Button
                 mode="outlined"
                 onPress={() =>handleOrder(navigation) }
               >Order</Button>
            <Text>{`${order.order}`}</Text>
            </ScrollView>

        </View>
    )
}
function mapStateToProps(state){
    const {order,token}=state
    return {order,token}
}

function mapDispatchToProps(dispatch){
    return{
       addCoffeeType:bindActionCreators(orderactionCreators.addCoffeeType,dispatch),
       
    }
}

export default connect(mapStateToProps,mapDispatchToProps )(OrderDetail);