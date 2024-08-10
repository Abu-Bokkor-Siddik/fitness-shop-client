// import {loadStipe} from '@stripe/stripe-js'
import { loadStripe } from "@stripe/stripe-js";
import {
  PaymentElement,
  Elements,
  useStripe,
  useElements,
} from "@stripe/react-stripe-js";
import CheckOutForms from "@/components/share/CheckoutForm";



const Checkout = () => {
  const stripePromise = loadStripe("pk_test_51OENAOCd9xEdxNs21ogmZKZctV1JiLIJxtqrt2DEusq9aTxCN9Nz75YmcVzloSsv9ZlLWeIDq6IlxCmPwh9P3oCQ00CrsewYMk");
  console.log(import.meta.env.StripPublishible)
  return (
    <div>
      <h1 className="text-black p-60">checkout</h1>
      <Elements stripe={stripePromise}>
        <CheckOutForms />
      </Elements>
    </div>
  );
};

export default Checkout;
