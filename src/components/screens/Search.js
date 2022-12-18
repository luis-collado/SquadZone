import { View, Text, StatusBar, TouchableOpacity } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import Ionic from "react-native-vector-icons/Ionicons";

const searchButton = () => {
    // SearchButton
  }

const Search = () => {
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
                    onPress={searchButton}>
                    <Ionic name='search' style={{fontSize:25}}/>
                </TouchableOpacity>
                
            </View>
        </View>
    </SafeAreaView>
  )
}

export default Search