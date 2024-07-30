import React, { Component } from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import { connect } from 'react-redux';
import * as actions from '../actions';

// Import your components
import Header from './Header';
import Landing from './Landing';
import Dashboard from './Dashboard';
import SurveyNew from './surveys/SurveyNew';
import AIGenerator from './AIGenerator';



class App extends Component {
  componentDidMount(){
    this.props.fetchUser(); //we're calling action creater here

  }
  render(){
    return (
      
        <BrowserRouter>
          <div>
            <Header/>
            <Route exact path = "/" component ={Landing}/> 
            <Route exact path = "/surveys" component ={Dashboard}/>
            <Route path = "/surveys/new" component ={SurveyNew}/>
            <Route path="/ai-generator" component={AIGenerator} />
          </div>
        
        
        </BrowserRouter>
      

    );
  }
};

export default connect(null, actions)(App);
