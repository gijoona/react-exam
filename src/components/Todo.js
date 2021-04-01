import React from 'react';
import EditModal from './edit/EditModal';
import './Todo.css';

class Todo extends React.Component {
  constructor(props) {
    super(props);
  }

  onToggle = (id) => {
    this.props.onToggle(id);
  }

  onEdit = (todo) => {
    this.props.onEdit(todo);
  }

  onRemove = (id) => {
    this.props.onRemove(id);
  }

  openEditModal = () => {
    this.editModal.onShow();
  }

  render () {
    const todoInfo = this.props;
    return (
      <div>
        <div className="todo-group">
          <div className="todo">
            <label 
              className={"todo-done-toggle" + (todoInfo.isDone ? " done" : " ing")}
              onClick={() => this.onToggle(todoInfo.id)}
              />
            <div className="todo-contents">
              <div className="todo-subject">{todoInfo.subject}</div>
              <div className="todo-description">{todoInfo.description}</div>
            </div>
            <div className="todo-create-date">{todoInfo.createDate}</div>
          </div>
          <div className="todo-btn edit" onClick={() => this.openEditModal()}>수정</div>
          <div className="todo-btn remove" onClick={() => this.onRemove(todoInfo.id)}>삭제</div>
        </div>
        <EditModal {...todoInfo} onRef={ref => this.editModal = ref} onSave={(todo) => this.onEdit(todo)}/>
      </div>
    );
  }
}

export default Todo;