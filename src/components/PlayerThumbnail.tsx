import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import PropTypes from 'prop-types';
import Divider from './Divider';
import { convertPositionShort } from '../helpers/conversion';

const PlayerThumbnail = ({ name, ultraPosition, club, navigate }) => {
    return (
        <View style={styles.thumbStyle}>
            <TouchableOpacity onPress={navigate}>
                <View style={styles.flexStyle}>
                    <View>
                        <Text style={styles.nameStyle}>{name}</Text>
                        <Text>{club}</Text>
                    </View>
                    <Text>{convertPositionShort(ultraPosition)}</Text>
                </View>
            </TouchableOpacity>
            <Divider />
        </View>
    );
};

export default PlayerThumbnail;

PlayerThumbnail.propTypes = {
    name: PropTypes.string.isRequired,
    ultraPosition: PropTypes.number.isRequired,
    club: PropTypes.string,
};
const styles = StyleSheet.create({
    nameStyle: {
        fontWeight: 'bold',
        fontSize: 16,
    },
    thumbStyle: {
        marginTop: 10,
        marginLeft: 20,
        marginRight: 20,
    },
    flexStyle: {
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
});
