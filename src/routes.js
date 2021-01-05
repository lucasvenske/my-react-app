import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import List from './views/SearchList/searchlist.jsx';
import QuestionRegister from './views/QuestionRegister/questionregister.jsx';

const Routes = () => {
    return(
        <BrowserRouter>
            <Switch>
                <Route exact path="/" component={List}/>
                <Route exact path="/question-register" component={QuestionRegister}/>
            </Switch>
        </BrowserRouter>
    );
}

export default Routes;