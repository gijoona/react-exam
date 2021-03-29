import React from "react";
import "./App.css";
import Todos from "./components/Todos";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      todos: [
        {
          id: 1,
          subject: "todo1",
          description: "description1",
          createDate: "20210301120000",
          isDone: false,
        },
        {
          id: 2,
          subject: "todo2",
          description: "description2",
          createDate: "20210302120000",
          isDone: false,
        },
        {
          id: 3,
          subject: "todo3",
          description: "description3",
          createDate: "20210303120000",
          isDone: false,
        },
        {
          id: 4,
          subject: "todo4",
          description: "description4",
          createDate: "20210304120000",
          isDone: false,
        },
        {
          id: 5,
          subject: "todo5",
          description: "description5",
          createDate: "20210305120000",
          isDone: false,
        },
      ],
    };
  }

  toggleTodo = (id) => {
    let tempTodos = [...this.state.todos, ...[]];
    this.setState({
      todos: tempTodos.map((todo) => {
        if (todo.id === id) todo.isDone = !todo.isDone;
        return todo;
      }),
    });
  }

  addTodo = (evt) => {
    if (evt.keyCode === 13) {
      let newTodo = {
        id: this.state.todos.length + 1,
        subject: evt.target.value,
        description: '',
        createDate: '20210323000000',
        isDone: false
      }
      this.setState({ todos: [...this.state.todos, ...[newTodo]]});
      evt.target.value = '';
    }
  }

  editTodo = (todo) => {

  }

  removeTodo = (id) => {
    let tempTodo = this.state.todos;
    this.setState({
      todos: tempTodo.filter(todo => todo.id !== id)
    });
  }

  render() {
    let todos = this.state.todos;
    return (
      <div className="App">
        <section>
          <input className="todo-input" placeholder="할 일을 입력해주세요." onKeyDown={(evt) => this.addTodo(evt)} />
        </section>
        <hr />
        <section>할 일
          <Todos
            todos={todos.filter((todo) => !todo.isDone)}
            onToggleTodo={this.toggleTodo}
            onEditTodo={this.editTodo}
            onRemoveTodo={this.removeTodo}
          />
        </section>
        <section>끝난 일
          <Todos
            todos={todos.filter((todo) => todo.isDone)}
            onToggleTodo={this.toggleTodo}
            onEditTodo={this.editTodo}
            onRemoveTodo={this.removeTodo}
          />
        </section>
      </div>
    );
  }
}

export default App;
