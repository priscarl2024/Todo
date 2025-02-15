import React, { useState, useEffect } from "react";
import confetti from "canvas-confetti";

const List = ({ tasks }) => {
  const [checkedTasks, setCheckedTasks] = useState(() => {
    const savedCheckedTasks = localStorage.getItem("checkedTasks");
    return savedCheckedTasks ? JSON.parse(savedCheckedTasks) : [];
  });

  useEffect(() => {
    localStorage.setItem("checkedTasks", JSON.stringify(checkedTasks));
  }, [checkedTasks]);

  useEffect(() => {
    checkedTasks.length > 0 && checkedTasks.length === tasks.length
      ? confetti({
          particleCount: 100,
          spread: 70,
          origin: { y: 0.6 },
        })
      : null;
  }, [checkedTasks, tasks]);

  const handleCheck = (index) => {
    setCheckedTasks((prev) =>
      prev.includes(index) ? prev.filter((i) => i !== index) : [...prev, index]
    );
  };

  return (
    <div className="list">
      <ul>
        {tasks.map((task, index) => (
          <li
            key={index}
            className={
              checkedTasks.includes(index) ? "checked-task" : "normal-task"
            }
          >
            <input
              type="checkbox"
              onChange={() => handleCheck(index)}
              checked={checkedTasks.includes(index)}
            />
            {task}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default List;
