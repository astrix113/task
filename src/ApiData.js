import axios from 'axios';

const ApiData = async () => {
    try {
        const response = await axios.get(' https://randomuser.me/api/')
        console.log(response);
        console.log(response.data);
        return response.data;
    } catch (error) {
        console.error('Error fetching data:', error);
        return [];
    }
};
export default ApiData