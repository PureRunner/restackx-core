import {observable, computed, reaction} from 'mobx';

export default class TopBar {

    @observable id;
    @observable routes = [];
    @observable selectPath = "/";

    constructor(){
        this.routes = [
            {
                path:"/",
                title:"first",
                selected:true,
            },{
                path:"/second",
                title:"second",
                selected:false,
            },{
                path:"/third",
                title:"third",
                selected:false
            }
        ];
    }
    togglePath (path) {
        for (let i = 0; i <  this.routes.length; i++) {
            let route = this.routes[i];
            route.selected = path === route.path;
        }
        this.selectPath = path;
    }

    topBarActionHandle (){

    }
}