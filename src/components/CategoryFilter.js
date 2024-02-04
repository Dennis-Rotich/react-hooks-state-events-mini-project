import React, { useState } from "react";

function CategoryFilter({ categories, onFilter, tasks }) {
  const [allTasks, setAllTasks] = useState(tasks)
  function handleClick(e){
      if(e.target.className === ''){
        const category = e.target.innerText;
        filterTasks(category);
        return e.target.className = 'selected'
      }
      
      return e.target.className = '';
      
  }

  function filterTasks(category){
      const tasksToDisplay = allTasks.filter((task)=>{
        if(category === 'All'){return true}
        return task.category === category;
      })
      onFilter(tasksToDisplay);
  }

  const buttonsToDisplay = categories.map((category, index)=>{
    return(<button key={index} onClick={(e)=>{handleClick(e)}} >{category}</button>)
  })
  return (
    <div className="categories">
      <h5>Category filters</h5>
      {/* render <button> elements for each category here */}
      {buttonsToDisplay}
    </div>
  );
}

export default CategoryFilter;
