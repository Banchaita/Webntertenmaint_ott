import React from 'react'
import { useRouter } from 'next/navigation'
import { FaCheck } from 'react-icons/fa';
import { useDispatch, useSelector } from 'react-redux'
import { setMembership } from '@/store/actions/auth';

const Membershipplan = () => {
    const router = useRouter()
    const dispatch = useDispatch();

    const handleMembershipData=()=>{
        let data={
            name:"Silver",
            amout:"159",
           }
            dispatch(setMembership(data));
            router.push('/MembershipOne');
          
    }
    const handleMembershipGoldData=()=>{
           let data={
            name:"Gold",
            amout:"99",
           }
            dispatch(setMembership(data));
            router.push('/MembershipOne');
          
    }
    const handleMembershipDiamondData=()=>{
           let data={
            name:"Diamond",
            amout:"299",
           }
            dispatch(setMembership(data));
            router.push('/MembershipOne');
          
    }
    return (
        <>
            <div className="signup_bg_gradient bg-cover  grid place-items-center">
                <div className="w-100 mx-auto p-4 rounded-lg shadow-l">
                    <p className="text-start text-black mb-4">Subscription Plans</p>
                    <p className="flex items-center text-start text-gray-400 mb-4">
                        <FaCheck size={20} color='green' className="flex-shrink-0 mr-2" />
                        Choose the plan that suits you the best.
                    </p>
                    <p className="flex items-center text-start text-gray-400 mb-4">
                        <FaCheck size={20} color='green' className="flex-shrink-0 mr-2" />
                        Watch from a wide variety of content as per your mood with a single subscription.
                    </p>
                    <p className="flex items-center text-start text-gray-400 mb-4">
                        <FaCheck size={20} color='green' className="flex-shrink-0 mr-2" />
                        Specially curated content to match your teste as per your location and 
                        choice of language.
                    </p>
                    <p className="flex items-center text-start text-gray-400 mb-4">
                        <FaCheck size={20} color='green' className="flex-shrink-0 mr-2" />
                        Watch simultaneosly on two(2) devices with single subscription.
                    </p>
                </div>

                <div className="sliver mx-auto p-4 rounded-lg shadow-l bg-gray-600" style={{width:"20%", textAlign:'center', marginBottom:'10px'}}>
                    <p>Sliver Membership</p>
                    <p>99 INR</p>
                    <small>valid for 3 months</small>
                    <button type="button" onClick={handleMembershipData} class="w-full px-6 py-3.5 mt-3 text-base font-medium text-white bg-red-700 hover:bg-red-800 focus:ring-4 focus:outline-none focus:ring-red-300 rounded-lg text-center dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-800">SELECT</button>
                    <p>Full Access</p>
                </div>

                <div className="sliver mx-auto p-4 rounded-lg shadow-l bg-gray-600" style={{width:"20%", textAlign:'center', marginBottom:'10px'}}>
                    <p>Gold Membership</p>
                    <p>159 INR</p>
                    <small>valid for 6 months</small>
                    <button type="button"  onClick={handleMembershipGoldData} class="w-full px-6 py-3.5 mt-3 text-base font-medium text-white bg-red-700 hover:bg-red-800 focus:ring-4 focus:outline-none focus:ring-red-300 rounded-lg text-center dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-800">SELECT</button>
                    <p>Full Access</p>
                </div>

                <div className="sliver mx-auto p-4 rounded-lg shadow-l bg-black" style={{width:"20%", textAlign:'center', marginBottom:'10px'}}>
                    <button type="button" class="w-50 px-6 py-3.5 mt-3 text-base font-medium text-white bg-red-700 hover:bg-red-800 focus:ring-4 focus:outline-none focus:ring-red-300 rounded-lg text-center dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-800">Best Value</button>
                    <p>Diamond Membership</p>
                    <p>299 INR</p>
                    <small>valid for One Year</small>
                    <button type="button" onClick={handleMembershipDiamondData} class="w-full px-6 py-3.5 mt-3 text-base font-medium text-white bg-red-700 hover:bg-red-800 focus:ring-4 focus:outline-none focus:ring-red-300 rounded-lg text-center dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-800">SELECT</button>
                    <p>Full Access</p>
                </div>

                <div className="w-[350px] mx-auto p-4 rounded-lg shadow-l text-black">
                    <p>
                        HD(720p), Full HD(1080p), Ultra HD(4k) and HDR availability are subject
                        to your internet service provider and your device capability. Not all content is 
                        availabile in HD, Full HD, Ultra HD or HDR. See terms of use for more details.
                    </p>
                </div>
                


            </div>

        </>
    )
}

export default Membershipplan
