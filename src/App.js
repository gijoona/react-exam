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

  test = (id) => {
    console.log("call Root Function", id);
    this.setState((state) => ({
      todos: state.todos.map((todo) => {
        if (todo.id === id) todo.isDone = !todo.isDone;
        return todo;
      }),
    }));
    console.log(this.state.todos);
  };

  render() {
    const todos = this.state.todos;
    return (
      <div className="App">
        <div>할 일</div>
        <Todos
          todos={todos.filter((todo) => !todo.isDone)}
          onToggleTodoDone={this.test}
        />
        <div>끝난 일</div>
        <Todos
          todos={todos.filter((todo) => todo.isDone)}
          onToggleTodoDone={this.test}
        />
      </div>
    );
  }
}

export default App;
