import React from 'react';
import {
    View,
    Text,
    ScrollView,
    TouchableOpacity
} from 'react-native';
import SideMenu from 'react-native-side-menu';
import { connect } from 'react-redux';
import { Actions } from 'react-native-router-flux';
import Icon from 'react-native-vector-icons/FontAwesome';

import { sideMenuIsOpen } from '../actions/SideMenuAction';

import MainScene from './MainScene';

const Menu = (props) => (
    <View
        style={{ flex: 1, backgroundColor: '#FFF' }}
    >
        <TouchableOpacity
            style={{
                height: 120,
                backgroundColor: '#FFF',
                justifyContent: 'center',
                alignItems: 'center'
            }}
        >
            <View
                style={{ flexDirection: 'row' }}
            >
                <Icon name="user" size={25} color="#00d900" />
                <Text
                    style={{
                        fontSize: 20,
                        color: '#00d900',
                        fontWeight: 'bold',
                        marginLeft: 15
                    }}
                >
                    Cristiano
                </Text>
            </View>
        </TouchableOpacity>
        <ScrollView
            style={{ padding: 20 }}
        >
            <View
                style={{ flexDirection: 'row', alignItems: 'center', marginBottom: 10 }}
            >
                <Icon
                    name="cart-plus"
                    size={25}
                    color="#00d900"
                />
                <TouchableOpacity
                    onPress={() => false}
                >
                    <Text
                        style={{
                            fontSize: 16,
                            color: '#00d900',
                            marginLeft: 10
                        }}
                    >
                        Registrar suprimento
                    </Text>
                </TouchableOpacity>
            </View>
            <View
                style={{ flexDirection: 'row', alignItems: 'center', marginBottom: 10 }}
            >
                <Icon
                    name="map-marker"
                    size={25}
                    color="#00d900"
                />
                <TouchableOpacity
                    onPress={() => false}
                >
                    <Text
                        style={{
                            fontSize: 16,
                            color: '#00d900',
                            marginLeft: 10
                        }}
                    >
                        VIsualizar mapa
                    </Text>
                </TouchableOpacity>
            </View>
        </ScrollView>
    </View>
);

const SideMenuScene = props => {
    const menu = Menu(props);

    return (
        <SideMenu
            menu={menu}
            isOpen={props.isOpen}
            onChange={() => props.sideMenuIsOpen(!props.isOpen)}
            bounceBackOnOverdraw={false}
        >
            <MainScene />
        </SideMenu>
    );
};

const mapStateToProps = state => ({
    isOpen: state.SideMenuReducer.isOpen,
});

const decorators = {
    sideMenuIsOpen
};

export default connect(mapStateToProps, decorators)(SideMenuScene);
