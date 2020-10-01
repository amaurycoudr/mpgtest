export const convertPositionFull = (postion) => {
    switch (postion) {
        case 10:
            return 'Gardien';
        case 20:
            return 'Defenseur Central';
        case 21:
            return 'Defenseur Lateral';
        case 31:
            return 'Milieu défensir';
        case 32:
            return 'Milieu offensif';
        case 40:
            return 'Attaquant';
        default:
            break;
    }
};
export const convertPositionShort = (postion) => {
    switch (postion) {
        case 10:
            return 'G';
        case 20:
            return 'DC';
        case 21:
            return 'DL';
        case 31:
            return 'MD';
        case 32:
            return 'MO';
        case 40:
            return 'A';
        default:
            break;
    }
};
export const convertClub = (club) => {
    switch (club) {
        case 0:
            return 'Paris';
        case 1:
            return 'Caen';
        case 2:
            return 'Rennes';
        case 3:
            return 'Lyon';
        case 4:
            return 'Nantes';
        case 5:
            return 'Guingamp';
        case 6:
            return 'Lille';
        case 7:
            return 'Dijon';
        case 8:
            return 'Saint-Étienne';
        case 9:
            return 'Amiens';
        case 10:
            return 'Reims';
        case 11:
            return 'Marseille';
        case 12:
            return 'Strasbourg';
        case 13:
            return 'Monaco';
        case 14:
            return 'Nice';
        case 15:
            return 'Toulouse';
        case 16:
            return 'Nîmes';
        case 17:
            return 'Montpellier';
        case 18:
            return 'Angers';
        case 19:
            return 'Bordeaux';
        default:
            break;
    }
};
