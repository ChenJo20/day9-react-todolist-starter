import TodoGroup from "./TodoGroup";
import TodoGenerator from "./TodoGenerator";
import {useContext, useEffect, useState} from "react";
import {getTodos} from "../api/todo";
import {TodoContext} from "../App";
import {LoadingOutlined} from "@ant-design/icons";
import {Flex, Pagination, Spin} from "antd";
import TodoProgress from "./TodoProgress";
import {ActionType} from "../context/todoReducer";

const TodoList = () => {
    const {dispatch} = useContext(TodoContext);
    const [loading, setLoading] = useState(false)
    useEffect(() => {
        setLoading(true);
        getTodos()
            .then((todos) => {
                dispatch({type: ActionType.INIT, payload: todos})
            })
            .finally(() => {
                setLoading(false)
            })
    }, []);
    return (
        loading
            ? <Spin indicator={<LoadingOutlined style={{ fontSize: 48, marginTop: "50px"}} spin />} />
            : <div>
                <h2 style={{margin: "5px"}}>Todo List</h2>
                <TodoProgress/>
                <TodoGroup/>
                <TodoGenerator/>
            </div>
    );
}

export default TodoList