import { React, useState } from "react";
import "./Form.scss";
import { FaPlusCircle } from "react-icons/fa";

export default function Form({ onAddTask }) {
  const [description, setDescription] = useState("");
  const [status, setStatus] = useState("open");

  //Error state
  const [errorMessage, setErrorMessage] = useState("");

  //Validation from the user when adding a task
  const handleFormSubmission = (event) => {
    event.preventDefault();
    if (description === "") {
      setErrorMessage("ERROR! You MUST Enter a description.");
      alert("ERROR! You MUST Enter a description of the task.");
    } else {
      onAddTask(description, status);
      setDescription("");
      setStatus("open");
      setErrorMessage("");
    }
  };

  return (
    <div className="form-container">
      <div className="form">
        <form onSubmit={handleFormSubmission}>
          <div className="header-new-task">
            <h2>Add a New Task</h2>
          </div>
          {errorMessage !== "" && <div>{errorMessage}</div>}
          <div className="description">
            <label>
              Description:
              <input
                type={"text"}
                maxLength={150}
                value={description}
                placeholder="Enter your task here..."
                onChange={(event) => setDescription(event.target.value)}
              />
            </label>
          </div>
          <div className="status">
            <label>
              Status:
              <select
                value={status}
                onChange={(event) => setStatus(event.target.value)}
              >
                <option value="open">Open</option>
                <option value="completed">Completed</option>
              </select>
            </label>
          </div>
          <div className="add-task-button">
            <button >
              <FaPlusCircle /> Add Task
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
