import React from 'react';
import {
    View,
    Text,
    TouchableWithoutFeedback,
    Image,
    FlatList,
    StyleSheet,
    Platform
} from 'react-native';

import { dummyData, FONTS, COLORS, SIZES } from "../constants";
import { IconButton, TabButton, VerticalTextButton } from "../components";
 
 
import { connect } from "react-redux";
//import HeaderBar from '../components/HeaderBar'
import { theme } from '../core/theme'
// onPress={() => setSelectedCategory("Coffee")}


const Order = ({ navigation, appTheme,backgroundColor,name}) => {

    const [selectedLocation, setSelectedLocation] = React.useState(null)//not in use
    const [selectedTab, setSelectedTab] = React.useState(0)
    const [selectedCategory, setSelectedCategory] = React.useState("Coffee")
    const [menu, setMenu] = React.useState(null)
 
 console.log('appTheme',appTheme)

    React.useEffect(() => {
        let menuList = dummyData.menuList.filter(menuItem => menuItem.category == selectedCategory)
        setMenu(menuList)
    }, [selectedCategory])

  function handleSelectedCoffee(item){
   
    setSelectedCategory("Coffee")
    navigation.navigate("OrderDetail", { selectedItem: item })
 } 

    function renderTopTabBarSection() {
        
        return (
            <View
                style={{
                    flexDirection: 'row',
                    height: 50,
                    marginTop: 40,//SIZES.radius,
                    justifyContent: 'center',
                    paddingLeft: SIZES.padding * 2,
                    paddingRight: SIZES.padding
                }}
            >
                {/* Tab buttons */}
                <View
                    style={{
                        flex: 1,
                        flexDirection: 'row'
                    }}
                >
                    <TabButton
                        containerStyle={{
                            width: 60
                        }}
                        label="Menu"
                        selected={selectedTab == 0}
                        onPress={() => setSelectedTab(0)}
                    />

                    <TabButton
                        containerStyle={{
                            width: 90
                        }}
                        label="Previous"
                        selected={selectedTab == 1}
                        onPress={() => setSelectedTab(1)}
                    />

                    <TabButton
                        containerStyle={{
                            width: 90
                        }}
                        label="Favourite"
                        selected={selectedTab == 2}
                        onPress={() => setSelectedTab(2)}
                    />
                </View>

                {/* Order Number */}
                <View
                    style={{
                        width: 35,
                        height: 35,
                        borderRadius: 10,
                        alignItems: "center",
                        justifyContent: 'center',
                        backgroundColor: COLORS.primary
                    }}
                >
                    <Text style={{ color: COLORS.white, ...FONTS.h3 }}>0</Text>
                </View>
            </View>
        )
    }
   
        return (

        <View style={styles.container}>
        {/* Header */}
        {/*renderHeaderSection()*/}
       
    

             <View
    
            style={{
                flex: 1,
                backgroundColor: theme.colors.surface,
                marginTop: -1,
                borderTopLeftRadius: 40,
                borderTopRightRadius: 40
            }}
        >
 
                        {/* Tab Bar */}
            {renderTopTabBarSection()}

            {/* Side Bar & Listing */}
            <View
                style={{
                    flex: 1,
                    flexDirection: 'row'
                }}
            >
                {/* Side Bar */}
                {/* {renderSideBar()} */}

                {/* Listing */}
                <FlatList
                    contentContainerStyle={{
                        marginTop: SIZES.padding,
                        paddingBottom: 50
                    }}
                    data={menu}
                    keyExtractor={item => item.id}
                    renderItem={({ item, index }) => {
                        return (
                            <TouchableWithoutFeedback
                                onPress={() => handleSelectedCoffee(item)}
                            >
                                <View
                                    style={{
                                        height: 150,
                                        paddingHorizontal: SIZES.padding,
                                        marginTop: index > 0 ? SIZES.padding : 0,
                                        alignItems: 'flex-end',
                                        justifyContent: 'flex-end'
                                    }}
                                >
                                    {/* Thumbnail */}
                                    <View
                                        style={{
                                            position: 'absolute',
                                            top: 0,
                                            left: SIZES.padding,
                                            width: 130,
                                            height: 140,
                                            alignItems: 'center',
                                            justifyContent: 'center',
                                            borderRadius: SIZES.radius,
                                            backgroundColor: COLORS.lightYellow,
                                            zIndex: 1
                                        }}
                                    >
                                        <Image
                                            source={item.thumbnail}
                                            resizeMode="contain"
                                            style={{
                                                width: 100,
                                                height: 100
                                            }}
                                        />
                                    </View>

                                    {/* Details */}
                                    <View
                                        style={{
                                            width: "70%",
                                            height: "85%",
                                            paddingLeft: Platform.OS === 'ios' ? "22%" : "25%",
                                            paddingRight: SIZES.base,
                                            paddingVertical: SIZES.base,
                                            borderRadius: SIZES.radius,
                                            justifyContent: 'space-between',
                                            backgroundColor: COLORS.primary
                                        }}
                                    >
                                        <Text
                                            style={{
                                                color: COLORS.white,
                                                ...FONTS.h2,
                                                fontSize: Platform.OS === 'ios' ? 18 : 16,
                                                lineHeight: 25
                                            }}>
                                            {item.name}
                                        </Text>

                                        <Text
                                            style={{
                                                color: COLORS.lightYellow,
                                                ...FONTS.h2,
                                                fontSize: Platform.OS === 'ios' ? 18 : 16
                                            }}
                                        >
                                            {item.price}
                                        </Text>
                                    </View>
                                </View>
                            </TouchableWithoutFeedback>
                        )
                    }}
                />
            </View>
   
        </View>
   


        {/* Detail */}
    
  
    </View>

        )
    
    
}
 
   

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    scrolViewStyle:{
        flex:1,
        marginTop:-25,
        borderBottomLeftRadius:SIZES.radius*2,
        borderTopRightRadius:SIZES.radius*2,
        backgroundColor:theme.colors.surface,
    }
})

// function mapStateToProps(state) {
//     return {
//         appTheme: state.appTheme,
//         backgroundColor:state.backgroundColor,
//         error: state.error
//     }
// }

function mapStateToProps(state){
    const {appTheme,order,token,backgroundColor,name}=state
    return {appTheme,order,token,backgroundColor,name}
}

//check removing this later
function mapDispatchToProps(dispatch) {
    
    return {
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Order);