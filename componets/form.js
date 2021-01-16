import React from 'react';
import { StyleSheet, View, Text, TextInput } from 'react-native';

const CustomForm = props => {
    return (
        <View>
            <Text>
                Hey there i am form
            </Text>
            <View>
            <TextInput
                style={styles.textField}
                placeholder="Type here to translate!"
                selectionColor = 'white'
                underlineColorAndroid = 'white'
                // onChangeText={text => setText(text)}
                // defaultValue={text}
            />
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    textField: { 
        height: 40, 
        padding: 25,
        // underlineColorAndroid: 'white',
        // selectionColor: '#428AF8',
        // underlineColorAndroid: '#428AF8'
        // color: 'white', 
        // backgroundColor: 'white'
    },
});

export default CustomForm;