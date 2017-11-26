import React, { Component } from 'react';
import {
    View,
    Text,
    TextInput,
    Picker,
    DatePickerAndroid,
    TouchableOpacity,
    Alert,
    ScrollView,
    Button,
    StyleSheet
} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import { Actions } from 'react-native-router-flux';

import { connect } from 'react-redux';

import {
    changeExpirationDate,
    changeSupplyType,
    changeSupplyName,
    changeSupplyCoords
} from '../actions/SupplyRegisterAction';

import { getSupplies } from '../actions/SuppliesAction';

import Header from './Header';

class SupplyRegisterScene extends Component {

    async datepicker() {
        /*
            Neste caso não iremos permitir que o usuário selecione 
            uma data menor que a data atual usando o minDate que desabilita
            data anteriores a data atual atribuindo o new Date() neste caso
        */
        try {
            const { action, year, month, day } = await DatePickerAndroid.open({
                //date: new Date()
                minDate: new Date()
            });
            if (action !== DatePickerAndroid.dismissedAction) {
                /*
                    Se quisermos validar uma data selecionada abaixo da data atual
                */
                // const currentDate = moment(new Date()).format("YYYY-MM-DD");
                // const compareDate = `${year}-${month + 1}-${day}`;

                // if (moment(new Date(currentDate)).isAfter(compareDate)) {
                //     Alert.alert('Atenção', 'O suprimento não pode estar fora da validade.');
                //     return false;
                // }

                const selectedDate = `${day}/${month + 1}/${year}`;

                this.props.changeExpirationDate(selectedDate);


            }
        } catch ({ code, message }) {
            console.warn('Cannot open date picker', message);
        }
    }

    validationForm() {
        if (!this.props.supplyName) {
            Alert.alert('NOME DO SUPRIMENTO VAZIO', 'PREENCHA O NOME DO SUPRIMENTO');
            return false;
        }
        if (!this.props.type) {
            Alert.alert('TIPO DE SUPRIMENTO NÃO SELECIONADO', 'SELECIONE O TIPO DE SUPRIMENTO');
            return false;
        }
        if (!this.props.expirationDate) {
            Alert.alert('DATA DE VENCIMENTO DO SUPRIMENTO VAZIA', 'SELECIONE A DATA DE VECIMENTO DO SUPRIMENTO');
            return false;
        }
        if (!this.props.lat) {
            Alert.alert('LOCALIZAÇÃO DO SUPRIMENTO NÃO MARCADA', 'MARQUE A LOCALIZAÇÃO DO SUPRIMENTO');
            return false;
        }
        return true;
    }

    clearForm() {
        this.props.changeSupplyName('');
        this.props.changeSupplyType('');
        this.props.changeExpirationDate('');
        this.props.changeSupplyCoords({ lat: null, long: null, latDelta: null, longDelta: null });
    }

    addSupply() {

        if (this.validationForm()) {
            const dateToDB = this.props.expirationDate.split('/');
            const supplyData = {
                method: 'POST',
                body: JSON.stringify({
                    supplyName: this.props.supplyName,
                    supplyType: this.props.type,
                    expirationDate: `${dateToDB[2]}/${dateToDB[1]}/${dateToDB[0]}`,
                    lat: this.props.lat,
                    long: this.props.long
                }),
                headers: new Headers({
                    'Content-type': 'application/json'
                })
            }

            fetch('http://138.197.79.213:3000/api/sw-challenge', supplyData)
                .then(res => {
                    Alert.alert('REGISTRADO COM SUCESSO', 'SUPRIMENTO REGISTRADO COM SUCESSO');
                    this.clearForm();
                })
                .catch(err => { throw err });
        }
    }

    render() {
        return (
            <View style={container}>
                <Header
                    bgColor="#ecf0f1"
                    title="REGISTRAR SUPRIMENTO"
                    colorTitle="#00d900"
                    fontSize={22}
                    height={80}
                    iconName="arrow-left"
                    changeScene="pop"
                />
                <ScrollView>
                    <View style={form}>
                        <TextInput
                            placeholder="Qual o nome do suprimento"
                            onChangeText={name => this.props.changeSupplyName(name)}
                            value={this.props.supplyName}
                        />
                        <Text style={{ marginTop: 30 }}>Selecione o tipo do suprimento</Text>
                        <Picker
                            selectedValue={this.props.type}
                            onValueChange={(itemValue, itemIndex) => this.props.changeSupplyType(itemValue)}>
                            <Picker.Item label="Selecione o tipo de suprimento" value="" />
                            <Picker.Item label="Proteína" value="protein" />
                            <Picker.Item label="Carboidrato" value="carbohydrate" />
                            <Picker.Item label="Vitamina" value="vitamin" />
                        </Picker>
                        <TouchableOpacity
                            style={datepicker}
                            onPress={() => this.datepicker()}
                        >
                            <View style={{
                                flex: 1,
                                justifyContent: 'center',
                                alignItems: 'center'
                            }}>
                                <Icon name="calendar" size={20} />
                            </View>
                            <View style={{ flex: 6 }}>
                                <TextInput
                                    placeholder="Clique para selecionar a data de validade"
                                    editable={false}
                                    value={this.props.expirationDate.toString()}
                                />
                            </View>
                        </TouchableOpacity>
                        <View style={btnMap}>
                            <Text style={{ marginBottom: 5, fontWeight: 'bold' }}>
                                Selecione a localização do suprimento
                            </Text>
                            <Button
                                title="Mapa"
                                onPress={() => Actions.viewMapScene()}
                                color="silver"
                            />

                            <Text style={{ marginTop: 5, fontWeight: 'bold' }}>
                                Latitude: {this.props.lat}
                            </Text>
                            <Text style={{ marginTop: 5, fontWeight: 'bold' }}>
                                Longitude: {this.props.long}
                            </Text>
                        </View>

                        <Button
                            title="Registrar Suprimento"
                            color="#00d900"
                            onPress={() => this.addSupply()}
                        />
                    </View>
                </ScrollView>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#FFF',
        justifyContent: 'center'
    },
    form: {
        flex: 1,
        padding: 10,
        marginTop: 40
    },
    datepicker: {
        flexDirection: 'row',
        marginBottom: 20
    },
    btnMap: {
        flex: 1,
        borderWidth: 1,
        borderColor: '#ecf0f1',
        padding: 10,
        marginBottom: 40
    }
});

const { container, form, datepicker, map, btnMap } = styles;

const mapStateToProps = state => ({
    expirationDate: state.SupplyRegisterReducer.expirationDate,
    type: state.SupplyRegisterReducer.type,
    supplyName: state.SupplyRegisterReducer.supplyName,
    lat: state.SupplyRegisterReducer.lat,
    long: state.SupplyRegisterReducer.long,
    supplies: state.SuppliesReducer.supplies
});

const decorators = {
    changeExpirationDate,
    changeSupplyType,
    changeSupplyName,
    changeSupplyCoords,
    getSupplies
};

export default connect(mapStateToProps, decorators)(SupplyRegisterScene);