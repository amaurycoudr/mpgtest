import React, { useState } from 'react';
import { TextInput, StyleSheet, View } from 'react-native';
import Divider from './Divider';

const NameInput = ({ filterName }) => {
    const [inputName, setInputName] = useState('');
    const handleTextChange = (e) => {
        const name = e;
        setInputName(name);
        filterName(name);
    };
    return (
        <View style={styles.input}>
            <TextInput
                style={styles.inputText}
                placeholder="Nom Joueur"
                value={inputName}
                onChangeText={handleTextChange}
            />
        </View>
    );
};

export default NameInput;

const styles = StyleSheet.create({
    input: {
        margin: 20,
    },
    inputText: {
        fontSize: 20,
    },
});
