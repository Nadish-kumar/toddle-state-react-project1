import logo from './logo.svg';
import './App.css';
import Toddle from './toddle';
import { useState } from 'react';

function App() {
  const [value, setvalue] = useState([]);

  let handleClick = () => {
     setvalue([...value,`  Task  ${value.length}`])
  }
  return (
    <div class="container">
      <div class="row">
        <div class="col-md-12">
          <div class="card card-white">
            <div class="card-body">
              <form action="javascript:void(0);">
                <button type="button" class="btn btn-primary" onClick={handleClick}>ADD</button>
              </form>
              <ul class="nav nav-pills todo-nav">
                <li role="presentation" class="nav-item all-task active"><a href="#" class="nav-link">All</a></li>
                <li role="presentation" class="nav-item active-task"><a href="#" class="nav-link">Active</a></li>
                <li role="presentation" class="nav-item completed-task"><a href="#" class="nav-link">Completed</a></li>
              </ul>
              <div class="todo-list">
               {
                 value.map((items) =>  <Toddle data ={items}></Toddle>)
               }
            

              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
