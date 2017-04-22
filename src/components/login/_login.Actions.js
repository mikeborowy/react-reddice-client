import axios from 'axios';

export const OnLoginRequest = (data) => {
    return (dispatch) => {

        let userData = `username=${data.identifier}&password=${data.password}&grant_type=password`;

        return axios.post('http://localhost:52404/token', userData);

        // return axios.request({     method: 'POST',     url:
        // 'http://localhost:52404/token',     headers: {         'content-type':
        // 'application/x-www-form-url-encoded'     },     body: userData,     json:
        // true })
    };
};