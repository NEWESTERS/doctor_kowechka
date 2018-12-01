import React, {Component} from 'react';
import { View, Text, ScrollView, TouchableOpacity, TextInput } from 'react-native';
import { connect } from 'react-redux';

import styles from './styles';
import { setAnswerAction } from '../../reducer';

class CallDoctor extends Component {
    state = {
        sent: false
    }

    answerChangeHandler = (text) => {
        this.props.setAnswer(text)
    }

    sendData = () => {
        const { patientComment } = this.props

        if( patientComment === "" ) {
            console.log("Error")
        } else {
            console.log("Data sent")
            
            this.setState({
                sent: true
            })
        }
    }

    render() {
        const { sent } = this.state,
            { patientComment } = this.props

        if(!sent) {
            return (
                <ScrollView contentContainerStyle={ styles.questionsContainer }>
                    <View style={ styles.question }>
                        <Text style={ styles.commentFieldLabel }>Опишите ваши жалобы</Text>
                        <TextInput
                            style={ styles.commentField }
                            multiline={ true }
                            onChangeText={ (text) => this.answerChangeHandler(text) }
                            value={ patientComment } />
                    </View>

                    <TouchableOpacity style={ styles.sendButton } onPress={ this.sendData }>
                        <Text style={ styles.sendButtonText }>Отправить врачу</Text>
                    </TouchableOpacity>
                </ScrollView>
            )
        } else {
            return(
                <View style={{ flex: 1, justifyContent: "center" }}>
                    <View style={ styles.successBox }>
                        <Text style={ styles.successBoxHeader }>Информация успешно отправлена!</Text>
                        <Text style={ styles.questionText }>Пожалуйста, дождитесь ответа врача.</Text>
                    </View>
                </View>
            )
        }
    }
}

const mapStateToProps = state => {
    return {
      patientComment: state.patientComment
    };
  };
  
const mapDispatchToProps = {
    setAnswer: setAnswerAction
};
  
export default connect(mapStateToProps, mapDispatchToProps)(CallDoctor);

