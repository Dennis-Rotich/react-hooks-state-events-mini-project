import React,{ useState } from "react";
import CategoryFilter from "./CategoryFilter";
import NewTaskForm from "./NewTaskForm";
import TaskList from "./TaskList";

import { CATEGORIES, TASKS } from "../data";
console.log("Here's the data you're working with");
console.log({ CATEGORIES, TASKS });

function App() {
  const [tasks, setTasks] = useState(TASKS);

function onTaskFormSubmit(e){
  e.preventDefault();
  const newObj = {text:'',category:''};
  newObj.text = e.target.text.value;
  newObj.category = e.target.category.value;
  console.log(newObj);
  const newTasks = [...tasks,newObj];
  setTasks(newTasks);
}

  return (
    <div className="App">
      <h2>My tasks</h2>
      <CategoryFilter categories={CATEGORIES} onFilter={setTasks} tasks={tasks} originalTasks={TASKS}/>
      <NewTaskForm categories={CATEGORIES} onTaskFormSubmit={onTaskFormSubmit} />
      <TaskList tasks={tasks}/>
    </div>
  );
}

export default App;
