import { useReducer, useEffect } from 'react';
import { BASE_URL } from '../../const';
type Action = {
    type: string;
    payload: Function;
};
const playersReducer = (state: object, action: Action) => {
    switch (action.type) {
        case 'error':
            return {
                ...state,
                errorMessage: action.payload,
            };
        case 'filterName':
            return { ...state, errorMessage: '', name: action.payload };
        case 'filterPosition':
            return { ...state, errorMessage: '', position: action.payload };
        case 'filterClub':
            return { ...state, errorMessage: '', club: action.payload };
        case 'fetchPlayers':
            return { ...state, errorMessage: '', players: action.payload };
    }
};
const initialState = {
    players: [],
    name: '',
    postion: '',
    club: '',
    errorMessage: '',
};

export const usePlayers = () => {
    const [state, dispatch] = useReducer(playersReducer, initialState);
    const fetchPlayer = (dispatch: Function) => async () => {
        try {
            let result = await (
                await fetch(BASE_URL + 'championship/1/2018')
            ).json();
            result.forEach((value) => {
                delete value.stats;
                delete value.position;
                delete value.teamId;
                delete value.quotation;
                value.id = value.id.replace('player_', '');
                value.name = value.firstname
                    ? value.firstname + ' ' + value.lastname.toUpperCase()
                    : value.lastname.toUpperCase();
            });
            parseInt(result.id);
            dispatch({ payload: result, type: 'fetchPlayers' });
        } catch (err) {
            dispatch({
                payload:
                    'Oups il y a un problème, tu es bien connecté à internet ?',
                type: 'error',
            });
        }
    };
    const filterName = (dispatch) => (name) => {
        dispatch({ payload: name, type: 'filterName' });
    };
    const filterPosition = (dispatch) => (position) => {
        dispatch({ payload: position, type: 'filterPosition' });
    };
    const filterClub = (dispatch) => (club) => {
        dispatch({ payload: club, type: 'filterClub' });
    };
    const filterError = (dispatch) => () => {
        dispatch({
            payload: 'Aucun joueur ne semble correspondre à ta recherche :(',
            type: 'error',
        });
    };
    useEffect(() => {
        fetchPlayer(dispatch)();
    }, []);
    return {
        state,
        fetchPlayer: fetchPlayer(dispatch),
        filterName: filterName(dispatch),
        filterPosition: filterPosition(dispatch),
        filterClub: filterClub(dispatch),
        filterError: filterError(dispatch),
    };
};
