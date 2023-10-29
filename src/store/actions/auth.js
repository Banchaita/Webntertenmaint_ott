import { apiCall } from "@/api";
const { EMAIL_SEND,
    VALIDATE_OTP_RESPONSE,
    EMAIL_SET,
    PHONE_NUMBER,
    SET_NAME,
    SET_DOB,
    SET_LANG,
    SET_CITY,
    SET_COUNTRIES,
    CITY_ERROR,
    USERDATA,
    MEMBERSHIP,
    ADD_LIST,
    GET_LIST,
    GET_PROFILE } = require("./types");
import axios from 'axios';

const base_url = "https://webntertenmaint.com/"
// const base_url = "https://example.com/"


export const emailSendWithOtp = (data) => async (dispatch) => {
    let config = {
        method: 'POST',
        withCredentials: true,
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/x-www-form-urlencoded',
        },
        url: `${base_url}mysql_conn/send-email-otp.php?email=${data}`,
        data: '' // Assuming data is an object containing the email property
    };

    try {
        let response = await apiCall(config, dispatch);
        dispatch({
            type: EMAIL_SEND,
            payload: response.data,
        });
    } catch (error) {
        // Handle the error (e.g., show an error message to the user)
        console.error('Error sending email with OTP:', error);
    }
};


export const validateOtp = (data) => async dispatch => {
    let config = {
        withCredentials: true,
        method: 'POST',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/x-www-form-urlencoded', // Correct the content type
        },
        url: `${base_url}mysql_conn/verify-email-otp.php?email=${data.email}&opt=${data.otp}`,
        data,
    }
    let response = await apiCall(config, dispatch)
    dispatch({
        type: VALIDATE_OTP_RESPONSE,
        payload: response.data
    })
}
export const getLanguage = () => async dispatch => {
    const key = "WEBNTERTENMAINT@1234";
    const query = "Select * From Languages";

    try {
        const response = await axios.get(`https://webntertenmaint.com/mysql_conn/mysql_data_get.php?key=${key}&query=${encodeURIComponent(query)}`);
        
        // Assuming response.data contains the data you want to dispatch
        dispatch({
            type: SET_LANG,
            payload: response.data
        });
    } catch (error) {
        // Handle errors here (dispatch an error action, show an error message, etc.)
        console.error(error);
    }
};

export const getCountries = () => async dispatch => {
    const key = "WEBNTERTENMAINT@1234";
    const query = "Select * From Countries";

    try {
        
        const response = await axios.get(`https://webntertenmaint.com/mysql_conn/mysql_data_get.php?key=${key}&query=${encodeURIComponent(query)}`);
        
        dispatch({
            type: SET_COUNTRIES,
            payload: response.data
        });
    } catch (error) {
        console.error(error);
    }
};

export const getCities = (data) => async dispatch => {
    console.log("data",data.country_name)
    let country_name = data.country_name
    const key = "WEBNTERTENMAINT@1234";
    const query = `SELECT * FROM Cities WHERE country_name = '${country_name}'`;
    console.log(query)

    try {
        const response = await axios.get(`https://webntertenmaint.com/mysql_conn/mysql_data_get.php?key=${key}&query=${encodeURIComponent(query)}`);
        dispatch({
            type: SET_CITY,
            payload: response.data
        });
    } catch (error) {
        console.error(error);
        // Dispatch an action to handle the error, e.g., update the state with an error message.
        dispatch({
            type: CITY_ERROR,
            payload: "Failed to fetch city data. Please try again later."
        });
    }
};





export const getMyProfile = (data) => async dispatch => {
    console.log("data",data)
    let email = data
    const key = "WEBNTERTENMAINT@1234";
    const query = `SELECT * FROM Users WHERE email_id = '${email}'`;
    console.log(query)

    try {
        const response = await axios.get(`https://webntertenmaint.com/mysql_conn/mysql_data_get.php?key=${key}&query=${encodeURIComponent(query)}`);
        console.log("response--",response)
        dispatch({
            type: GET_PROFILE,
            payload: response.data
        });
    } catch (error) {
        console.error(error);
    }
};

export const getPlayList = () => async dispatch => {
    const key = "WEBNTERTENMAINT@1234";
    const query = "Select * From Playlists";

    try {
        const response = await axios.get(`https://webntertenmaint.com/mysql_conn/mysql_data_get.php?key=${key}&query=${encodeURIComponent(query)}`);
        console.log("response--",response)
        // Assuming response.data contains the data you want to dispatch
        dispatch({
            type: GET_LIST,
            payload: response
        });
    } catch (error) {
        // Handle errors here (dispatch an error action, show an error message, etc.)
        console.error(error);
    }
};

export const storeUserData = (data) => async dispatch => {
    console.log("data",data)
    const key = "WEBNTERTENMAINT@1234";
    const fullName = data.full_name;
    const country_code = data.country_code;
    const phone_number = data.phone_number;
    const email_id = data.email_id;
    const date_of_birth = data.date_of_birth;
    const login_type = data.login_type;
    const country = data.country;
    const city = data.city;


    const query = `INSERT INTO Users (\`user_id\`,\`full_name\`,\`country_code\`,\`phone_number\`,\`email_id\`,\`date_of_birth\`,\`login_type\`,\`country\`,\`city\`) VALUES (UUID(),'${fullName}','${country_code}','${phone_number}','${email_id}','${date_of_birth}','${login_type}','${country}','${city}');`;   
    console.log(query)

    try {
        const response = await axios.post(`https://webntertenmaint.com/mysql_conn/mysql_data_get.php?key=${key}&query=${encodeURIComponent(query)}`);
        console.log("response--",response)
        dispatch({
            type: USERDATA,
            payload: response.data
        });
    } catch (error) {
        console.error(error);
        // Dispatch an action to handle the error, e.g., update the state with an error message
    }
};

export const storeUserDataUpate = (data) => async dispatch => {
    const key = "WEBNTERTENMAINT@1234";
    const fullName = data.full_name;
    const preferred_languages = data.preferred_languages;

    const query = `UPDATE Users SET \`preferred_languages\` = '${preferred_languages}' WHERE \`full_name\` = '${fullName}';`;   
    console.log(query)

    try {
        const response = await axios.post(`https://webntertenmaint.com/mysql_conn/mysql_data_get.php?key=${key}&query=${encodeURIComponent(query)}`);
        console.log("response--",response)
        dispatch({
            type: USERDATA,
            payload: response.data
        });
    } catch (error) {
        console.error(error);
        // Dispatch an action to handle the error, e.g., update the state with an error message
    }
};

export const addMyList = (data) => async dispatch => {
    const key = "WEBNTERTENMAINT@1234";
    const name = data.name
   
    const query = `INSERT INTO Playlists (\`user_id\`,\`name\`) VALUES (UUID(),'${name}');`;   

    try {
        const response = await axios.post(`https://webntertenmaint.com/mysql_conn/mysql_data_get.php?key=${key}&query=${encodeURIComponent(query)}`);
        console.log("response--", response);

        // Dispatch the ADD_LIST action with the response data
        dispatch({
            type: ADD_LIST,
            payload: response.data
        });

        // Delay the execution of getPlayList() by 2 seconds
        setTimeout(() => {
            // Call getPlayList() after the delay
            getPlayList();
        }, 2000); // 2000 milliseconds = 2 seconds
    } catch (error) {
        console.error(error);
        // Dispatch an action to handle the error, e.g., update the state with an error message
    }
};


export const setEmailId =(email)=>async dispatch=>{
    dispatch({
        type:  EMAIL_SET,
        payload: email
    })
}

export const setPhone =(phone)=>async dispatch=>{
    dispatch({
        type:  PHONE_NUMBER,
        payload: phone
    })
}

export const setUserName =(name)=>async dispatch=>{
    dispatch({
        type:  SET_NAME,
        payload: name
    })
}

export const setUserDOB =(dob)=>async dispatch=>{
    dispatch({
        type:  SET_DOB,
        payload: dob
    })
}
export const setMembership =(membership)=>async dispatch=>{
    dispatch({
        type:  MEMBERSHIP,
        payload: membership
    })
}

