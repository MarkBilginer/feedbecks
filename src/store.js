import {createStore} from "redux";
import formidReducer from './reducers/formid-reducer';

let store = createStore(formidReducer);

export default store;