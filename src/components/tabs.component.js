import React, { Component } from 'react';
import { connect } from 'react-redux';
import { UnselectResultAction } from '../store/action/search.actions';
import { TabContent, TabPane, Nav, NavItem, NavLink } from 'reactstrap';
import classnames from 'classnames';
import Iframe from 'react-iframe';

class TabsComponent extends Component {

    constructor(props) {
        super(props);
        this.toggle = this.toggle.bind(this);
        this.state = {
            activeTab: 0
        };
    }

    toggle(tab) {
        if (this.state.activeTab !== tab) {
            this.setState({
                activeTab: tab
            });
        }
    }

    componentWillReceiveProps(props) {
        console.log(props);
        this.setState({
            activeTab: 0
        });
    }

    render() {
        return (
            <div className="f c">
                <Nav tabs>
                    {this.props.selection.map((s, i) => {
                        return (<NavItem key={i}>
                            <NavLink
                                className={classnames({ active: this.state.activeTab === i })}
                                onClick={() => { this.toggle(i); }}>
                                <span className="close" onClick={this.props.unselect.bind(null, s)}>X</span>
                                {this.props.results.find(r => r.pageid === s)['title']}
                            </NavLink>
                        </NavItem>)
                    })}
                </Nav>
                <TabContent activeTab={this.state.activeTab} className="f restrict">
                    {this.props.selection.map((s, i) => {
                        return (
                            <TabPane className="f" tabId={i} key={i}>
                                <Iframe
                                    url={'https://en.wikipedia.org/?curid=' + s}
                                    display="flex"
                                    position="relative"
                                />
                            </TabPane>
                        );
                    })}
                </TabContent>
            </div>
        );
    }
}

const mapStateToProps = state => {
    return {
        selection: state.selection,
        results: state.results
    };
}

const mapDispatchToProps = dispatch => {
    return {
        unselect: pageId => dispatch(UnselectResultAction(pageId))
    };
}

export const Tabs = connect(mapStateToProps, mapDispatchToProps)(TabsComponent);