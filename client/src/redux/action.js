
import axios from "axios";
import { DELETE_USERS, DETAILS_USERS, ERROR, FETCH_USERS, LOADING } from "./actionType";



export const fetchUsers = (page) => async (dispatch) => {
    dispatch({
        type: LOADING
    });

    try {
        let { data } = await axios.post(`https://cointabbackend-toli.onrender.com/user/fetchUsers?page=${page}`);
        dispatch({
            type: FETCH_USERS,
            payload: data,
        });
    } catch (err) {
        dispatch({
            type: ERROR
        })
    }
}


export const deleteUsers = () => async (dispatch) => {
    await axios.delete('https://cointabbackend-toli.onrender.com/user/deleteUsers');
    dispatch({
        type: DELETE_USERS,
    });
}


export const detailsUsers = (page, gender, country) => async (dispatch) => {

    dispatch({
        type: LOADING
    });

    try {
        if (country && gender) {
            let { data } = await axios.get(`https://cointabbackend-toli.onrender.com/user/usersDetails?page=${page}&country=${country}&gender=${gender}`);
            dispatch({
                type: DETAILS_USERS,
                payload: data,
            });
        } else if (country) {
            let { data } = await axios.get(`https://cointabbackend-toli.onrender.com/user/usersDetails?page=${page}&country=${country}`);
            dispatch({
                type: DETAILS_USERS,
                payload: data,
            });
        } else if (gender) {
            let { data } = await axios.get(`https://cointabbackend-toli.onrender.com/user/usersDetails?page=${page}&gender=${gender}`);
            dispatch({
                type: DETAILS_USERS,
                payload: data,
            });
        } else {
            let { data } = await axios.get(`https://cointabbackend-toli.onrender.com/user/usersDetails?page=${page}`);
            dispatch({
                type: DETAILS_USERS,
                payload: data,
            });
        }

    } catch (err) {
        dispatch({
            type: ERROR
        })
    }
}