import React from 'react';
import {
    View,Image, TouchableOpacity
} from 'react-native'

import {createBottomTabNavigator,BottomTabBar} from '@react-navigation/bottom-tabs';

import Home from '../screens/Home';
import Svg, {Path} from 'react-native-svg';
import {COLORS,icons} from "../constant"

const Tab =  createBottomTabNavigator();

const TabBarCustomButton = ({accessibilityState,children,onPress}) =>{
    var isSelected = accessibilityState.isSelected;
    if (isSelected){
        return (
            <View style={{flex: 1,alignItems: "center",height: 50}}>
                <View style={{flex: 1,position: "absolute",top: 0,left: 0,
                    flexDirection: "row"}}>
                    <View style={{flex: 1,backgroundColor: COLORS.white}}></View>
                    <Svg
                        width={75}
                        height={61}
                        viewBox="0 0 75 61"
                    >
                        <Path
                            d="M75.2 0v61H0V0c4.1 0 7.4 3.1 7.9 7.1C10 21.7 22.5 33 37.7 33c15.2 0 27.7-11.3 29.7-25.9.5-4 3.9-7.1 7.9-7.1h-.1z"
                            fill={COLORS.white}
                        />
                    </Svg>
                    <View style={{ flex: 1, backgroundColor: COLORS.white }}></View>
                </View>
                <TouchableOpacity style={{flex: 1,alignItems: "center",height: 50,justifyContent: "center"}}
                    onPress={onPress}>
                        {children}
                </TouchableOpacity>
            </View>
        )
    }else{
        return (
            <TouchableOpacity style={{flex: 1,alignItems: "center",height: 50,justifyContent: "center"}}
                onPress={onPress}>
                {children}
            </TouchableOpacity>
        )
    }
}

const Tabs = () =>{
    return (
        <Tab.Navigator tabBarOptions={{
            showLabel: false,
            style: {backgroundColor: "transparent",borderTopWidth: 0,elevation: 0,height: 50,flexDirection: "row"}
        }}>
            <Tab.Screen name="Home" component={Home} 
                options={{tabBarIcon: ({focused}) =>(
                    <Image source={icons.cutlery} resizeMode="contain" 
                    style={{width: 25,height:25,tintColor: focused ? COLORS.primary : COLORS.secondary}}>
                    </Image>
                ),
                tabBarButton: (props) => (
                    <TabBarCustomButton {...props}/>
                )
                }} />
            <Tab.Screen name="Search" component={Home} options={{tabBarIcon: ({focused}) =>(
                <Image source={icons.search} resizeMode="contain" 
                style={{width: 25,height:25,tintColor: focused ? COLORS.primary : COLORS.secondary}}>
                    
                </Image>
                ),
                tabBarButton: (props) => (
                    <TabBarCustomButton {...props}/>
                )
                }} /> 
            <Tab.Screen name="Like" component={Home} options={{tabBarIcon: ({focused}) =>(
                <Image source={icons.like} resizeMode="contain" 
                style={{width: 25,height:25,tintColor: focused ? COLORS.primary : COLORS.secondary}}>
                    
                </Image>
                ),
                tabBarButton: (props) => (
                    <TabBarCustomButton {...props}/>
                )
                }} /> 
            <Tab.Screen name="User" component={Home} options={{tabBarIcon: ({focused}) =>(
                <Image source={icons.user} resizeMode="contain" 
                style={{width: 25,height:25,tintColor: focused ? COLORS.primary : COLORS.secondary}}>
                    
                </Image>
                ),
                tabBarButton: (props) => (
                    <TabBarCustomButton {...props}/>
                )
                }} />  
        </Tab.Navigator>
    )
}

export default Tabs;