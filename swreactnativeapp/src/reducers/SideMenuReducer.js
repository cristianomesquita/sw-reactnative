import { SIDE_MENU_IS_OPEN } from '../actions/type';

const INITIAL_STATE = {
    isOpen: false
};

export default (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case SIDE_MENU_IS_OPEN:
            return { ...state, isOpen: action.payload };
        default:
            return state;
    }
};
