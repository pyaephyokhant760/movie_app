import axios from "axios";

export const api_key = '5459c45ed5127d868ec6426a082c8c95';

export const api = axios.create({
    baseURL : 'https://api.themoviedb.org/3'
})