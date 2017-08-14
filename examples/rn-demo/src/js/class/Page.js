import React, {PropTypes, Component} from 'react';
import {observable, computed, reaction} from 'mobx'
import {inject} from "restackx-core/lib/inject";

import {
    StyleSheet,
    Text,
    View,
} from 'react-native';

@inject("topBar")
export class FirstPage extends Component {

    componentDidMount() {
        reaction(
            ()=> this.props.topBar.selectPath,
            path => {
                this.props.history.replace(path)
            }
        );
    }
    render() {
        return (
            <View style={styles.first}>
                <Text style={styles.text}>first</Text>
            </View>
        );
    }
}






@inject("topBar")
export class SecondPage extends Component {

    render() {
        return (
            <View style={styles.second}>
                <Text style={styles.text}>Second</Text>
            </View>
        );
    }
}


@inject("topBar")
export class ThirdPage extends Component {
    render() {
        return (
            <View style={styles.third}>
                <Text style={styles.text}>third</Text>
            </View>
        );
    }
}
const styles = StyleSheet.create({
    first: {
        flex: 1,
        backgroundColor: '#ffc7bb',
    },
    second: {
        flex: 1,
        backgroundColor: '#ac96ff',
    },
    third: {
        flex: 1,
        backgroundColor: '#ff9a81',
    },
    text: {
        margin:80,
        textAlign:"center",
        justifyContent: 'space-around',
        color: '#3768ff',
        fontSize: 20,
        fontWeight:("bold"),
        fontStyle:"italic",
        fontFamily:'Georgia'
}
});

