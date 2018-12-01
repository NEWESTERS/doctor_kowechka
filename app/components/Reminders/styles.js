import { StyleSheet } from 'react-native';
import { Colors, Geometry } from '../../StyleVars';

export default styles = StyleSheet.create({
    cardContainer: {
        marginTop: Geometry.padding,
        height: 130,
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
    },
    reminderText: {
        marginLeft: 15,
        color: Colors.secondary,
        fontSize: 20,
        fontWeight: "300",
        width: 300,
        textAlign: "left",
    },
})