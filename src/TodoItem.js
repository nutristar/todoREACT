import React from "react";
import './static/index.css';

function TodoItem(props){
    return(
        <div className="todo-item">
            <input type="checkbox" 
            checked={props.completed} 
            onChange={()=>{props.handleChange(props.id)}}/>

            <p>{props.text}</p>
            <p>{props.completed ? "done" : "not done"}</p>
        </div>
    );
}

export default TodoItem;
