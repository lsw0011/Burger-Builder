import axios from 'axios';

const instance = axios.create({
    baseURL: 'https://bbuilder-805ae.firebaseio.com/'
})

export default instance;