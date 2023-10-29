import React, { useState, useEffect } from 'react';
import Link from "next/link";
import { useRouter } from "next/router";
import { BiLogInCircle,BiMenu } from "react-icons/bi";
import { useSession } from "next-auth/react";
import { signOut } from "next-auth/react";
import Login from "./Login";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';



const Navbar = () => {
  const router = useRouter();
  const isIndexPage = router.pathname === "/"; // Check if the current page is the index page
  const isStoryTellerPage = router.pathname === "/StoryTeller"; // Check if the current page is the index page
  const isLifeStylePage = router.pathname === "/LifeStyle"; // Check if the current page is the index page
  const isSoundPage = router.pathname === "/SoundTrack"; // Check if the current page is the index page
  const isMusiconPage = router.pathname === "/Musicon"; // Check if the current page is the index page
  const isProfilepage = router.pathname === "/Profile"; // Check if the current page is the index page
  const [isMobileNavOpen, toggleMobileNav] = useState(false);

  // const { data: session } = useSession();
  // if (!session) return <Login />

  const handleLogout = async () => {
    toast("Logout successfully!")
    // await signOut({ redirect: false });
    router.push("/");
  };

  const handelGoProfile =()=>{
    router.push("/Profile");
  }
  const handleBacktoHome =()=>{
    router.push("/Home");
  }


  return (
    <>
      <ToastContainer />
      <nav>
        <div className="container flex justify-between">
          <div className="flex items-center space-x-2 md:space-x-10">
            {/* Logo and Home link */}
            <Link href="/">
              <img src="/weber_logo-removebg.png" alt="" className="logo h-auto w-[100px]" />
            </Link>
            <div className="lg:hidden">
              <button onClick={() => toggleMobileNav(!isMobileNavOpen)}>
                <BiMenu className="h-6 w-6" />
              </button>
            </div>
            {isMobileNavOpen && (
              <ul className="lg:hidden flex flex-col space-y-2">
                <li className="headerLink cursor-pointer font-semibold text-white hover:text-white">
                  Home
                </li>
                <li className="headerLink">Best Movies</li>
                <li className="headerLink">New & Popular</li>
                <li className="headerLink">TV Shows</li>
                <Link to="/MyList">
                  <li className="headerLink">My List</li>
                </Link>
               
              </ul>
            )}

            {/* {isMobileNavOpen && isLifeStylePage && (
              <ul className="hidden md:flex space-x-4">
                <li className="headerLink cursor-pointer font-semibold text-white hover:text-black">
                  <Link href="/LifeStyle">Home</Link>
                </li>
                <li className="headerLink">New & Popular</li>
                <li className="headerLink">Best Life Style</li>
                <li className="headerLink">My List</li>
              </ul>
            )} */}






            {!isStoryTellerPage || isIndexPage && ( // Hide this UL on the index page
              <ul className="hidden space-x-4 md:flex">
                <Link href="/">
                  <li className="headerLink cursor-pointer font-semibold text-white hover:text-white">
                    Home
                  </li>
                </Link>
                <Link href="/StoryTeller">
                  <li className="headerLink">Story Teller</li>
                </Link>
                <Link href="/musicon">
                  <li className="headerLink">Musicon</li>
                </Link>
                <Link href="/LifeStyle">
                  <li className="headerLink">Life Style</li>
                </Link>
                <Link href="/SoundTrack">
                  <li className="headerLink">Sound Track</li>
                </Link>
              </ul>
            )}
            <ul className="hidden space-x-4 md:flex">
              {isStoryTellerPage && (
                <>
                  <Link href="/StoryTeller">
                    <li className="headerLink cursor-pointer font-semibold text-white hover:text-black">Home</li>
                  </Link>
                  <li className="headerLink">Best Movies</li>
                  <li className="headerLink">New & Popular</li>
                  <li className="headerLink">TV Shows</li>
                  <Link href="/MyList">
                  <li className="headerLink">My List</li>
                </Link>
                </>
              )}
            </ul>

            <ul className="hidden space-x-4 md:flex">
              {isLifeStylePage && (
                <>
                  <Link href="/LifeStyle">
                    <li className="headerLink cursor-pointer font-semibold text-white hover:text-black">Home</li>
                  </Link>
                  <li className="headerLink">New & Popular</li>
                  <li className="headerLink">Best Life Style</li>
                  <li className="headerLink">My List</li>
                </>
              )}
            </ul>

            <ul className="hidden space-x-4 md:flex">
              {isSoundPage && (
                <>
                  <Link href="/SoundTrack">
                    <li className="headerLink cursor-pointer font-semibold text-white hover:text-black">Home</li>
                  </Link>
                  <li className="headerLink">Top Sound Track</li>
                  <li className="headerLink">New & Popular</li>
                  <li className="headerLink">Best Sound Track</li>
                  <li className="headerLink">My List</li>
                </>
              )}
            </ul>
            <ul className="hidden space-x-4 md:flex">
              {isMusiconPage && (
                <>
                  <Link href="/Musicon">
                    <li className="headerLink cursor-pointer font-semibold text-white hover:text-black">Home</li>
                  </Link>
                  <li className="headerLink">Top Musicon</li>
                  <li className="headerLink">New & Popular</li>
                  <li className="headerLink">Best Musicon</li>
                  <li className="headerLink">My List</li>
                </>
              )}
            </ul>
          </div>

          <div className="flex items-center space-x-4 text-sm font-light">
            {/* Show this only on other pages */}
            {!isProfilepage && (
                          <CgProfile className="h-6 w-6 cursor-pointer rounded"  onClick={handelGoProfile}/>
            )}
            {isIndexPage && ( // Show this only on the index page
              <Link href="/Home">
              <p>Profile</p>
            </Link>
              // <BiLogInCircle
              //   className="h-6 w-6 cursor-pointer rounded"
              //   onClick={handelGoProfile}
              // />
            )}
            {!isIndexPage && (
              <BiLogInCircle
                className="h-6 w-6 cursor-pointer rounded"
                onClick={() => handleLogout()}
              />
            )}
            {isProfilepage && (
                <Link href="/Home">
                  <p>Back</p>
                </Link>
              )}
              {/* // <p className="h-6 w-6 cursor-pointer rounded"onClick={() => handleBacktoHome()}/></p> */}
          </div>
        </div>
      </nav>
    </>

  );
};

export default Navbar;
