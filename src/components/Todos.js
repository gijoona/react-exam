import React from 'react';
import Todo from './Todo';

class Todos extends React.Component {
  constructor(props) {
    super(props);
  }

  onToggleTodo = (id) => {
    this.props.onToggleTodo(id);
  }

  onEditTodo = (todo) => {
    this.props.onEditTodo(todo);
  }

  onRemoveTodo = (id) => {
    this.props.onRemoveTodo(id);
  }

  render () {
    return (
      <div className="todos">
        {this.props.todos.map((todo) => {
          return (
            <Todo key={todo.id}
              {...todo}
              onToggle={(id) => this.onToggleTodo(id)}
              onEdit={(todo) => this.onEditTodo(todo)}
              onRemove={(id) => this.onRemoveTodo(id)}
            />)
        })}
      </div>
    );
  }
}

export default Todos;