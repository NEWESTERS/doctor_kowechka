import React, {Component} from 'react';
import { Text, View, Image } from 'react-native';
import { connect } from 'react-redux';

import {
    setMedicalDataAction
} from '../../reducer';
import ApiService from '../ApiService';
import styles from './styles';

const mapStateToProps = state => {
    return {
      medicalData: state.medicalData
    };
  };
  
const mapDispatchToProps = {
    setMedicalData: setMedicalDataAction
};

// адрес Raspberry: http://192.168.4.1:5005/data

class MedicalData extends Component {   
    componentDidMount() {
        const {
            setMedicalData
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

export default connect(mapStateToProps, mapDispatchToProps)(MedicalData);