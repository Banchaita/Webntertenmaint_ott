import { LOGOUT } from "@/store/actions/types";
import axios from "axios";

export const apiCall = (config, dispatch) => {
    return new Promise((resolve, reject) => {
        axios({
            method: config.method,
            url: config.url,
            headers: config.headers,
            data: config.data || {},
            timeout: 70000,
            
        })
        .then(async (response) => {
            resolve(response);
        })
        .catch(async (error) => {
            let response = error?.response;
            if (response?.status === 401) {
                dispatch({
                    type: LOGOUT,
                });
            }
            reject(error);
        });
    });
};