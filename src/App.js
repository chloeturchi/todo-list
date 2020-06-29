import React from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';

import Layout from './hoc/Layout/Layout';
import TodoListApp from './components/TodoListApp';
import Auth from './containers/Auth/Auth';
import Logout from './containers/Auth/Logout/Logout';

const app = () => {
    let routes = (
        <Switch>
            <Route path="/" exact component={TodoListApp}/>
            <Route path="/auth" exact component={Auth}/>
            <Route path="/logout" component={Logout} />
        </Switch>
    )

    return (
        <Layout>
            {routes}
        </Layout>
    )
}

export default app;
