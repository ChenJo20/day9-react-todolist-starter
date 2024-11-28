import TodoGroup from "./TodoGroup";
import TodoGenerator from "./TodoGenerator";

const TodoList = () => {
    return (
        <div>
            <h2 style={{margin: "5px"}}>Todo List</h2>
            <TodoGroup/>
            <TodoGenerator/>
        </div>

    );
}

export default TodoList