import React from 'react';
import {StyleSheet, View, Text} from 'react-native';

const SignUpScreen = props => {
    return(
        <View style={styles.signUpScreen}>
            <Text>Sign Up Scrren</Text>
        </View>
    );
};

const styles = StyleSheet.create({
    signUpScreen: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
});

export default SignUpScreen;