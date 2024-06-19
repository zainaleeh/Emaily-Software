import React, { Component } from 'react';
import { BrowserRouter, Route } from 'react-router-dom'; 
import {connect} from 'react-redux';
import * as actions from '../actions';
//brouseRouter is the brain of the router
//route sets rules

//dummy components
import Header from './Header';
const Dashboard = () => <h2>Dashboard</h2>;
const SurveyNew = () => <h2>SurveyNew</h2>;
const Landing = () => <h2>Landing</h2>;

class App extends Component {
  componentDidMount(){
    this.props.fetchUser(); //we're calling action creater here

  }
  render(){
    return (
      <div className = "container">
        <BrowserRouter>
          <div>
            <Header/>
            <Route exact path = "/" component ={Landing}/> 
            <Route exact path = "/surveys" component ={Dashboard}/>
            <Route path = "/surveys/new" component ={SurveyNew}/>
          </div>
        
        
        </BrowserRouter>
      </div>

    );
  }
};

export default connect(null, actions)(App);
