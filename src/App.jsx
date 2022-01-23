import React, { Fragment, useState, useEffect } from 'react';
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import {v4 as uuidv4} from 'uuid'
import axios from 'axios';
import "./App.css";
import Header from './components/Header'
import Tasks from './components/Tasks';
import AddTask from './components/addTask';
import TaskDetails from './components/TaskDetails'


const App = () => {
  const [tasks, setTasks] = useState([
    {
      id: 1,
      title: 'Estudar',
      completed: false,
    },
    {
      id: 2,
      title: 'Ler',
      completed: true,
    }
  ]);

  useEffect(() => {
    const fetchTasks = async () => {
      const { data } = await axios.get(
        'https://jsonplaceholder.cypress.io/todos?_limit=10'
      );
      setTasks(data);
    }
    fetchTasks()
  })

  const handleTaskAddition = (taskTitle) => {
    const newTasks = [...tasks,
      {
        title: taskTitle,
        id: uuidv4(),
        completed: false,
      }
    ]
    setTasks(newTasks);
  }

  const handleTaskRemotion = (taskId) => {
    const newTasks = tasks.filter(task => (task.id !== taskId));
    setTasks(newTasks);
  }

  const handleTaskClick = (taskId) => {
    const newTasks = tasks.map(task => {
      if (task.id === taskId) {
        return {... task, completed: !task.completed};
      }
      return task
    })
    setTasks(newTasks);
  }

  return (
    <Router>
      <div className='container'>
        <Header />
        <Routes>
          <Route path="/" exact
            element={(
              <Fragment>
                <AddTask
                  handleTaskAddition={handleTaskAddition}
                />
                <Tasks
                  tasks={tasks}
                  handleTaskClick={handleTaskClick}
                  handleTaskRemotion={handleTaskRemotion}
                />
              </Fragment>
            )}
          />
          <Route path='/:taskTitle' exact element={
            <TaskDetails />
          }/>
        </Routes>
      </div>
    </Router>
  )
}

export default App;