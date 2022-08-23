import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image, Button } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <Image
        source={require('./assets/logo.png')}
        style={{ width: 100, height: 100  }}
      />
      <Text></Text>
      <Button
        onPress={() => {
          alert('Signed In!');
        }}
        title="Sign in with Email"
        color='#5EA780'
      />
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
