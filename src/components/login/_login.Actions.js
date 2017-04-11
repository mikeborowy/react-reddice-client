import axios from 'axios';

export const OnLoginRequest = (data) => {
    return (dispatch) => {

        let userData = {
            username: data.identifier,
            password: data.password
        };

        return axios.post('http://localhost:8081/api/Login', userData);
    };
};