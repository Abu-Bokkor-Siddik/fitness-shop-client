import { baseApi } from "../api";

const paymentApi =baseApi.injectEndpoints({
    endpoints:(builder)=>({
        payment:builder.mutation({
            query:(userinfo)=>{
                console.log(userinfo,'user info ')
                return{
                    url:'/payments',
                    method:'POST',
                    body:userinfo
                }
            }
        }),
        
    })
})
export const {usePaymentMutation}=paymentApi;