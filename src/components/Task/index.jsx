import React from 'react';
import "./Task.css"
import { CgClose, CgInfo } from "react-icons/cg";
import { useNavigate } from 'react-router-dom';

const Task = ({task, handleTaskClick, handleTaskRemotion}) => {
  const navigate = useNavigate();
  const handleTaskDetailsClick = () => {
    navigate(`/${task.title}`);
  }
  return(
      /* <div className='task-container'>
          {task.title}
      </div> */
      <div
        className='task-container'
        style={task.completed ? {borderLeft: '6px solid chartreuse'} : {} }>
            <div className='task-title'
                onClick={() => handleTaskClick(task.id)}>
                {task.title}
            </div>
            <div className='buttons-container'>
              <button className='remove-task' onClick={() => handleTaskRemotion(task.id)}>
                  <CgClose />
              </button>
              <button className='show-details-task' onClick={handleTaskDetailsClick}>
                  <CgInfo />
              </button>
            </div>
      </div>
  )
}

export default Task