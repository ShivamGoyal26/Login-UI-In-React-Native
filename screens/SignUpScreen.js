import React, { useState } from 'react';
import {
    StyleSheet,
    Text,
    View,
    TextInput,
    StatusBar,
    TouchableOpacity,
} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import * as Animatable from 'react-native-animatable';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import Feather from 'react-native-vector-icons/Feather';

const SignUpScreen = props => {

    const [data, setData] = useState({
        email: '',
        password: '',
        confirmPassword: '',    
        check_textInputChange: false,
        secureTextEntry: true,
        confirm_secureTextEntry: true,
    });

    const textInputChange = (val) => {
        console.log("EMAIL FUNCTION DOING")
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
    const handlerConfirmPasswordChange = (val) => {
        setData({
            ...data,
            confirmPassword: val,
        });
    };

    

    const updateSecureTextEntry = () => {
        setData({
            ...data,
            secureTextEntry: !data.secureTextEntry,
        })
    };

    const updateConfirmSecureTextEntry = () => {
        setData({
            ...data,
            check_textInputChange: !data.check_textInputChange,
        })
    };

    return (
        <View style={styles.container}>
        <StatusBar barStyle = 'light-content'
        backgroundColor = "#C2185B"
         />
            <View style={styles.header}>
                <Text style={styles.text_header}>Register Now!</Text>
            </View>
            <Animatable.View 
            animation = 'fadeInUpBig'
            style={styles.footer}
            >

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

                {/* CONFIRM PASSWORD FIELD  */}

                <Text style={[styles.text_footer, { marginTop: 25 }]}>Confirm Password</Text>
                <View style={styles.action}>
                    <Feather
                        name='lock'
                        color='#05375a'
                        size={20}
                    />
                    <TextInput
                        style={styles.textInput}
                        secureTextEntry={data.confirm_secureTextEntry}
                        placeholder="Confirm Password"
                        autoCapitalize="none"
                        onChangeText={(val) => handlerConfirmPasswordChange(val)}
                    />
                    <TouchableOpacity
                        onPress={updateConfirmSecureTextEntry}
                    >
                        {data.confirm_secureTextEntry ?
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

                {/* SIGN IN BUTTON */}

                <View style={styles.button}>
                <TouchableOpacity style={styles.signIn}>
                    <LinearGradient
                        colors={['#C2185B', '#C2185B']}
                        style={styles.signIn}
                    >
                        <Text style={{ color: '#fff', fontSize: 18, fontWeight: 'bold' }}>Sign Up</Text>
                    </LinearGradient>
                    </TouchableOpacity>

                    {/* SIGN UP BUTTON */}

                    <TouchableOpacity
                        style={[styles.signIn, {
                            borderColor: '#C2185B',
                            borderWidth: 1,
                            marginTop: 15,
                        }]}
                        onPress={() => {
                            props.navigation.pop()
                        }}
                    >
                        <Text style={styles.textSign}>Sign In</Text>
                    </TouchableOpacity>
                </View>
            </Animatable.View>

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
    textSign: {
        fontSize: 18,
        fontWeight: 'bold',
        color: '#C2185B'
    },
});

export default SignUpScreen;