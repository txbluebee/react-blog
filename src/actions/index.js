import axios from 'axios';

const POST_URL = 'http://reduxblog.herokuapp.com/api'
const API_KEY = '?key=lily1234'

export const FETCH_POSTS = 'fetch_posts';
export const SEND_POST = 'send_post'
export const FETCH_POST = 'fetch_post';
export const DELETE_POST = 'delete_post'

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


export function fetchPost(id){
    const url = `${POST_URL}/posts/${id}${API_KEY}`;
    const request = axios.get(url);
    return {
        type: FETCH_POST,
        payload: request
    }
}

export function deletePost(id, callback){
    const url = `${POST_URL}/posts/${id}${API_KEY}`;
    const request = axios.delete(url)
    .then(()=>callback());
    return {
        type: DELETE_POST,
        payload: id
    }
}