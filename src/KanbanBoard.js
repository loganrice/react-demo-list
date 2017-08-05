import React, { Component } from 'react';
import List from './List';
import { DragDropContext } from 'react-dnd';
import HTML5Backend from 'react-dnd-html5-backend';

class KanbanBoard extends Component {
  render(){
    return (
      <div>
        <List id='todo' title='To Do' 
          taskCallbacks={this.props.taskCallbacks} 
          cardCallbacks={this.props.cardCallbacks} 
          cards= {this.props.cards.filter((card) => card.status === "todo")} />

        <List id='in-progress' title='In Progress' 
          taskCallbacks={this.props.taskCallbacks} 
          cardCallbacks={this.props.cardCallbacks} 
          cards= {this.props.cards.filter((card) => card.status === "in-progress")} />

        <List id='done' title='Done' 
          taskCallbacks={this.props.taskCallbacks} 
          cardCallbacks={this.props.cardCallbacks} 
          cards= {this.props.cards.filter((card) => card.status === "done")} />
      </div>
    )
  }
}

export default DragDropContext(HTML5Backend)(KanbanBoard);
