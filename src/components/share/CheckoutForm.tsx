// /* eslint-disable @typescript-eslint/no-explicit-any */
// import { CardElement, useElements, useStripe } from "@stripe/react-stripe-js";
// import { useState } from "react";

// const CheckOutForms = () => {
//   const stripe = useStripe();
//   const elements = useElements();
//    const [error,setError]=useState('')
//   const handleSubmit = async (e: any) => {
//     e.preventDefault();
//     // if stripe and elements empty
//     if (!stripe || !elements) {
//       return;
//     }
//     // if card information empty
//     const card = elements.getElement(CardElement);

//     if (card == null) {
//       return;
//     }
//     // create payment
//     const {error, paymentMethod} = await stripe.createPaymentMethod({
//       type: 'card',
//       card,
//     });

//     if (error) {
//       console.log('[error]', error);
//       setError(error.message as string)
//     } else {
//       console.log('[PaymentMethod]', paymentMethod);
//       setError('')
//     }
  
//   };
//   return (
//     <div>
//       <form onSubmit={handleSubmit}>
//         <CardElement
//           options={{
//             style: {
//               base: {
//                 fontSize: "16px",
//                 color: "#424770",
//                 "::placeholder": {
//                   color: "#aab7c4",
//                 },
//               },
//               invalid: {
//                 color: "#9e2146",
//               },
//             },
//           }}
//         />
//         <button type="submit" disabled={!stripe}>
//           Pay
//         </button>
//       </form>
//     </div>
//   );
// };

// export default CheckOutForms;
