import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

const headers = {
    'x-rapidapi-host': 'coinranking1.p.rapidapi.com',
    'x-rapidapi-key': '7583ebac7dmshbab75508e5e9062p139899jsn3242228b0404'
}

const baseUrl = 'https://coinranking1.p.rapidapi.com';

const createRequest = (url, params) => ({ url, headers, params })

export const cryptoApi = createApi({
    reducerPath: 'cryptoApi',
    baseQuery: fetchBaseQuery({ baseUrl }),
    endpoints: (builder) => ({
        getCryptos: builder.query({
            query: () => createRequest('https://coinranking1.p.rapidapi.com/coins')
        }),
        getCryptoDetails: builder.query({
            query: (coinId) => createRequest(`${baseUrl}/coin/${coinId}`)
        }),
        getCryptoHistory: builder.query({
            query: ({ coinId, timePeriod }) => createRequest(`${baseUrl}/coin/${coinId}/history`,
                { referenceCurrencyUuid: 'yhjMzLPhuIDl', timePeriod: timePeriod })
        }),
        getExchanges: builder.query({
            query: (coinId) => createRequest(`${baseUrl}/exchanges`, {
                referenceCurrencyUuid: 'yhjMzLPhuIDl',
                limit: '50',
                offset: '0',
                orderBy: '24hVolume',
                orderDirection: 'desc'
            })
        }),
    })
})

export const {
    useGetCryptosQuery,
    useGetCryptoDetailsQuery,
    useGetCryptoHistoryQuery,
    useGetExchangesQuery
} = cryptoApi