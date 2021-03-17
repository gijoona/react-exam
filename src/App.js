import logo from './logo.svg';
import './App.css';
import Todos from './components/Todos';

const todos = [
  {
    id: 1,
    subject: 'todo1',
    description: 'description1',
    createDate: '20210301120000',
    isDone: false
  }, {
    id: 2,
    subject: 'todo2',
    description: 'description2',
    createDate: '20210302120000',
    isDone: false
  }, {
    id: 3,
    subject: 'todo3',
    description: 'description3',
    createDate: '20210303120000',
    isDone: false
  }, {
    id: 4,
    subject: 'todo4',
    description: 'description4',
    createDate: '20210304120000',
    isDone: false
  }, {
    id: 5,
    subject: 'todo5',
    description: 'description5',
    createDate: '20210305120000',
    isDone: false
  }
];

function test(id) {
  console.log('call Root Function', id);
  todos = todos.map((todo) => {
    if (todo.id === id) todo.isDone = !todo.isDone;
  })
}

function App() {
  return (
    <div className="App">
      <div>할 일</div>
      <Todos todos={todos.filter(todo => !todo.isDone)} onToggleTodoDone={test}/>
      <div>끝난 일</div>
      <Todos todos={todos.filter(todo => todo.isDone)} onToggleTodoDone={test}/>
    </div>
  );
}

export default App;
