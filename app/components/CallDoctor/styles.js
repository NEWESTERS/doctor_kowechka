import { StyleSheet } from 'react-native';
import { Geometry, Colors, Fonts } from '../../StyleVars';

export default styles = StyleSheet.create({
    questionsContainer: {
        alignItems: "center",
        paddingHorizontal: Geometry.padding,
    },

    question: {
        width: "100%",
        marginBottom: Geometry.padding,
        backgroundColor: "white",
        borderRadius: Geometry.radius,
        padding: Geometry.padding,

        shadowOffset: {
            width: 0,
            height: 4,
        },
        shadowOpacity: 0.15,
        shadowRadius: 5.46,     
        elevation: 9,

        flexDirection: "column",
        justifyContent: "space-around",
        alignItems: "center",
    },

    commentField: {
        height: 60,
        width: "100%",
        padding: Geometry.padding,
        borderRadius: Geometry.radius,
        borderColor: Colors.main,
        backgroundColor: Colors.formColor,
        ...Fonts.cardText,
    },

    commentFieldLabel: {
        ...Fonts.cardHeader,
        marginBottom: 10,
        textAlign: "center",
    },

    sendButton: {
        borderRadius: Geometry.radius,
        width: 200,
        marginBottom: Geometry.padding,
        backgroundColor: Colors.secondary,

        shadowOffset: {
            width: 0,
            height: 4,
        },
        shadowOpacity: 0.15,
        shadowRadius: 5.46,     
        elevation: 9,
    },
    sendButtonActive: {
        backgroundColor: Colors.main,
    },
    sendButtonText: {
        padding: 5,
        color: "white",
        fontSize: 20,
        fontWeight: "300",
        textAlign: "center",
    },

    successBox: {
        marginHorizontal: Geometry.padding,
        padding: Geometry.padding,
        borderRadius: Geometry.radius,
        backgroundColor: "white",

        shadowOffset: {
            width: 0,
            height: 4,
        },
        shadowOpacity: 0.15,
        shadowRadius: 5.46,     
        elevation: 9,
    },
    successBoxHeader: {
        ...Fonts.cardHeader,
        textAlign: "center",
    },
    successBoxText: {
        ...Fonts.cardText,
        textAlign: "center",
    }
})