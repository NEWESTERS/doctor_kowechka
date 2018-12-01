import { StyleSheet } from 'react-native'; 
import { Geometry, Fonts } from '../../StyleVars';

export default styles = StyleSheet.create({
    cardContainer: {
        height: 270,
        padding: Geometry.padding,
        backgroundColor: "white",
        borderRadius: Geometry.radius,

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
    }
});