import React, { useState } from 'react';
import { loadStripe } from '@stripe/stripe-js';
import { useDispatch, useSelector } from 'react-redux';
import { setMembership } from '@/store/actions/auth';
import CheckoutButton from '@/components/CheckoutButton';
import { checkout } from './checkout';




const MembershipOne = () => {
  const [loading, setLoading] = useState(false);
  const active_plan = useSelector((state) => state.auth.active_plan);
  console.log("active_plan==",active_plan)
  const dispatch = useDispatch();

  const handlePayment = async () => {
    setLoading(true);
    try {
        const response = await fetch('https://localhost:5055/api/payment', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                amount: 29900, // Amount in cents
                currency: 'inr',
            }),
        });
        const { id } = await response.json();

        const stripe = await stripePromise;
        const { error } = await stripe.redirectToCheckout({
            sessionId: id,
        });

        if (error) {
            console.error(error);
        }
    } catch (error) {
        console.error(error);
    } finally {
        setLoading(false);
    }
    };

  

  return (
    <>
    <div className='bg-cover h-screen grid place-items-center'>
                <div className="w-100 mx-auto p-4 rounded-lg shadow-l">
                    <p className="text-center text-white mb-4">SELECTED PLAN</p>
                    <h2 className="text-center text-white mb-4">{active_plan?.name} Membership</h2>

                    <p className="text-center text-white mb-4">PAYABLE AMOUNT</p>
                    <p className="text-center text-white mb-4">{active_plan?.amout} INR</p>



                    <div className="sliver mx-auto p-4 rounded-lg shadow-l bg-black" style={{ width: "100%", textAlign: 'center', marginBottom: '10px' }}>
                        <p>CHOOSE PAYMENT METHOD TO PAY</p>
                        <button type="button" class="text-gray-900 mt-5 bg-white hover:bg-gray-100 border border-gray-200 focus:ring-4 focus:outline-none focus:ring-gray-100 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center dark:focus:ring-gray-800 dark:bg-white dark:border-gray-700 dark:text-gray-900 dark:hover:bg-gray-200 mr-2 mb-2" >
                            <img src="upi.svg" alt="" width={80}/> 
                        </button>
                        <button type="button" class="text-gray-900 bg-white mt-5 hover:bg-gray-100 border border-gray-200 focus:ring-4 focus:outline-none focus:ring-gray-100 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center dark:focus:ring-gray-800 dark:bg-white dark:border-gray-700 dark:text-gray-900 dark:hover:bg-gray-200 mr-2 mb-2" style={{width:"41%", marginTop:'10%'}}>
                            <img src="stripe.svg" alt="" width={50} height={20} style={{padding:"10px"}}/> 
                        </button>
                        <button class="w-full px-6 py-3.5 mt-3 text-base font-medium text-white bg-red-700 hover:bg-red-800 focus:ring-4 focus:outline-none focus:ring-red-300 rounded-lg text-center dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-800" onClick={()=>checkout({lineItems:[{PRICE:"price_1O63vZSC5q0srgjPumUgi44g"}]})}>Pay</button>
                        {/* <button type="button" onClick={handlePayment}  class="w-full px-6 py-3.5 mt-3 text-base font-medium text-white bg-red-700 hover:bg-red-800 focus:ring-4 focus:outline-none focus:ring-red-300 rounded-lg text-center dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-800">PAY</button> */}
                        {/* <CheckoutButton amount={299} plan={"sliver"} /> */}
                    </div>
                </div>
            </div>
    
    </>
  );
};

export default MembershipOne;
