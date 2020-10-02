import { useReducer, useEffect, Dispatch } from 'react';
import { BASE_URL } from '../helpers/const';
export type PlayerType = {
    name: string;
    ultraPosition: number;
    club: string;
    id: number;
    position: number;
};
type StateType = {
    players: Array<PlayerType>;
    name: string;
    position: number;
    club: number;
    errorMessage: string;
};
type ActionType =
    | { type: 'error'; payload: string }
    | { type: 'filterName'; payload: string }
    | { type: 'filterPosition'; payload: number }
    | { type: 'filterClub'; payload: number }
    | { type: 'fetchPlayers'; payload: Array<PlayerType> };

const playersReducer = (state: StateType, action: ActionType): StateType => {
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
const initialState: StateType = {
    players: [],
    name: '',
    position: 0,
    club: -1,
    errorMessage: '',
};

export const usePlayers = () => {
    const [state, dispatch] = useReducer(playersReducer, initialState);
    const fetchPlayer = (dispatch: Dispatch<ActionType>) => async () => {
        try {
            let result = await (
                await fetch(BASE_URL + 'championship/1/2018')
            ).json();
            result.forEach((value: any) => {
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
    const filterName = (dispatch: Dispatch<ActionType>) => (
        name: StateType['name']
    ) => {
        dispatch({ payload: name, type: 'filterName' });
    };
    const filterPosition = (dispatch: Dispatch<ActionType>) => (
        position: StateType['position']
    ) => {
        dispatch({ payload: position, type: 'filterPosition' });
    };
    const filterClub = (dispatch: Dispatch<ActionType>) => (
        club: StateType['club']
    ) => {
        dispatch({ payload: club, type: 'filterClub' });
    };
    const filterError = (dispatch: Dispatch<ActionType>) => () => {
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
