import React, { Component } from 'react';
import { View, ScrollView, Button } from 'react-native';

import Header from './Header';
import MyMapView from './MyMapView';

export default class ViewMapScene extends Component {
    render() {
        return (
            <View>
                <Header
                    bgColor="#ecf0f1"
                    title="MARQUE A POSIÇÃO DO SUPRIMENTO"
                    colorTitle="#00d900"
                    fontSize={16}
                    height={80}
                    iconName="arrow-left"
                    changeScene="pop"
                />
                <ScrollView>
                    <MyMapView />
                </ScrollView>
            </View>
        );
    }
} 