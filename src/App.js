import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import KanbanBoard from './KanbanBoard';

let cardsList = [
  {
    id: 1,
    title: "Read the book",
    description: "I should read the whole book",
    status: "in-progress",
    tasks: []
  },
  {
    id: 2,
    title: "Write some code",
    description: "Code along with the samples in the book",
    status: "todo",
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
        <KanbanBoard cards={cardsList}/>
      </div>
    );
  }
}

export default App;
