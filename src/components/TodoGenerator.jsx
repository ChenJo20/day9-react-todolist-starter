import {useContext, useState} from "react";
import {TodoContext} from "../App";
import "./css/TodoGenerator.css"
import {addTodo} from "../api/todo";

const TodoGenerator = () => {
    const [text, setText] = useState("");
    const {dispatch} = useContext(TodoContext);
    const handleChange = (event) => {
        setText(event.target.value);
    }
    const handleAdd = () => {
        if (text.trim().length === 0) {
            return;
        }
        addTodo(text)
            .then((todo) => {
                dispatch({type: "ADD", payload: todo});
            });
    }
    return (
        <div>
            <input value={text}
                   onChange={handleChange}
                   className={"todo-generator-input"}
                   maxLength={100}/>
            <button onClick={handleAdd}
                    className={"todo-generator-button"}>
                add
            </button>
        </div>
    );
}

export default TodoGenerator;