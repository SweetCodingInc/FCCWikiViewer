import { Observable } from 'rxjs';
import { fetchResult } from '../../services/search.service';
import {
    SEARCH_ACTION_CONSTANTS,
    SearchSuccessAction,
    SearchFailureAction
} from '../action/search.actions';
import 'rxjs/add/operator/mergeMap';

export const SearchEpic = actions$ =>
    actions$.ofType(SEARCH_ACTION_CONSTANTS.SEARCH_START)
        .mergeMap(action =>
            fetchResult(action.payload)
                .map(result => SearchSuccessAction(result))
                .catch(error => Observable.of(SearchFailureAction(error))));