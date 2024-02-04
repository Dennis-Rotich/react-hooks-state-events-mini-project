import React,{ useState } from "react";

function NewTaskForm({ categories, onTaskFormSubmit }) {

  const optionsToDisplay = categories.map((category,index)=>{
      if(category === 'All'){
        return null;
      }
      return(
        <option key={index}>{category}</option>
      )
  })

  return (
    <form className="new-task-form" onSubmit={onTaskFormSubmit}>
      <label>
        Details
        <input type="text" name="text" />
      </label>
      <label>
        Category
        <select name="category" >
          {/* render <option> elements for each category here */}
          {optionsToDisplay}
        </select>
      </label>
      <input type="submit" value="Add task" />
    </form>
  );
}

export default NewTaskForm;
