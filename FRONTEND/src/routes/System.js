import React, { Component } from 'react';
import { connect } from "react-redux";
import { Redirect, Route, Switch } from 'react-router-dom';
import UserRedux from '../containers/System/admin/UserRedux';
class System extends Component
{
    render ()
    {
        /* { this.props.isLoggedIn && <Header /> } */
        const { systemMenuPath, isLoggedIn } = this.props;
        return (
            <React.Fragment>
                { isLoggedIn && <Header /> }
                <div className="system-container">
                    <div className="system-list">
                        <Switch>
                            <Route path="/system/user-redux" component={ UserRedux } />
                            <Route component={ () => { return ( <Redirect to={ systemMenuPath } /> ) } } />
                        </Switch>
                    </div>
                </div>
            </React.Fragment>
        );
    }
}

const mapStateToProps = state =>
{
    return {
        systemMenuPath: state.app.systemMenuPath,
        isLoggedIn: state.user.isLoggedIn
    };
};

const mapDispatchToProps = dispatch =>
{
    return {
    };
};

export default connect( mapStateToProps, mapDispatchToProps )( System );