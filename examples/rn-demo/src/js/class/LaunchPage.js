/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, {PropTypes, Component} from 'react';
import {observer, inject} from "mobx-react/native";

import {

    StyleSheet,
    Text,
    View,
    Image,
    TouchableOpacity
} from 'react-native';
import {Link} from 'react-router-native';


@observer @inject(["store"])

export default class LaunchPage extends Component {

    componentWillMount() {
        this.props.store.launch.launchActionHandle();
    };
    render() {
        let user = this.props.store.launch.user;
        return (
            <View style={styles.container}>
                <View style={styles.content}>
                    <Image style={styles.logo} source={user.logo}/>
                    <Text style={styles.instructions}>{user.introduce}</Text>
                    <Link to={'/main'} replace={true} component={TouchableOpacity}>
                        <Text style={styles.simpleLink}>link the simple</Text>
                    </Link>
                    <View style={{marginTop: 35}}>
                        <TouchableOpacity onPress={() => {
                            this.props.history.push('/app')
                        }}>
                            <Text style={styles.open}>Open Your's App</Text>
                        </TouchableOpacity>
                    </View>


                </View>

            </View>
        );
    }


}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        // justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#ffffff',
    },
    content: {
        alignItems: 'center',
        backgroundColor: '#ffffff',
        marginTop: 150

    },
    logo: {
        // width:80,
        height: 60,
        resizeMode: Image.resizeMode.center
    },
    instructions: {
        color: '#2c2c2c',
        textAlign: 'center',
        marginTop: 35

    },
    simpleLink: {
        color: '#1781ff',
        textAlign: 'center',
        marginTop: 15,
        textDecorationLine: 'underline'
    },
    open: {
        color: '#1781ff',
        textAlign: 'center',
    }
});

LaunchPage.prototypes = {}

