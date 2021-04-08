import axios from 'axios';

import { BASE_URL } from '../app/config';
const APP_ID = `${process.env.REACT_APP_API_ID}`;

export const getUsers = () => {
    axios.get(`${BASE_URL}/user`, { headers: { 'app-id': APP_ID } })
        .then(({ data }) => data)
        .catch(console.error)
}

export const getUser = (userId) => {
    axios.get(`${BASE_URL}/user/${userId}`, { headers: { 'app-id': APP_ID } })
        .then(({data}) =>  data)
        .catch(console.error)
}

export const getPosts =  () => {
    axios.get(`${BASE_URL}/post`, { headers: { 'app-id': APP_ID } })
        .then(({data}) =>  data)
        .catch(console.error)
}

export const getComments =  (postId) => {
    axios.get(`${BASE_URL}/post/${postId}/comment`, { headers: { 'app-id': APP_ID } })
}

