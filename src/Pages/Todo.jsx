import React, { useState, useEffect } from "react";
import Input from "../Components/Input";
import List from "../Components/List";

const Todo = () => {
  const [tasks, setTasks] = useState(() => {
    const savedTasks = localStorage.getItem("tasks");
    return savedTasks ? JSON.parse(savedTasks) : [];
  });

  useEffect(() => {
    localStorage.setItem("tasks", JSON.stringify(tasks));
  }, [tasks]);

  const addTask = (task) => {
    setTasks([...tasks, task]);
  };

  return (
    <div>
      <h1>Nu ska jag...</h1>
      <List tasks={tasks} />
      <Input onAddTask={addTask} />
    </div>
  );
};

export default Todo;
