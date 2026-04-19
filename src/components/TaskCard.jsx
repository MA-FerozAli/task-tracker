const PRIORITY_COLORS={1:'#ff4d4d',2:'#ffa500',3:'#4caf50'};
function TaskCard({ task,  onStatusChange , onDelete }){
    return(
        <div style={{ background:'white',padding:'0.8rem',
            marginBottom:'0.5rem',borderRadius:'6px', borderLeft:`4px solid ${PRIORITY_COLORS[task.priority]}`
        }}>
            <strong>{task.title}</strong>
            <p style={{ fontSize:'0.75rem', color:'#888'}}> {task.priority_label} Priority </p>
            <select value={task.status}
            onChange={(e)=> onStatusChange(task.id , e.target.value)}
            style={{ fontSize:'0.8rem' , marginRight:'8px' }}>
                <option value="to-do">To-Do</option>
                <option value="in-progress">In-Progress</option>
                <option value="done">Done</option>
            </select>
            <button onClick={() =>onDelete(task.id)}>Delete</button>
        </div>
    );
}
export default TaskCard;