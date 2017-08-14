
import React, {PropTypes,Component} from 'react';
import {observable, computed, reaction} from 'mobx'
import {observer} from "mobx-react";
import {Link,NativeRouter,Route} from 'react-router-native';
import TopBar from '../component/TopBar'
import {inject} from "restackx-core/lib/inject";

import {
    StyleSheet,
    Text,
    View,
    TouchableOpacity
} from 'react-native';
import {FirstPage,SecondPage,ThirdPage} from "./Page"

@inject()
@observer
class Main extends Component {
    @observable id;

    componentWillMount() {
    }
    render() {
        let routes = this.props.topBar.routes;
        return (
            <View style={styles.container}>
                <NativeRouter>
                    <View style={{flex:1}}>
                        <TopBar/>
                        <Route exact path={routes[0].path} component={FirstPage}/>
                        <Route path={routes[1].path} component={SecondPage}/>
                        <Route path={routes[2].path} component={ThirdPage}/>
                    </View>
                </NativeRouter>

                <Link replace={true} component={TouchableOpacity} to={'/'}>
                    <Text style={styles.back} >back</Text>
                </Link>
            </View>


        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        // justifyContent: 'center',
        // alignItems: 'center',
        // backgroundColor: '#ffb283',
    },
    back: {
        color: '#376aff',
        fontSize: 16,
        textAlign: 'center',

    }
});

Main.prototypes = {
}
export default Main;



