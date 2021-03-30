import React from 'react';
import './Todo.css';

class EditModal extends React.Component {
  overlayStyle = {
    backgroundColor: 'black',
    opacity: '0.5',
    width: '100%',
    height: '100%',
    position: 'fixed',
    top: '0px',
    left: '0px',
  }
  
  modalStyle = {
    width: '100%',
    height: '100%',
    position: 'fixed',
    top: '0px',
    left: '0px',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center'
  }
  
  contentStyle = {
    backgroundColor: 'white',
    width: '60%',
    height: '80%',
    border: '1px solid white',
    borderRadius: '3%',
    padding: '20px',
    zIndex: '100',
    display: 'flex',
    flexDirection: 'column',
  }

  constructor (props) {
    super(props);
    this.state = {
      id: props.id,
      subject: '',
      description: '',
      createDate: '',
      display: false
    }
  }

  componentDidMount = () => {
    this.props.onRef(this);
  }

  componentWillUnmount = () => {
    this.props.onRef(undefined);
  }

  onShow = () => {
    this.setState({ display: true });
  }

  onHide = () => {
    this.setState({ display: false });
  }

  onSave = () => {
    this.props.onSave(this.state);
    this.onHide();
  }

  render () {
    return (
      this.state.display? 
        (
          <div>
            <div style={this.modalStyle}>
              <div style={this.overlayStyle} onClick={() => this.onHide()}></div>
              <div style={this.contentStyle}>
                <input type="text" defaultValue={this.props.subject} onChange={(evt) => this.setState({subject: evt.target.value})}/>
                <input type="text" defaultValue={this.props.description} onChange={(evt) => this.setState({description: evt.target.value})}/>
                <input type="text" defaultValue={this.props.createDate} onChange={(evt) => this.setState({createDate: evt.target.value})}/>
                <button onClick={() => this.onSave()}>저장</button>
                <button onClick={() => this.onHide()}>취소</button>
              </div>
            </div>
          </div>
        ) 
        : null
    );
  }
}

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