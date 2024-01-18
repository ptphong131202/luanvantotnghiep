import React, { Component } from 'react';
import { connect } from "react-redux";
import { Redirect, Route, Switch } from 'react-router-dom';
import ManagePatient from '../containers/System/admin/ManagePatient';
import SystemHome from '../containers/System/admin/SystemHome';
import Header from '../containers/Header/Header';
import AddPatient from '../containers/System/admin/AddPatient';
class System extends Component
{
    render ()
    {
        const { systemMenuPath, isLoggedIn } = this.props;
        return (
            <React.Fragment>
                { isLoggedIn && <Header /> }
                <div className="system-container">
                    <div className="system-list">
                        <Switch>
                            {/* patient */ }
                            <Route path="/system/manage-patient" component={ ManagePatient } />
                            <Route path="/system/add-patient" component={ AddPatient } />

                            <Route path="/system/home" component={ SystemHome } />
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
