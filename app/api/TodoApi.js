// POINT axiosを用いたAPI
import axios from 'axios';

const ENDPOINT_URL = 'http://localhost:8080/api/tasks'

const TodoApi = {
    async getAll() {
        const result = await axios.get(ENDPOINT_URL);
        return result.data;
    },
    async post(todo) {
        const result = await axios.post(ENDPOINT_URL, todo);
        return result.data;
    },
    async delete(id) {
        const result = await axios.delete(ENDPOINT_URL + '/' + id);
        return result.data;
    },
    async patch(todo) {
        const result = await axios.put(ENDPOINT_URL, todo);
        return result.data;
    }
}

export default TodoApi;