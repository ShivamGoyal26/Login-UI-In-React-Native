import React from 'react';
import { StyleSheet, Text, View, ImageBackground, Image, ScrollView } from 'react-native';

import CustomForm from '../componets/form';

const LoginScreen = props => {
    return (
        <View style={styles.loginScreen}>
            <ImageBackground style={styles.backgroundImage} source={{ uri: 'https://image.freepik.com/free-photo/cute-girl-with-shopping-bag-city_1157-21289.jpg' }}>

                <View style={styles.splashScreen}>

                    <View style={styles.loginAndSignUpButtons}>
                        <Text style={styles.actionText}>login</Text>
                        <Text style={styles.actionText}>Signup</Text>
                    </View>
                    {/* <ScrollView>
                    <View style={{flex: 1}}> */}
                    <View style={styles.imageContainer}>
                    <Image
                        source={{ uri: 'https://banner.uclipart.com/20200111/ogl/shopping-sales-cafe-text-logo.png'}}
                        style={styles.image}
                    />
                    <Text style={styles.titleText}>
                    New Walmart Store
                </Text>
                    </View>
                   <View style={styles.form}>
                        <CustomForm/>
                   </View>
                   {/* </View>
                   </ScrollView> */}
                </View>
            </ImageBackground>

        </View>
    );
};

const styles = StyleSheet.create({

    splashScreen: {
        flex: 1,
        backgroundColor: 'black',
        opacity: 0.4,

    },
    loginScreen: {
        flex: 1,
    },
    backgroundImage: {
        flex: 1,
    },
    loginAndSignUpButtons: {
        flexDirection: 'row',
        margin: 10,
        justifyContent: 'space-between'
    },
    actionText: {
        fontSize: 20,
        color: 'white',
    },
    image: {
        height: 100,
        width: 100,
    },
    imageContainer: {
        flex: 0.4,
        justifyContent: 'center',
        alignItems: 'center',
    },
    titleText: {
        fontSize: 18,
        textAlign: 'center',
        marginVertical: 15,
        color: '#ffffff',
    },
    form: {
        flex: 0.6,
        // backgroundColor: 'black',
    },
});

export default LoginScreen;