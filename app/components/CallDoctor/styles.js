import { StyleSheet } from 'react-native';
import { Geometry, Colors } from '../../StyleVars';

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
        height: 50,
        width: "100%",
        padding: Geometry.padding,
        borderRadius: Geometry.radius,
        borderColor: Colors.main,
        borderWidth: 1,
    },

    commentFieldLabel: {
        color: Colors.main,
        fontSize: 22.5,
        fontWeight: "500",
        marginBottom: 10,
        textAlign: "center",
    },

    sendButton: {
        borderRadius: Geometry.radius,
        overflow: "hidden",
        width: 200,
        marginBottom: Geometry.padding,
    },
    sendButtonText: {
        padding: 5,
        backgroundColor: Colors.main,
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
        color: Colors.main,
        textAlign: "center",
        fontSize: 22.5,
        fontWeight: "500",
    }
})