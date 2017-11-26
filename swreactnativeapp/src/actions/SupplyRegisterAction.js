import {
    CHANGE_EXPIRATION_DATE,
    CHANGE_SUPPLY_TYPE,
    CHANGE_SUPPLY_NAME,
    CHANGE_SUPPLY_COORDS
} from './type';

export const changeExpirationDate = date => (
    { type: CHANGE_EXPIRATION_DATE, payload: date }
);

export const changeSupplyType = type => (
    { type: CHANGE_SUPPLY_TYPE, payload: type }
);

export const changeSupplyName = name => (
    { type: CHANGE_SUPPLY_NAME, payload: name }
);

export const changeSupplyCoords = coords => (
    { type: CHANGE_SUPPLY_COORDS, payload: coords }
);

