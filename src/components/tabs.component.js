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
            activeTab: {}
        };
    }

    toggle(tab) {
        if (this.state.activeTab.pageid !== tab.pageid) {
            this.setState({
                activeTab: tab
            });
        }
    }

    componentDidMount() {
        this.setState({
            activeTab: this.props.selection[0]
        })
    }

    componentWillReceiveProps(props) {
        const currentTab = this.state.activeTab.pageid;
        const isAvailable = props.selection.find(s => s.pageid === currentTab);
        if (!isAvailable) {
            this.setState({
                activeTab: props.selection[props.selection.length - 1]
            });
        }
    }

    render() {
        return (
            <div className="f c">
                <Nav tabs>
                    {this.props.selection.map(s => {
                        return (<NavItem key={s.pageid}>
                            <NavLink
                                className={classnames({ active: this.state.activeTab.pageid === s.pageid })}
                                onClick={() => { this.toggle(s); }}>
                                <span className="close" onClick={(e) => {e.stopPropagation();this.props.unselect(s)}}>X</span>
                                {s.title}
                            </NavLink>
                        </NavItem>)
                    })}
                </Nav>
                <TabContent activeTab={this.state.activeTab.pageid} className="f restrict">
                    {this.props.selection.map(s => {
                        return (
                            <TabPane className="f" tabId={s.pageid} key={s.pageid}>
                                <Iframe
                                    url={'https://en.wikipedia.org/?curid=' + s.pageid}
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
        unselect: result => dispatch(UnselectResultAction(result))
    };
}

export const Tabs = connect(mapStateToProps, mapDispatchToProps)(TabsComponent);