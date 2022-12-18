import { View, Text, StatusBar, TouchableOpacity, Linking  } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import Ionic from "react-native-vector-icons/Ionicons";

const mapButton = () => {
    const latitude = 37.78825;
    const longitude = -122.4324;
    const url = `https://www.google.com/maps/search/?api=1&query=${latitude},${longitude}`;
  
    Linking.openURL(url).catch((err) => console.error('An error occurred', err));
  };

const Home = () => {
  return (
    <SafeAreaView>
        <View style={{backgroundColor: 'white', height: '100%'}}>
            <StatusBar backgroundColor='white' barStyle='dark-content' animated={true}/>
            <View style={{
                justifyContent: 'space-between',
                flexDirection:'row',
                paddingHorizontal: 15,
                paddingTop: 15,
                alignItems: 'center'
            }}>
                <Ionic name='add' style={{fontSize:32}}/>
                <Text style={{fontFamily: 'CODE-Bold', fontSize:24, fontWeight: '500'}}>
                    SQUAD Z<Ionic name='football-outline' style={{fontSize:23}}/>NE
                </Text>
                <TouchableOpacity
                    onPress={mapButton}>
                    <Ionic name='map-sharp' style={{fontSize:25}}/>
                </TouchableOpacity>
            </View>
        </View>
    </SafeAreaView>
  )
}

export default Home