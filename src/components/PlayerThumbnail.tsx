import React, { FunctionComponent } from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import PropTypes from 'prop-types';
import Divider from './Divider';
import { convertPositionShort } from '../helpers/conversion';
type PlayerThumbnailProp = {
    name: string;
    ultraPosition: number;
    club: string;
    navigate(): void;
};
const PlayerThumbnail: FunctionComponent<PlayerThumbnailProp> = ({
    name,
    ultraPosition,
    club,
    navigate,
}) => {
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
