import React, { useEffect, useState } from "react";
import Link from 'next/link';
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";
import { useRouter } from "next/router";
import { useDispatch, useSelector } from 'react-redux'
import { setUserDOB,setUserName } from "@/store/actions/auth";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const SignupStep2 = () => {
    const router = useRouter();
    const dispatch = useDispatch();
    const [ph, setPh] = useState("");
    const [name, setName] = useState("");
    const [dob, setDOB] = useState("");

    const active_phonenumber = useSelector((state) => state.auth.active_phonenumber)

    useEffect(() => {
        const input = document.getElementById('phone-input');
        if (input) {
            const iti = intlTelInput(input, {
                initialCountry: '',
                separateDialCode: true,
                utilsScript: '/img/utils.js',
            });

            // Set inline styles for the dropdown
            const dropdown = input.parentElement.querySelector('.iti__country-list');
            if (dropdown) {
                dropdown.style.backgroundColor = 'black'; // Set the desired background color
                dropdown.style.color = 'white'; // Set the text color for dropdown items
                dropdown.style.lineHeight = '1.5'; // Adjust line height
                dropdown.style.padding = '8px'; // Adjust padding
                dropdown.style.margin = '0'; // Reset margin
            }
        }
    }, []);

    useEffect(()=>{
        if(active_phonenumber){
            setPh(active_phonenumber.phone_number)
        }
        
    },[active_phonenumber])

    const handelSignUp = () => {
        // Validate input fields
        if (!name || !name.trim()) {
            toast('Please enter your full name');
            return;
        }
    
        if (!dob) {
            toast('Please enter your date of birth');
            return;
        }
    
        // Proceed with dispatching actions and navigating to the next page if all fields are filled
        let data = {
            name: name,
            dob: dob
        };
    
        // Dispatch actions and redirect to the next page
        // dispatch(setDOB(data.dob));
        dispatch(setUserName(data.name));
        dispatch(setUserDOB(data.dob));
        router.push('/Terms');
    };
    




   
    return (
        <>
            <ToastContainer/>
            <div className="signup_bg_gradient bg-cover h-screen grid place-items-center">
                <p className="w-52 absolute top-0 left-0 m-2 text-4xl">
                    <img src="/weber_logo-removebg.png" alt="" className="logo" />
                </p>
                <div className="w-80 mx-auto p-4 rounded-lg shadow-l">
                    <div className="grid grid-cols-6 grid-rows-12 gap-4 justify-items-center mb-6">
                        <div className="col-span-6 md:col-span-3">
                            <p className="text-center text-xl text-blue-600 font-semibold  pb-1 mb-4 cursor-pointer">WEBNTERTENMAINT</p>
                        </div>
                        <div className="col-span-6 md:col-span-3">
                            <Link href="/">
                                <p className="text-center text-xl text-black font-semibold hover:border-b-2 hover:border-red-500 pb-1 mb-4 cursor-pointer">Signin</p>
                            </Link>
                        </div>
                    </div>

                    <p className="text-start text-gray-400 mb-4">STEP 2 OF 5</p>
                    <div className="mb-6">
                        <input type="text" id="base-input" value={name} onChange={(e) => setName(e.target.value)} className="bg-gray-50 border mt-6 border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5  dark:border-blue-600 dark:placeholder-black-400 dark:text-black dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="ENTER YOUR FULL NAME" />
                        <input type="date" id="base-input" value={dob} onChange={(e) => setDOB(e.target.value)} className="bg-gray-50 mb-5 border mt-6 border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5  dark:border-blue-600 dark:placeholder-black-400 dark:text-black dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="ENTER YOUR EMAIL" />
                        
                        <PhoneInput
                            country={'in'}
                            value={ph}
                            onChange={setPh}
                            inputStyle={{ backgroundColor: '#fff', color: 'black', border: '1px solid #374151'}}
                        />
                        <button
                            type="button"
                            className="text-white-700 hover:text-white border bg-blue-700 hover:bg-blue-800  font-medium rounded-lg text-sm py-2.5 mx-auto w-full mb-4 mt-4"
                            onClick={handelSignUp}
                        >
                            CONTINUE
                        </button>
                    </div>
                </div>
            </div>


        </>
    )
}

export default SignupStep2