import React from 'react';
import { StyleSheet, View, Text, Image} from 'react-native';

import LinearGradient from 'react-native-linear-gradient';

const SplashScreen = props => {
    return (

        <LinearGradient colors={['#C2185B', '#ffffff']} style={styles.linearGradient}>
            <View style={styles.splashScreen}>
                <Image
                    source={{ uri: 'https://i.pinimg.com/originals/12/b0/7d/12b07d7d7dbde76a3a687552d50d397f.png'}}
                    style={styles.image}
                />
                <Text style={styles.titleText}>
                    New Walmart Store
                </Text>
                <Text style={styles.subTitleText}>
                    Buy whatever you want to buy, Cool Things are Waiting!
                </Text>
            </View>
        </LinearGradient>
    );

};

const styles = StyleSheet.create({
    splashScreen: {
        flex: 1,
        justifyContent: 'center',
        alignContent: 'center',
        alignItems: 'center',
    },
    linearGradient: {
        flex: 1,
        paddingLeft: 15,
        paddingRight: 15,
        borderRadius: 5
    },
    titleText: {
        fontSize: 25,
        textAlign: 'center',
        marginVertical: 15,
        color: '#ffffff',
    },
    image: {
        height: 100,
        width: 100,
    },
    subTitleText: {
        width: 250,
        fontSize: 15,
        textAlign: 'center',
        marginVertical: 0,
        color: '#ffffff',
    }
});

export default SplashScreen;