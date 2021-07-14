import React, { Component } from 'react'
import './App.css';
import AddTask from './Components/AddTask/AddTask';
import TaskList from './Components/TaskList/TaskList';
export class App extends Component {
  state={
    tasklist:[
      {
      id:0,
      task:"learn html",
      isDone:true 
    },
    {
      id:1,
      task:"learn es6",
      isDone:true 
    },
    {
      id:2,
      task:"learn back-end",
      isDone:false
    }]
  };
  handleDelete=(idTask)=>{
    this.setState({ tasklist:this.state.tasklist.filter((elt) =>elt.id !==idTask)  });
  }
  handleComplete=(idTask)=>{
    this.setState({ tasklist:this.state.tasklist.map((elt)=>elt.id===idTask ? {...elt,isDone:!elt.isDone} : elt)  });
  }
  handleAdd=(newtask)=>{
    if(newtask){
      this.setState({ tasklist:[...this.state.tasklist,{id:Math.random(),task:newtask, isDone:false}]  });
    }
    else{
      alert("please enter your task")
    }
  }
  render() {
    return (
      <div className="app">
        <h1>todo app</h1>
        <AddTask handleAdd={this.handleAdd}/>
        <TaskList list={this.state.tasklist}
        handleDelete={this.handleDelete}
        handleComplete={this.handleComplete}/>
      </div>
    )
  }
}

export default App

