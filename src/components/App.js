import React, { Component } from 'react';
import logo from '../logo.svg';
import './App.css';

import TodoList from './TodoList';
import TodoItem from './TodoItem';

const todos = [
  "todo 1",
  "todo 2",
  "todo 3",
]

const onClickToRemove = () => {}

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
        <TodoList todos={todos} onClickToRemove={onClickToRemove}/>
      </div>
    );
  }
}

export default App;
