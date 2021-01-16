import React, { useState } from 'react';
import {
    StyleSheet,
    Text,
    View,
    TextInput,
    ImageBackground,
    Image,
    Button,
    TouchableOpacity,
    BackHandler,
} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import * as Animatable from 'react-native-animatable';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import Feather from 'react-native-vector-icons/Feather';

const LoginScreen = props => {

    const [data, setData] = useState({
        email: '',
        password: '',
        check_textInputChange: false,
        secureTextEntry: true,
    });

    const textInputChange = (val) => {
        if (val.length !== 0) {
            setData({
                ...data,
                email: val,
                check_textInputChange: true,
            });
        }
        else {
            setData({
                ...data,
                email: val,
                check_textInputChange: false
            });
        }
    };

    const handlerPasswordChange = (val) => {
        setData({
            ...data,
            password: val,
        });
    };

    const updateSecureTextEntry = () => {
        setData({
            ...data,
            secureTextEntry: !data.secureTextEntry,
        })
    };

    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <Text style={styles.text_header}>Welcome!</Text>
            </View>
            <View style={styles.footer}>

                {/* EMAIL FEILD  */}

                <Text style={styles.text_footer}>Email</Text>
                <View style={styles.action}>
                    <FontAwesome
                        name='user-o'
                        color='#05375a'
                        size={20}
                    />
                    <TextInput
                        style={styles.textInput}
                        placeholder="Your Email"
                        autoCapitalize="none"
                        onChangeText={(val) => textInputChange(val)}
                    />
                    {data.check_textInputChange ?
                        <Animatable.View
                            animation='bounceIn'
                        >
                            <Feather
                                name="check-circle"
                                color='#C2185B'
                                size={20}
                            />
                        </Animatable.View>

                        : null}
                </View>

                {/* PASSWORD FIELD */}

                <Text style={[styles.text_footer, { marginTop: 25 }]}>Password</Text>
                <View style={styles.action}>
                    <Feather
                        name='lock'
                        color='#05375a'
                        size={20}
                    />
                    <TextInput
                        style={styles.textInput}
                        secureTextEntry={data.secureTextEntry}
                        placeholder="Your Password"
                        autoCapitalize="none"
                        onChangeText={(val) => handlerPasswordChange(val)}
                    />
                    <TouchableOpacity
                        onPress={updateSecureTextEntry}
                    >
                        {data.secureTextEntry ?
                            <Feather
                                name="eye-off"
                                color='#C2185B'
                                size={20}
                            />
                            :
                            <Feather
                                name="eye"
                                color="#C2185B"
                                size={20}
                            />
                        }
                    </TouchableOpacity>
                </View>
                <View style={styles.button}>
                    <LinearGradient
                        colors={['#C2185B', '#C2185B']}
                        style={styles.signIn}
                    >
                        <Text style={{ color: '#fff', fontSize: 18, fontWeight: 'bold' }}>Sign In</Text>
                    </LinearGradient>
                    <TouchableOpacity
                        style={styles.signIn}
                        onPress={() => {
                            props.navigation.navigate('SignUpScreen')
                        }}
                    >
                        <Text>Sign Up</Text>
                    </TouchableOpacity>
                </View>
            </View>

        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#C2185B'
    },
    header: {
        flex: 1,
        justifyContent: 'flex-end',
        paddingHorizontal: 20,
        paddingBottom: 50
    },
    footer: {
        flex: 4,
        backgroundColor: '#fff',
        borderTopLeftRadius: 30,
        borderTopRightRadius: 30,
        paddingHorizontal: 20,
        paddingVertical: 30
    },
    text_header: {
        color: '#fff',
        fontWeight: 'bold',
        fontSize: 30
    },
    text_footer: {
        color: '#05375a',
        fontSize: 18
    },
    action: {
        flexDirection: 'row',
        marginTop: 10,
        borderBottomWidth: 1,
        borderBottomColor: '#f2f2f2',
        paddingBottom: 0,
    },
    textInput: {
        flex: 1,
        marginTop: Platform.OS === 'ios' ? 0 : -12,
        paddingLeft: 10,
        color: '#C2185B',
    },
    button: {
        alignItems: 'center',
        marginTop: 50
    },
    signIn: {
        width: '100%',
        height: 50,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 10
    },
});

// const LoginScreen = props => {
// return (
//         <View style={styles.loginScreen}>
//             <ImageBackground style={styles.backgroundImage} source={{ uri: 'https://image.freepik.com/free-photo/cute-girl-with-shopping-bag-city_1157-21289.jpg' }}>

//                 <View style={styles.splashScreen}>

//                     <View style={styles.loginAndSignUpButtons}>
//                         <Text style={styles.actionText}>login</Text>
//                         <Text style={styles.actionText}>Signup</Text>
//                     </View>
//                     {/* <ScrollView>
//                     <View style={{flex: 1}}> */}
//                     <View style={styles.imageContainer}>
//                     <Image
//                         source={{ uri: 'https://banner.uclipart.com/20200111/ogl/shopping-sales-cafe-text-logo.png'}}
//                         style={styles.image}
//                     />
//                     <Text style={styles.titleText}>
//                     New Walmart Store
//                 </Text>
//                     </View>
//                    <View style={styles.form}>
//                         <CustomForm/>
//                    </View>
//                    {/* </View>
//                    </ScrollView> */}
//                 </View>
//             </ImageBackground>

//         </View>
//     );
// };

// const styles = StyleSheet.create({

//     splashScreen: {
//         flex: 1,
//         backgroundColor: 'black',
//         opacity: 0.4,

//     },
//     loginScreen: {
//         flex: 1,
//     },
//     backgroundImage: {
//         flex: 1,
//     },
//     loginAndSignUpButtons: {
//         flexDirection: 'row',
//         margin: 10,
//         justifyContent: 'space-between'
//     },
//     actionText: {
//         fontSize: 20,
//         color: 'white',
//     },
//     image: {
//         height: 100,
//         width: 100,
//     },
//     imageContainer: {
//         flex: 0.4,
//         justifyContent: 'center',
//         alignItems: 'center',
//     },
//     titleText: {
//         fontSize: 18,
//         textAlign: 'center',
//         marginVertical: 15,
//         color: '#ffffff',
//     },
//     form: {
//         flex: 0.6,
//         // backgroundColor: 'black',
//     },
// });

export default LoginScreen;