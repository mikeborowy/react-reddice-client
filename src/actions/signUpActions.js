import axios from 'axios';

export const OnSignUpRequest = (userData) => {
    return (dispatch) => {
        return axios.post('http://localhost:3333/api/users', userData);
    }
}