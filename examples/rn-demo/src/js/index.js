import React from 'react'
import Routers from './routes';
import Store from './store';
import App from "./App";

export function setup() {
    class Root extends React.Component {
        render() {
            return (
                <App store={Store} routes={Routers}/>
            )
        }
    }

    return Root;
}


