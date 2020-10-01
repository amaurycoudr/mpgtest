import React from 'react';
import { StyleSheet, View } from 'react-native';

const Divider = () => {
    return <View style={styles.dividerStyle} />;
};

export default Divider;

const styles = StyleSheet.create({
    dividerStyle: {
        borderBottomColor: '#D3D3D3',
        borderBottomWidth: 2,
        marginRight: 10,
        marginLeft: 10,
        marginTop: 5,
    },
});
