const { EMAIL_SEND,
    VALIDATE_OTP_RESPONSE,
    PHONE_NUMBER,
    EMAIL_SET,
    SET_NAME,
    SET_DOB,
    SET_LANG,
    SET_COUNTRIES,
    SET_CITY,
    MEMBERSHIP,
    ADD_LIST,
    GET_LIST,
    USERDATA,
    GET_PROFILE } = require("../actions/types");

const initialState = {
    email_response: null,
    otp_response: null,
    active_phonenumber: null,
    active_email: null,
    active_name: null,
    active_DOB: null,
    active_plan: null,
    user_res:[],
    lang_res:[],
    country_res:[],
    city_res:[],
    add_list:[],
    profile_data:[],
    list_res:[]

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
        case PHONE_NUMBER:
            return {
                ...state,
                active_phonenumber: payload
            };
        case EMAIL_SET:
            return {
                ...state,
                active_email: payload
            };
        case SET_NAME:
            return {
                ...state,
                active_name: payload
            };
        case SET_DOB:
            return {
                ...state,
                active_DOB: payload
            };
        case SET_LANG:
            return {
                ...state,
                lang_res: payload
            };
        case SET_COUNTRIES:
            return {
                ...state,
                country_res: payload
            };
        case SET_CITY:
            return {
                ...state,
                city_res: payload
            };
        case MEMBERSHIP:
            return {
                ...state,
                active_plan: payload
            };
        case ADD_LIST:
            return {
                ...state,
                add_list: payload
            };
        case USERDATA:
            return {
                ...state,
                user_res: payload
            };
       
        case GET_PROFILE:
            return {
                ...state,
                profile_data: payload
            };
       
            
        default:
            return state;
    }

}