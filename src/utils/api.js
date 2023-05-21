import axios from "axios";

const BASE_URL = "https://api.themoviedb.org/3"
const TMDB_TOKEN = import.meta.env.VITE_TMDB_TOKEN

const headers = {
    Authorization: "Bearer " + TMDB_TOKEN
}

export const fetchDataFromApi = async (url, params) => {
    try {
        return await axios.get(BASE_URL + url, { headers, params: params })
    } catch (error) {
        return Promise.reject(new Error(error.message || "something went wrong!"))
    }
}