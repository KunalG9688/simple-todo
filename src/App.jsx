import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import HomePage from './pages/HomePage';
import TodoPage from './pages/TodoPage';
import './App.css'

const App = () => (
  <Router>
    <nav>
      <Link to="/">Home</Link>
      <Link to="/todo">Todo Page</Link>
    </nav>
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/todo" element={<TodoPage />} />
    </Routes>
  </Router>
);

export default App;
