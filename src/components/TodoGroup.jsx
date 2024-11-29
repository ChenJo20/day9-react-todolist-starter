import {useContext, useEffect, useState} from "react";
import {TodoContext} from "../App";
import Todo from "./Todo";
import {Pagination} from "antd";

const TodoGroup = () => {
    const {state} = useContext(TodoContext)
    const [currentPageTodos, setCurrentPageTodos] = useState(state.slice(0, 5))
    const [currentPage, setCurrentPage] = useState(1)
    const [currentPageSize, setCurrentPageSize] = useState(5)
    const placeHolderWhenNoTodo = "Add the things you need to do today..."
    const onPaginationChange = (page, pageSize) => {
        setCurrentPageTodos(state.slice((page - 1) * pageSize, page * pageSize))
        setCurrentPage(page)
        setCurrentPageSize(pageSize)
    };
    useEffect(() => {
        setCurrentPageTodos(state.slice((currentPage-1)*currentPageSize, currentPage*currentPageSize)); // Reset to first page when state changes
    }, [state]);
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
                            onChange={onPaginationChange}
                        />
                    </div>
                    : <h5 style={{margin: "5px"}}>{placeHolderWhenNoTodo}</h5>
            }
        </div>
    )
}

export default TodoGroup;