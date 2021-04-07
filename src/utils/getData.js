import axios from 'axios';

import { BASE_URL } from '../app/config';
const APP_ID = `${process.env.REACT_APP_API_ID}`;

export const getUsers = async ({setData}) => {
    axios.get(`${BASE_URL}/user`, { headers: { 'app-id': APP_ID } })
        .then(({ data }) => setData(data))
        .catch(console.error)
}

export const getUser = async (userId) => {
    axios.get(`${BASE_URL}/user/${userId}`, { headers: { 'app-id': APP_ID } })
        .then(({data}) => {console.log(data)})
}

// UWdcOFTc7DfzOhI6LpI4
export const getPosts = async () => {
    axios.get(`${BASE_URL}/post`, { headers: { 'app-id': APP_ID } })
        .then(({data}) => {console.log(data)})
}
