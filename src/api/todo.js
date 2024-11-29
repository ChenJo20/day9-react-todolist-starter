import axios from "axios";

const instance = axios.create({
    baseURL: "https://67495c0d868020296630a79c.mockapi.io",
    timeout: 5000
})

export const getTodos = async () => {
    const response = await instance.get("/todos");
    return response.data
}

export const addTodo = async (text) => {
    const response = await instance.post("/todos", {
        text: text,
        done: false
    })
    return response.data
}

export const removeTodo = async (id) => {
    const response = await instance.delete("/todos/" + id)
    return response.data
}

export const toggleTodo = async (id, todo) => {
    instance.put("/todos/" + id, {
        text: todo.text,
        done: !todo.done
    })
}