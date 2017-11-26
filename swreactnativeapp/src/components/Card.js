import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

import { connect } from 'react-redux';

class Card extends Component {

    constructor(props) {
        super(props);

        this.formateDate = this.props.expirationDate.substring(0, 10).split('-');
    }

    componentWillMount() {
        //Convertendo os tipos de suprimentos para mostrar no card
        if (this.props.supplyType === 'protein')
            this.type = 'Proteína';
        else if (this.props.supplyType === 'carbohydrate')
            this.type = 'Carboidrato';
        else if (this.props.supplyType === 'vitamin')
            this.type = 'Vitamina';
    }

    render() {
        return (
            <View
                style={[
                    {
                        height: this.props.height,
                        backgroundColor: this.props.backgroundColor,
                        margin: this.props.margin
                    }
                ]}
            >

                <View
                    style={[
                        cardHeader,
                        {
                            height: this.props.cardHeaderHeight,
                            backgroundColor: this.props.cardHeaderBackgroundColor
                        }
                    ]}
                >

                    <View
                        style={{
                            flex: 2
                        }}
                    />

                    <View
                        style={{
                            flex: 16,
                            justifyContent: 'center',
                            alignItems: 'center'
                        }}
                    >
                        <Text
                            style={{
                                fontSize: this.props.cardTitleSize,
                                color: this.props.cardTitleColor
                            }}
                        >
                            {this.props.cardTitle}
                        </Text>
                    </View>

                    <View
                        style={{
                            flex: 2,
                            justifyContent: 'center',
                            alignItems: 'center'
                        }}
                    >
                        <Icon
                            name="ellipsis-v"
                            size={18}
                            color="#FFF"
                        />
                    </View>
                </View>

                <View
                    style={[cardContent]}
                >
                    <Text style={[txtContentCard, { fontSize: 17 }]}>
                        {
                            `Data de validade: ${this.formateDate[2]}/${this.formateDate[1]}/${this.formateDate[0]}`
                        }
                    </Text>
                    <Text style={[txtContentCard, { marginBottom: 30 }]}>
                        {
                            `Tipo de suprimento: ${this.type}`
                        }
                    </Text>
                </View>

                <View
                    style={[cardFooter]}
                >

                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    cardHeader: {
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'row'
    },
    cardContent: {
        flex: 3,
        padding: 15,
        justifyContent: 'center',
        alignItems: 'center'
    },
    cardFooter: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'row'

    },
    txtContentCard: {
        fontSize: 15,
        fontWeight: 'bold'
    }
});

const { container, cardHeader, cardContent, cardFooter, txtContentCard } = styles;

const mapStateToProps = state => ({
    supplies: state.SuppliesReducer.supplies
});

export default connect(mapStateToProps, {})(Card);