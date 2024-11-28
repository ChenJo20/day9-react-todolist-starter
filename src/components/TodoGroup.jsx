import {useContext} from "react";
import {TodoContext} from "../App";
import Todo from "./Todo";

const TodoGroup = () => {
    const {state} = useContext(TodoContext)
    return (
        <div>
            {state.map((todo, _)=>{
                return <Todo key={todo.id}  todo={todo}/>
            })}
        </div>
    )
}

export default TodoGroup;