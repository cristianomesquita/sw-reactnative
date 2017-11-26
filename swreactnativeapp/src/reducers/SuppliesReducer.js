import { GET_SUPPLIES } from '../actions/type';

const INITIAL_STATE = {
    supplies: []
};

export default (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case GET_SUPPLIES:
            return { ...state, supplies: action.payload };
        default:
            return state;
    }
};
