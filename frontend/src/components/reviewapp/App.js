import React, { useState } from 'react';
//mock data
import datal from "./Data.json";
//components
//import Header from "./Header";
import ToDoList from "./ToDoList";
import axios from 'axios';
import ToDoForm from './ToDoForm';
import { async } from 'regenerator-runtime';
import News from './postdata'


function App() {
  const [dataty,setData] = useState();
  const datafromserver = async() =>{
    const datathis  = await axios.get('/todos-all');
    setData(datathis.data)
    console.log(datathis.data)
  }
  const [ toDoList, setToDoList ] = useState(datal);

  const handleToggle = (id) => {
    let mapped = toDoList.map(task => {
      return task.id === Number(id) ? { ...task, complete: !task.complete } : { ...task};
    });
    setToDoList(mapped);
  }

  const handleFilter = () => {
    let filtered = toDoList.filter(task => {
      return !task.complete;
    });
    setToDoList(filtered);
  }
  


  const addTask = (userInput ) => {
    let copy = [...toDoList];
    datafromserver()
    copy = [...copy, { id: toDoList.length + 1, task: userInput, complete: false }];
    setToDoList(copy);
  }

  return (
    <div className="App">
    <h>what</h>
    <h1>what</h1> <h1>what</h1>
    <h1>Add your Review</h1>
    <center><ToDoForm addTask={addTask}/></center>
    
    {dataty.map(todo => {
        return (
           <div>{todo.description}</div>
        )
    })}
     {/* <ToDoList toDoList={toDoList} handleToggle={handleToggle} handleFilter={handleFilter}/> */}
      {/*<center> <News newss={dataty}/></center> */}
    

    </div>
  );
}

export default App;
