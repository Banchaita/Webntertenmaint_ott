import { apiCall } from "@/api";
const { EMAIL_SEND,VALIDATE_OTP_RESPONSE } = require("./types");

const base_url = "https://webntertenmaint.com/"
// const base_url = "https://example.com/"


export const emailSendWithOtp = (data) => async dispatch => {
    console.log("data--",data)
    let config = {
        method: 'POST',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/x-www-form-urlencoded', // Correct the content type
        },
        url: `${base_url}mysql_conn/send-email-otp.php?email=${data}`,
        data,
    }
    let response = await apiCall(config, dispatch)
    dispatch({
        type: EMAIL_SEND,
        payload: response.data
    })
}

export const validateOtp = (data) => async dispatch => {
    console.log("data--",data)
    let config = {
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
