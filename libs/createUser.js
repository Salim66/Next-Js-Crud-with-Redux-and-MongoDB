import axios from "axios";

export default async function createUser(data) {
    try {
        const response = await axios.post('/api/user', data);
        if (!response.data) throw new Error('Data not created!');
        return response.data;
    } catch (error) {
        console.log(error);
    }
}