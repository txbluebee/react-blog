import axios from 'axios';

const POST_URL = 'http://reduxblog.herokuapp.com/api'
const API_KEY = '?key=lily1234'

export const FETCH_POSTS = 'fetch_posts';

export function fetchPosts(){
    const url = `${POST_URL}/posts${API_KEY}`;
    const request = axios.get(url);
    return {
        type: FETCH_POSTS,
        payload: request
    }
}