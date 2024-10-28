// components/TodoList.jsx
import { useSelector, useDispatch } from 'react-redux';
import { toggleTodo, deleteTodo } from '../store/todoSlice';

const TodoList = () => {
  const todos = useSelector((state) => state.todos);
  const dispatch = useDispatch();

  return (
    <ul>
      {todos.map((todo) => (
        <li key={todo.id}>
          <div>
            <strong>{todo.text}</strong> <br />
            <small>Due: {todo.dueDate || 'No due date'}</small> <br />
            <small>Priority: {todo.priority}</small> <br />
            <p>{todo.description}</p>
          </div>
          <span
            onClick={() => dispatch(toggleTodo(todo.id))}
            style={{ textDecoration: todo.completed ? 'line-through' : 'none' }}
          >
            {todo.completed ? 'Completed' : 'Mark Complete'}
          </span>
          <button onClick={() => dispatch(deleteTodo(todo.id))}>Delete</button>
        </li>
      ))}
    </ul>
  );
};

export default TodoList;
