// import {observable, computed, reaction} from 'mobx'
// import {handleModels} from './src/native'
// const modelContext = require.context('../', true, /.model.js$/)
// var models = handleModels(modelContext)


import Launch from './models/launch.model';
import TopBar from './models/TopBar.model';

const models = {
    "launch": new Launch(),
    "topBar": new TopBar(),

}
export default models;
    