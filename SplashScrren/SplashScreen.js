import React from 'react';
import { StyleSheet, View, Text, Image, Dimensions, TouchableOpacity} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
// import Icon from 'react-native-vector-icons/MaterialIcons';

const height = Dimensions.get('screen');
const height_logo = height * 0.28;

const SplashScreen = props => {
    return (
            <View style={styles.splashScreen}>
            <View style={styles.header}>
            <Image
                    source={{ uri: 'https://banner.uclipart.com/20200111/ogl/shopping-sales-cafe-text-logo.png'}}
                    style={styles.logo}
                    resizeMode = 'stretch'
                />
            </View>
            <View style={styles.footer}>
                <Text style={styles.title}>Cool things are waiting for you!</Text>
                <Text style={styles.text}>Sign in With account</Text>
                <View style={styles.button}>
                <TouchableOpacity onPress={() => {
                    props.navigation.navigate('LoginScreen');
                }} >
                    <LinearGradient 
                    colors={['#C2185B', '#C2185B']}
                    style={styles.signIn}
                    >
                        <Text style={styles.textSign}>Get Started</Text>
                        {/* <Icon name='md-menu' size={26} color={'white'} /> */}
                    </LinearGradient>
                </TouchableOpacity>
                </View>
                
                
            </View>
               
            </View>
    );

};

const styles = StyleSheet.create({
    splashScreen: {
        backgroundColor: '#C2185B',
        flex: 1,
    },
    header: {
        flex: 2, 
        justifyContent: 'center',
        alignItems: 'center',
    },

    footer: {
        opacity: 0.9,
        flex: 1,
        backgroundColor: 'white',
        borderTopLeftRadius: 30,
        borderTopRightRadius: 30,
        paddingHorizontal: 30,
        paddingVertical: 50,
    },
    logo: {
        height: 100,
        width: 100,
    },
    title: {
        color: '#05375a',
        fontSize: 30,
        fontWeight: 'bold'
    },
    text: {
        color: 'grey',
        marginTop:5
    },
    signIn: {
        width: 150,
        height: 40,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 50,
        flexDirection: 'row'
    },
    button: {
        alignItems: 'flex-end',
        marginTop: 30,
    },
    textSign: {
        color: 'white',
        fontWeight: 'bold'
    },
    
});

export default SplashScreen;