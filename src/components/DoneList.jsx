import {useContext} from "react";
import {TodoContext} from "../App";

const DoneList = () => {
    const {state} = useContext(TodoContext)
    const doneList = state.filter((todo) => todo.done);
    return (
        <div>
            {doneList.map((doneTodo, index) => {
                return <div key={doneTodo.id}>
                    {doneTodo.text}
                </div>
            })}
        </div>
    )

}

export default DoneList;