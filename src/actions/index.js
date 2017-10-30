import axios from 'axios';

const POST_URL = 'http://reduxblog.herokuapp.com/api'
const API_KEY = '?key=lily1234'

export const FETCH_POSTS = 'fetch_posts';
export const SEND_POST = 'send_post'

export function fetchPosts(){
    const url = `${POST_URL}/posts${API_KEY}`;
    const request = axios.get(url);
    return {
        type: FETCH_POSTS,
        payload: request
    }
}

export function sendPost(values, callback){
    const url = `${POST_URL}/posts${API_KEY}`;
    const request = axios.post(url, values)
    .then(()=>{callback()});
    return {
        type: SEND_POST,
        payload: request
    }
}