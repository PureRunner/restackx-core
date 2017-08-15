import React, {Component} from 'react'
import {NativeRouter} from 'react-router-native'
import {Provider} from 'mobx-react'

class App extends Component {
    render() {
        return (
            <Provider store={this.props.store}>
                <NativeRouter>
                    {this.props.routes}
                </NativeRouter>
            </Provider>
        )
    }
}

export default App;