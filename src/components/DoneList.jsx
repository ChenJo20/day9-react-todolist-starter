import {useContext} from "react";
import {TodoContext} from "../App";

const DoneList = () => {
    const {state} = useContext(TodoContext)
    const doneList = state.filter((todo) => todo.done);
    return (
        <div>
            {doneList.map((doneTodo, index) => {
                return <span key={doneTodo.id}>
                    {doneTodo.text}
                </span>
            })}
        </div>
    )

}

export default DoneList;