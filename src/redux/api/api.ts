// Need to use the React-specific entry point to import createApi
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
export const baseApi = createApi({
  reducerPath: "baseApi",
  baseQuery: fetchBaseQuery({ baseUrl: "http://localhost:3000/api" }),
  tagTypes: ["carts"],
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
      providesTags:["carts"]
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
      invalidatesTags:["carts"]
    }),
    updateCarts: builder.mutation({
      query: ({_id,payload}) => {
        // data should be object ...
        console.log(payload)
        return {
          url: `/cart/${_id}`,
          method: "PUT",
          body:payload,
        };
      },
      invalidatesTags:["carts"]
    }),
    
    deleteCarts: builder.mutation({
      query: (_id) => {
        // data should be object ...
        return {
          url: `/cart/${_id}`,
          method: "DELETE",
          
        };
      },
      invalidatesTags:["carts"]
    }),
    
  }),
});

export const{useGetAllCartsQuery,useAddCartsMutation,useUpdateCartsMutation,useDeleteCartsMutation}=baseApi