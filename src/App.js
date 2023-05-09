// import logo from './logo.svg';
import './Styles/App.css';
// import  TodoItem from './components/TodoItem.jsx'
import TodosLogic from './components/TodosLogic.jsx';
import Header from './components/Header.jsx'

function App() {
  return (
    <div className="wrapper">
    <div className="todos">
    < Header/>
      <TodosLogic />
    </div>
  </div>
  );
}

export default App;
