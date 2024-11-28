import {useContext, useState} from "react";
import {TodoContext} from "../App";
import "./css/TodoGenerator.css"
const TodoGenerator = () => {
    const [text, setText] = useState();
    const { dispatch } = useContext(TodoContext);
    const handleChange = (event) => {
        setText(event.target.value);
    }
    const handleAdd = () => {
        dispatch({type:"ADD", payload: text});
    }
    return (
        <div className={"todo-generator-wrapper"}>
            <input value={text} onChange={handleChange}/>
            <button onClick={handleAdd}>add</button>
        </div>
    );
}

export default TodoGenerator;