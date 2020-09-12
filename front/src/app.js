
import React from 'react';
import { Route, 
         BrowserRouter  as Router} from 'react-router-dom';

import Home from './components/home';

export default () => {
    return (<div className='container-fluid'>
        <Router>
            <Route path="/"  component= { Home }/>
        </Router>
    </div>)
}