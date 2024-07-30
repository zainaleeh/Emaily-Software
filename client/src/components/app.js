import React, { Component } from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import { connect } from 'react-redux';
import * as actions from '../actions';

// Import your components
import Header from './Header';
import Landing from './Landing';
import Dashboard from './Dashboard';
import SurveyNew from './surveys/SurveyNew';
import AIGenerator from './AIGenerator'; // Make sure the path is correct

class App extends Component {
  componentDidMount(){
    this.props.fetchUser(); // Calling action creator to fetch user data
  }

  render(){
    return (
      <div className="container">
        <BrowserRouter>
          <div>
            <Header />
            <Route exact path="/" component={Landing} />
            <Route exact path="/surveys" component={Dashboard} />
            <Route path="/surveys/new" component={SurveyNew} />
            <Route path="/ai-generator" component={AIGenerator} /> {/* New Route for AI Generator */}
          </div>
        </BrowserRouter>
      </div>
    );
  }
};

export default connect(null, actions)(App);
