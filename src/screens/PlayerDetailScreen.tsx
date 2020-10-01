import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

const PlayerDetailScreen = ({ route }) => {
    const { id } = route.params;

    return (
        <View>
            <Text>the id of the player is {id}</Text>
        </View>
    );
};

export default PlayerDetailScreen;

const styles = StyleSheet.create({});
