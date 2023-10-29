import { loadStripe } from "@stripe/stripe-js";
import { useRouter } from "next/router";

const stripePromise = loadStripe(
  process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY
);

const CheckoutButton = ({amount,plan}) => {
  console.log("amount,plan",amount,plan)
    const router = useRouter();
    
    const handleCheckout = async () => {
      try {
        const stripe = await stripePromise;
        const response = await fetch("/api/checkout_sessions", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            amount: amount, // Amount in cents
            currency: 'inr',
        }),
        });
  
        const { sessionId } = await response.json();
        const { error } = await stripe.redirectToCheckout({
          sessionId,
        });
  
        if (error) {
          router.push("/error");
        }
      } catch (err) {
        console.error("Error in creating checkout session:", err);
        router.push("/error");
      }
    };
    
    return <button onClick={handleCheckout} 
            class="w-full px-6 py-3.5 mt-3 text-base font-medium text-white bg-red-700 hover:bg-red-800 focus:ring-4 focus:outline-none focus:ring-red-300 rounded-lg text-center dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-800">
              Pay
            </button>;
  };
  
  export default CheckoutButton;
  