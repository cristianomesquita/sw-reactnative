import React, { Component } from 'react';
import { View, Dimensions, StyleSheet, Text, Button } from 'react-native';
import MapView, { Marker, Callout } from 'react-native-maps';
import Icon from 'react-native-vector-icons/FontAwesome';

import { connect } from 'react-redux';
import { Actions } from 'react-native-router-flux';

import { changeSupplyCoords } from '../actions/SupplyRegisterAction';

const { width, height } = Dimensions.get('window');

class MyMapView extends Component {

    componentWillMount() {
        navigator.geolocation.getCurrentPosition(position => {
            const lat = this.props.lat || position.coords.latitude;
            const long = this.props.long || position.coords.longitude;
            this.accuracy = accuracy = position.coords.accuracy;

            this.calcDelta(lat, long, accuracy);

        });
    }

    calcDelta(lat, long, accuracy) {
        const oneDegreeOfLongitudeInMeters = 111.32 * 1000;
        const circumference = (40075 / 360) * 1000;

        const latDelta = accuracy * (1 / Math.cos(lat) * circumference);
        const longDelta = (accuracy / oneDegreeOfLongitudeInMeters);

        this.props.changeSupplyCoords({ lat, long, latDelta, longDelta });

    }

    render() {
        return (
            <View style={container}>
                <Button
                    title="Clique para concluir"
                    color="#00d900"
                    onPress={() => Actions.pop()}

                />
                {
                    this.props.lat ? <MapView
                        style={map}
                        initialRegion={{
                            latitude: this.props.lat,
                            longitude: this.props.long,
                            latitudeDelta: Math.max(0, this.props.latDelta),
                            longitudeDelta: Math.max(0, this.props.longDelta)
                        }}
                    >
                        <Marker
                            draggable
                            coordinate={{
                                latitude: this.props.lat,
                                longitude: this.props.long
                            }}
                            onDragEnd={e => this.calcDelta(
                                e.nativeEvent.coordinate.latitude,
                                e.nativeEvent.coordinate.longitude,
                                this.accuracy
                            )}
                        >
                            <Icon
                                name="map-pin"
                                color="#00d900"
                                size={50}
                            />
                            <Callout>
                                <View style={{
                                    width: 200,
                                    height: 100
                                }}>
                                    <Text style={{
                                        fontSize: 15,
                                        fontWeight: 'bold',
                                        marginBottom: 5
                                    }}>
                                        Suprimento
                                    </Text>

                                    <Text>Caso o suprimento esteja em um local diferente arraste  </Text>
                                    <Text>para a localização desejada.</Text>
                                </View>
                            </Callout>
                        </Marker>
                    </MapView> : null
                }
            </View >
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    map: {
        flex: 1,
        width: width,
        height: height
    }
});

const { container, map } = styles;

const mapStateToProps = state => ({
    lat: state.SupplyRegisterReducer.lat,
    long: state.SupplyRegisterReducer.long,
    latDelta: state.SupplyRegisterReducer.latDelta,
    longDelta: state.SupplyRegisterReducer.longDelta
});

const decorators = {
    changeSupplyCoords
};

export default connect(mapStateToProps, decorators)(MyMapView);