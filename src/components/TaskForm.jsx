import { useState } from "react";
function TaskForm({ onCreate }){
    const [title , setTitle]=useState('');
    const [priority , setPriority]=useState(2);
    const [status , setStatus]=useState('to-do');
    const  handleSubmit = () => {
        if(!title.trim()) return;
        onCreate({ title, priority, status });
        setTitle('');
        
    };
    return(
        <div style={{ marginBottom :'1.5rem' }}>
            <input value={title} onChange={(e) => setTitle(e.target.value)}
            placeholder="Task title ..." 
            style={{ padding:'8px',width:'300px'  }}/>

            <select value={priority} onChange={(e) =>setPriority(Number(e.target.value))}
                style={{ margin:'0 8px ',padding:'8px' }}>
                    <option value={1}>High</option>
                    <option value={2}>Medium</option>
                    <option value={3}>Low</option>
             </select>

            <select value={status} onChange={(e) =>setStatus(e.target.value)}
                style={{ margin:'0 8px ',padding:'8px' }}>
                    <option value="to-do">To-Do</option>
                    <option value="in-progress">In-Progress</option>
                    <option value="done">Done</option>
             </select>
                <button onClick={handleSubmit}
                style={{ padding:'8px 16px' }}>Add Task</button>
        </div>
    );
}

export default TaskForm;
