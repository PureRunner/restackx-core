import React, {Component} from 'react';
import {View} from 'react-native';
import {Route} from 'react-router-native';
import {Switch} from 'react-router';

import Main from './class/MainPage';
import LaunchPage from './class/LaunchPage';
import AppPage from './class/AppPage';

const Routes = (
    <View style={{flex: 1}}>
        <Switch>
            <Route exact path="/" component={LaunchPage}/>
            <Route path="/app" component={AppPage}/>
            <Route path="/main" component={Main}/>
        </Switch>
    </View>
);

export default Routes;




