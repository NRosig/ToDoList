import { useState } from "react";
import "./todoApp.css";

const Todo2 = ({ item, onUpdate, onDelete }) => {
  const [edit, setEdit] = useState(false);

  const editChangeHandler = () => {
    setEdit(true)};

    function FormEdit() {
    const [newValue, setNewValue] = useState(item.title)
    const handleSubmit = (e) => {
      e.preventDefault();
    }

    const handleChange = (e) => {
      const value = e.target.value;
      setNewValue(value)
    }

    const handleUpdate = () => {
      onUpdate(item.id, newValue);
      setEdit(false);
    }

    return (
    <form className="todoUpdateForm" onSubmit={handleSubmit}>
      <input type="text" className="todoInput" onChange={handleChange} value={newValue}/>
      <button className="button" onClick={handleUpdate}>Update</button>
    </form>
  )};

  function TodoElement(){
    return (
      <div className="todoInfo">
        <span className="todoTitle">{item.title}</span>
        <button className="button" onClick={editChangeHandler}>Edit</button> 
        <button className="buttonDelete" onClick={(e) => onDelete(item.id)}>Delete</button>
      </div>
    );
  }

  return (
    <div className="todo">
      {edit ? (<FormEdit />) : (<TodoElement />)}
    </div>  
   
)}

export default Todo2;