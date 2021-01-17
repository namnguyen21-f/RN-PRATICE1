import React from 'react';
import {
    SafeAreaView,View,Text,StyleSheet,
    TouchableOpacity,Image,FlatList
} from 'react-native';

import {icons, images, SIZES, COLORS, FONTS} from '../constant/index';
import {initialCurrentLocation,restaurantData,categoryData} from '../data';

const Home = ({navigation}) => {
    return (
        <View style={styles.container}>
            <Text>dsidj</Text>
        </View>
       
    )
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
    },
  });

export default Home;