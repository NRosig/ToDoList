import React, {useState} from "react";
import "./todoApp.css";
import Todo2 from "./todo";


const ToDo = () => {
  const [title, setTitle] = useState(""); 
  const [toDos, setToDos] = useState([])

  const handleChange = (event) => {
    const value = event.target.value;
    setTitle(value);
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    
    const newToDo = {
      id: crypto.randomUUID(),
      title: title,
      completed: false,
    };
    const list = [...toDos];
    list.unshift(newToDo);
    setToDos(list);
    setTitle("");
  }

  const handleUpdate = (id, value) => {
    const temp = [...toDos];
    const item = temp.find(item => item.id === id);
    item.title = value;
    setToDos(temp);
  }

  const handleDelete = (id) => {
    const temp = toDos.filter(item => item.id !== id);
    setToDos(temp);
  }

  return (
  <div className="todoContainer">
    <form className="todoCreateForm" onSubmit={handleSubmit}>
      <input onChange={handleChange}  className="todoInput" value= {title}/>
      <input 
        onClick={handleSubmit} 
        type="submit" 
        value="Create ToDo" 
        className="buttonCreate" />
    </form>
    <div className="toDosContainer">
      {toDos.map((item) => (
        <Todo2 key={item.id} item={item} onUpdate={handleUpdate} onDelete={handleDelete} />
      ))}
    </div>
  </div>
)};

export default ToDo; 