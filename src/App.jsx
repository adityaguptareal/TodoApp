import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [value, setvalue] = useState("")
  const [task, setTasks] = useState([])

  function DeleteTask(index) {
    const updatedTask = task.filter((_, i) => i !== index)
    console.log("buttonClicked");
    setTasks(updatedTask)
    console.log(updatedTask);
  }


  function updatingTask(index) {
    const taskStatus = task.map((item, postion) => {
      if (index === postion) {
        return { ...item, completed: !item.completed }
      }
      return item
    })
    setTasks(taskStatus)
    console.log(task);
  }



  function AddTask() {
    if (value.trim === "") {
      return (
        alert("Please enter a valid task")
      )
    }
    const newTask = { id: Date.now(), task: value, completed: false }
    setTasks([...task, newTask])
    console.log(task)
    setvalue("")
  }

  return (
    <>
      <h1>Add Task </h1>
      <div style={{ display: "flex" }}><input value={value} onChange={(e) => { setvalue(e.target.value) }} type="text" placeholder='Add task' />
      <button onClick={AddTask}>Add Task</button></div>
      <h1>All Task</h1>

      {
        task.map((taskItem, index) => {
          return (
            <div style={{
              display: "flex",
            }}
              key={index}> <div style={{
                textDecoration: taskItem.completed ? "line-through" : "none",
              }}>{taskItem.task} is {taskItem.completed ? "completed" : "not completed"}</div> <button onClick={() => DeleteTask(index)}>Delete</button> <button onClick={() => updatingTask(index)}>Completed</button></div>

          )
        })
      }
    </>
  )
}

export default App
