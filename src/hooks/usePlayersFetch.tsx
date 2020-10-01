import { BASE_URL } from '../../const';
import { useEffect, useState } from 'react';

export const usePlayersFetch = () => {
    const [players, setPlayers] = useState([]);
    const [loading, setLoading] = useState(true);
    const fetchPlayer = async () => {
        try {
            let result = await (
                await fetch(BASE_URL + 'championship/1/2018')
            ).json();
            result = result.slice(0, 600);
            result.forEach((value) => {
                delete value.stats;
                delete value.position;
                delete value.teamId;
                delete value.quotation;
                value.id = value.id.replace('player_', '');
            });
            parseInt(result);
            setPlayers(result);
            setLoading(false);
        } catch (err) {
            console.log(err);
        }
    };
    useEffect(() => {
        fetchPlayer();
    }, []);
    return { players, loading };
};
