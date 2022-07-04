import { useState } from 'react';
import TodoItem from './TodoItem';

const TodoList = () => {
  const [inputs, setInputs] = useState('');
  const [todos, setTodos] = useState([]);
  const onChange = (e) => {
    setInputs(e.target.value);
  };

  const handleSubmit = () => {
    if (inputs !== '') {
      setTodos([
        ...todos,
        {
          id: Date.now(),
          text: inputs,
        },
      ]);
    }

    setInputs('');
  };

  const handleKeyEnter = (e) => {
    if (e.key === 'Enter') handleSubmit();
  };
  const handleDelete = (id) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };

  return (
    <div>
      <h1>오늘의 할 일</h1>
      <input
        type="text"
        placeholder="오늘의 할일을 입력하세요"
        value={inputs}
        onChange={onChange}
        onKeyUp={handleKeyEnter}
      />
      <button onClick={handleSubmit}>추가</button>
      <ul>
        {todos.map((todo) => (
          <TodoItem key={todo.id} todo={todo} handleDelete={handleDelete} />
        ))}
      </ul>
    </div>
  );
};

export default TodoList;
