import TaskCard from "./TaskCard";

const COLUMNS=['to-do','in-progress','done'];
const LABELS={'to-do':"To-Do",'in-progress':'In-Progress','done':"Done"};
function TaskList({ tasks, onStatusChange , onDelete }){
    return( 
        <div style={{ display :'flex' ,gap:'1rem'}}>
            {COLUMNS.map(col => (
             <div key={col} style={{ flex :1, background:'#f4f4f4',padding:'1rem',borderRadius:'8px'}}>
                <h3>{LABELS[col]}</h3>
                {tasks.filter(t => t.status === col)
                .map(task =>(
                    <TaskCard key={task.id}
                    task={task}
                    onStatusChange={onStatusChange}
                    onDelete={onDelete} />
                ))}
             </div>
             ))}
        </div>
    );
}
export default TaskList;