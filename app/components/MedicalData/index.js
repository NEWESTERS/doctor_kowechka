import React, {Component} from 'react';
import { Text, View, Image } from 'react-native';
import { connect } from 'react-redux';

import {
    setPulseAction,
    setLowerPressureAction,
    setUpperPressureAction,
    setPicfluometryAction
} from '../../reducer';
import ApiService from '../ApiService';
import styles from './styles';

// адрес Raspberry: http://192.168.4.1:5005/data

class MedicalData extends Component {   
    componentDidMount() {
        const {
            setPulse,
            setLowerPressure,
            setUpperPressure,
            setPicfluometry
        } = this.props

        ApiService.getPulse((param) => {
            setPulse(param)
        })

        ApiService.getLowerPressure((param) => {
            setLowerPressure(param)
        })

        ApiService.getUpperPressure((param) => {
            setUpperPressure(param)
        })

        ApiService.getPicfluometry((param) => {
            setPicfluometry(param)
        })
    }

    render() {
        const { pulse, picfluometry, upperPressure, lowerPressure } = this.props.medicalData

        return (
          <View style={ styles.cardContainer }>
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
        );
    }
}

const mapStateToProps = state => {
    return {
      medicalData: state.medicalData
    };
  };
  
const mapDispatchToProps = {
    setPulse: setPulseAction,
    setLowerPressure: setLowerPressureAction,
    setUpperPressure: setUpperPressureAction,
    setPicfluometry: setPicfluometryAction
};

export default connect(mapStateToProps, mapDispatchToProps)(MedicalData);