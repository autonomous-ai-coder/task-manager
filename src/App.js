import React, { useState } from 'react';

function App() {
    const [tasks, setTasks] = useState([]);

    const addTask = (task) => {
        setTasks([...tasks, task]);
    };

    return (
        <div>
            <h1>Task Manager</h1>
            <input type='text' placeholder='Add a task' onKeyDown={(e) => e.key === 'Enter' && addTask(e.target.value)} />
            <ul>
                {tasks.map((task, index) => <li key={index}>{task}</li>)}
            </ul>
        </div>
    );
}

export default App;