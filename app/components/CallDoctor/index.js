import React, {Component} from 'react';
import { View, Text, ScrollView, TouchableOpacity, TextInput } from 'react-native';
import { connect } from 'react-redux';

import { URLS, sendDataPost } from '../../utils';
import { setPatientCommentAction } from '../../reducer';
import styles from './styles';

const mapStateToProps = state => {
    return {
      patientComment: state.patientComment,
      isConnected: state.kowechubConnected,
      medicalData: state.medicalData
    };
};
  
const mapDispatchToProps = {
    setPatientComment: setPatientCommentAction
};

class CallDoctor extends Component {
    state = {
        sent: false
    }

    sendData = () => {
        const { patientComment, setPatientComment, medicalData, isConnected } = this.props

        if( patientComment === "" ) {
            console.log("Error")
        } else {
            const data = {
                wtf: patientComment,
                medicalData: []
            },
            now = new Date()

            data.medicalData.push({
                name: "date",
                data: `${ now.getDate() }/${ now.getMonth() }`
            })

            Object.keys(medicalData).map(key => {
                data.medicalData.push({
                    name: key,
                    data: medicalData[key]
                })
            })

            sendDataPost(
                isConnected ? URLS.INTERNAL_CALL_DOCTOR : URLS.EXTERNAL_CALL_DOCTOR,
                data
            ).then((res) => {
                console.log("Data sent " + res)
            
                setPatientComment("")

                this.setState({
                    sent: true
                })
            }).catch(e => {
                console.log(e.message)
            })           
        }
    }

    render() {
        const { sent } = this.state,
            { patientComment, setPatientComment } = this.props

        if(!sent) {
            return (
                <ScrollView contentContainerStyle={ styles.questionsContainer }>
                    <View style={ styles.question }>
                        <Text style={ styles.commentFieldLabel }>Опишите ваше состояние</Text>
                        <TextInput
                            style={ styles.commentField }
                            multiline={ true }
                            onChangeText={ setPatientComment }
                            value={ patientComment }
                        />
                    </View>

                    <TouchableOpacity
                        disabled={ patientComment === "" }
                        style={ [ styles.sendButton, patientComment !== "" ? styles.sendButtonActive : {} ] }
                        onPress={ this.sendData }
                    >
                        <Text style={ styles.sendButtonText }>Отправить врачу</Text>
                    </TouchableOpacity>
                </ScrollView>
            )
        } else {
            return(
                <View style={{ flex: 1, justifyContent: "center" }}>
                    <View style={ styles.successBox }>
                        <Text style={ styles.successBoxHeader }>Информация успешно отправлена!</Text>
                        <Text style={ styles.successBoxText }>Пожалуйста, дождитесь ответа врача.</Text>
                    </View>
                </View>
            )
        }
    }
}
  
export default connect(mapStateToProps, mapDispatchToProps)(CallDoctor);

