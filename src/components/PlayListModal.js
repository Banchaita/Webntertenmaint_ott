import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from 'react-redux'
import { addMyList, getPlayList } from "@/store/actions/auth";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


const PlayListModal = ({ isOpen, closeModal }) => {
    const [name, setName] = useState("");

    const dispatch = useDispatch();

    const addPlayList = () => {
        let data = {
            name: name
        };
        // Dispatch action to add playlist
        dispatch(addMyList(data));
        toast("Add successful!");
        closeModal();
    };



    return (
        <>
            <ToastContainer/>
            <div className={`fixed inset-0 flex items-center justify-center ${isOpen ? '' : 'hidden'}`}>
                <div className="bg-gray-700 p-8 rounded shadow-lg w-[350px]">
                    <h2 className="text-xl font-semibold mb-4">New Playlsit</h2>
                    <div>
                        <label for="first_name" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">PlayList Name</label>
                        <input type="text" id="name" value={name} onChange={(e)=>setName(e.target.value)} class="bg-gray-50 mb-4 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Enter Playlist Name" required/>
                    </div>

                    <div className="flex justify-end">
                        <button
                            className="text-white bg-blue-500 hover:bg-blue-600 rounded px-4 py-2 ml-10 mr-5"
                            onClick={addPlayList}
                        >
                            Done
                        </button>
                        <button
                            className="text-white bg-blue-500 hover:bg-blue-600 rounded px-4 py-2"
                            onClick={closeModal}
                        >
                            Close
                        </button>
                    </div>
                </div>
            </div>
        </>
    )
}

export default PlayListModal
