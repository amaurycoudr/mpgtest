import React, { useContext, useEffect, useState } from 'react';
import { FlatList, View, StyleSheet, Text } from 'react-native';
import { clubs, positions } from '../../const';
import Divider from '../components/Divider';
import ListFilter from '../components/ListFilter';
import NameInput from '../components/NameInput';
import PlayerThumbnail from '../components/PlayerThumbnail';
import { usePlayers } from '../hooks/usePlayers';

import { convertClub, convertPositionShort } from '../helpers/conversion';

const PlayersScreen = ({ navigation }) => {
    const {
        state,
        fetchPlayer,
        filterName,
        filterPosition,
        filterClub,
        filterError,
    } = usePlayers();
    const { players, club, position, name, errorMessage } = state;
    const [playersShowed, setPlayersShowed] = useState([]);
    useEffect(() => {
        let result = players;
        if (name.length > 0) {
            result = result.filter((player) => {
                return player.name.toUpperCase().includes(name.toUpperCase());
            });
        }
        if (position > 0) {
            result = result.filter((player) => {
                return player.ultraPosition === position;
            });
        }
        if (club > 0) {
            result = result.filter((player) => {
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
                    keyExtractor={(item) => item.id}
                    renderItem={({ item }) => (
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
            ) : errorMessage.length === 0 ? (
                <Text>wait please</Text>
            ) : (
                <Text>{errorMessage}</Text>
            )}
        </View>
    );
};

export default PlayersScreen;

const styles = StyleSheet.create({});
