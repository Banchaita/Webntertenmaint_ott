import { apiCall } from "@/api";
const { EMAIL_SEND,VALIDATE_OTP_RESPONSE } = require("./types");

const base_url = "http://webntertenmaint.com/"
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
        console.log("response--->>>>>",response)
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
    console.log("response--<<<<->>>>>",response)
    dispatch({
        type: VALIDATE_OTP_RESPONSE,
        payload: response.data
    })
}
