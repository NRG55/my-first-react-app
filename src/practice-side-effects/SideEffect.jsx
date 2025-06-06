import { useEffect, useState } from "react";

export default function Clock() {
  const [counter, setCounter] = useState(0);

  useEffect(() => {
    setInterval(() => {
      setCounter(count => count + 1)
    }, 1000);
  }, [])

  return (
    <p>{counter} seconds have passed.</p>
  );
}

// useEffect(() => {
//   // This runs after every render
// });

// useEffect(() => {
//   // This runs only on mount (when the component appears)
// }, []);

// useEffect(() => {
//   // This runs on mount *and also* if either a or b have changed since the last render
// }, [a, b]);

// useEffect(
//   () => {
//     // execute side effect
//     return () => {
//       // cleanup function on unmounting or re-running effect
//     }
//   },
//   // optional dependency array
//   [/* 0 or more entries */]
// )

export function Clock2() {
  const [counter, setCounter] = useState(0);

  useEffect(() => {
    const key = setInterval(() => {
      setCounter(count => count + 1)
    }, 1000);

    return () => {
      clearInterval(key);
    };
  }, [])

  return (
    <p>{counter} seconds have passed.</p>
  );
}
//------------TODO LIST-------------
let nextId = 0;

function createTodo(text, completed = false) {
  return {
    id: nextId++,
    text,
    completed
  };
}

const initialTodos = [
  createTodo('Get apples', true),
  createTodo('Get oranges', true),
  createTodo('Get carrots'),
];

export function TodoList() {
  const [todos, setTodos] = useState(initialTodos);
  const [showActive, setShowActive] = useState(false);
  const activeTodos = todos.filter(todo => !todo.completed);
  const visibleTodos = showActive ? activeTodos : todos;

  return (
    <>
      <label>
        <input
          type="checkbox"
          checked={showActive}
          onChange={e => setShowActive(e.target.checked)}
        />
        Show only active todos
      </label>
      <NewTodo onAdd={newTodo => setTodos([...todos, newTodo])} />
      <ul>
        {visibleTodos.map(todo => (
          <li key={todo.id}>
            {todo.completed ? <s>{todo.text}</s> : todo.text}
          </li>
        ))}
      </ul>
      <footer>
        {activeTodos.length} todos left
      </footer>
    </>
  );
}

function NewTodo({ onAdd }) {
  const [text, setText] = useState('');

  function handleAddClick() {
    setText('');
    onAdd(createTodo(text));
  }

  return (
    <>
      <input value={text} onChange={e => setText(e.target.value)} />
      <button onClick={handleAddClick}>
        Add
      </button>
    </>
  );
}
