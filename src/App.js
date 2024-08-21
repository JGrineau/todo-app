import { React, useEffect, useState } from "react";
import uuid from "react-uuid";

import Form from "./components/Form/Form";
import Header from "./components/Header/Header";
import Tasks from "./components/Tasks/Tasks";
import PageNotFound from "./components/PageNotFound/PageNotFound";



import Help from "./components/HelpPage/HelpPage";
import AddingTask from "./components/HelpPage/AddingTask";
import Introduction from "./components/HelpPage/Introduction";
import RemovingTask from "./components/HelpPage/RemovingTask";
import ChangingStatus from "./components/HelpPage/ChangingStatus";

import "./App.scss";

import { Routes, Route } from "react-router-dom";
import * as database from './database';
// import {load, save, update} from './database';



function App() {

  const [tasks, setTasks] = useState([
    {
      id: uuid(),
      description: "Walk the dog",
      done: true,
    },
    {
      id: uuid(),
      description: "Wash the car",
      done: false,
    },
    {
      id: uuid(),
      description: "Finish the lab",
      done: false,
    },
  ]);

  // Removes all tasks form the list.
  const handleClearTasks = () => {
    setTasks([]);
  };

  // Toggles a task status.
  const handleStatusChange = (id) => {
    const updatedTasks = [...tasks];
    updatedTasks.forEach((task) => {
      if (task.id === id) {
        task.done = !task.done;
      }
    });
    setTasks(updatedTasks);
  };
  // Removes a task from the list.
  const handleTaskRemove = (id) => {
    const filteredTasks = tasks.filter((task) => task.id !== id);
    setTasks(filteredTasks);
  };

  // Add a task to the webpage
  const handleAddTask = (description, status) => {
    setTasks([
      //Can also write as tasks.concat
      ...tasks,
      {
        id: uuid(),
        description: description,
        done: status === "completed",
      },
    ]);
  };



  useEffect( () => {
  
    //load database
    // database.load();

    // const result = database.load();
    // console.log('Loading Data: ', result);

    // database.load()
    // .then(( result ) => {
    //   console.log('Loaded Result: ',result);
    // })
    // .catch(( error ) => {
    //   console.log('Load Error: ', error);
    // });

    (async () => {
      const data = await database.load();
      console.log('Loaded Data: ', data)
    })();

  }, []);
  return (
    <>
      <Header />
      

      <div className="app-container">
        <Routes>
          <Route
            path="/"
            element={
              <Tasks
                tasks={tasks}
                onStatusChange={handleStatusChange}
                onTaskRemove={handleTaskRemove}
                onClearTasks={handleClearTasks}
              />
            }
          />
          <Route path="/add" element={<Form onAddTask={handleAddTask} />} />

          <Route path="/help" element={<Help />}> 
            <Route path="/help" element={<Introduction />} />
            <Route path="adding-tasks" element={<AddingTask />} />
            <Route path="removing-tasks" element={<RemovingTask />} />
            <Route path="changing-status" element={<ChangingStatus />} />
          </Route>
          
          <Route path="*" element={<PageNotFound />} />
        </Routes>
      </div>
    </>
  );
}

export default App;
