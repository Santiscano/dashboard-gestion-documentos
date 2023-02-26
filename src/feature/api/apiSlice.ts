import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { setCredentials, logOut } from '../auth/authSlice';

const baseQuery = fetchBaseQuery({
  baseUrl: 'http://localhost:4000',
  credentials: 'include',
  prepareHeaders: (headers, { getState }) => {
    const token = getState().auth.token
    if(token) {
      headers.set("authorization", `Bearer ${token}`)
    }
    return headers
  },
})

const baseQueryWithReauth = async (args:any, api:any, extraOptions:any) => {
  let result = await baseQuery(args, api, extraOptions)

  if(result?.error?.originalStatuls === 403) {
    console.log('sending refresh token')
    // send refresh token to get new access token
    const refresResult = await baseQuery('/refresh', api, extraOptions)
    console.log(refresResult)
    if(refresResult?.data) {
      const user = api.getState().auth.user
      // store the new token
      api.dispatch(setCredentials({ ...refresResult.data, user }))
      //retry the origin query with new access token
      result = await baseQuery(args, api, extraOptions)
    } else {
      api.dispatch(logOut())
    }
  }
  return result
}

export const apiSlice = createApi({
  baseQuery: baseQueryWithReauth,
  endpoints: builder => ({})
})

