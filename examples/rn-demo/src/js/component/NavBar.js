/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, {Component, PropTypes} from 'react';
import {
    StyleSheet,
    Text,
    View,
} from 'react-native';

class NavBar extends Component {
    componentWillMount() {

    }

    render() {
        return (
            <View style={styles.navContainer}>
                <Text style={styles.title}>{this.props.title}</Text>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    navContainer: {
        height: 60,
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'row',
        backgroundColor: '#ffffff',
        shadowOpacity: 0.3,
        shadowOffset: {width: 2, height: 2},
        shadowColor: '#000000',
    },
    title: {
        fontSize: 17,
        fontWeight: ('bold'),
        color: "#272727",
        marginTop: 10,
    },
    left: {},
    right: {}
});
NavBar.prototypes = {
    title: PropTypes.string
}
export default NavBar;
