import React, { Component } from 'react';
import { ScrollView, View, StyleSheet, Button } from 'react-native';
import { connect } from 'react-redux';

import { getSupplies } from '../actions/SuppliesAction';

import Header from './Header';
import Card from './Card';

class MainScene extends Component {

    componentWillMount() {
        this._getSupplies();
    }

    _getSupplies() {
        fetch('http://138.197.79.213:3000/api/sw-challenge')
            .then(res => res.json())
            .then(res => {
                this.props.getSupplies(res.data);
            });
    }

    render() {
        return (
            <View style={container}>
                <Header
                    bgColor="#ecf0f1"
                    title="SW CHALLENGE"
                    colorTitle="#00d900"
                    fontSize={25}
                    height={80}
                    iconName="bars"
                />

                <ScrollView>
                    {
                        this.props.supplies.map((supply, i) => (
                            <Card
                                key={i}
                                height={200}
                                backgroundColor="#ecf0f1"
                                margin={20}
                                cardHeaderHeight={30}
                                cardHeaderBackgroundColor="#00d900"
                                cardTitle={supply.supplyName}
                                cardTitleSize={18}
                                cardTitleColor="#FFF"
                                supplyName={supply.supplyName}
                                supplyType={supply.supplyType}
                                expirationDate={supply.expirationDate}
                                lat={supply.lat}
                                long={supply.long}
                            />
                        ))
                    }
                </ScrollView>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#FFF'
    }
});

const { container } = styles;

const mapStateToProps = state => ({
    supplies: state.SuppliesReducer.supplies
});

const decorators = {
    getSupplies
};

export default connect(mapStateToProps, decorators)(MainScene);
