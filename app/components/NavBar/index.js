import React, {Component} from 'react';
import { StyleSheet, View, TouchableOpacity, Image } from 'react-native';

import { Geometry } from '../../StyleVars';

export default class NavBar extends Component {
    render() {
        return(
            <View style={styles.navBarContainer}>
                <TouchableOpacity onPress={ () => this.props.changeTab("summary") }>
                {   
                    this.props.currentTab == "summary" ?
                    <Image style={styles.image} resizeMode="contain"
                        source={ require('../../../assets/images/notes-medical-active.png') } />:
                    <Image style={styles.image} resizeMode="contain"
                        source={ require('../../../assets/images/notes-medical.png') } />
                }
                </TouchableOpacity>

                <View style={styles.ellipse}>
                    <TouchableOpacity onPress={ () => this.props.changeTab("calldoctor") }>
                    {   
                        this.props.currentTab == "calldoctor" ?
                        <Image style={styles.image} resizeMode="contain"
                            source={ require('../../../assets/images/user-md-active.png') } />:
                        <Image style={styles.image} resizeMode="contain"
                            source={ require('../../../assets/images/user-md.png') } />
                    }
                    </TouchableOpacity>
                </View>

                <TouchableOpacity onPress={ () => this.props.changeTab("preferences") }>
                    {   
                        this.props.currentTab == "preferences" ?
                        <Image style={styles.image} resizeMode="contain"
                            source={ require('../../../assets/images/cog-active.png') } />:
                        <Image style={styles.image} resizeMode="contain"
                            source={ require('../../../assets/images/cog.png') } />
                    }
                </TouchableOpacity>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    navBarContainer: {
        height: 60,
        backgroundColor: "white",
        borderRadius: Geometry.radius,
        marginTop: -20,

        shadowOffset: {
            width: 0,
            height: 4,
        },
        shadowOpacity: 0.25,
        shadowRadius: 7,     
        elevation: 15,

        flexDirection: "row",
        justifyContent: "space-around",
        alignItems: "center",
    },
    image: {
        width: 40,
        height: 40,
    },
    ellipse: {
        backgroundColor: "white",
        width: 75,
        height: 75,
        borderRadius: 75,
        justifyContent: "center",
        alignItems: "center",
    }
})