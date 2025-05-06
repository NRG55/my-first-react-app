// a list of todos, each todo object has a task and an id
const todos = [
    { task: "mow the yard", id: crypto.randomUUID() },
    { task: "Work on Odin Projects", id: crypto.randomUUID() },
    { task: "feed the cat", id: crypto.randomUUID() },
  ];
  
export function TodoList() {
    return (
        <ul>
        {todos.map((todo) => (
            // here we are using the already generated id as the key.
            <li key={todo.id}>{todo.task}</li>
        ))}
        </ul>
    );
}

// -----------------------

const months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];

export function MonthList() {
  return (
    <ul>
      {/* here we are using the index as key */}
      {months.map((month, index) => (<li key={index}>{month}</li>))}
    </ul>
  );
}

// Keys should never be generated on the fly. Using key={Math.random()} or key={crypto.randomUUID()} 
// while rendering the list defeats the purpose of the key, as now a new key will get created for 
// every render of the list. As shown in the above example, key should be inferred from the data itself

// RULES OF KEYS
//   - Keys must be unique among siblings. However, it’s okay to use the same keys for JSX nodes in different arrays.
//   - Keys must not change or that defeats their purpose! Don’t generate them while rendering.
