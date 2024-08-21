import React from "react";
import "./Task.scss";

import { FaRegTrashAlt } from "react-icons/fa";
import { FaExchangeAlt } from "react-icons/fa";
import { FaCheckCircle } from "react-icons/fa";
import { FaRegCircle } from "react-icons/fa";

function Task(props) {
  //Handle status click button
  const handleStatusClick = () => {
    console.log("Handle status clicked");
    const id = props.task.id;
    props.onStatusChange(id);
  };

  //Handle the button click of removing the task
  const handleRemoveClick = () => {
    console.log("Handle Removed clicked");
    const id = props.task.id;
    props.onTaskRemove(id);
  };
  return (
    <div className="task-container">
      <h3 className="header">{props.task.description}</h3>
      <div className="props">
        <p>Id: {props.task.id}</p>
        <p>
          Status:{" "}
          <span className={props.task.done ? "completed" : "open"}>
            {props.task.done ? (
              <>
                Completed <FaCheckCircle />
              </>
            ) : (
              <>
                Open <FaRegCircle />
              </>
            )}
          </span>
        </p>
        <button className="changeButton" onClick={handleStatusClick}>
          <FaExchangeAlt /> Change Status
        </button>
        <button className="removeButton" onClick={handleRemoveClick}>
          {" "}
          <FaRegTrashAlt /> Remove Task
        </button>
      </div>
    </div>
  );
}

export default Task;
