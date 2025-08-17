import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
// import type { Pokemon } from './types'

// Define a service using a base URL and expected endpoints
export const adminApi = createApi({
  // Name for action creators
  reducerPath: "admin",
  baseQuery: fetchBaseQuery({ baseUrl: "http://localhost:8000/" }),
  endpoints: (build) => ({
    // getAccount hook name
    getAccounts: build.query({
      query: () => `accounts`,
      // sort by id (decending order)
      transformResponse:(response)=>response.sort((a,b)=>b.id-a.id),
      // remove cached queries fetch again when tag updates
      providesTags: (result, error, id) => ["account"],
    }),
    // Post put delete all are mutations (Changing data) only get is query
    addAccount: build.mutation({
      query: ({ amount, id }) => ({
        url: `accounts`,
        method: "POST",
        body: { id, amount },
      }),
      invalidatesTags: (result, error, id) => ["account"],
    }),
    deleteAccount: build.mutation({
      query: ({ id }) => ({
        url: `accounts/${id}`,
        method: "DELETE",
      }),
      invalidatesTags: (result, error, id) => ["account"],
    }),
    updateAccount: build.mutation({
      query: ({ id, amount }) => ({
        url: `accounts/${id}`,
        method: "PATCH",
        body: { amount },
      }),
      invalidatesTags: (result, error, {id}) => ["account"],
    }),
  }),
});

export const {
  useGetAccountsQuery,
  useAddAccountMutation,
  useDeleteAccountMutation,
  useUpdateAccountMutation,
} = adminApi;
