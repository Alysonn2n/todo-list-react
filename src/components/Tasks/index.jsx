import React from 'react';
import Task from '../Task'

const Tasks = ({tasks, handleTaskClick, handleTaskRemotion}) => {
    return (
        <>
            {tasks.map(task =>
                (
                    <Task
                        key={task.id}
                        task={task}
                        handleTaskClick={handleTaskClick}
                        handleTaskRemotion={handleTaskRemotion}
                    />
                )
            )}
        </>
    );
}

export default Tasks