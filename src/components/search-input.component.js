import React, { Component } from 'react';
import { Subject } from 'rxjs';
import { connect } from 'react-redux';
import { Form, FormGroup, Input } from 'reactstrap';
import { SearchStartAction } from '../store/action/search.actions';

class SearchInputCompoent extends Component {
    constructor(props) {
        super(props);
        this.textInput$ = new Subject();
        this.handleChange = this.handleChange.bind(this);
        this.textInput$
            .debounceTime(300)
            .map(t => t.trim())
            .filter(t => t !== '')
            .distinctUntilChanged()
            .subscribe(text => {
                this.props.search(text);
            });
    }

    handleChange({ target }) {
        this.textInput$.next(target.value);
    }

    render() {
        return (
            <Form>
                <FormGroup>
                    <Input
                        type="text"
                        placeholder="Search Wiki"
                        onChange={this.handleChange}/>
                </FormGroup>
            </Form>
        )
    };
}

const mapDispatchToProps = dispatch => {
    return {
        search: query => dispatch(SearchStartAction(query))
    }
}

export const SearchInput = connect(null, mapDispatchToProps)(SearchInputCompoent);