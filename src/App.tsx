import './App.css';
import Home from './pages/Home';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import TodosPage from './pages/TodosPage';
import NewTodosPage from './pages/NewTodosPage';
import EditTodoPage from './pages/EditTodoPage';
function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/todos' element={<TodosPage />} />
          <Route path='/todos/:id' element={<EditTodoPage />} />

          <Route path='/addtodos' element={<NewTodosPage />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
