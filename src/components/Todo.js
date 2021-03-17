import React from 'react';
import './Todo.css';

class Todo extends React.Component {
  constructor(props) {
    super(props);
  }

  done = (id) => {
    this.props.onToggle(id);
    // this.setState(state => ({ isDone: !state.isDone }));
  }

  render () {
    const todoInfo = this.props;
    return (
      <div className="todo">
        <label 
          className={"todo-done-toggle" + (todoInfo.isDone ? " done" : " ing")}
          onClick={() => this.done(todoInfo.id)}
          />
        <div className="todo-contents">
          <div className="todo-subject">{todoInfo.subject}</div>
          <div className="todo-description">{todoInfo.description}</div>
        </div>
        <div className="todo-create-date">{todoInfo.createDate}</div>
      </div>
    );
  }
}

export default Todo;