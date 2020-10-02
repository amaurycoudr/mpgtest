import React, { FunctionComponent, useState } from 'react';
import { TextInput, StyleSheet, View } from 'react-native';
type NameInputProps = {
    filterName: Function;
};
const NameInput: FunctionComponent<NameInputProps> = ({ filterName }) => {
    const [inputName, setInputName] = useState('');

    const handleTextChange = (e: string) => {
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
