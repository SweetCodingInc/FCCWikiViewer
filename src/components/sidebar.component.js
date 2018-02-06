import React from 'react';
import { SearchInput } from './search-input.component';
import {SearchOutput} from './search-output.component';

export const Sidebar = () => {
    return (
        <div className="full f c">
            <div className="search-input">
                <SearchInput/>
            </div>
            <div className="f full">
                <SearchOutput/>
            </div>
        </div>
    );
}