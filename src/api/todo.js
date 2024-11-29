import axios from "axios";

const instance = axios.create({
    baseURL: "https://67495c0d868020296630a79c.mockapi.io",
    timeout: 5000
})

export const getTodos = async () => {
    const response = await instance.get("/todos");
    return response.data
}