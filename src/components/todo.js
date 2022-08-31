import { useState } from "react";
import "./todoApp.css";
import { motion } from "framer-motion";

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
      <motion.input type="text" className="todoInput" onChange={handleChange} value={newValue} whileFocus={{background: "#F9F9F9 "}}/>
      <motion.button 
        className="button" 
        onClick={handleUpdate}
        whileHover={{scale: 1.1}}
        >Update</motion.button>
    </form>
  )};

  function TodoElement(){
    return (
      <motion.div className="todoInfo" >
        <span className="todoTitle">{item.title}</span>
        <motion.button className="button" 
          onClick={editChangeHandler}
          whileHover={{scale: 1.1}}
          >Edit
        </motion.button> 
        <motion.button className="buttonDelete" 
          onClick={(e) => onDelete(item.id)}
          whileHover={{scale: 1.1}}
          >Delete
          
        </motion.button>
      </motion.div>
    );
  }

return (
  <motion.div className="todo" whileHover={{scale: 1.1}}>
    {edit ? (<FormEdit />) : (<TodoElement />)}
  </motion.div>  
   
)}

export default Todo2;