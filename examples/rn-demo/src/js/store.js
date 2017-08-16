import {observable} from "mobx";

import Launch from './models/launch.model';
import TopBar from './models/TopBar.model';


const models = {
    launch: new Launch(),
    topBar: new TopBar(),
};

export default observable(models);
