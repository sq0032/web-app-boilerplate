import React, { Component } from 'react';
import logo from '../logo.svg';
import './App.css';

//import List from './List';
import TodoList from '../containers/TodoList';
import TodoHeader from '../containers/TodoHeader';
import Notification from '../containers/Notification';


class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to AAA</h2>
        </div>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
        <Notification />
        <TodoHeader />
        <TodoList />
      </div>
    );
  }
}

export default App;
