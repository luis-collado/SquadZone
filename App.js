import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, Image, Button } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import Ionic from "react-native-vector-icons/Ionicons";
import {NavigationContainer} from "@react-navigation/native";
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { useFonts } from 'expo-font';
import Home from './src/components/screens/Home';
import News from './src/components/screens/News';
import Search from './src/components/screens/Search';
import Profile from './src/components/screens/Profile';


const App = () => {
  const [fontsLoaded] = useFonts({
    'CODE-Bold': require('./assets/fonts/CODE-Bold.otf'),
  });
  
  const Stack = createNativeStackNavigator();
  const Tab = createBottomTabNavigator();

  const BottomTabScreen = () => {
    return(
      <Tab.Navigator
      screenOptions={({route}) => ({
        tabBarShowLabel: false,
        headerShown: false,
        tabBarStyle:{
          height:50
        },

        tabBarIcon: ({focused, size, colour}) => {
          let iconName;
          if(route.name === "Home"){
            iconName= focused ? "home-sharp" : "home-outline";
            size = focused ? size + 8 : size + 2;
          }else if(route.name === "News"){
            iconName= focused ? "megaphone" : "ios-megaphone-outline";
          }else if(route.name === "Search"){
            iconName= focused ? "shield" : "ios-shield-outline";
          }else if(route.name === "Profile"){
            iconName= focused ? "person" : "ios-person-outline";
          }

          return <Ionic name={iconName} size={size} color={colour}/>
        }

      })}>
        <Tab.Screen name ="Home" component={Home}/>
        <Tab.Screen name ="News" component={News}/>
        <Tab.Screen name ="Search" component={Search}/>
        <Tab.Screen name ="Profile" component={Profile}/>

      </Tab.Navigator>
    )
  }

  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerShown: false,
        }}>
        <Stack.Screen name="Bottom" component={BottomTabScreen}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
};


export default App;
