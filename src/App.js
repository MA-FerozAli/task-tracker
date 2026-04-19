import { useState ,useEffect } from "react";
import { getTasks,createTask,updateTask,deleteTask } from "./api/task";
import TaskForm from "./components/TaskForm";
import TaskList from "./components/TaskList";

function App(){
  const [tasks,setTasks]=useState([]);
  useEffect(() =>{fetchTasks();},[]);

  const fetchTasks =async () =>{
    const res=await getTasks();
    setTasks(res.data);
  };
  const handleCreate = async (formData) =>{
   await createTask(formData);
   fetchTasks();
  };
  const handleDelete = async (id) =>{
   await deleteTask(id);
   fetchTasks();
  };
  const handleStatusChange = async (id,newStatus) =>{
   await updateTask(id,{ status: newStatus });
   fetchTasks();
  };
  return(
    <div style={{ padding:'2rem',fontFamily :'sans-serif'}}>
        <h1>Task Tracker</h1>
        <TaskForm onCreate={handleCreate} />
        <TaskList tasks ={tasks} onStatusChange ={handleStatusChange}
        onDelete={handleDelete} />
    </div>
  );
}
export default App;