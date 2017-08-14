import React, {Component, PropTypes} from 'react';

import {inject} from "restackx-core/lib/inject"
import {
    View,
    StyleSheet,
    Text,
    TouchableOpacity
} from 'react-native';

import CustomLink from './CustomLink';
@inject()
class TopBar extends Component {

    renderItem() {
        let comArr = [];
        let routes = this.props.topBar.routes ? this.props.topBar.routes : [];
        for (let i = 0; i < routes.length; i++) {
            let route = routes[i],
                color = this.props.topBar.selectPath === route.path ? "#4e5eff" : "#2c2c2c";
            comArr.push(
                <CustomLink key={i} width={80} height={40} color={color} title={route.title}
                            onLink={() => {
                                this.props.topBar.togglePath(route.path);
                            }}/>
            );
        }
        return comArr;
    }

    render() {
        return (
            <View style={styles.container}>
                <View style={styles.menuBar}>
                    {this.renderItem()}
                </View>
            </View>


        )

    }
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: "#f6f6f6",
        height: 40,
        marginTop: 20,
        justifyContent: 'center',

    },
    menuBar: {
        justifyContent: 'space-around',
        // backgroundColor: "#6050f6",
        flexDirection: 'row',


    }
})

TopBar.propTypes = {
    routes: PropTypes.array,
}

export default TopBar;


