import {observable, computed, reaction} from 'mobx'
import {uuid} from '../../utils/Utils';

export default class TopBar {

    @observable id;

    @observable routes = [];
    @observable selectPath = "/";

    constructor(){
        const routes = [
            {
                "path":"/",
                "title":"first"
            },{
                "path":"/second",
                "title":"second"
            },{
                "path":"/third",
                "title":"third"
            }
        ];
        this.routes = routes;
    }
    togglePath (path) {
        this.selectPath = path;
    }
    topBarActionHandle (){

    }
}