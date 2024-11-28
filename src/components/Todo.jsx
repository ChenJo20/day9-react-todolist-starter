import "./css/Todo.css"
import {TodoContext} from "../App";
import {useContext} from "react";

const Todo = (props) => {
    const {dispatch} = useContext(TodoContext);
    const handleChangeDoneStatus = () => {
        console.log(props.todo.id)
        dispatch({type: "CHANGEDONESTATUS", payload: props.todo.id})
    }
    return (
        <div className={"todo-wrapper"}>
            <button onClick={handleChangeDoneStatus} className={"todo-text-wrapper"}>
                <span style={{textDecoration: props.todo.done ? "line-through" : "none"}}>
                    {props.todo.text}
                </span>
            </button>
            <button onClick={handleChangeDoneStatus}>×</button>
        </div>
    )
}

export default Todo;