import React, {Component} from 'react';
import { Text, View, Image, ScrollView } from 'react-native';
import { connect } from 'react-redux';

import {
    setMedicalDataAction,
    setKowechubConnectionAction
} from '../../reducer';
import ApiService from '../ApiService';
import styles from './styles';
import { URLS } from '../../utils';

const mapStateToProps = state => {
    return {
      medicalData: state.medicalData,
      isConnected: state.kowechubConnected
    };
  };
  
const mapDispatchToProps = {
    setMedicalData: setMedicalDataAction,
    setKowechubConnection: setKowechubConnectionAction
};

// адрес Raspberry: http://192.168.4.1:5005/data

class MedicalData extends Component {   
    componentDidMount() {
        const {
            setMedicalData,
            setKowechubConnection
        } = this.props

        ApiService.getPulse((param) => {
            setMedicalData("pulse", param)
        })

        ApiService.getLowerPressure((param) => {
            setMedicalData("lowerPressure", param)
        })

        ApiService.getUpperPressure((param) => {
            setMedicalData("upperPressure", param)
        })

        ApiService.getPicfluometry((param) => {
            setMedicalData("picfluometry", param)
        })

        setKowechubConnection(undefined)

        fetch(URLS.KOWECHUB_PING)
            .then( () => { setKowechubConnection(true) } )
            .catch( () => { setKowechubConnection(false) } )
    }

    render() {
        const { pulse, picfluometry, upperPressure, lowerPressure } = this.props.medicalData,
            { isConnected } = this.props

        return (
            <ScrollView contentContainerStyle={ styles.medicalDataContainer }>
                <View style={ [ styles.cardContainer, { height: 250 } ] }>
                    <Text style={ styles.cardHeader }>Ваши текущие показатели</Text>
                    <View style={ styles.parameter }>
                        <Image style={ styles.parameterImage } resizeMode="contain"
                            source={ require('../../../assets/images/heartbeat.png') } />
                        <Text style={ styles.parameterName }>Пульс</Text>
                        <Text style={ styles.parameterValue }>{ pulse }</Text>
                    </View>

                    <View style={ styles.parameter }>
                        <Image style={ styles.parameterImage } resizeMode="contain"
                            source={ require('../../../assets/images/wind.png') } />
                        <Text style={ styles.parameterName }>Пикфлуометрия</Text>
                        <Text style={ styles.parameterValue }>{ picfluometry }</Text>
                    </View>

                    <View style={ styles.parameter }>
                        <Image style={ styles.parameterImage } resizeMode="contain"
                            source={ require('../../../assets/images/clock.png') } />
                        <Text style={ styles.parameterName }>Давление</Text>
                        <Text style={ styles.parameterValue }>{ upperPressure }/{ lowerPressure }</Text>
                    </View>

                    
                </View>

                <View style={ [ styles.cardContainer, { height: 110 } ] }>
                    <Text style={ styles.cardHeader }>Напоминание</Text>
                    <View style={ styles.reminder }>
                        <Image style={ styles.reminderImage } resizeMode="contain"
                            source={ require('../../../assets/images/pills.png') } />
                        <Text style={ styles.reminderText }>Сделать пикфлуометрию</Text>
                    </View>
                </View>

                <View style={ [ styles.cardContainer, { height: 110 } ] }>
                    <Text style={ [ styles.cardHeader, { marginBottom: 10 } ] }>Подключенные устройства</Text>
                    <Text style={ styles.reminderText }>Kowechub: { isConnected === undefined ? "идёт подключение..." : isConnected ? "подключено" : "не подключено" }</Text>
                </View>
            </ScrollView>
        );
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(MedicalData);