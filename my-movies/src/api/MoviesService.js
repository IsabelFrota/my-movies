import axios from 'axios';
const API_KEY = '12d139b9bde1879c2978baa592a54f5c';
const BASE_URL = 'https://api.themoviedb.org/3/';

const withBaseUrl = path => `${BASE_URL}${path}?api_key=${API_KEY}`;

export class MoviesService{
    static getMovies(){
        return axios(withBaseUrl('movie/popular'));
    }

    static getMovieById(id){
        return axios(withBaseUrl(`movie/${id}`));
    }
}
