import React, { useEffect, useState } from "react";
import { useRouter } from "next/router";
import "react-phone-input-2/lib/style.css";
import { auth } from "@/firebase.config";
import { RecaptchaVerifier, signInWithPhoneNumber } from "firebase/auth";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useDispatch, useSelector } from 'react-redux'


const PhoneVerify = () => {
    const router = useRouter();
    const [otp, setOtp] = useState("");
    const [ph, setPh] = useState("");
    const [loading, setLoading] = useState(false);
    const [showOTP, setShowOTP] = useState(false);
    const [user, setUser] = useState(null);


    const active_phonenumber = useSelector((state) => state.auth.active_phonenumber)
    console.log(active_phonenumber)

    useEffect(() => {
        if (active_phonenumber) {
            setPh(active_phonenumber.phone_number)
        }

    }, [active_phonenumber])


    useEffect(() => {
        onSignup()
    }, [1])


    function onCaptchVerify() {
        if (!window.recaptchaVerifier) {
            try {
                console.log("recaptchaVerifier===", window.recaptchaVerifier)
                window.recaptchaVerifier = new RecaptchaVerifier(
                    "recaptcha-container",
                    {
                        size: "invisible",
                        callback: (response) => {
                            onSignup();
                        },
                        "expired-callback": () => { },
                    },
                    auth
                );
            } catch (error) {
                console.error("Error initializing RecaptchaVerifier:", error);
            }
        }
    }


    function onSignup() {
        setLoading(true);
        onCaptchVerify();

        const appVerifier = window.recaptchaVerifier;
        console.log("appVerifier--", appVerifier)

        const formatPh = "+" + ph;
        console.log("formatPh", formatPh)
        signInWithPhoneNumber(auth, formatPh, appVerifier)
            .then((confirmationResult) => {
                window.confirmationResult = confirmationResult;
                console.log("confirmationResult==", confirmationResult)
                toast("OTP send your phone number")
                setLoading(false);
            })
            .catch((error) => {
                console.log(error);
                setLoading(false);
            });
    }


    function onOTPVerify() {
        router.push("/Profile");
        // window.confirmationResult
        //     .confirm(otp)
        //     .then(async (res) => {
        //         toast("OTP verify successfully!")
        //         router.push("/Profite"); // Replace "/signup" with the actual path to your signup page
        //     })
        //     .catch((err) => {
        //         console.log(err);
        //     });
    }



    return (
        <>


            <ToastContainer />
            <div className="signup_bg_gradient bg-cover h-screen grid place-items-center">
                <div className="w-80 mx-auto p-4 rounded-lg shadow-l">
                    <div className="mb-6">
                        <div id="recaptcha-container"></div>
                        <img src="/verify.jpg" alt="" className='w-[300px]' />
                        <p className="text-start text-gray-400 mb-4">Enter the OTP sent to your mobile number</p>
                        <p className='text-black'>+ {ph}</p>

                        {/* <PhoneInput
                            country={'in'}
                            value={ph}
                            onChange={setPh}
                            inputStyle={{ backgroundColor: '#374151', color: 'white', border: '1px solid #374151' }}
                        /> */}
                        <input
                            type="text"
                            id="base-input"
                            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                            placeholder="ENTER YOUR OTP"
                            value={otp}
                            onChange={(e) => setOtp(e.target.value)}
                        />


                        {/* <div class="otp-input-wrapper">
                            <input type="text" maxlength="6" pattern="[0-9]*" autoComplete="off" />
                            <svg viewBox="0 0 240 1" xmlns="http://www.w3.org/2000/svg">
                                <line x1="0" y1="0" x2="240" y2="0" stroke="#3e3e3e" stroke-width="2" stroke-dasharray="44,22" />
                            </svg>
                        </div> */}

                        <button
                            type="button"
                            onClick={onOTPVerify}
                            className="text-white-700 hover:text-white border bg-blue-700 hover:bg-blue-800  font-medium rounded-lg text-sm py-2.5 mx-auto w-full mb-4 mt-4"
                        >
                            VERIFY
                        </button>
                    </div>
                </div>
            </div>
        </>




    );
};

export default PhoneVerify;
