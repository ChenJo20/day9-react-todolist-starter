import {useContext, useState} from "react";
import {TodoContext} from "../App";
import Todo from "./Todo";
import {Pagination} from "antd";

const TodoGroup = () => {
    const {state} = useContext(TodoContext)
    const [currentPageTodos, setCurrentPageTodos] = useState(state.slice(0, 5))
    const placeHolderWhenNoTodo = "Add the things you need to do today..."
    const onChange = (page, pageSize) => {
        console.log(page)
        setCurrentPageTodos(state.slice((page - 1) * pageSize, page * pageSize))
        console.log(currentPageTodos)
    };
    return (
        <div>
            {
                currentPageTodos.length > 0 ?
                    <div>
                        {currentPageTodos.map((todo, _) => {
                            return <Todo key={todo.id} todo={todo}/>
                        })}
                        <Pagination
                            style={{justifyContent:"center", margin:"10px"}}
                            total={state.length}
                            showTotal={(total) => `Total ${total} items`}
                            defaultPageSize={5}
                            defaultCurrent={1}
                            onChange={onChange}
                        />
                    </div>
                    : <h5 style={{margin: "5px"}}>{placeHolderWhenNoTodo}</h5>
            }
        </div>
    )
}

export default TodoGroup;