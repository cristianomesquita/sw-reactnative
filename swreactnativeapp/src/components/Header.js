import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import { Actions } from 'react-native-router-flux';
import { connect } from 'react-redux';
import { sideMenuIsOpen } from '../actions/SideMenuAction';

const Header = props => (

    <View
        style={[
            container,
            {
                backgroundColor: props.bgColor,
                height: props.height
            }
        ]}
    >
        <TouchableOpacity
            style={{ flex: 1.5 }}
            onPress={
                () => {
                    if (props.changeScene) {
                        Actions[props.changeScene]();
                        props.sideMenuIsOpen(false);
                    } else {
                        props.sideMenuIsOpen(!props.isOpen);
                    }
                }
            }
        >
            <Icon
                style={{
                    textAlign: 'center',
                    fontWeight: 'bold'
                }}
                name={props.iconName}
                color="#00d900"
                size={25}
            />
        </TouchableOpacity>

        <Text
            style={
                [
                    title,
                    {
                        color: props.colorTitle,
                        fontSize: props.fontSize,
                        flex: 12,
                        textAlign: 'center'

                    }
                ]
            }
        >
            {props.title}
        </Text>
        <View
            style={{ flex: 1.5 }}
        />
    </View>
);

const styles = StyleSheet.create({
    container: {
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'row'
    },
    title: {
        fontWeight: 'bold'
    }
});

const { container, title } = styles;

const mapStateToProps = state => ({
    isOpen: state.SideMenuReducer.isOpen
});

const decorators = {
    sideMenuIsOpen
};

export default connect(mapStateToProps, decorators)(Header);
