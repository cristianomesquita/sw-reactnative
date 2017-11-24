import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

export default class Card extends Component {

    render() {
        return (
            <View
                style={[
                    container,
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
                    <Text>Content Card</Text>
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
    container: {

    },
    cardHeader: {
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'row'
    },
    cardContent: {
        flex: 3,
        padding: 15
    },
    cardFooter: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'row'

    }
});

const { container, cardHeader, cardContent, cardFooter } = styles;
