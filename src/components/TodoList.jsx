import TodoGroup from "./TodoGroup";
import TodoGenerator from "./TodoGenerator";
import {useContext, useEffect, useState} from "react";
import {getTodos} from "../api/todo";
import {TodoContext} from "../App";
import {LoadingOutlined} from "@ant-design/icons";
import {Flex, Spin} from "antd";

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
            ? <Spin indicator={<LoadingOutlined style={{ fontSize: 48, marginTop: "50px"}} spin />} />
            : <div>
                <h2 style={{margin: "5px"}}>Todo List</h2>
                <TodoGroup/>
                <TodoGenerator/>
            </div>
    );
}

export default TodoList