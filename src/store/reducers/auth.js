const { EMAIL_SEND,VALIDATE_OTP_RESPONSE } = require("../actions/types");

const initialState = {
    email_response: null,
    otp_response: null,
}

export default (state = initialState, action) => {
    const { type, payload } = action

    switch (type) {
        case EMAIL_SEND:
            return {
                ...state,
                email_response: payload
            };
        case VALIDATE_OTP_RESPONSE:
            return {
                ...state,
                otp_response: payload
            };
        default:
            return state;
    }

}