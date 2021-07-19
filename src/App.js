import React, { Component } from 'react'
import './App.css';
import AddTask from './Components/AddTask/AddTask';
import TaskList from './Components/TaskList/TaskList';
export class App extends Component {


  render() {
    return (
      <div className="app">
        <h1>todo app</h1>
        <AddTask />
        <TaskList />
      </div>
    )
  }
}

export default App

