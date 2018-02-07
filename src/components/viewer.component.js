import React from 'react';
import { connect } from 'react-redux';
import { UnselectResultAction } from '../store/action/search.actions';
import { Tabs } from './tabs.component';



const ViewerComponent = (props) => {
    return (
        <div className="f c viewer">
            {props.selection.length === 0 && <span>No results selected</span>}
            {props.selection.length > 0 && <Tabs />}
        </div>
    );
}

const mapStateToProps = state => {
    return {
        selection: state.selection
    }
}

const mapDispatchToProps = dispatch => {
    return {
        unselect: result => dispatch(UnselectResultAction(result))
    }
}



export const Viewer = connect(mapStateToProps, mapDispatchToProps)(ViewerComponent);