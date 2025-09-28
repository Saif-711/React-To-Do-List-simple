import React,{useState} from 'react'
function ToDoList(){
    //set of tasks
    const [tasks,setTasks] = useState(["Eat Breakfast","Take Shower","development"]);
    //add new Task
    const[newTask,setNewTask]=useState("");
   
    function handleInputChange(event){
        setNewTask(event.target.value);
    }
    function addTask(){
        if(newTask.trim()==="") return;
        setTasks(t=>[...tasks,newTask]);
        setNewTask("");
    }
    function deleteTask(index){
        const UpdatedTasks = tasks.filter((element,i)=>i!==index);
        setTasks(UpdatedTasks);
    }
    function moveTaskUp(index){
        if(index===0) return; // First item, can't move up
        //all tasks copy 
        const updatedTasks=[...tasks];
        //swap two tasks
        [updatedTasks[index],updatedTasks[index-1]]=[updatedTasks[index-1],updatedTasks[index]];
        setTasks(updatedTasks);
    }
    function moveTaskDown(index){
        if(index < tasks.length - 1) { // First item, can't move up
        const updatedTasks=[...tasks];
        [updatedTasks[index],updatedTasks[index+1]] = [updatedTasks[index+1],updatedTasks[index]];
        setTasks(updatedTasks);
    }
}
    return(
        <div className="to-do-list">
            <h1>To-Do-List</h1>
            <div>
                <input 
                type='text'
                placeholder='Enter A Task ...'
                value={newTask}
                onChange={handleInputChange}/>
                <button className="add-button"
                onClick={addTask}
                >
                    Add
                </button>
            </div>
            <ol>
                {tasks.map((task,index)=>
                    <li key={index}>
                        <span className="text">{task}</span>
                        <button className="delete-button" onClick={() => deleteTask(index)}>
                            🗑️ Delete
                        </button>
                        <button className="up-button" onClick={() => moveTaskUp(index)}>
                            ⬆️ Up
                        </button>
                        <button className="down-button" onClick={() => moveTaskDown(index)}>
                            ⬇️ Down
                        </button>
                    </li>
                )}
            </ol>
        </div>
    )
}
export default ToDoList