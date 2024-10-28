import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addTodo } from '../store/todoSlice';

const TodoForm = () => {
    const [text, setText] = useState('');
    const [dueDate, setDueDate] = useState('');
    const [priority, setPriority] = useState('Low');
    const [description, setDescription] = useState('');
    const dispatch = useDispatch();

    const handleSubmit = (e) => {
        e.preventDefault();
        if (text) {
          dispatch(addTodo({ text, dueDate, priority, description }));
          setText('');
          setDueDate('');
          setPriority('Low');
          setDescription('');
        }
      };
  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        value={text}
        onChange={(e) => setText(e.target.value)}
        placeholder="Todo title"
      />
      <input
        type="date"
        value={dueDate}
        onChange={(e) => setDueDate(e.target.value)}
      />
      <select value={priority} onChange={(e) => setPriority(e.target.value)}>
        <option value="Low">Low</option>
        <option value="Medium">Medium</option>
        <option value="High">High</option>
      </select>
      <textarea
        value={description}
        onChange={(e) => setDescription(e.target.value)}
        placeholder="Description"
      ></textarea>
      <button type="submit">Add Todo</button>
    </form>
  )
}

export default TodoForm