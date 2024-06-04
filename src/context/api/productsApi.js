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
    }),
    getDetailProducts: build.query({
      query: (id) => ({
        url: `/products/${id}`,
      }),
      providesTags: ["Product"]
    })
  }),
})

export const {
  useGetSearchProductsQuery,
  useGetDetailProductsQuery
} = productApi