import "./toddle.css"
import { useState } from "react";

export default function Toddle (props) {

 
       const [visible,setvisible] = useState(true);
    let handleDelete = () => {
           setvisible(false)
    }
    {
        if (visible === true) {
            return <div class="todo-item">
            <div class="checker"><span class=""><input type="checkbox" /></span></div>
            <span>{props.data}</span>
            <button type="button" class="btn btn-danger btn-sm" onClick={handleDelete} style={{marginLeft:"850px"}}>Delete</button>
            <a href="javascript:void(0);" class="float-right remove-todo-item"><i class="icon-close"></i></a>
          </div>
        }else{
            return <div></div>
        }
    }
} 


    
