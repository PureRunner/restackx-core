import {observable, computed, reaction} from 'mobx';

import {uuid} from '../../utils/Utils';

export default class Launch {

    @observable account;
    @observable user = {};

    launchActionHandle() {
        this.account = uuid();
    }

    constructor() {
        reaction(
            () => this.account,
            account => {
                this.user = {
                    id: "1234567890",
                    name: "restackx-core",
                    password: "123",
                    logo: require('../../resource/restack_logo.png'),
                    introduce: `Welcome to restack-core ${"\n"} for react-native`,
                    account: account
                }
            }
        );
    }
}
