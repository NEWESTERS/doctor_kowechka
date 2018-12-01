import { StyleSheet } from 'react-native'; 
import { Geometry, Fonts } from '../../StyleVars';

export default styles = StyleSheet.create({
    medicalDataContainer: {
        alignItems: "center",
        paddingHorizontal: Geometry.padding,
    },

    cardContainer: {
        marginBottom: Geometry.padding,
        padding: Geometry.padding,
        backgroundColor: "white",
        borderRadius: Geometry.radius,
        width: "100%",

        shadowOffset: {
            width: 0,
            height: 4,
        },
        shadowOpacity: 0.15,
        shadowRadius: 5.46,
        
        elevation: 9,
    },
    cardHeader: {
        ...Fonts.cardHeader,
        textAlign: "center",
    },
    parameter: {
        flex: 1,
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        height: 40,
        marginTop: 15,
        marginBottom: 15,
    },
    parameterImage: {
        width: 50,
        height: 40,
    },
    parameterName: {
        marginLeft: 10,
        ...Fonts.cardText,
        width: 150,
        textAlign: "left",
    },
    parameterValue: {
        ...Fonts.mainHeader,
        width: 100,
        textAlign: "right",
    },

    reminder: {
        flex: 1,
        flexDirection: "row",
        justifyContent: "flex-start",
        alignItems: "center",
        height: 40,
        marginTop: 15,
        marginBottom: 15,
    },
    reminderImage: {
        width: 50,
        height: 40,
        marginRight: 15,
    },
    reminderText: {
        ...Fonts.cardText,
        width: 300,
        textAlign: "left",
    },
});