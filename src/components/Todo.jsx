import "./css/Todo.css"
import {TodoContext} from "../App";
import {useContext} from "react";

const Todo = ({todo}) => {
    const {dispatch} = useContext(TodoContext);
    const handleChangeDoneStatus = () => {
        dispatch({type: "CHANGEDONESTATUS", payload: todo.id})
    }
    const handleRemove = () => {
        dispatch({type: "REMOVE", payload: todo.id})
    }
    return (
        <div className={"todo-wrapper"}>
            <button onClick={handleChangeDoneStatus} className={"todo-text-wrapper"}>
                <span className={todo.done ? "line-through" : ""}>
                    {todo.text}
                </span>
            </button>
            <button onClick={handleRemove}>×</button>
        </div>
    )
}

export default Todo;