import {useContext, useState} from "react";
import {TodoContext} from "../App";
import "./css/TodoGenerator.css"

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
        dispatch({type: "ADD", payload: text});
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