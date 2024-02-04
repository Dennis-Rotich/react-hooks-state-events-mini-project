import React from "react";
import Task from "./Task";


function TaskList({ tasks }) {
  const taskList = tasks.map((task)=>{
    return(<Task text={task.text} category={task.category}/>)
  })

  return (
    <div className="tasks">
      {/* display a list of tasks using Task component */}
      {taskList}
    </div>
  );
}

export default TaskList;
