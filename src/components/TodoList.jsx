import TodoGroup from "./TodoGroup";
import TodoGenerator from "./TodoGenerator";
import {useContext, useEffect} from "react";
import {getTodos} from "../api/todo";
import {TodoContext} from "../App";

const TodoList = () => {
    const {dispatch} = useContext(TodoContext);
    useEffect(() => {
        getTodos()
            .then((todos) => {
                dispatch({type: "INIT", payload: todos})
            })
    }, []);
    return (
        <div>
            <h2 style={{margin: "5px"}}>Todo List</h2>
            <TodoGroup/>
            <TodoGenerator/>
        </div>

    );
}

export default TodoList