import React, { Component } from 'react';

import Sidebar from './sidebar';
import Dashboard from './dashboard';
import NewLicence from './newlicense';
import Licence from './license';
import {BrowserRouter as Router, Route, Switch, useRouteMatch } from 'react-router-dom';
import License from './license';

const Home = function() {
    let match = useRouteMatch();
    return(
        <div className='row'>
            <div className='col-md-2'>
                <Sidebar/>
            </div>
            <div className='col-md'>
                <Switch>
                    <Route path={"/"} exact> 
                        <Dashboard/>
                    </Route>
                    <Route path={`/add`} exact> 
                        <NewLicence/>
                    </Route>
                    <Route path={"/licence/:id"} component={License}/>
                </Switch>
            </div>
        </div>
    )
}

export default Home;