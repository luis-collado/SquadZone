import React, { useState } from 'react';
import { View, TextInput, Button, Image, Text, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import Ionic from "react-native-vector-icons/Ionicons";

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigation = useNavigation();

  const handleSubmit = () => {
    // Send login credentials to backend for verification
    // If login is successful, navigate to the main screen
    navigation.navigate('Bottom');
  }

  const handleGoogleLogin = () => {
    // Perform login with Google
  }

  const handleAppleLogin = () => {
    // Perform login with Apple Id
  }

  return (
    <View style={{ flex: 1, justifyContent: 'center' }}>
        <View style={{ flex: 6, justifyContent: 'center' }}>
        <Image
            source={require('../../../assets/logo.png')}
            style={{ alignSelf: 'center', resizeMode: 'contain', width: '70%', height: '70%' }}
        />
        <Text style={{fontFamily: 'CODE-Bold', fontSize:40, fontWeight: '500', alignSelf: 'center'}}>
                    SQUAD Z<Ionic name='football-outline' style={{fontSize:40}}/>NE
        </Text>
        </View>
        
        <View style={{ flex: 5, justifyContent: 'center', marginBottom: 40}}>
        <TextInput
            placeholder="Email"
            value={email}
            onChangeText={text => setEmail(text)}
            style={{ borderRadius: 22, padding: 10, margin: 15, backgroundColor: '#333333' }}
        />
        <TextInput
            placeholder="Password"
            value={password}
            onChangeText={text => setPassword(text)}
            style={{ borderRadius: 22, padding: 10, margin: 15, backgroundColor: '#333333' }}
        />
        <TouchableOpacity
                onPress={handleSubmit}
                style={{ borderRadius: 22, backgroundColor: '#5EA780', margin: 10, fontFamily: 'CODE-Bold', fontSize:24, fontWeight: '500', padding: 10, alignItems: 'center'}}>
                <Text style={{fontFamily: 'CODE-Bold', fontSize:24, fontWeight: '500', padding: 10}}>SUBMIT</Text>
        </TouchableOpacity>

        <View style={{ flexDirection: 'row', alignSelf: 'center'}}>
            <TouchableOpacity
                onPress={handleGoogleLogin}
                style={{ borderRadius: 22, backgroundColor: '#5EA780', margin: 10, fontFamily: 'CODE-Bold', fontSize:24, fontWeight: '500', padding: 10 }}>
                <Text style={{fontFamily: 'CODE-Bold', fontSize:24, fontWeight: '500', padding: 10}}>Google</Text>
            </TouchableOpacity>
            <TouchableOpacity
                onPress={handleAppleLogin}
                style={{ borderRadius: 22, backgroundColor: '#5EA780', margin: 10, fontFamily: 'CODE-Bold', fontSize:24, fontWeight: '500', padding: 10 }}>
                <Text style={{fontFamily: 'CODE-Bold', fontSize:24, fontWeight: '500', padding: 10}}>Apple ID</Text>
            </TouchableOpacity>
        </View>
        </View>
    </View>
  );
};

export default Login;
