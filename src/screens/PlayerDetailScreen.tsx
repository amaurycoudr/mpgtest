import React, { FunctionComponent } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { RouteProp } from '@react-navigation/native';
import { RootParamList } from './PlayersScreen';
import usePlayer from '../hooks/usePlayer';
import ErrorText from '../components/ErrorText';
import PlayerDetail from '../components/PlayerDetail';
type PlayerDetailScreenProp = { route: RouteProp<RootParamList, 'Player'> };
const PlayerDetailScreen: FunctionComponent<PlayerDetailScreenProp> = ({
    route,
}) => {
    const player = usePlayer(route.params.id);
    return (
        <View>
            {player.ultraPosition > 0 ? (
                <PlayerDetail player={player} />
            ) : (
                <ErrorText text=" patiente un peu .." />
            )}
        </View>
    );
};

export default PlayerDetailScreen;

const styles = StyleSheet.create({});
