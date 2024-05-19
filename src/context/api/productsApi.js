import { api } from './api'

export const productApi = api.injectEndpoints({
  endpoints: (build) => ({
    // Get request
    getSearchProducts: build.query({
      query: (params) => ({
        url: `/products/search`,
        params
      }),
      providesTags: ["Product"]
    })
  }),
})

export const {
  useGetSearchProductsQuery
} = productApi