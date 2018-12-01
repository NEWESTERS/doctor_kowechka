import React, {Component} from 'react';
import { View, Text, ScrollView, TouchableOpacity, TextInput } from 'react-native';
import { connect } from 'react-redux';

import styles, { reactiveStyles } from './styles';
import { setPatientCommentAction } from '../../reducer';

const mapStateToProps = state => {
    return {
      patientComment: state.patientComment
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
        const { patientComment, setPatientComment } = this.props

        if( patientComment === "" ) {
            console.log("Error")
        } else {
            console.log("Data sent")
            
            setPatientComment("")

            this.setState({
                sent: true
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

