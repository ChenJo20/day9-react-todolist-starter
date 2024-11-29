import TodoGroup from "./TodoGroup";
import TodoGenerator from "./TodoGenerator";
import {useContext, useEffect, useState} from "react";
import {getTodos} from "../api/todo";
import {TodoContext} from "../App";

const TodoList = () => {
    const {dispatch} = useContext(TodoContext);
    const [loading, setLoading] = useState(false)
    useEffect(() => {
        setLoading(true);
        getTodos()
            .then((todos) => {
                dispatch({type: "INIT", payload: todos})
            })
            .finally(() => {
                setLoading(false)
            })
    }, []);
    return (
        loading
            ? "I am loading todo list..."
            : <div>
                <h2 style={{margin: "5px"}}>Todo List</h2>
                <TodoGroup/>
                <TodoGenerator/>
            </div>
    );
}

export default TodoList