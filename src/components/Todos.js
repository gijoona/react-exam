import React from 'react';
import Todo from './Todo';

class Todos extends React.Component {
  constructor(props) {
    super(props);
  }

  onToggleDone = (id) => {
    console.log('call onToggleDone', id);
    this.props.onToggleTodoDone(id);
  }

  render () {
    return (
      <div className="todos">
        {this.props.todos.map((todo) => {
          return (
            <Todo key={todo.id}
              id={todo.id} 
              subject={todo.subject} 
              description={todo.description}
              createDate={todo.createDate}
              isDone={todo.isDone}
              onToggle={(id) => this.onToggleDone(id)}
            />)
        })}
      </div>
    );
  }
}

export default Todos;