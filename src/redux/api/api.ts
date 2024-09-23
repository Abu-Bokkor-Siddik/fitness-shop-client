// Need to use the React-specific entry point to import createApi
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
export const baseApi = createApi({
  reducerPath: "baseApi",
  baseQuery: fetchBaseQuery({ baseUrl: "https://assignment-server-zeta-ruddy.vercel.app/api" }),
  tagTypes: ["carts","cart"],
  endpoints: (builder) => ({
    // get all data
    getAllCarts: builder.query({
      query: ({searchTerm,categorys,sort,_id}) => {
        console.log(searchTerm,categorys,sort)
        const params = new URLSearchParams()
        if (searchTerm) {
          params.append('searchTerm',searchTerm)
        }
        if (categorys) {
          params.append('category',categorys)
        }
        if (sort) {
          params.append('sort',sort)
        }
        
        if (_id) {
          params.append('_id',_id)
        }
        
        return {
          url: `/cart`,
          method: "GET",
          params:params,
        };
      },
      providesTags:["carts"],
      
    }),
    // post 
    addCarts: builder.mutation({
      query: (data) => {
        // data should be object ...
        console.log(data)
        return {
          url: `/cart`,
          method: "POST",
          body:data,
        };
      },
      invalidatesTags:["carts","cart"]
    }),
    updateCarts: builder.mutation({
      query: ({id,payload}) => {
        // data should be object ...
        // console.log(payload,id)
        return {
          url: `/cart/${id}`,
          method: "PUT",
          body:payload,
        };
      },
      invalidatesTags:["carts","cart"]
    }),
    
    deleteCarts: builder.mutation({
      query: (id) => {
        // console.log(id)
        // data should be object ...
        return {
          url: `/cart/${id}`,
          method: "DELETE",
          
        };
      },
      invalidatesTags:["carts"]
    }),
    // end

   Carts: builder.query({
      query: (cart) => {
        // data should be object ...
        console.log(cart,'get c')
        return {
          url: `/payCart?cart=${cart}`,
          method: "GET",
          
        };
        
      },
      providesTags:["cart"]
    }),
    // end
    
  }),
});

export const{useGetAllCartsQuery,useAddCartsMutation,useUpdateCartsMutation,useDeleteCartsMutation,useCartsQuery}=baseApi