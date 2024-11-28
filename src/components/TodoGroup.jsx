import {useContext} from "react";
import {TodoContext} from "../App";
import Todo from "./Todo";

const TodoGroup = () => {
    const {state} = useContext(TodoContext)
    const placeHolderWhenNoTodo = "Add the things you need to do today..."
    return (
        <div>
            {
                state.size > 0 ?
                    state.map((todo, _) => {
                        return <Todo key={todo.id} todo={todo}/>
                    }) : <h5 style={{margin: "5px"}}>{placeHolderWhenNoTodo}</h5>
            }
        </div>
    )
}

export default TodoGroup;