import React, {useState} from "react";



const ToDo = () => {
  const [title, setTitle] = useState("Add"); 
  const titleChangeHandler = (e) => {
    e.preventDefault();
    setTitle("delete");
  }
  return (
  <div classname="todoContainer">
    <form classname="todoCreateForm">
      <input classname="todoInput" value={title}/>
      <input onClick={titleChangeHandler} type="submit" value="Create ToDo" classname="buttonCreate" />
    </form>
  </div>
)};

export default ToDo; 