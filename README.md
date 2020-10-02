# MPGTEST

# Install

```bash
git clone git@github.com:amaurycoudr/mpgtest.git
# Install dependencies
yarn install
# Start Project
yarn strat
```

# Structure du projet

## Tech

React 16.13 (`utilisation des hooks`), react-navigation 5, typescript

## src/screens

Dossier contenant les différents `screen` du projet (PlayersScreen et PlayersDetailScreen)
les Screens contienent `la structure de la View` et quelques petits éléments de logique ( Pour `PlayersScreen` la selection des `playersShowed` ce fait dans le screen, ce qui n'est sans doute pas optimal)

## src/components

Dossier contenant les différents `elements visuel` (Divider, PlayerThumbnail, PlayerDetail...).
Très peu de logique.

## src/helpers

Contient des `fonctions pratiques` pour le projet (ex : convertPositionShort qui fait la conversion d'un nombre (10) en une position ('G') ), et des `const` importante (ex : url de l'api)

## src/hooks

Contient les hooks créés pour gérer les éléments de logique :

### usePlayers

Gère le state pour le screen `Players` avec comme base le hook `useReducer`

actions possible :

-   _fetchPlayer_ (appel a l'api pour récupérer les players),
-   _filterName_ (payload: la string pout le filtre du nom),
-   _filterClub_ (payload: le number pout le filtre du club),
-   _filterPosition_ (payload: le number pout le filtre du position),
-   _filterError_ (payload: le message d'erreur aucun joueur trouvé),

### usePlayer

gère le state pour le screen `PlayerDetail` avec comme base le hook `useState`
pour PlayerDetail. Le seul élément de logique est _fetchPlayer_ (appel a l'api pour récupérer le player)
