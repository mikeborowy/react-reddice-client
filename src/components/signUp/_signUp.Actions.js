import axios from 'axios';

export const OnSignUpRequest = (data) => {
    return (dispatch) => {

        let userData = data;
            userData.roleId = 1;

        return axios.post('http://localhost:8081/api/users', userData);

        // return fetch('http://localhost:49968/api/users', {
        //     method: "POST",
        //     headers: {
        //         'Accept': 'application/json, text/plain, */*',
        //         'Content-Type': 'application/json'
        //     },
        //     body:  JSON.stringify(userData)
        // });
    };
};