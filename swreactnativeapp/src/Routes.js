import React from 'react';
import { Router, Scene } from 'react-native-router-flux';

import MainScene from './components/MainScene';
import SideMenuScene from './components/SideMenuScene';

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
        </Scene>
    </Router>
);
