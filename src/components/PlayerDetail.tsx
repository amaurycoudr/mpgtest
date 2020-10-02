import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { convertPositionFull } from '../helpers/conversion';
import { PlayerDetailType } from '../hooks/usePlayer';
import Divider from './Divider';

const PlayerDetail = ({ player }: { player: PlayerDetailType }) => {
    return (
        <View style={styles.playerStyle}>
            <View style={styles.headStyle}>
                <Text style={styles.titleStyle}>{player.name}</Text>
                <Text style={styles.titleStyle}>n°{player.jerseyNum}</Text>
            </View>
            <Divider />
            <View style={styles.sectionStyle}>
                <Text style={styles.textStyle}>{player.club}</Text>
                <Text style={styles.textStyle}>
                    {convertPositionFull(player.ultraPosition)}
                </Text>
            </View>

            <Text style={styles.textStyle}>
                Date de naissance :{' '}
                {player.birthDate.replace('-', '/').replace('-', '/')}
            </Text>
            <Text style={styles.textStyle}>
                Nombre de match : {player.nbMatch}
            </Text>
        </View>
    );
};

export default PlayerDetail;

const styles = StyleSheet.create({
    playerStyle: {
        marginTop: 40,
        marginLeft: 30,
        marginRight: 30,
    },
    headStyle: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginBottom: 10,
    },
    sectionStyle: {
        marginTop: 10,
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    textStyle: {
        fontSize: 20,
        marginBottom: 10,
    },
    titleStyle: { fontSize: 25, fontWeight: 'bold' },
});
