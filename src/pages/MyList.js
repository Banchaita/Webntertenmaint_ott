import React, { useEffect, useState } from 'react'
import Link from "next/link";
import { IoMdDownload } from 'react-icons/io';
import { BiHistory } from 'react-icons/bi';
import { MdOutlineWatchLater } from 'react-icons/md';
import { AiOutlinePlus } from 'react-icons/ai';
import { useDispatch, useSelector } from 'react-redux'
import PlayListModal from '@/components/PlayListModal';
import { getPlayList } from '@/store/actions/auth';



const MyList = () => {
    const dispatch = useDispatch();

    const [isModalOpen, setIsModalOpen] = useState(false);
    const list_res = useSelector((state) => state.auth.list_res)
    console.log("list_res-->>>", list_res)

    useEffect(() => {
        dispatch(getPlayList())
    }, [dispatch])

    const openModal = () => {
        setIsModalOpen(true);
    };

    const closeModal = () => {
        setIsModalOpen(false);
    };

    return (
        <>
            <div className='bg-cover h-screen grid'>
                <div className="recent">
                    <p className="text-start text-white mt-4">Recent</p>
                    <div class="grid grid-cols-2 md:grid-cols-3 gap-2 mt-2 p-2" style={{ borderBottom: '2px solid #fff' }}>
                        <div role="status" class="flex items-center justify-center h-56 max-w-sm bg-gray-300 rounded-lg animate-pulse dark:bg-gray-700">
                            <svg class="w-10 h-10 text-gray-200 dark:text-gray-600" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 16 20">
                                <path d="M5 5V.13a2.96 2.96 0 0 0-1.293.749L.879 3.707A2.98 2.98 0 0 0 .13 5H5Z" />
                                <path d="M14.066 0H7v5a2 2 0 0 1-2 2H0v11a1.97 1.97 0 0 0 1.934 2h12.132A1.97 1.97 0 0 0 16 18V2a1.97 1.97 0 0 0-1.934-2ZM9 13a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-2a2 2 0 0 1 2-2h2a2 2 0 0 1 2 2v2Zm4 .382a1 1 0 0 1-1.447.894L10 13v-2l1.553-1.276a1 1 0 0 1 1.447.894v2.764Z" />
                            </svg>
                            <span class="sr-only">Loading...</span>
                        </div>
                        <div role="status" class="flex items-center justify-center h-56 max-w-sm bg-gray-300 rounded-lg animate-pulse dark:bg-gray-700">
                            <svg class="w-10 h-10 text-gray-200 dark:text-gray-600" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 16 20">
                                <path d="M5 5V.13a2.96 2.96 0 0 0-1.293.749L.879 3.707A2.98 2.98 0 0 0 .13 5H5Z" />
                                <path d="M14.066 0H7v5a2 2 0 0 1-2 2H0v11a1.97 1.97 0 0 0 1.934 2h12.132A1.97 1.97 0 0 0 16 18V2a1.97 1.97 0 0 0-1.934-2ZM9 13a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-2a2 2 0 0 1 2-2h2a2 2 0 0 1 2 2v2Zm4 .382a1 1 0 0 1-1.447.894L10 13v-2l1.553-1.276a1 1 0 0 1 1.447.894v2.764Z" />
                            </svg>
                            <span class="sr-only">Loading...</span>
                        </div>
                        <div role="status" class="flex items-center justify-center h-56 max-w-sm bg-gray-300 rounded-lg animate-pulse dark:bg-gray-700">
                            <svg class="w-10 h-10 text-gray-200 dark:text-gray-600" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 16 20">
                                <path d="M5 5V.13a2.96 2.96 0 0 0-1.293.749L.879 3.707A2.98 2.98 0 0 0 .13 5H5Z" />
                                <path d="M14.066 0H7v5a2 2 0 0 1-2 2H0v11a1.97 1.97 0 0 0 1.934 2h12.132A1.97 1.97 0 0 0 16 18V2a1.97 1.97 0 0 0-1.934-2ZM9 13a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-2a2 2 0 0 1 2-2h2a2 2 0 0 1 2 2v2Zm4 .382a1 1 0 0 1-1.447.894L10 13v-2l1.553-1.276a1 1 0 0 1 1.447.894v2.764Z" />
                            </svg>
                            <span class="sr-only">Loading...</span>
                        </div>
                    </div>

                    <div className="listing p-4" style={{ borderBottom: '2px solid #fff' }}>
                        <ul class="flex flex-col">
                            <Link href="/History">
                                <li class="flex items-center">
                                    <BiHistory class="mr-2" /> History
                                </li>
                            </Link>
                            <Link href="/Download">
                                <li class="flex items-center">
                                    <IoMdDownload class="mr-2" /> Downloads
                                </li>
                            </Link>
                            <Link href="/Watchlater">
                                <li class="flex items-center">
                                    <MdOutlineWatchLater class="mr-2" /> Watch later
                                </li>
                            </Link>
                        </ul>
                    </div>
                    
                    <div className="playlist">
                        <p className='mt-5 ml-6'>Playlist</p>
                        <ul class="flex flex-col">
                            <li class=" flex items-center ml-20 block text-white cursor-pointer" onClick={openModal}><AiOutlinePlus /> New Playlist</li>
                        </ul>
                    </div>
                    <div className="container mx-auto mt-8">
                        <PlayListModal isOpen={isModalOpen} closeModal={closeModal} />
                    </div>
                    <div className="playlist">
                        <ul>
                            {list_res && list_res.map((item, index) => (
                                <li key={index} style={{marginLeft:"10rem",listStyle:"disc"}}>{item.name}</li>
                            ))}
                        </ul>
                    </div>
                </div>
            </div>
        </>
    )
}

export default MyList