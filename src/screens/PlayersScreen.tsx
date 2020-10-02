import React, { FunctionComponent, useEffect, useState } from 'react';
import { StackNavigationProp } from '@react-navigation/stack';
import { PlayerType } from '../hooks/usePlayers';
import { FlatList, View } from 'react-native';
import { clubs, positions } from '../helpers/const';
import Divider from '../components/Divider';
import ListFilter from '../components/ListFilter';
import NameInput from '../components/NameInput';
import PlayerThumbnail from '../components/PlayerThumbnail';
import ErrorText from '../components/ErrorText';
import { usePlayers } from '../hooks/usePlayers';
import { convertClub, convertPositionShort } from '../helpers/conversion';

export type RootParamList = {
    Player: { id: number };
};
type PlayersScreenProps = {
    navigation: StackNavigationProp<RootParamList, 'Player'>;
};

const PlayersScreen: FunctionComponent<PlayersScreenProps> = ({
    navigation,
}) => {
    const {
        state,
        filterName,
        filterPosition,
        filterClub,
        filterError,
    } = usePlayers();
    const init: Array<PlayerType> = [];
    const { players, club, position, name, errorMessage } = state;
    const [playersShowed, setPlayersShowed] = useState(init);
    useEffect(() => {
        let result = players;
        if (name.length > 0) {
            result = result.filter((player: PlayerType) => {
                return player.name.toUpperCase().includes(name.toUpperCase());
            });
        }
        if (position > 0) {
            result = result.filter((player: PlayerType) => {
                return player.ultraPosition === position;
            });
        }
        if (club >= 0) {
            result = result.filter((player: PlayerType) => {
                return player.club === convertClub(club);
            });
        }
        if (result.length === 0 && players.length > 0) {
            filterError();
        }
        setPlayersShowed(result);
    }, [players, position, name, club]);

    return (
        <View>
            <NameInput filterName={filterName} />
            <Divider />
            <ListFilter
                list={positions}
                filter={filterPosition}
                title="Poste"
                selected={position}
                convert={convertPositionShort}
            />
            <ListFilter
                list={clubs}
                filter={filterClub}
                title="Club"
                selected={club}
                convert={convertClub}
            />
            <Divider />

            {playersShowed.length > 0 ? (
                <FlatList
                    data={playersShowed}
                    keyExtractor={(item: PlayerType, index) =>
                        item.id.toString()
                    }
                    renderItem={({ item }: { item: PlayerType }) => (
                        <PlayerThumbnail
                            name={item.name}
                            club={item.club}
                            ultraPosition={item.ultraPosition}
                            navigate={() =>
                                navigation.navigate('Player', { id: item.id })
                            }
                        />
                    )}
                />
            ) : (
                <ErrorText
                    text={
                        errorMessage.length > 0
                            ? errorMessage
                            : 'patiente un peu ...'
                    }
                />
            )}
        </View>
    );
};

export default PlayersScreen;
