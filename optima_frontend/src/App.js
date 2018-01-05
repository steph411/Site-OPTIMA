import React, { Component } from 'react';
import './App.css';
import { Route, Switch } from 'react-router-dom';
import Header from './containers/Header';
import MainPage from './containers/MainPage';
import DetailsOffres from './components/DetailsOffres';

class App extends Component {
  render() {
    return (
      <div>
         <Header key="header" />
         <Switch>
            <Route path="/" component={MainPage} />
         </Switch>
      </div>
    );
  }
}

export default App;
