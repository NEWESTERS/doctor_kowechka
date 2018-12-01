import { StyleSheet } from 'react-native';
import { Colors, Geometry, Fonts } from './StyleVars';

export default styles = StyleSheet.create({
    appContainer: {   
      flex: 1,
      backgroundColor: Colors.background,
    },
    header: {
      height: 45,
      marginVertical: 7.5,
      marginTop: 40,
      marginBottom: -5,
      textAlign: "center",
      ...Fonts.mainHeader,
    },
    routerContainer: {
        backgroundColor: Colors.background,
    },
    bottom: {
      margin: 12.5,
      justifyContent: "flex-end",
    },
    summary: {
      paddingHorizontal: Geometry.padding,
      flex: 1,
      backgroundColor: Colors.background,
    }
  })