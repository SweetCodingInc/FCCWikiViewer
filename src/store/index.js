import { createStore, applyMiddleware } from 'redux';
import { createEpicMiddleware } from 'redux-observable';
import { SearchEpic } from './epic/search.epic';
import { SearchReducer } from './reducer/search.reducer';

const epicMiddleware = createEpicMiddleware(SearchEpic);
const storeWithEpicMiddleware = applyMiddleware(epicMiddleware)(createStore);

export function configureStore() {
    return storeWithEpicMiddleware(SearchReducer);
}

