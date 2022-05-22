import {createStore, combineReducers, applyMiddleware} from 'redux';
import * as reducers from './reducers';
import { composeWithDevTools } from 'redux-devtools-extension';
 import thunk from 'redux-thunk';
import * as adverts from '../components/adverts/service';
import * as auth from '../components/auth/service';


const api = { auth, adverts };




const configureStore = (preloaderState, { history }) => {
    const store = createStore(
        combineReducers(reducers),
        preloaderState,
        composeWithDevTools(applyMiddleware(thunk.withExtraArgument({api, history}))),
         );

        //  console.log(store.getState());

    return store;


}




export default configureStore;