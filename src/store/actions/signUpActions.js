import axios from 'axios';

export const OnSignUpRequest = (userData) => {
    return (dispatch) => {
        axios.post('/api/users',{user: userData})
    }
}