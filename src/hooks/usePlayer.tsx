import React, { useEffect, useState } from 'react';
import { BASE_URL } from '../helpers/const';
export type PlayerDetailType = {
    name: string;
    birthDate: string;
    club: string;
    ultraPosition: number;
    jerseyNum: number;
    nbMatch: number;
};
const initState: PlayerDetailType = {
    name: '',
    birthDate: '',
    club: '',
    ultraPosition: -1,
    jerseyNum: -1,
    nbMatch: -1,
};
const usePlayer = (id: number) => {
    const [player, setPlayer] = useState(initState);
    const fetchPlayer = async () => {
        //https://api.monpetitgazon.com/stats/player/IDPLAYER?season=2018

        try {
            let result = await (
                await fetch(BASE_URL + `player/${id}?season=2018`)
            ).json();
            let player: PlayerDetailType = {
                name: result.firstname
                    ? result.firstname + ' ' + result.lastname.toUpperCase()
                    : result.lastname.toUpperCase(),
                birthDate: result.birthDate,
                club: result.club,
                ultraPosition: result.ultraPosition,
                jerseyNum: result.jerseyNum,
                nbMatch: result.nbMatch,
            };
            setPlayer(player);
        } catch (error) {
            console.log(error);
        }
    };
    useEffect(() => {
        fetchPlayer();
    }, []);
    return player;
};

export default usePlayer;
