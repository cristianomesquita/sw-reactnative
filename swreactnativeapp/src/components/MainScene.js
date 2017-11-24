import React from 'react';
import { ScrollView, View, StyleSheet } from 'react-native';

import Header from './Header';
import Card from './Card';

export default () => (

    <View style={container}>
        <Header
            bgColor="#FFF"
            title="SW CHALLENGE"
            colorTitle="#00d900"
            fontSize={25}
            height={80}
            iconName="bars"
        />

        <ScrollView>
            <Card
                height={200}
                backgroundColor="#FFF"
                margin={20}
                cardHeaderHeight={30}
                cardHeaderBackgroundColor="#00d900"
                cardTitle="ARROZ"
                cardTitleSize={18}
                cardTitleColor="#FFF"
            />
        </ScrollView>
    </View>
);

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'silver'
    }
});

const { container } = styles;

