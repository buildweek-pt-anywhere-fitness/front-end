import axios from 'axios';

const axiosWithAuth = () => {
    const token = localStorage.getItem('token')

    return axios.create({
        headers: {
            authorization: token
        },
        baseUrl: 'https://api/anywhere-fitness.herokuapp.com'
    });
};

export default axiosWithAuth;