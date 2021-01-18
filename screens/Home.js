import React from 'react';
import {
    SafeAreaView,View,Text,StyleSheet,
    TouchableOpacity,Image,FlatList
} from 'react-native';

import {icons, images, SIZES, COLORS, FONTS} from '../constant/index';
import {initialCurrentLocation,restaurantData,categoryData} from '../data';
const Home = ({navigation}) => {    
    const [categories, setCategories] = React.useState(categoryData)
    const [selectedCategory, setSelectedCategory] = React.useState(null)
    const [restaurants, setRestaurants] = React.useState(null)
    const [currentLocation, setCurrentLocation] = React.useState(initialCurrentLocation)

    React.useEffect(() => {
        setSelectedCategory(categoryData[0]);
        setRestaurants(getMenuByCategory(categoryData[0].id));
    })

    function renderHeader(){
        return (
            <View style={{width: "100%",flexDirection: "row",height: 50,
                justifyContent: "space-between",alignItems: "center"}}>
                <TouchableOpacity
                    style={{
                        width: 50,
                        paddingLeft: SIZES.padding * 2,
                        justifyContent: 'center'
                    }}
                >
                    <Image
                        source={icons.nearby}
                        resizeMode="contain"
                        style={{
                            width: 30,
                            height: 30
                        }}
                    />
                </TouchableOpacity>
    
                <View style={{justifyContent: "center",alignItems: "center", width: "60%",
                    paddingVertical: SIZES.padding, backgroundColor: COLORS.lightGray3,borderRadius: 25}}>
                    <Text style={{...FONTS.h3}}>{currentLocation.streetName}</Text>
                </View>
    
                <TouchableOpacity
                    style={{
                        width: 50,
                        paddingRight: SIZES.padding * 2,
                        justifyContent: 'center'
                    }}
                >
                    <Image
                        source={icons.basket}
                        resizeMode="contain"
                        style={{
                            width: 30,
                            height: 30
                        }}
                    />
                </TouchableOpacity>
            </View>
        )
    }

    function renderCategories(){
        
        const renderItem = ({item}) =>{
            return (
                <TouchableOpacity style={{
                    padding: SIZES.padding,
                    paddingVertical: SIZES.padding * 2,
                    borderRadius: 30,
                    backgroundColor: selectedCategory?.id == item.id ? COLORS.primary : COLORS.secondary,
                    alignItems: "center",
                    justifyContent: "center",
                    marginRight: SIZES.padding,
                    ...styles.shadow
                }} onPress={() => HandlePress(item)}>
                    <View style={{width: 60,height: 60,borderRadius: 30,
                        backgroundColor: selectedCategory?.id == item.id ? COLORS.white : COLORS.lightGray2,
                        alignItems: "center",justifyContent: "center",}}>
                        <Image resizeMode= "contain" source={item.icon} style={{
                            width: 30,
                            height: 30
                        }}></Image>
                    </View>
                    <Text style={{...FONTS.body5,
                        color: selectedCategory?.id == item.id ? COLORS.white : COLORS.white
                        }}>{item.name}
                    </Text>
                </TouchableOpacity>
            )
        }
        return (
            <View style={{ padding: SIZES.padding * 2 }}>
                <Text style={{ ...FONTS.h1 }}>Main</Text>
                <Text style={{ ...FONTS.h1 }}>Categories</Text>
                <FlatList
                    data={categories}
                    keyExtractor={item => `${item.id}`}
                    horizontal
                    showsHorizontalScrollIndicator = {false}
                    renderItem= {renderItem}
                    contentContainerStyle= {{paddingVertical: SIZES.padding * 2}}
                >
                </FlatList>
            </View>
        )
    }

    const HandlePress = (item) =>{
        setSelectedCategory(item);
        setRestaurants(getMenuByCategory(item.id));
    }

    function getCategoryNameById(categoryId){
        let rs = categoryData.filter((item) => item.id == categoryId);
        if (rs.length > 0){
            return rs[0].name
        }
        return "";
    }

    function getMenuByCategory(categoryId){
        let rs = restaurantData.filter((item) => item.categories.includes(categoryId));
        return rs
    }

    function renderMainMenu(){
        const renderItem = ({item}) =>{
            return (
                <TouchableOpacity style={{width: "100%",paddingBottom: SIZES.padding}}>
                    <View>
                        <Image
                            source={item.photo}
                            resizeMode="cover"
                            style={{
                                width: "100%",
                                height: 200,
                                borderRadius: SIZES.radius
                            }}
                        />
                    </View>
                    <View style={{ width: "100%",paddingVertical: SIZES.padding,}}>
                        <Text style={{ ...FONTS.body2 }}>{item.name}</Text>
                        <View style={{ flexDirection: 'row',alignItems:"center"}}>
                            <View style={{ flexDirection: 'row' ,alignItems:"center", marginRight: 8}}>
                                <Image
                                    source={icons.star}
                                    style={{
                                        height: 18,
                                        width: 18,
                                        tintColor: COLORS.primary,
                                        marginRight: 8
                                    }}
                                />
                                <Text style={{ ...FONTS.body3 }}>{item.rating}</Text>
                            </View>
                            {
                                item.categories.map((categoryId) => {
                                    return (
                                        <View
                                            style={{ flexDirection: 'row' }}
                                            key={categoryId}
                                        >
                                            <Text style={{ ...FONTS.body3 }}>{getCategoryNameById(categoryId)}</Text>
                                            <Text style={{ ...FONTS.h3, color: COLORS.darkgray ,fontSize: 26
                                            ,marginTop: -2}}> . </Text>
                                        </View>
                                    )
                                })
                            }
                        </View>
                    </View>
                </TouchableOpacity>
            )
        }
        return (
            <View>
                <FlatList
                    data={restaurants}
                    keyExtractor={(item) => `${item.id}`}
                    renderItem={renderItem}
                    contentContainerStyle={{paddingHorizontal : SIZES.padding * 2,paddingBottom: 50,height: "auto"}}
                ></FlatList>
            </View>
        )
    }
    
    return (
        <View style={styles.container}>
            {renderHeader()}
            {renderCategories()}
            {renderMainMenu()}
        </View>
       
    )
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      marginTop: 30,
      backgroundColor: '#fff',
      marginBottom: 0,
    },
    shadow: {
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 3,
        },
        shadowOpacity: 0.1,
        shadowRadius: 3,
        elevation: 1,
    }
  });

export default Home;