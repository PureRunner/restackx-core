import React, {PropTypes, Component} from 'react';
import {observable, computed, reaction} from 'mobx'
import {observer, inject} from "mobx-react";
import {Link, NativeRouter} from 'react-router-native';
import {Route} from "react-router"
import {
    StyleSheet,
    Text,
    View,
    TouchableOpacity
} from 'react-native';

import TopBar from '../component/TopBar'
import {FirstPage, SecondPage, ThirdPage} from "./Page";


@observer @inject(["store"])
export default class MainPage extends Component {
    @observable id;

    componentWillMount() {
    }

    render() {
        let routes = this.props.store.topBar.routes;
        return (
            <View style={styles.container}>
                <NativeRouter>
                    <View style={{flex: 1}}>
                        <TopBar routes={routes} toggleChildAction={(path) => {
                            this.props.store.topBar.togglePath(path)
                        }}/>
                        <Route exact path={routes[0].path} component={FirstPage}/>
                        <Route path={routes[1].path} component={SecondPage}/>
                        <Route path={routes[2].path} component={ThirdPage}/>
                    </View>
                </NativeRouter>

                <Link replace={true} component={TouchableOpacity} to={'/'}>
                    <Text style={styles.back}>back</Text>
                </Link>
            </View>


        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    back: {
        color: '#376aff',
        fontSize: 16,
        textAlign: 'center',

    }
});

MainPage.prototypes = {};




