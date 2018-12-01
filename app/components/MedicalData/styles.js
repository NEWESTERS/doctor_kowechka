import { StyleSheet } from 'react-native'; 
import { Colors, Geometry } from '../../StyleVars';

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
        color: Colors.main,
        textAlign: "center",
        fontSize: 22.5,
        fontWeight: "500",
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
        marginLeft: 20,
        color: Colors.secondary,
        fontSize: 20,
        fontWeight: "300",
        width: 150,
        textAlign: "left",
    },
    parameterValue: {
        color: Colors.main,
        fontWeight: "700",
        fontSize: 30,
        width: 100,
        textAlign: "right",
    }
});