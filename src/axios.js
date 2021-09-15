import axios from axios;

const instance = axios.create({
    // baseURL: "myurl.com"
    baseURL: 'https://localhost:3005/payment/create/api'
});


export default instance;