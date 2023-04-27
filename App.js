import react from 'react';
import {NavigationContainer} from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack';

import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import OnboadingScreen from './src/screen/OnboardingScreen';
import LoginScreen from './src/screen/LoginScreen';

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer >
        <Stack.Navigator style={styles.container}>
        <Stack.Screen name="SPY" component={OnboadingScreen} />
        <Stack.Screen name="Login" component={LoginScreen} />
        
        </Stack.Navigator>  
    </NavigationContainer>
 
  );
};




const styles = StyleSheet.create({
  container: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-around',
    alignItems: 'center',
    height: '100%',
    textAlign: 'center',
    
  },
});