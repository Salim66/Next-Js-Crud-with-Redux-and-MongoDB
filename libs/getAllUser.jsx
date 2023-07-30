import axios from "axios";

export default async function getAllUser() {
    try {
        const response = await axios.get('/api/user');
        if (!response.data) throw new Error("Data not found!");
        return response.data.users;
    } catch (error) {
        console.log(error);
    }
}
