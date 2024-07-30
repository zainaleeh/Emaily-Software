import React, { Component } from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import { connect } from 'react-redux';
import * as actions from '../actions';

//brouseRouter is the brain of the router
//route sets rules

//dummy components
import Header from './Header';
import Landing from './Landing';
import Dashboard from './Dashboard';
import SurveyNew from './surveys/SurveyNew';
import Loader from './Loader';



class App extends Component {
  componentDidMount() {
    this.props.fetchUser(); //we're calling action creater here

  }
  render() {
    return (
      <BrowserRouter>
        <div>
          <Loader/>
          <Header />
          <Route exact path="/" component={Landing} />
          <Route exact path="/surveys" component={Dashboard} />
          <Route path="/surveys/new" component={SurveyNew} />
        </div>


      </BrowserRouter>

    );
  }
};

export default connect(null, actions)(App);
