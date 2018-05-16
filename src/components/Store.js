import {createStore} from "redux";
import formidReducer from '../reducers/formid-reducer';

let Store = createStore(formidReducer);

export default Store;