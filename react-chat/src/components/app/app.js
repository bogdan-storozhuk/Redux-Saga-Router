import React, {Component} from "react";

import Chat from '../chat';
import UserList from '../pages/userList';
import login from '../pages/login';
import EditMessage from '../pages/editMessage';
import './app.css';
import ErrorBoundry from '../error-boundry';
import {Route, Switch } from 'react-router-dom';

import { connect } from 'react-redux';

 export default class App extends Component{



  render(){

    return (
      <ErrorBoundry>
        <Switch>
        <Route
            path="/login"
            component={login}
            exact />
             <Route path="/editMessage"
            component={EditMessage }
            exact />
        <Route
            path="/"
            component={Chat}
            exact />
        <Route path="/userlist"
            component={UserList}
            exact />
        </Switch>
        </ErrorBoundry>
    );
  }
}
