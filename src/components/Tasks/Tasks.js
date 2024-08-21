import React from "react";
import Task from "./Task/Task";

import "./Tasks.scss";

import { FaCircleArrowUp } from "react-icons/fa6";

export default function Tasks({
  //import from the child component to access its properties
  tasks,
  onStatusChange,
  onTaskRemove,
  onClearTasks,
}) {
  return (
    <div className="task-form">
      <h2 className="header">These are the Tasks:</h2>
      <div className="task-list">
        {tasks.map((task, index) => (
          <Task
            key={index}
            task={task}
            onStatusChange={onStatusChange}
            onTaskRemove={onTaskRemove}
          />
        ))}
      </div>
      <div className="clear-button">
        <button onClick={onClearTasks}>
          <FaCircleArrowUp /> Clear Tasks
        </button>
      </div>
    </div>
  );
}
