import { createContext, useContext, useReducer } from "react";

const TasksContext = createContext(null);

const TasksDispatchContext = createContext(null);

export function TasksProvider({ children }) {
    const [tasks, dispatch] = useReducer(tasksReducer, initialTasks);

    return (
        <TasksContext value={tasks}>
            <TasksDispatchContext value={dispatch}>
                {children}
            </TasksDispatchContext>
        </TasksContext>
    );    
};

export function useTasks() {
    return useContext(TasksContext);
};

export function useTasksDispatch() {
    return useContext(TasksDispatchContext);
};

function tasksReducer(tasks, action) {
    switch (action.type) { 
        // wrapping each case block into the { and } curly braces so that variables declared inside of different cases don’t clash with each other
        case 'added': {
            return [...tasks, {
                id: action.id,
                text: action.text,
                done: false
            }];
        };

        case 'changed': {
            return tasks.map((task) => {
                if (task.id === action.task.id) {
                    return action.task;
                } else {
                    return task;
                };
            });
        };

        case 'deleted': {
            return tasks.filter((task) => task.id !== action.id);
        };

        default: {
            throw Error('Unknown action: ' + action.type);
        };
    };
};

const initialTasks = [
    { id: 0, text: "Philosopher's Path", done: true },
    { id: 1, text: 'Visit the temple', done: false },
    { id: 2, text: 'Drink matcha', done: false }
];
