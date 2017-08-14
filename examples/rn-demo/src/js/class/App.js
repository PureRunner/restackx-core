

import React, {PropTypes,Component} from 'react';
import {observable, computed, reaction} from 'mobx'
import {observer} from "mobx-react";
import {Link} from 'react-router-native';

import {inject} from "restackx-core/lib/inject";

import {
    StyleSheet,
    Text,
    View,
    TouchableOpacity
} from 'react-native';
import NavBar from "../component/NavBar";

@inject()
@observer
class App extends Component {
    @observable id;

    componentWillMount() {
        // console.log(this.props.launch.user);
    }
    componentDidMount() {
    }
    render() {
        return (
            <View style={{flex:1}}>
                <NavBar title = "RESTACKX"/>
                <View style={styles.container}>
                    <Link replace={true} component={TouchableOpacity} to={'/'}>
                        <Text style={styles.instructions} >RESTACKX CORE FOR {'\n'} REACTNATIVE</Text>

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
        textDecorationLine:'underline'

    },
});

App.prototypes = {
};
export default App