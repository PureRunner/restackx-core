import React, {PropTypes, Component} from 'react';
import {observer, inject} from "mobx-react/native";
import {Link} from 'react-router-native';

import {
    StyleSheet,
    Text,
    View,
    TouchableOpacity
} from 'react-native';
import NavBar from "../component/NavBar";

@observer
export default class AppPage extends Component {
    componentWillMount() {
    };

    componentDidMount() {

    };
    render() {
        return (
            <View style={{flex: 1}}>
                <NavBar title="RESTACKX"/>
                <View style={styles.container}>
                    <Link replace={true} component={TouchableOpacity} to={'/'}>
                        <Text style={styles.instructions}>RESTACKX CORE FOR {'\n'} REACTNATIVE</Text>

                    </Link>
                </View>
            </View>

        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    instructions: {
        color: '#7199ff',
        textAlign: 'center',
        textDecorationLine: 'underline'

    },
});

AppPage.prototypes = {};
