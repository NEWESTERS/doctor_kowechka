import React, {Component} from 'react';
import { View, Text, Image } from 'react-native';

import styles from './styles';

export default class Reminders extends Component {
    render() {
        return(
            <View style={ styles.cardContainer }>
                <Text style={ styles.cardHeader }>Напоминание</Text>
                <View style={ styles.reminder }>
                    <Image style={ styles.reminderImage } resizeMode="contain"
                        source={ require('../../../assets/images/pills.png') } />
                    <Text style={ styles.reminderText }>Выпить эспумизан</Text>
                </View>
            </View>
        )
    }
}