import axios from "axios";

const axiosInstance = axios.create({
    baseURL:"https://68ed0fcfeff9ad3b14046b1c.mockapi.io/api/sherzod",
    headers:{
        "Content-Type": "application/json"
    }
})

export default axiosInstance;