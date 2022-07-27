import React,{FC,useState,ChangeEvent} from 'react';

import './App.css';
import { ITask } from './components/Interfaces';
import Items from './components/Items';
const  App :FC=()=>{
  const [task,setTask]=useState<string>("")
  const [deadline,setDeadline]=useState<number|0>(0)
  const [todo,setTodoList]=useState<ITask[]>([])

  const handleChange=(event:ChangeEvent<HTMLInputElement>):void=>{
    if(event.target.name==="task"){
      setTask(event.target.value)
    }
    else{
  setDeadline(Number(event.target.value))
    }
    

  }
  const handleSubmit=():void=>{
    const newTask={taskName:task.toString(),deadline:Number(deadline)}
  setTodoList([...todo,newTask])
  console.log(todo)
  setTask("")
 setDeadline(0)

 

  }

  const HandleDel=(id:string):void=>{

    setTodoList(todo.filter((e:ITask)=>e.taskName!==id))
  
   }
  return (
    <div className="App">
      <div className="header">
        <div className="inputCotainer">
        <input type="text" name="task" value={task} placeholder='Task....' onChange={handleChange} />
        <input type="number" name="deadline" value={deadline} placeholder='Deadline (in Days)' onChange={handleChange} />

        </div>
        
        <button onClick={handleSubmit}>Add Task</button>
      </div>

      <div>
        {
          todo.map((e:ITask,key:number)=>(
            <Items key={key} item={e} handleDel={HandleDel}/>
          ))
        }
      </div>

    </div>
  );
}

export default App;
