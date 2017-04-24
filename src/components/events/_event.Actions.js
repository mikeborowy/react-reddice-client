import axios from 'axios';

export const OnCreateEvent = (title) => {

    return (dispatch) => {

        let event = {
            title
        };

        return axios.post('http://localhost:8081/api/events', event); 
    }
};