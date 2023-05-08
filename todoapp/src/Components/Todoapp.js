import React,{useState} from "react";
import './Todo.css';
import { MdDelete } from 'react-icons/md';
import {FaRegEdit} from 'react-icons/fa';

const Todoapp = () => {
  const [data,setData]=useState("");
  const [todo,setTodo]=useState([]);
  const [editIndex, setEditIndex] = useState(-1);

  const handleChange = e=>
  {
    setData(e.target.value)
  }

  const handleClick =e =>{
    e.preventDefault();
    if (editIndex === -1) {
        setTodo([...todo, data]);
      } else {
        const newTodo = [...todo];
        newTodo[editIndex] = data;
        setTodo(newTodo);
        setEditIndex(-1);
      }
      setData("");
  }

  const deleteHandler= (indexvalue)=>
  {
    const newtodo1 =todo.filter((todo,index)=>index !== indexvalue);
    setTodo(newtodo1);
    if (editIndex === indexvalue) {
        setEditIndex(-1);
        
      }
    };
    const editHandler = (indexValue) => {
        setData(todo[indexValue]);
        setEditIndex(indexValue);
      };

  return (
    <div>
      <div>
          <div className="todo">
              <h1 className="title">Todo list</h1>
              <form className="todo-form">
                <input  className='todo-input' type="text" name="task" value={data} onChange={handleChange}/> 
                <button name="Add" onClick={handleClick} className="todo-button">Add</button>
              {todo.map((todo,index)=>
           <div key={index} className="todo-row">
            {todo}&nbsp;
            <div className="icons">
            <FaRegEdit onClick={() =>{editHandler(index)}} className="edit-icon"/>
            <MdDelete onClick={() =>{deleteHandler(index)}} className="delete-icon" />
            </div>
            </div>
            )}
            
            </form>

          </div>
  
      </div>
    </div>
  )
}
export default Todoapp;
