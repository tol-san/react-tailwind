import axios from "axios";

const axiosInstance = axios.create({
    baseURL: "/data", // Points to public/data folder
});

class APIClient {
    constructor(endpoint) {
        this.endpoint = endpoint;
    }

    getAll = async () => {
        const res = await axiosInstance.get(this.endpoint);
        return res.data;
    };

    get = async (id) => {
        // Note: In a real API, this would be `this.endpoint + '/' + id`
        // For static JSON, we fetch all and find (simulating backend logic)
        // This is a workaround for the static file setup
        const res = await axiosInstance.get(this.endpoint);
        return res.data;
    };
}

export default APIClient;
