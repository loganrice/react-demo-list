import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import KanbanBoardContainer from './KanbanBoardContainer';

let cardsList = [
  {
    id: 1,
    title: "Read the book",
    description: "I should read the **whole** book",
    color: '#BD8D31',
    status: "in-progress",
    tasks: []
  },
  {
    id: 2,
    title: "Write some code",
    description: "Code along with the samples in the book. [github](https://github.com/pro-react)",
    status: "todo",
    color: '#3A7E28',
    tasks: [
      {
        id: 1,
        name: "ContactList example",
        done: true
      },
      {
        id: 2,
        name: "kanban Example",
        done: false
      },
      {
        id: 2,
        name: "My own experiments",
        done: false
      }
    ]
  }
]


class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to React!</h2>
        </div>
        <KanbanBoardContainer cards={cardsList}/>
      </div>
    );
  }
}

export default App;
