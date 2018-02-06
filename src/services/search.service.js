import { get } from 'axios';
import { values } from 'lodash';
import { Observable } from 'rxjs/Observable';

const url = q => `https://en.wikipedia.org/w/api.php?format=json&action=query&generator=search&gsrnamespace=0&gsrlimit=10&prop=pageimages|extracts&pilimit=max&exintro&explaintext&exsentences=1&exlimit=max&origin=*&gsrsearch=${q}`;

export function fetchResult(searchTerm) {
    return Observable.fromPromise(get(url(searchTerm)))
        .map(response => values(response.data.query.pages));
}