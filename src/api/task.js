import axios from 'axios';

const BASE ='http://127.0.0.1:8000/api';
export const getTasks =() => axios.get(`${BASE}/tasks/`);
export const createTask =(data) => axios.post(`${BASE}/tasks/`,data);
export const updateTask =(id,data) => axios.patch(`${BASE}/tasks/${id}/`,data);
export const deleteTask =(id) => axios.delete(`${BASE}/tasks/${id}/`);