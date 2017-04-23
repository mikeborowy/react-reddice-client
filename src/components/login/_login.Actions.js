import axios from 'axios';
import setHeaderAuthToken from './helpers/setHeaderAuthToken';

export const types = {
    SET_CURRENT_USER: 'SET_CURRENT_USER'
};

export const OnSetCurrentUser = (user) =>({type: types.SET_CURRENT_USER, data: user});
export const OnLoginRequest = (data) => {
    return (dispatch) => {

        let userData = `username=${data.identifier}&password=${data.password}&grant_type=password`;

        return axios
            .post('http://localhost:8081/token', userData)
            .then(response => {

                // console.log("response",  response.data)
                const accessToken = response.data.access_token;
                localStorage.setItem('accessToken', accessToken);
                setHeaderAuthToken(accessToken);

                let user = {
                    userName: response.data.userName,
                    iat:  response.data[".issued"],
                    expires: response.data[".expires"]
                };

                localStorage.setItem('user', JSON.stringify(user));

                dispatch(OnSetCurrentUser(user));
            });

        // return axios.request({
        //     method: 'POST',
        //     url: 'http://localhost:52404/token',
        //     headers: {
        //         'content-type': 'application/x-www-form-url-encoded'
        //     },
        //     body: userData,
        //     json: true
        // })
    };
};