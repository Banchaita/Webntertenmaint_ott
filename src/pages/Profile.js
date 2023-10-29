import React, { useEffect, useState } from "react";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";
import { MdLogout } from 'react-icons/md';
import { useDispatch, useSelector } from 'react-redux'
import { useRouter } from "next/router";
import { getLanguage, getCountries, getCities,storeUserData,storeUserDataUpate,getMyProfile } from "@/store/actions/auth";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Navbar from "@/components/Navbar";



const Profile = () => {
    const router = useRouter();
    const dispatch = useDispatch();

    const [ph, setPh] = useState("");
    const [email, setEmail] = useState("");
    const [name, setName] = useState("");
    const [dob, setDOB] = useState("");
    const [city, setCity] = useState("");
    const [isDropdownOpen, setDropdownOpen] = useState(false);
    const [selectedLanguages, setSelectedLanguages] = useState([]);
    const [selectedCountry, setSelectedCountry] = useState('');
    const [profileData, setprofileData] = useState([]);


    const active_phonenumber = useSelector((state) => state.auth.active_phonenumber)
    const phone_number  = active_phonenumber;
    const firstTwoDigits = (phone_number && typeof phone_number === 'string') ? phone_number.substring(0, 2) : '';

    const active_name = useSelector((state) => state.auth.active_name)
    const active_DOB = useSelector((state) => state.auth.active_DOB)
    const active_email = useSelector((state) => state.auth.active_email)
    console.log("active_email--",active_email)
    const user_res = useSelector((state) => state.auth.user_res)
    console.log("user_res--",user_res)

    const isUserDataAvailable = user_res && Object.keys(user_res).length > 0;


    const lang = useSelector((state) => state.auth.lang_res)
    const country_res = useSelector((state) => state.auth.country_res)
    const city_res = useSelector((state) => state.auth.city_res)
    const profile_data = useSelector((state) => state.auth.profile_data)
    console.log("profile_data=====",city)


    const toggleLanguage = (language) => {
        const updatedLanguages = selectedLanguages.includes(language)
            ? selectedLanguages.filter((lang) => lang !== language)
            : [...selectedLanguages, language];
        setSelectedLanguages(updatedLanguages);

        let data={
            full_name: name,
            preferred_languages:selectedLanguages
        }
        dispatch(storeUserDataUpate(data))


    };






    useEffect(() => {
        console.log("Enter")
        dispatch(getLanguage())
        dispatch(getCountries())
        dispatch(getMyProfile(active_email))
    }, [dispatch])

    const setCities = () => {
        let data = {
            country_name: country
        }
        dispatch(getCities(data))
    }




    useEffect(() => {
        if (active_phonenumber) {
            setPh(active_phonenumber.phone_number)
        }

        if (active_name) {
            setName(active_name)
        }

        if (active_DOB) {
            setDOB(active_DOB)
        }
        if (active_email) {
            setEmail(active_email.email)
        }
    }, [active_phonenumber, active_name, active_DOB, active_email])


    useEffect(()=>{
        if(profile_data){
            setprofileData(profile_data)
            setName(profile_data[7]?.full_name)
            setEmail(profile_data[7]?.email_id)
            setPh(profile_data[7]?.phone_number)
            setDOB(profile_data[7]?.date_of_birth)
            setDOB(profile_data[7]?.date_of_birth)
            setSelectedCountry(profile_data[7]?.country)
            setCity(profile_data[7]?.city)
            // setSelectedLanguages(profile_data[7].preferred_languages)

        }
        

    },[profile_data])










    const handelUpdateUserData = () => {
        console.log("Run")
        let data = {
            full_name: name,
            country_code: firstTwoDigits,
            phone_number: ph,
            email_id: email,
            date_of_birth: dob,
            login_type: 'Website',
            country: selectedCountry,
            city: city
        }
        dispatch(storeUserData(data))

    }
    const handleCountryChange = (selectedCountry) => {
        setSelectedCountry(selectedCountry);
        if (selectedCountry) {
            const data = {
                country_name: selectedCountry
            };
            dispatch(getCities(data));
            toast("Your data save successfull!")
        }
    };

    const handelToNext =()=>{
        router.push("/Home")
    }






    const toggleDropdown = () => {
        setDropdownOpen(!isDropdownOpen);
    };

    const handleMembership = () => {
        router.push('/Membershipplan')
    }

    return (
        <>
            <Navbar />
            <ToastContainer/>
            <div className='bg-cover h-screen grid place-items-center'>
                <p className="w-52 absolute top-0 left-0 m-2 text-4xl mobile-logo">
                    {/* <img src="/weber_logo-removebg.png" alt="" className="logo" /> */}
                </p>
                <p className="w-52 absolute top-0 right-0 m-2 text-2xl mobile-text">
                    Hello {name}
                </p>
                <div className="wapper mt-10" style={{ background: '#0d163f' }}>
                    <div className="w-80 mx-auto p-4 rounded-lg">
                        <p>ACCOUNT DETAILS</p>
                        <PhoneInput
                            class="bg-gray-50 border mb-3 mt-3 border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                            country={'in'}
                            value={ph}
                            onChange={setPh}
                            inputStyle={{ backgroundColor: '#fff', color: 'black', border: '1px solid #374151' }}
                        />
                        <input type="text" id="base-input" value={email} onChange={(e) => setEmail(e.target.value)} class="bg-gray-50 border mb-3 mt-3 border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="ENTER YOUR EMAIL" />
                        <input type="date" id="base-input" value={dob} class="mb-3 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="ENTER YOUR EMAIL" />

                        <select
                            id="countries"
                            className="bg-gray-50 border mb-3 border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                            onChange={(e) => handleCountryChange(e.target.value)} 
                            value={selectedCountry}                          
                        >
                            <option value="">Select a country</option>
                            {country_res?.map((country) => (
                                <option key={country.id} value={country.country_name}>
                                    {country.country_name}
                                </option>
                            ))}
                        </select>

                        <select
                            id="countries"
                            className="bg-gray-50 border mb-3 border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                            onChange={(e) => setCity(e.target.value)}
                            value={city}
                        >
                            <option value={city}>Select a citis</option>
                            {city_res?.map((cities) => (
                                <option key={cities.id} value={cities.city_name}>
                                    {cities.city_name}
                                </option>
                            ))}
                        </select>
                        <input type="text" id="base-input" value={email} onChange={(e) => setEmail(e.target.value)} class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="ENTER YOUR EMAIL" />
                        {/* {user_res && (
                            <>
                                <button onClick={handelToNext} type="button" class=" w-full mt-5 px-6 py-3.5 text-base font-medium text-white bg-red-700 hover:bg-red-800 focus:ring-4 focus:outline-none focus:ring-blue-300 rounded-lg text-center dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-800">CONTIUN</button>
                            </>
                        )}
                        {!user_res &&(<>
                            <button onClick={handelUpdateUserData} type="button" class=" w-full mt-5 px-6 py-3.5 text-base font-medium text-white bg-red-700 hover:bg-red-800 focus:ring-4 focus:outline-none focus:ring-blue-300 rounded-lg text-center dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-800">Update</button>
                        </>)
                        } */}
                        {isUserDataAvailable ? (
                            <button
                                onClick={handelToNext}
                                type="button"
                                className="w-full mt-5 px-6 py-3.5 text-base font-medium text-white bg-red-700 hover:bg-red-800 focus:ring-4 focus:outline-none focus:ring-blue-300 rounded-lg text-center dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-800"
                            >
                                 CONTINUE
                            </button>
                        ) : (
                            <button onClick={handelUpdateUserData} type="button" class=" w-full mt-5 px-6 py-3.5 text-base font-medium text-white bg-red-700 hover:bg-red-800 focus:ring-4 focus:outline-none focus:ring-blue-300 rounded-lg text-center dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-800">Update</button>
                        )}
                    </div>
                </div>

                <div className="wapper2  mt-5" style={{ background: '#0d163f' }}>
                    <div className="w-80 mx-auto p-4 rounded-lg">
                        <p> ADDINATIONAL DETAILS</p>

                        <div className="relative">
                            <input
                                type="text"
                                id="dropdownSearchButton"
                                onClick={toggleDropdown}
                                value={selectedLanguages?.join(',')}
                                class="w-full h-10 text-white bg-gray-100  border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                            />
                            {isDropdownOpen && (
                                <div id="dropdownSearch" className="z-10 bg-white rounded-lg shadow w-60 dark:bg-gray-700">
                                    <ul className="h-48 px-3 pb-3 overflow-y-auto text-sm text-gray-700 dark:text-gray-200" aria-labelledby="dropdownSearchButton">
                                        {lang.map((item) => (
                                            <li key={item.id}>
                                                <div className="flex items-center p-2 rounded hover:bg-gray-100 dark:hover:bg-gray-600">
                                                    <input
                                                        id={`checkbox-item-${item.id}`}
                                                        type="checkbox"
                                                        checked={selectedLanguages.includes(item.language)} // Check if the language is in the selectedLanguages array
                                                        onChange={() => toggleLanguage(item.language)} // Toggle the selected language on checkbox change
                                                        className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-700 dark:focus:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500"
                                                    />
                                                    <label htmlFor={`checkbox-item-${item.id}`} className="w-full ml-2 text-sm font-medium text-gray-900 rounded dark:text-gray-300">
                                                        {item.language}
                                                    </label>
                                                </div>
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            )}
                        </div>

                        <div class="flex items-center pl-4 border border-gray-200 rounded dark:border-gray-700 mt-3">
                            <input checked id="bordered-checkbox-2" type="checkbox" value="" name="bordered-checkbox" class="w-5 h-4 text-blue-600 bg-gray-100  border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600" />
                            <label for="bordered-checkbox-2" class="w-full py-4 ml-2 text-sm font-medium text-gray-900 dark:text-gray-300">Receive Important Alerts on Whatsapp</label>
                        </div>
                    </div>
                </div>


                <div className="wapper3  mt-5" style={{ background: '#0d163f' }}>
                    <div className="w-80 mx-auto p-4 rounded-lg">
                        <p> MEMBERSHIP DETAILS</p>
                        <div class="mb-6">
                            <label for="default-input" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">ACTIVE PLAN</label>
                            <input type="text" id="default-input" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Free" />

                            <label for="default-input" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">PURCHASED ON</label>
                            <input type="text" id="default-input" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="--/--" />

                            <label for="default-input" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">EXPIRE ON</label>
                            <input type="text" id="default-input" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="--/--" />

                            {/* <button type="button" onClick={handleMembership} class="w-full px-6 py-3.5 mt-3 text-base font-medium text-white bg-red-700 hover:bg-red-800 focus:ring-4 focus:outline-none focus:ring-red-300 rounded-lg text-center dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-800">UPGRADE MEMBERSHIP</button> */}
                            {isUserDataAvailable ? (
                                <button
                                    onClick={handelToNext}
                                    type="button"
                                    className="w-full mt-5 px-6 py-3.5 text-base font-medium text-white bg-red-700 hover:bg-red-800 focus:ring-4 focus:outline-none focus:ring-blue-300 rounded-lg text-center dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-800"
                                >
                                    CONTINUE
                                </button>
                            ) : (
                                <button type="button" onClick={handleMembership} class="w-full px-6 py-3.5 mt-3 text-base font-medium text-white bg-red-700 hover:bg-red-800 focus:ring-4 focus:outline-none focus:ring-red-300 rounded-lg text-center dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-800">UPGRADE MEMBERSHIP</button>
                            )}
                        </div>
                    </div>
                </div>
                <div className="flex justify-center items-center">
                    <a href="#_" className="mt-5 inline-flex overflow-hidden text-white rounded group" style={{ width: '330px', background: "#862b4c" }}>
                        <MdLogout size={40} />
                        <span className="pl-4 pr-5 py-2.5"> Logout </span>
                    </a>
                </div>
            </div>
        </>
    )
}

export default Profile