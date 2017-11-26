import {
    CHANGE_EXPIRATION_DATE,
    CHANGE_SUPPLY_TYPE,
    CHANGE_SUPPLY_NAME,
    CHANGE_SUPPLY_COORDS
} from '../actions/type';

const INITIAL_STATE = {
    expirationDate: '',
    type: '',
    supplyName: '',
    lat: null,
    long: null,
    latDelta: null,
    longDelta: null
};

export default (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case CHANGE_EXPIRATION_DATE:
            return { ...state, expirationDate: action.payload };
        case CHANGE_SUPPLY_TYPE:
            return { ...state, type: action.payload };
        case CHANGE_SUPPLY_NAME:
            return { ...state, supplyName: action.payload };
        case CHANGE_SUPPLY_COORDS:
            return {
                ...state,
                lat: action.payload.lat,
                long: action.payload.long,
                latDelta: action.payload.latDelta,
                longDelta: action.payload.longDelta
            };
        default:
            return state;
    }
};
