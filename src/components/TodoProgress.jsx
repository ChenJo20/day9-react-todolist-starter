import React, {useContext} from 'react';
import {TodoContext} from "../App";
import './css/TodoProgress.css';

const TodoProgress = () => {
    const {state} = useContext(TodoContext);

    const totalTodos = state.length;
    const completedTodos = state.filter(todo => todo.done).length;

    // 设置进度条颜色
    const progress = totalTodos === 0 ? -1 : (completedTodos / totalTodos) * 100;

    let progressBarColor = '';

    if (progress <= 40) {
        progressBarColor = 'red';
    } else if (progress <= 60) {
        progressBarColor = 'yellow';
    } else {
        progressBarColor = 'green';
    }

    return (
        <div className="todo-progress-container">
            <h2 className="todo-progress-title">任务进度</h2>
            <div className="progress-bar-wrapper">
                <div
                    className={`progress-bar ${progressBarColor}`}
                    style={{width: `${progress}%`}}
                />
            </div>
            <p className="todo-progress-text">
                {completedTodos} / {totalTodos} 已完成
            </p>

            {(progress === 100 || progress === -1) && (
                <div className="happy-face">😊</div>
            )}
            {(progress >= 0 && progress <= 40) && (
                <div className="sad-face">😟</div>
            )}
            {(progress >= 0 && progress > 40 && progress < 100) && (
                <div className="sad-face">🙂</div>
            )}
        </div>
    );
}

export default TodoProgress;
