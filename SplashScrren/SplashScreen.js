import React from 'react';
import { StyleSheet, View, Text } from 'react-native';

import LinearGradient from 'react-native-linear-gradient';

const SplashScreen = props => {
    return (

        <LinearGradient colors={['#4c669f', '#3b5998', '#192f6a']} style={styles.linearGradient}>
            <Text style={styles.buttonText}>
                Sign in with Facebook
  </Text>
        </LinearGradient>
        //     <View style={styles.splashScreen}>
        //     <Text> Splash Screen Yo An</Text>
        // </View>
    );

};

const styles = StyleSheet.create({
    // splashScreen: {
    //     flex: 1,
    //     backgroundColor: 'black'
    // }
    linearGradient: {
        flex: 1,
        paddingLeft: 15,
        paddingRight: 15,
        borderRadius: 5
      },
      buttonText: {
        fontSize: 18,
        fontFamily: 'Gill Sans',
        textAlign: 'center',
        margin: 10,
        color: '#ffffff',
        backgroundColor: 'transparent',
      },
});

export default SplashScreen;