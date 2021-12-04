import axios from "axios";

const url = "http://localhost:4000/students/";

export const getAllStudent = async () => {
    const result = await axios.get(url);
    return result.data.data;
}

export const createStudent = async (student) => {
    const result = await axios.post(url, student);
    return result.data.success;
}

export const deleteStudent = async (id) => {
    const result = await axios.delete(url + id);
    return result.data.success;
}

export const updateStudent = async (id, newStudent) => {
    const result = await axios.put(url + id, newStudent);
    return result.data.success;
}