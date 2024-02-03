import axios from "axios";

const instance = axios.create({
    baseURL: "https://shoeplanet-backend.onrender.com"
})

export default instance;