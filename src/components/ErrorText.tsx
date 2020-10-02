import React, { FunctionComponent } from 'react';
import { StyleSheet, Text, View } from 'react-native';
type ErrorProps = {
    text: string;
};
const ErrorText: FunctionComponent<ErrorProps> = ({ text }) => {
    return (
        <View>
            <Text style={styles.errorStyle}>{text}</Text>
        </View>
    );
};

export default ErrorText;

const styles = StyleSheet.create({
    errorStyle: {
        fontSize: 20,
        fontWeight: 'bold',
        margin: 20,
        textAlign: 'center',
    },
});
