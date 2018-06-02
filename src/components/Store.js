import { createStore } from 'redux';
import formidReducer from '../reducers/formid-reducer';

const Store = createStore(formidReducer);

export default Store;
