import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import SplashScreen from '../SplashScrren/SplashScreen';
import LoginScreen from '../screens/LoginScreen';
import SignUpScreen from '../screens/SignUpScreen';

const Stack = createStackNavigator();

const RootStackScreen = () => {
    return (
        <NavigationContainer>
            <Stack.Navigator>
                <Stack.Screen name="Splash Screen" component={SplashScreen} options={{ headerShown: false }} />
                <Stack.Screen name="Login Screen" component={LoginScreen} options={{ headerShown: false }} />
                <Stack.Screen name="SignUp Screen" component={SignUpScreen} options={{ headerShown: false }} />
            </Stack.Navigator>
        </NavigationContainer>
    );
};

export default RootStackScreen;