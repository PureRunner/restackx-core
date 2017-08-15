import React, {PropTypes, Component} from 'react';
import {observable, computed, reaction} from 'mobx'
import {observer,inject} from "mobx-react";

import {
    StyleSheet,
    Text,
    View,
} from 'react-native';

@inject(["store"])
export class FirstPage extends Component {

    componentDidMount() {
        reaction(
            ()=> this.props.store.topBar.selectPath,
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






@inject(["store"])
export class SecondPage extends Component {

    render() {
        return (
            <View style={styles.second}>
                <Text style={styles.text}>Second</Text>
            </View>
        );
    }
}


@inject(["store"])
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

