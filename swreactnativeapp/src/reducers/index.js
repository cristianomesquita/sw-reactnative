import { combineReducers } from 'redux';

import SideMenuReducer from './SideMenuReducer';
import SupplyRegisterReducer from './SupplyRegisterReducer';
import SuppliesReducer from './SuppliesReducer';

export default combineReducers({
    SideMenuReducer,
    SupplyRegisterReducer,
    SuppliesReducer
});
