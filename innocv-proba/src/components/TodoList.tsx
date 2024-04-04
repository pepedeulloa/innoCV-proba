import React, { useState } from 'react';


interface Task {
  id: number;
  text: string;
  completed: boolean;
}


const TodoList: React.FC = () => {
  const [tasks, setTasks] = useState<Task[]>([]);
  const [newTask, setNewTask] = useState('');


  const addTask = () => {
    if (newTask.trim() === "") return; 
    const updatedTasks = [...tasks, { id: tasks.length, text: newTask, completed: false }];
    setTasks(updatedTasks);
    setNewTask('');
  };


  const toggleTask = (taskId: number) => {
    const updatedTasks = tasks.map(task => {
      if (task.id === taskId) {
        return { ...task, completed: !task.completed };
      }
      return task;
    });
    setTasks(updatedTasks);
  };


  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setNewTask(event.target.value);
  };

  const isInputEmpty = newTask.trim() === "";


  // Define los estilos en variables
  const containerStyle = {
    display: "flex",
    'flex-direction': "column",
    justifyContent: "center",
    margin: "10rem"
  };

  const inputStyle = {
    height: "1.75rem",
    width: "100%",
    marginBottom: "0.5rem",
    padding: "0",
    border: "1px solid grey",
    borderRadius: "3px",

    "text-indent": "1rem"
  };

  const buttonStyle = {
    height: "2rem",
    width: "225px",
    marginBottom: "0.5rem",
    alignSelf: "end",
    backgroundColor:"lightseagreen",
    borderRadius: "3px",
  };

  const listStyle = {
    display: "flex",
    'flex-direction': "column",
    gap:"0.75rem",
    width: "100%",
    marginBlock: 0,
    paddingInline: 0,
    margin:"1.5rem 0",
  };

  const listItemStyle = {
    height: "2.25rem",
    width: "100%",
    fontSize: "1rem",
    color: "white",
    listStyle: "none",
    "font-size": "1.5rem",
    "text-indent": "1rem",
    padding: "0",
  };

  return (
    <div style={containerStyle}>
      <h1>
        Task list
      </h1>
      <input style={inputStyle} placeholder='Write here your task' type="text" value={newTask} onChange={handleInputChange} />
      <button style={{...buttonStyle, opacity: isInputEmpty ? 0.75 : 1, cursor: isInputEmpty ? "not-allowed": "pointer" }} disabled={isInputEmpty} onClick={addTask}>Add Task</button>
      <br />
      <ul style={listStyle}>
        {tasks.map((task) => (
          <li
            key={task.id}
            style={{ ...listItemStyle, backgroundColor: task.id % 2 === 0 ? 'royalblue' : 'cadetblue', textDecoration: task.completed ? 'line-through' : 'none', opacity: task.completed ? '0.70': '1' }}
            onClick={() => toggleTask(task.id)}
          >
            <span>
            {task.text}
            </span>
          </li>
        ))}
      </ul>
    </div>
  );
};


export default TodoList;