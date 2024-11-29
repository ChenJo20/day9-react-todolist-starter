import "./css/Todo.css"
import {TodoContext} from "../App";
import {useContext, useState} from "react";
import {removeTodo, toggleTodo, updateTodoText} from "../api/todo";
import {Button, Modal} from "antd";
import TextArea from "antd/es/input/TextArea";

const Todo = ({todo}) => {
    const {dispatch} = useContext(TodoContext);
    const [editorLoaded, setEditorLoaded] = useState(false)
    const [editorText, setEditorText] = useState(todo.text)
    const handleChangeDoneStatus = () => {
        toggleTodo(todo.id, todo)
            .then(() => {
                dispatch({type: "CHANGEDONESTATUS", payload: todo.id})
            })
    }
    const handleRemove = () => {
        removeTodo(todo.id)
            .then(() => {
                dispatch({type: "REMOVE", payload: todo.id})
            })
    }
    const handleOk = () => {
        const updatedTodo = {id: todo.id, text: editorText, done: todo.done}
        console.log(updatedTodo)
        updateTodoText(todo.id, updatedTodo)
            .then(() => {
                dispatch({type: "UPDATETEXT", payload: updatedTodo})
            })
        setEditorLoaded(!editorLoaded)
    }

    const onTextChange = (event) => {
        setEditorText(event.target.value)
    }

    const handleEditorStateChange = () => {
        setEditorLoaded(!editorLoaded)
        setEditorText(todo.text)
    }

    const handleCancel = () => {
        setEditorLoaded(!editorLoaded)
    }

    const showEditor = () => {
        return editorLoaded ?
            <Modal
                title={<span style={{ fontSize: '24px' }}>Todo Editor</span>}
                open={editorLoaded}
                onOk={handleOk}
                onCancel={handleCancel}>
                <TextArea
                    showCount
                    maxLength={100}
                    value={editorText}
                    onChange={onTextChange}
                    style={{marginBottom:"10px"}}/>
            </Modal>
            : null;
    }

    return (
        <div className={"todo-wrapper"}>
            <button onClick={handleChangeDoneStatus} className={"todo-text-wrapper"}>
                <span className={todo.done ? "line-through" : ""}>
                    {todo.text}
                </span>
            </button>
            <Button
                color="primary"
                variant="filled"
                style={{marginRight: "5px"}}
                onClick={handleEditorStateChange}>
                Edit
            </Button>
            <button onClick={handleRemove}>×</button>
            {showEditor()}
        </div>
    )
}

export default Todo;