import React from 'react';
import { connect } from 'react-redux';
import { ListGroup, ListGroupItem, Alert } from 'reactstrap';
import { SelectResultAction } from '../store/action/search.actions';

const Error = ({ error }) => {
    console.log(error);
    return (
        <Alert color="danger">
            {error.message}
        </Alert>
    );
}

const ResultList = (props) => {
    const { results, cb } = props;
    return (
        <div className="f">
            {results.length > 0 &&
                <ListGroup>
                    {
                        results.map((result, i) => <ListGroupItem key={i} tag="a" href="#" onClick={cb.bind(null, result.pageid)}>{result.title}</ListGroupItem>)
                    }
                </ListGroup>
            }
            {
                results.length === 0 && <span>No results found </span>
            }
        </div>
    );
}

const SearchOutputCompoent = (props) => {
    return (
        <div className="f">
            {props.active && <span>Loading...</span>}
            {!props.active && props.error && <Error error={props.error} />}
            {!props.active && !props.error && <ResultList results={props.results} cb={props.select}/>}
        </div>
    );
};

const mapStateToProps = state => {
    return {
        active: state.active,
        results: state.results,
        error: state.error
    }
};

const mapDispatchToProps = dispatch => {
    return {
        select: pageId => dispatch(SelectResultAction(pageId))
    }
}

export const SearchOutput = connect(mapStateToProps, mapDispatchToProps)(SearchOutputCompoent);