import React, { Component } from 'react';
import List from './List';

class KanbanBoard extends Component {
  render(){
    return (
      <div>
        <List id='todo' title='To Do' cards= {
          this.props.cards.filter((card) => card.status === "todo")
        } />
        <List id='in-progress' title='In Progress' cards= {
          this.props.cards.filter((card) => card.status === "in-progress")
        } />
        <List id='done' title='In Progress' cards= {
          this.props.cards.filter((card) => card.status === "done")
        } />
      </div>
    )
  }
}

export default KanbanBoard;
