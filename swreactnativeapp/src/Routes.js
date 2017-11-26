import React from 'react';
import { Router, Scene } from 'react-native-router-flux';

import MainScene from './components/MainScene';
import SideMenuScene from './components/SideMenuScene';
import SupplyRegisterScene from './components/SupplyRegisterScene';
import ViewMapScene from './components/ViewMapScene';

export default () => (
    <Router>
        <Scene key="root">
            <Scene
                key="sideMenuScene"
                component={SideMenuScene}
                title="Side Menu Scene"
                hideNavBar
            />
            <Scene
                key="mainScene"
                component={MainScene}
                title="Main Scene"
                hideNavBar
            />
            <Scene
                key="supplyRegisterScene"
                component={SupplyRegisterScene}
                title="Register Scene"
                hideNavBar
            />
            <Scene
                key="viewMapScene"
                component={ViewMapScene}
                title="View Map Scene"
                hideNavBar
            />
        </Scene>
    </Router>
);
