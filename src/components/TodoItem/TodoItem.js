import React from "react";
import "./TodoItem.css";
import {useState} from "react";

function Todo(props) {
  const { content, id } = props;

  const [ check, setCheck] = useState(false);

  const checked = {
    textDecoration: check ? "line-through" : ""
  };

  const toogleCheck = () => setCheck(!check);
  return (

    
  <div style={checked}  onClick = {toogleCheck}> 
  
  {content} 

  <button className = "btn btn-danger"  onClick = { () => props.delete(id)}
          > Sil </button>
  
  </div>

  )
}

export default Todo;
